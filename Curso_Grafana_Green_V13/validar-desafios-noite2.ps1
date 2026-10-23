# Valida os desafios 2.4 a 2.6 da Noite 2 contra o laboratório (Grafana + Prometheus).
# Uso (PowerShell):
#   .\validar-desafios-noite2.ps1                        # lab local dos alunos (Grafana News)
#   .\validar-desafios-noite2.ps1 -BaseUrl http://20.97.218.160:3000 -Ambiente professor
# Antes, abra a aplicação e atualize a página 10 a 15 vezes para gerar tráfego (lab dos alunos).
param(
  [string]$BaseUrl = "http://localhost:3300",
  [ValidateSet("aluno","professor")] [string]$Ambiente = "aluno",
  [string]$Usuario = "admin",
  [string]$Senha = "admin"
)

$ErrorActionPreference = "Stop"
$cred = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${Usuario}:${Senha}"))
$headers = @{ Authorization = "Basic $cred" }

function Invoke-Grafana($path) {
  Invoke-RestMethod -Uri "$BaseUrl$path" -Headers $headers -TimeoutSec 20
}

try { $h = Invoke-Grafana "/api/health"; Write-Host "Grafana $($h.version) - database $($h.database)" -ForegroundColor Green }
catch { Write-Host "Grafana não respondeu em $BaseUrl. Inicie o laboratório (iniciar-lab.ps1) e tente de novo." -ForegroundColor Red; exit 1 }

$ds = Invoke-Grafana "/api/datasources" | Where-Object { $_.type -eq "prometheus" } | Select-Object -First 1
if (-not $ds) { Write-Host "Fonte Prometheus não encontrada (ou usuário sem permissão)." -ForegroundColor Red; exit 1 }
Write-Host "Fonte Prometheus: $($ds.name) (uid $($ds.uid))"

if ($Ambiente -eq "aluno") {
  $m = "tns_request_duration_seconds"; $lbl = "route"; $filtro = '{route!="metrics"}'
  $erro = 'sum(rate(tns_request_duration_seconds_count{status_code="200"}[5m])) by (route)'
} else {
  $m = "http_request_duration_seconds"; $lbl = "endpoint"; $filtro = '{status="500"}'
  $erro = 'sum(rate(http_requests_total{status="500"}[5m])) by (endpoint)'
}
$cnt = if ($Ambiente -eq "aluno") { "${m}_count" } else { "http_requests_total" }

$consultas = [ordered]@{
  "2.4 filtro por label"       = if ($Ambiente -eq "aluno") { "sum(rate(${m}_count$filtro[5m])) by ($lbl)" } else { $erro }
  "2.4 variação (status 200)"  = if ($Ambiente -eq "aluno") { $erro } else { 'sum(rate(http_requests_total{status="200"}[5m])) by (endpoint)' }
  "2.5 increase"               = "sum(increase(${cnt}[5m])) by ($lbl)"
  "2.5 rate (para comparar)"   = "sum(rate(${cnt}[5m])) by ($lbl)"
  "2.6 p95"                    = "histogram_quantile(0.95, sum(rate(${m}_bucket[5m])) by (le, $lbl))"
  "2.6 média"                  = "sum(rate(${m}_sum[5m])) by ($lbl) / sum(rate(${m}_count[5m])) by ($lbl)"
}

$falhas = 0
foreach ($nome in $consultas.Keys) {
  $q = $consultas[$nome]
  $uri = "/api/datasources/proxy/uid/$($ds.uid)/api/v1/query?query=" + [Uri]::EscapeDataString($q)
  try {
    $r = Invoke-Grafana $uri
    $n = @($r.data.result).Count
    if ($n -gt 0) {
      Write-Host ("[OK]    {0}: {1} série(s)" -f $nome, $n) -ForegroundColor Green
      $r.data.result | Select-Object -First 3 | ForEach-Object {
        $rotulo = ($_.metric.PSObject.Properties | ForEach-Object { "$($_.Name)=$($_.Value)" }) -join ","
        Write-Host ("          {0}  ->  {1}" -f $rotulo, ([double]$_.value[1]).ToString("0.####"))
      }
    } else {
      Write-Host ("[VAZIO] {0}: sem séries (gere tráfego e aguarde 2 coletas)" -f $nome) -ForegroundColor Yellow; $falhas++
    }
  } catch { Write-Host ("[ERRO]  {0}: {1}" -f $nome, $_.Exception.Message) -ForegroundColor Red; $falhas++ }
}
if ($falhas -eq 0) { Write-Host "`nTodas as consultas dos desafios 2.4 a 2.6 retornaram dados." -ForegroundColor Green }
else { Write-Host "`n$falhas consulta(s) sem dados ou com erro. Revise tráfego, fonte e período." -ForegroundColor Yellow; exit 2 }
