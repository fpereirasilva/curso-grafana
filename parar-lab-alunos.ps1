$ErrorActionPreference = 'SilentlyContinue'

Write-Host "=================================================================" -ForegroundColor Yellow
Write-Host "🛑 ENCERRANDO CONTAINERS DO CURSO GRAFANA (WINDOWS)" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Yellow

$v9Path = Join-Path $PSScriptRoot 'Curso_Grafana_Green_V9\lab-alunos'
if (Test-Path $v9Path) {
    Push-Location $v9Path
    docker compose down
    Pop-Location
}

$dias = @("dia1", "dia2", "dia4")
foreach ($d in $dias) {
    $diaPath = Join-Path $PSScriptRoot "lab\$d"
    if (Test-Path $diaPath) {
        Push-Location $diaPath
        docker compose down
        Pop-Location
    }
}

Write-Host "[OK] Todos os containers do curso foram finalizados com sucesso!" -ForegroundColor Green
