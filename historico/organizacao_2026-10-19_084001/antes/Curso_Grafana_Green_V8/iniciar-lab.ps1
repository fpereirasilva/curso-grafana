$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath (Join-Path $PSScriptRoot 'lab/tutorial-environment')
$composeCommand = $null
docker compose version *> $null
if ($LASTEXITCODE -eq 0) { $composeCommand = 'docker' }
if ($composeCommand -eq 'docker') {
    docker compose -p green-fundamentals up -d --build
} else {
    $composeExecutable = Join-Path $env:ProgramFiles 'Docker/Docker/resources/cli-plugins/docker-compose.exe'
    if (!(Test-Path -LiteralPath $composeExecutable)) { throw 'Docker Compose não encontrado. Instale ou repare o Docker Desktop.' }
    & $composeExecutable -p green-fundamentals up -d --build
}
if ($LASTEXITCODE -ne 0) { throw 'Falha ao iniciar o laboratório. Confira a saída acima.' }
Write-Host 'Grafana: http://localhost:3300'
Write-Host 'Aplicação: http://localhost:38081'
Write-Host 'Webhook: http://localhost:38090'
