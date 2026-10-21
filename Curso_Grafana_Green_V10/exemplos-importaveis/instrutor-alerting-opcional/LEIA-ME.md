# Modelos técnicos opcionais — instrutor

Estes arquivos são para **provisionamento de alerting do Grafana OSS 12.0.1**. Não são dashboards e não devem ser enviados à tela Dashboards > Import. Nenhum deles foi aplicado em um ambiente nesta entrega.

| Arquivo | Resultado se o instrutor decidir provisionar |
|---|---|
| `01-contato-webhook-local.json` | Define contato Webhook para `http://webhook:8080/`, sem autenticação. |
| `02-regra-trafego-PAUSADA.json` | Define regra Grafana-managed com `isPaused: true`. A = Range; B = Reduce Last; C = valor maior que 0,01 req/s; intervalo de avaliação 10s; pending 0s. |

## Antes de usar

1. Utilize apenas um laboratório local sob seu controle. Os arquivos não são montados automaticamente pelo pacote.
2. Verifique se o Grafana tem a fonte Prometheus com UID `PBFA97CFB590B2093`. É o UID do laboratório do aluno; em outra instalação, altere **os dois campos** desse UID na consulta A.
3. O serviço `webhook` deve estar na mesma rede Docker do Grafana, escutando internamente em 8080. `localhost` visto pelo navegador não é o `localhost` do container Grafana. O receptor do pacote pode ser consultado no navegador em `http://localhost:38090`.
4. Confira `orgId: 1`, nomes e UIDs. Não reutilize UIDs que já pertençam a recursos de outra turma.

## Caminho de provisionamento, se optar por utilizá-lo

Em uma cópia de laboratório, coloque **o arquivo do contato primeiro** no diretório de provisionamento de alerting da instância. Na imagem Docker oficial o caminho padrão é `/etc/grafana/provisioning/alerting`. Reinicie esse Grafana e confira o contato em Alerting > Contact points. Depois acrescente o arquivo da regra ao mesmo diretório, reinicie e confira em Alerting > Alert rules que aparece **Paused**. O diretório efetivo pode ser alterado por `GF_PATHS_PROVISIONING`.

Criar o contato por arquivo não envia uma mensagem. A regra pausada não é avaliada. Não clique em Test, não execute reload de provisionamento e não despause a regra como parte da simples distribuição dos exemplos. Se o professor decidir fazer uma demonstração de envio depois, revise o destino local e faça-a conscientemente no laboratório. Pending 0s elimina a espera da condição; agrupamento e entrega ainda podem acrescentar tempo.

Recursos provisionados por arquivo são administrados no arquivo. Não há árvore de notification policies neste exemplo: a regra seleciona seu contato diretamente, sem substituir as políticas existentes. A regra também não vincula um dashboard de UID desconhecido; esse vínculo pode ser adicionado depois pelo instrutor. `__inputs` pertence ao fluxo de importação de dashboard e não substitui o UID da fonte na regra.

Um erro de scrape pode gerar NoData/Error; isso deve ser investigado, não interpretado como tráfego zero. Nenhum arquivo contém credenciais, destinatários externos ou comandos automáticos.

## Referências

- [Provisionamento por arquivo](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/)
- [Formato implementado no Grafana 12.0.1: isPaused, consultas e notification_settings](https://github.com/grafana/grafana/blob/v12.0.1/pkg/services/provisioning/alerting/rules_types.go)

Validação desta entrega: JSON bem formado e inspeção de campos, dependências A→B→C e pausa. Não foi realizado teste de inicialização do Grafana com estes arquivos.
