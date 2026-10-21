# Instalação nativa do Grafana no Ubuntu

## Objetivo e situação deste roteiro

A segunda instalação apresenta o Grafana como serviço do Ubuntu. A referência mais recente consultada é Ubuntu 26.10. Ubuntu 26.04.1 LTS é a alternativa de suporte prolongado. O procedimento completo de automação será criado depois e testado por Fábio em uma VM Azure antes da distribuição. Nesta entrega não há scripts de instalação nativa aprovados.

Os comandos abaixo são exemplos comentados do fluxo documentado de instalação do Grafana OSS. Eles não representam um teste executado na VM Azure. O teste do professor deve registrar versão, arquitetura, comandos, resultados e ajustes. A versão de Grafana a fixar nos scripts será definida nessa validação.

## Duas instalações e componentes separados

Docker executa o ambiente do tutorial, com Grafana, Prometheus, Loki e a aplicação. A instalação nativa abaixo instala apenas o Grafana. Ela não instala automaticamente as fontes e a aplicação.

Para comparar os dois Grafanas usando os mesmos dados, uma opção de laboratório é manter a stack de apoio Docker na mesma VM Ubuntu: Grafana Docker em 3300, Grafana nativo em 3000, Prometheus publicado em 39090 e Loki em 33100. No Grafana nativo, as fontes usam http://127.0.0.1:39090 e http://127.0.0.1:33100. Os nomes prometheus:9090 e loki:3100 servem à rede dos containers, não ao processo nativo do host. Esse arranjo também precisa ser validado pelo professor. Uma stack inteiramente nativa exigiria scripts adicionais e não está entregue nesta revisão.

## 1 Conferir o sistema

```bash
cat /etc/os-release
uname -m
```

Registre a versão e a arquitetura. A imagem escolhida na VM Azure deve corresponder ao alvo do roteiro que será liberado aos alunos.

## 2 Preparar APT e adicionar o repositório oficial

```bash
sudo apt-get update
sudo apt-get install -y apt-transport-https wget gnupg
sudo mkdir -p /etc/apt/keyrings
sudo wget -O /etc/apt/keyrings/grafana.asc https://apt.grafana.com/gpg-full.key
sudo chmod 644 /etc/apt/keyrings/grafana.asc
echo "deb [signed-by=/etc/apt/keyrings/grafana.asc] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
sudo apt-get update
```

O repositório define a origem dos pacotes e a chave permite verificar sua assinatura. O exemplo usa a linha estável. Não misture esse procedimento com a instalação por pacote avulso na mesma máquina de teste.

## 3 Instalar e iniciar o serviço

```bash
sudo apt-get install grafana
sudo systemctl daemon-reload
sudo systemctl enable --now grafana-server
systemctl status grafana-server --no-pager
```

O pacote é grafana e o serviço é grafana-server. O parâmetro enable configura inicialização com o sistema, enquanto --now também inicia o serviço imediatamente.

## 4 Validar localmente

```bash
wget -qO- http://127.0.0.1:3000/api/health
journalctl -u grafana-server -n 50 --no-pager
```

Na instalação nativa padrão, o primeiro acesso solicita autenticação. O login inicial padrão admin/admin deve ser alterado quando solicitado. Essa experiência é diferente do acesso anônimo do ambiente Docker do tutorial. Se o navegador estiver em outro computador, use o IP da VM e o acesso de rede definido pelo professor; localhost do notebook não acessa o servidor remoto.

## Registro do teste Azure a preencher pelo professor

| Item | Resultado |
|---|---|
| Data do teste | A preencher |
| Imagem Ubuntu e versão | A preencher |
| Arquitetura | A preencher |
| Versão Grafana instalada | A preencher |
| Serviço ativo e reinício validado | A preencher |
| API health e acesso no navegador | A preencher |
| Fontes de dados conectadas | A preencher |
| Resultado após reiniciar a VM | A preencher |
| Ajustes necessários | A preencher |
| Liberação dos scripts para a turma | Pendente |

Referências: https://ubuntu.com/download/desktop e https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/ .
