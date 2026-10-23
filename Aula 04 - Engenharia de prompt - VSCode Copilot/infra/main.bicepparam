using 'main.bicep'

param location = 'eastus2'
param vmName = 'vm-aula4-grafana'
param vmSize = 'Standard_D2s_v3'
param adminUsername = 'labadmin'
param teacherIp = '187.101.181.210'
// sshPublicKey é injetada em tempo de execução pelo script de deploy
