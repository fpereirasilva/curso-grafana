@description('Região para os recursos')
param location string = resourceGroup().location

@description('Nome da VM do laboratório')
param vmName string = 'vm-aula4-grafana'

@description('Tamanho da VM')
param vmSize string = 'Standard_D2s_v3'

@description('Nome de usuário administrador')
param adminUsername string = 'labadmin'

@description('Chave pública SSH')
param sshPublicKey string

@description('Prefixo DNS do IP Público')
param dnsLabelPrefix string = 'grafana-aula4-${uniqueString(resourceGroup().id)}'

@description('IP do Professor autorizado para acesso')
param teacherIp string = '187.101.181.210'

// 1. Network Security Group
resource nsg 'Microsoft.Network/networkSecurityGroups@2023-09-01' = {
  name: '${vmName}-nsg'
  location: location
  properties: {
    securityRules: [
      {
        name: 'Allow-SSH-Teacher'
        properties: {
          priority: 1000
          direction: 'Inbound'
          access: 'Allow'
          protocol: 'Tcp'
          sourcePortRange: '*'
          destinationPortRange: '22'
          sourceAddressPrefix: '${teacherIp}/32'
          destinationAddressPrefix: '*'
        }
      }
      {
        name: 'Allow-Grafana-Teacher'
        properties: {
          priority: 1010
          direction: 'Inbound'
          access: 'Allow'
          protocol: 'Tcp'
          sourcePortRange: '*'
          destinationPortRange: '3000'
          sourceAddressPrefix: '${teacherIp}/32'
          destinationAddressPrefix: '*'
        }
      }
      {
        name: 'Allow-Prometheus-Teacher'
        properties: {
          priority: 1020
          direction: 'Inbound'
          access: 'Allow'
          protocol: 'Tcp'
          sourcePortRange: '*'
          destinationPortRange: '9090'
          sourceAddressPrefix: '${teacherIp}/32'
          destinationAddressPrefix: '*'
        }
      }
    ]
  }
}

// 2. IP Público
resource publicIp 'Microsoft.Network/publicIPAddresses@2023-09-01' = {
  name: '${vmName}-ip'
  location: location
  sku: {
    name: 'Standard'
  }
  properties: {
    publicIPAllocationMethod: 'Static'
    dnsSettings: {
      domainNameLabel: dnsLabelPrefix
    }
  }
}

// 3. Rede Virtual e Subnet
resource vnet 'Microsoft.Network/virtualNetworks@2023-09-01' = {
  name: '${vmName}-vnet'
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.20.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'snet-aula4-grafana'
        properties: {
          addressPrefix: '10.20.1.0/24'
        }
      }
    ]
  }
}

// 4. Interface de Rede (NIC)
resource nic 'Microsoft.Network/networkInterfaces@2023-09-01' = {
  name: '${vmName}-nic'
  location: location
  properties: {
    ipConfigurations: [
      {
        name: 'ipconfig1'
        properties: {
          subnet: {
            id: vnet.properties.subnets[0].id
          }
          privateIPAllocationMethod: 'Dynamic'
          publicIPAddress: {
            id: publicIp.id
          }
        }
      }
    ]
    networkSecurityGroup: {
      id: nsg.id
    }
  }
}

// 5. Máquina Virtual Ubuntu 22.04 LTS
resource vm 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: vmName
  location: location
  properties: {
    hardwareProfile: {
      vmSize: vmSize
    }
    osProfile: {
      computerName: vmName
      adminUsername: adminUsername
      linuxConfiguration: {
        disablePasswordAuthentication: true
        ssh: {
          publicKeys: [
            {
              path: '/home/${adminUsername}/.ssh/authorized_keys'
              keyData: sshPublicKey
            }
          ]
        }
      }
    }
    storageProfile: {
      imageReference: {
        publisher: 'Canonical'
        offer: '0001-com-ubuntu-server-jammy'
        sku: '22_04-lts-gen2'
        version: 'latest'
      }
      osDisk: {
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'StandardSSD_LRS'
        }
        diskSizeGB: 32
      }
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: nic.id
        }
      ]
    }
  }
}

output publicIpAddress string = publicIp.properties.ipAddress
output fqdn string = publicIp.properties.dnsSettings.fqdn
output sshCommand string = 'ssh ${adminUsername}@${publicIp.properties.dnsSettings.fqdn}'
