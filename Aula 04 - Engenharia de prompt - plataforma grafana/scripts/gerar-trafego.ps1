param(
    [string]$TargetHost = "localhost",
    [int]$IntervalMs = 800,
    [int]$TotalRequests = 200
)

Write-Host "🚀 Iniciando gerador de tráfego didático para http://${TargetHost}:8000/checkout..." -ForegroundColor Cyan

$count = 0
while ($count -lt $TotalRequests) {
    $count++
    # A cada 15 requisições, injeta latência alta
    if ($count % 15 -eq 0) {
        $url = "http://${TargetHost}:8000/checkout?chaos=latency"
        Write-Host "[$count] Injetando CHAOS LATÊNCIA (>500ms)..." -ForegroundColor Yellow
    }
    # A cada 20 requisições, injeta erro 500
    elseif ($count % 20 -eq 0) {
        $url = "http://${TargetHost}:8000/checkout?chaos=error"
        Write-Host "[$count] Injetando CHAOS ERRO 500..." -ForegroundColor Red
    }
    else {
        $url = "http://${TargetHost}:8000/checkout"
    }

    try {
        $sw = [System.Diagnostics.Stopwatch]::StartNew()
        $response = Invoke-RestMethod -Uri $url -Method Post -TimeoutSec 5 -ErrorAction Stop
        $sw.Stop()
        Write-Host "[$count] OK 200 - ReqID: $($response.request_id) - $($sw.ElapsedMilliseconds)ms" -ForegroundColor Green
    } catch {
        Write-Host "[$count] ERRO $($_.Exception.Response.StatusCode.value__) - $($_.Exception.Message)" -ForegroundColor DarkRed
    }

    Start-Sleep -Milliseconds $IntervalMs
}

Write-Host "✅ Gerador de tráfego concluído ($TotalRequests requisições)." -ForegroundColor Cyan
