# Revisão pedagógica e validação dos exercícios V8

As folhas V7 tinham 3–5 passos gerais por exercício, sem estados intermediários nem diagnóstico. A revisão substitui as cinco folhas por um procedimento executável: pré-requisitos, caminho de menu, campo, valor, salvar, resultado e tratamento de falhas. Os 15 exercícios continuam em 75 minutos/noite; importação e criação manual são alternativas no exercício 4.1. A solução completa é referência opcional, sem ampliar a carga obrigatória.

## Ajuste a explicar antes da prática de alertas

Para distinguir ações do aluno do scrape, o guia V8 usa:

```promql
sum(rate(tns_request_duration_seconds_count{route!="metrics"}[5m])) by (route)
```

Limite de laboratório C > 0.01 req/s, B Reduce/Last, A Range, avaliação 10s, pendência 0s. Os slides V7 citam 0.2 como exercício anterior; anuncie o ajuste V8 antes de liberar a folha. O limite menor permite demonstrar com 15–20 atualizações manuais em uma janela de 5 minutos e evita que a rota metrics dispare sozinha. É um parâmetro didático, não recomendação de produção.

No Grafana 12.0.1, mudar A de Instant para Range pode acrescentar reducer automaticamente. Reutilizar essa expressão, renomear B e reescolher B na entrada de C. Não acrescentar um segundo Reduce. O guia registra esse ponto porque a referência pode voltar a A depois de renomear.

## Evidências locais obtidas pelo navegador

- Publicação e voto no Grafana News; consulta do contador e taxas por route/status_code.
- Prometheus e Loki com Save & test bem-sucedido; log empty url associado à ação do aluno.
- Painel de tráfego criado, unidade req/s, anotação manual e consulta de anotações Loki configuradas e salvas.
- JSON base e completo importados com mapeamento de fonte e sem sobrescrever o dashboard manual.
- TestAlert recebido no receptor local. Regra Grafana-managed salva e avaliada: root com B aproximadamente 0.050846, C = 1, status Firing. Outra mensagem recebida com o nome da regra e receiver Green - Webhook local. Regra pausada ao concluir.

Não foi feito envio de e-mail, entrega para terceiros, reinstalação da VM Azure ou instalação nativa Ubuntu. Capturas V8 vêm da instalação local isolada com projeto Docker green-alunos-v8, nas mesmas portas do pacote dos alunos. O script distribuído usa projeto green-fundamentals. Os outros containers da máquina não foram interrompidos.

Os links absolutos das mensagens do Grafana podem apontar à porta 3000; o guia orienta usar a porta externa 3300 e a mesma rota, ou View panel na interface. Para uma próxima revisão do laboratório, configurar GF_SERVER_ROOT_URL pode alinhar esses links; não foi necessário alterar a instalação para executar a atividade.
