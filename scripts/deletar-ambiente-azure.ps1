param(
    [string]$SubscriptionId = "b34ce124-5fd1-47a1-ba7c-acbf5367c573",
    [string]$ResourceGroupName = "RG_CURSO_GRAFANA",
    [switch]$Force
)

$ErrorActionPreference = "Stop"

Write-Host "=================================================================" -ForegroundColor Red
Write-Host "🗑️  DELETAR AMBIENTE DO CURSO GRAFANA GREEN NA AZURE" -ForegroundColor Red
Write-Host "=================================================================" -ForegroundColor Red

az account set --subscription $SubscriptionId

# Verificar se o Resource Group existe
$rgExists = az group exists --name $ResourceGroupName
if ($rgExists -ne "true") {
    Write-Host "[INFO] O Resource Group '$ResourceGroupName' não existe ou já foi excluído." -ForegroundColor Yellow
    exit 0
}

if (-not $Force) {
    $confirm = Read-Host "Tem certeza que deseja DELETAR PERMANENTEMENTE o Resource Group '$ResourceGroupName' e todos os seus recursos? (S/N)"
    if ($confirm -ne 'S' -and $confirm -ne 's' -and $confirm -ne 'Y' -and $confirm -ne 'y') {
        Write-Host "[CANCELADO] Operação cancelada pelo usuário." -ForegroundColor Yellow
        exit 0
    }
}

Write-Host "[*] Excluindo Resource Group '$ResourceGroupName' (VM, Discos, IPs, VNet)..." -ForegroundColor Yellow
az group delete --name $ResourceGroupName --yes --no-wait

Write-Host "=================================================================" -ForegroundColor Green
Write-Host "✅ COMANDO DE EXCLUSÃO ENVIADO COM SUCESSO!" -ForegroundColor Green
Write-Host "O Resource Group '$ResourceGroupName' está sendo destruído na Azure em segundo plano." -ForegroundColor DarkGray
Write-Host "Custo do ambiente zerado permanentemente." -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Green
