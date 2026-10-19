# Validação do ambiente do professor

Executado pela interface web em 18/10/2026:

- Dashboard 01: CPU, memória e uptime presentes. Disco inicialmente sem dados; filtro de mountpoint corrigido de /rootfs para / e resultado confirmado. Sincronizar no provisionamento antes de recriar a stack.
- Dashboard 02: seleção de vm-azure-professor aplicada e CPU visível. O painel intitulado Top 5 processos mostra uma série agregada, não um inventário validado de processos; não foi usado como exemplo de processos.
- Dashboard 03: curvas de CPU e memória de containers presentes. O nome cAdvisor não confirma a implementação do coletor; o histórico informa um exportador customizado.
- Dashboard 04: linhas de log e contadores presentes. A investigação focou a aplicação ecommerce-shop.
- Dashboard 05: vazão e latência com dados. Não foi validado um p95 de requisições; a legenda 95th % do painel não deve ser apresentada como prova desse indicador.
- Prometheus / Explore: consulta de CPU executada e uma série por instância retornada.
- Loki / Explore: erros encontrados; envelope JSON do Docker formatado para expor o evento e o link TraceID.
- Tempo: mesma requisição aberta, quatro spans observados. O gateway tinha atributo error=true e mensagem de timeout, mas status OpenTelemetry unset.
- Dashboard didático novo: painel de CPU criado, unidade Percent (0-100) configurada, dashboard salvo, anotação manual adicionada e JSON exportado.
- Alertas: prévia normal com limite 80; prévia firing com limite didático 1. Vínculo ao dashboard demonstrado no rascunho. Regra não salva e nenhum envio de notificação realizado nesta VM.

Pendente: configurar receptor didático e validar entrega de notificações no Azure. Os scripts nativos Ubuntu e seu teste em VM continuam em etapa posterior. O laboratório Docker da turma permanece baseado no Grafana News, com os testes registrados na versão anterior; ele não foi convertido para o e-commerce do professor.

O arquivo Dashboard_Exercicios_Professor.json contém UID de fonte prometheus. A importação em outra instância requer fonte com métricas equivalentes e remapeamento quando necessário. Anotações manuais não acompanham a exportação do dashboard.


V7: formulários Email e Webhook demonstrados sem salvar contatos ou enviar mensagens, conforme escopo do laboratório. Conteúdo conceitual e diagramas revisados. Promtail aparece como legado; não houve migração para Alloy. O dossiê foi tratado como referência e confrontado com fontes oficiais e configurações locais. Dados públicos e alegações de p95/SLA não foram adotados como fatos validados.
