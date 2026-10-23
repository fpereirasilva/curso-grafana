param(
    [string]$ResourceGroupName = "rgaula4grafana",
    [string]$VmName = "vm-aula4-grafana"
)

Write-Host "[*] Desalocando VM $VmName no Resource Group $ResourceGroupName (Custo de computação zero)..." -ForegroundColor Yellow
az vm deallocate --resource-group $ResourceGroupName --name $VmName --output table
Write-Host "✅ VM desalocada com sucesso!" -ForegroundColor Green
