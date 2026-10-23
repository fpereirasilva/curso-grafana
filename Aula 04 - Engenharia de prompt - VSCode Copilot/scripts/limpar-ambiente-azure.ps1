param(
    [string]$ResourceGroupName = "rgaula4copilot"
)

Write-Host "⚠️ ATENÇÃO: Esta ação deletará definitivamente o Resource Group $ResourceGroupName e todos os recursos contidos nele." -ForegroundColor Red
$confirm = Read-Host "Deseja prosseguir? Digite 'SIM' para confirmar"

if ($confirm -eq "SIM") {
    Write-Host "[*] Excluindo Resource Group $ResourceGroupName..." -ForegroundColor Yellow
    az group delete --name $ResourceGroupName --yes --no-wait
    Write-Host "✅ Exclusão disparada no Azure com sucesso." -ForegroundColor Green
} else {
    Write-Host "Operação cancelada pelo usuário." -ForegroundColor Cyan
}
