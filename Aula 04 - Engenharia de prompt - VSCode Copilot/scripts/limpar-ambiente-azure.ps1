param(
    [string]$SubscriptionId = "b34ce124-5fd1-47a1-ba7c-acbf5367c573",
    [string]$ResourceGroupName = "rgaula4copilot"
)

$ErrorActionPreference = "Stop"

Write-Host "⚠️ ATENÇÃO: Esta ação deletará definitivamente o Resource Group $ResourceGroupName e todos os recursos contidos nele." -ForegroundColor Red
$confirm = Read-Host "Deseja prosseguir? Digite 'SIM' para confirmar"

if ($confirm -eq "SIM") {
    Write-Host "[*] Excluindo Resource Group $ResourceGroupName na assinatura $SubscriptionId..." -ForegroundColor Yellow
    az group delete --name $ResourceGroupName --subscription $SubscriptionId --yes
    if ($LASTEXITCODE -ne 0) {
        throw "A exclusão do Resource Group $ResourceGroupName falhou."
    }

    $groupExists = az group exists --name $ResourceGroupName --subscription $SubscriptionId
    if ($LASTEXITCODE -ne 0) {
        throw "Não foi possível verificar a exclusão do Resource Group $ResourceGroupName."
    }
    if ($groupExists -ne "false") {
        throw "A solicitação terminou, mas o Resource Group $ResourceGroupName ainda existe."
    }

    Write-Host "✅ Resource Group $ResourceGroupName e seus recursos foram excluídos e verificados." -ForegroundColor Green
} else {
    Write-Host "Operação cancelada pelo usuário." -ForegroundColor Cyan
}
