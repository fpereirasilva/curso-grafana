$ErrorActionPreference = 'Stop'
$scriptAluno = Join-Path $PSScriptRoot 'Curso_Grafana_Green_V9/iniciar-lab.ps1'
if (-not (Test-Path -LiteralPath $scriptAluno -PathType Leaf)) {
    throw 'Script do laboratório não encontrado. Mantenha a pasta Curso_Grafana_Green_V9 ao lado deste lançador.'
}
Push-Location -LiteralPath $PSScriptRoot
try {
    & $scriptAluno
} finally {
    Pop-Location
}
