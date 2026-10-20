# Exemplos ilustrativos de integração

O JSON é um exemplo reduzido para explicar campos, não um payload completo capturado nem um schema universal de API.

Saída do Grafana: contato Webhook envia HTTP POST com JSON ao receptor configurado. A URL https://api.exemplo.invalid/alertas é apenas ilustrativa. O receptor pode precisar de um adaptador para o formato do software de chamados. Um HTTP 2xx confirma aceitação HTTP; conferir também o resultado do fluxo de negócio e evitar duplicar ocorrências.

API administrativa do Grafana 11.3: exemplos de leitura GET /api/v1/provisioning/alert-rules e GET /api/v1/provisioning/contact-points. Exigem autenticação e permissões. Não foram executados nesta entrega. Endpoints e recursos podem mudar em versões posteriores.

E-mail: SMTP em /etc/grafana/grafana.ini, seção [smtp], ou variáveis GF_SMTP_* do serviço Docker; destinatários no contato Email, campo Addresses. Nenhuma configuração SMTP real foi aplicada e nenhuma mensagem foi enviada.
