# Roteiro dos slides — V10

## Noite 1

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 1 | Teoria | 18h30–18h31 | Visualizando dados com Grafana |
| 2 | Teoria | 18h31–18h32 | Sobre o instrutor |
| 3 | Teoria | 18h32–18h33 | Base do curso |
| 4 | Teoria | 18h33–18h34 | Organização das cinco noites |
| 5 | Teoria | 18h34–18h35 | As cinco noites |
| 6 | Teoria | 18h35–18h40 | Noite 1 — Fundamentos e arquitetura |
| 7 | Teoria | 18h40–18h43 | O que é observabilidade? |
| 8 | Teoria | 18h43–18h46 | Monitoramento e investigação |
| 9 | Teoria | 18h46–18h49 | Métricas: medidas ao longo do tempo |
| 10 | Teoria | 18h49–18h52 | Logs: registros de eventos |
| 11 | Teoria | 18h52–18h55 | Traces: caminho de uma requisição |
| 12 | Teoria | 18h55–18h58 | Métricas, logs e traces juntos |
| 13 | Teoria | 18h58–19h01 | Vídeo: observabilidade |
| 14 | Teoria | 19h01–19h04 | O que é o Grafana? |
| 15 | Teoria | 19h04–19h07 | Grafana: vantagens e limites |
| 16 | Teoria | 19h07–19h10 | O que é o Prometheus? |
| 17 | Teoria | 19h10–19h13 | Prometheus: vantagens e limites |
| 18 | Teoria | 19h13–19h16 | Counter, gauge e distribuições |
| 19 | Teoria | 19h16–19h19 | O que é o Loki? |
| 20 | Teoria | 19h19–19h22 | Loki: vantagens e limites |
| 21 | Teoria | 19h22–19h25 | O que é o Tempo? |
| 22 | Teoria | 19h25–19h28 | Tempo: vantagens e limites |
| 23 | Teoria | 19h28–19h31 | PromQL: consulta de métricas |
| 24 | Teoria | 19h31–19h34 | LogQL: consulta de logs |
| 25 | Teoria | 19h34–19h37 | TraceQL: consulta de traces |
| 26 | Teoria | 19h37–19h40 | Promtail: papel no laboratório |
| 27 | Teoria | 19h40–19h43 | Promtail e a migração para Alloy |
| 28 | Teoria | 19h43–19h46 | Arquitetura do ambiente do professor |
| 29 | Teoria | 19h46–19h49 | Coleta de métricas: modelo pull |
| 30 | Teoria | 19h49–19h51 | Caminhos separados de logs e traces |
| 31 | Teoria | 19h51–19h53 | Tutorial do aluno e demonstração |
| 32 | Teoria | 19h53–19h55 | Preparação para a demonstração |
| 33 | Demonstração | 19h55–19h56 | Noite 1 — Demonstração |
| 34 | Demonstração | 19h56–20h00 | Demonstração: instalação Docker |
| 35 | Demonstração | 20h00–20h04 | A aplicação Grafana News |
| 36 | Demonstração | 20h04–20h08 | Primeiro acesso |
| 37 | Demonstração | 20h08–20h11 | Fonte de dados |
| 38 | Demonstração | 20h11–20h14 | Demonstração: roteiro Ubuntu |
| 39 | Demonstração | 20h14–20h17 | Ambiente real do professor |
| 40 | Demonstração | 20h17–20h20 | Fontes de dados do laboratório |
| 41 | Intervalo | 20h20–20h45 | Intervalo |
| 42 | Exercícios comentados | 20h45–20h46 | Noite 1 — Exercícios
comentados |
| 43 | Exercícios comentados | 20h46–20h51 | Exercício 1.1 — Obter e iniciar o laboratório Docker |
| 44 | Exercícios comentados | 20h51–20h56 | Exercício 1.2 — Gerar atividade conhecida |
| 45 | Exercícios comentados | 20h56–21h00 | Exercício 1.3 — Reconhecer os recursos do Grafana |
| 46 | Prática do aluno | 21h00–21h00 | Noite 1 — Prática do aluno |
| 47 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 48 | Correção | 22h15–22h30 | Correção e fechamento |
## Noite 2

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 49 | Teoria | 18h30–18h35 | Fundamentos de métricas |
| 50 | Teoria | 18h35–18h39 | Métrica: número com contexto |
| 51 | Teoria | 18h39–18h43 | Infraestrutura, aplicação e negócio |
| 52 | Teoria | 18h43–18h47 | Uma série temporal acompanha um contexto |
| 53 | Teoria | 18h47–18h51 | Eventos não são amostras |
| 54 | Teoria | 18h51–18h55 | Coleta: frequência, tempo e lacunas |
| 55 | Teoria | 18h55–18h59 | Do sistema observado até o painel |
| 56 | Teoria | 18h59–19h04 | Gauge: um estado que pode subir e descer |
| 57 | Teoria | 19h04–19h08 | Counter: acumulado de eventos |
| 58 | Teoria | 19h08–19h13 | O conceito é geral; os modelos variam |
| 59 | Teoria | 19h13–19h17 | Histograma: a distribuição importa |
| 60 | Teoria | 19h17–19h22 | p95 não é média nem máximo |
| 61 | Teoria | 19h22–19h26 | Labels: recortar a pergunta |
| 62 | Teoria | 19h26–19h30 | Cardinalidade: quantas séries surgem? |
| 63 | Teoria | 19h30–19h35 | Taxa: quanto acontece por unidade de tempo |
| 64 | Teoria | 19h35–19h40 | increase e o cuidado com resets |
| 65 | Teoria | 19h40–19h45 | Agregar no espaço e no tempo |
| 66 | Teoria | 19h45–19h49 | A média das porcentagens pode enganar |
| 67 | Teoria | 19h49–19h53 | Quatro perguntas sobre saúde |
| 68 | Teoria | 19h53–19h57 | Zero, ausência e dado antigo |
| 69 | Teoria | 19h57–20h01 | Período exibido não é janela de cálculo |
| 70 | Teoria | 20h01–20h06 | Resolução: o gráfico também faz escolhas |
| 71 | Teoria | 20h06–20h10 | Baseline e limites precisam de contexto |
| 72 | Teoria | 20h10–20h14 | Seis verificações antes de concluir |
| 73 | Teoria | 20h14–20h18 | Caso em sala: interprete antes do clique |
| 74 | Teoria | 20h18–20h20 | Síntese antes do intervalo |
| 75 | Intervalo | 20h20–20h45 | Intervalo |
| 76 | Exercício guiado | 20h45–20h49 | Agora, todos no Grafana |
| 77 | Exercício guiado | 20h49–20h55 | Guiado 1 — Ler o acumulado |
| 78 | Exercício guiado | 20h55–21h01 | Guiado 2 — Ajustar o período |
| 79 | Exercício guiado | 21h01–21h08 | Guiado 3 — Calcular taxa por rota |
| 80 | Exercício guiado | 21h08–21h14 | Guiado 4 — Comparar por status HTTP |
| 81 | Exercício guiado | 21h14–21h20 | Guiado 5 — Conferir e seguir sozinho |
| 82 | Prática autônoma | 21h20–21h20 | Consolidação dos exercícios |
| 83 | Prática autônoma | 21h20–22h15 | Prática autônoma |
| 84 | Correção | 22h15–22h30 | Correção e interpretação |
## Noite 3

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 85 | Teoria | 18h30–18h35 | Noite 3 — Exploração de logs |
| 86 | Teoria | 18h35–18h42 | Métricas e eventos |
| 87 | Teoria | 18h42–18h49 | Estrutura de um evento de log |
| 88 | Teoria | 18h49–18h56 | Labels e conteúdo no Loki |
| 89 | Teoria | 18h56–19h03 | Leitura do seletor LogQL |
| 90 | Teoria | 19h03–19h10 | Filtro por texto |
| 91 | Teoria | 19h10–19h17 | Leitura de uma linha |
| 92 | Teoria | 19h17–19h24 | Erro, evento e diagnóstico |
| 93 | Teoria | 19h24–19h31 | A janela da investigação |
| 94 | Teoria | 19h31–19h37 | Live e histórico |
| 95 | Teoria | 19h37–19h43 | Volume de logs e detalhes |
| 96 | Teoria | 19h43–19h49 | Evidência e hipótese |
| 97 | Teoria | 19h49–19h55 | Roteiro de investigação |
| 98 | Demonstração | 19h55–19h56 | Noite 3 — Demonstração |
| 99 | Demonstração | 19h56–20h00 | Conexão com o Loki |
| 100 | Demonstração | 20h00–20h04 | Uma consulta de logs |
| 101 | Demonstração | 20h04–20h08 | Um erro controlado |
| 102 | Demonstração | 20h08–20h11 | Filtro por conteúdo |
| 103 | Demonstração | 20h11–20h14 | Erros de pagamento no Loki |
| 104 | Demonstração | 20h14–20h17 | JSON do Docker e evento da aplicação |
| 105 | Demonstração | 20h17–20h20 | Do log ao trace no Tempo |
| 106 | Intervalo | 20h20–20h45 | Intervalo |
| 107 | Exercícios comentados | 20h45–20h46 | Noite 3 — Exercícios
comentados |
| 108 | Exercícios comentados | 20h46–20h51 | Exercício 3.1 — Conectar e explorar Loki |
| 109 | Exercícios comentados | 20h51–20h56 | Exercício 3.2 — Gerar e localizar um erro |
| 110 | Exercícios comentados | 20h56–21h00 | Exercício 3.3 — Explicar a investigação |
| 111 | Prática do aluno | 21h00–21h00 | Noite 3 — Prática do aluno |
| 112 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 113 | Correção | 22h15–22h30 | Correção e fechamento |
## Noite 4

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 114 | Teoria | 18h30–18h35 | Noite 4 — Dashboards e anotações |
| 115 | Teoria | 18h35–18h42 | Uma pergunta por painel |
| 116 | Teoria | 18h42–18h49 | Dashboard e painel |
| 117 | Teoria | 18h49–18h55 | Consulta e apresentação |
| 118 | Teoria | 18h55–19h01 | Escolha da visualização |
| 119 | Teoria | 19h01–19h07 | Título e unidade |
| 120 | Teoria | 19h07–19h13 | Eixos, legenda e período |
| 121 | Teoria | 19h13–19h19 | Agregação e redução visual |
| 122 | Teoria | 19h19–19h25 | Salvamento e organização |
| 123 | Teoria | 19h25–19h31 | Evento pontual e intervalo |
| 124 | Teoria | 19h31–19h37 | Anotações manuais e por consulta |
| 125 | Teoria | 19h37–19h43 | Correlação e causalidade |
| 126 | Teoria | 19h43–19h49 | Dashboard compreensível |
| 127 | Teoria | 19h49–19h55 | Revisão antes da demonstração |
| 128 | Demonstração | 19h55–19h56 | Noite 4 — Demonstração |
| 129 | Demonstração | 19h56–20h00 | Do Explore ao dashboard |
| 130 | Demonstração | 20h00–20h04 | Anotação manual |
| 131 | Demonstração | 20h04–20h08 | Anotações vindas do Loki |
| 132 | Demonstração | 20h08–20h12 | Painel criado pela interface |
| 133 | Demonstração | 20h12–20h16 | Anotação manual do exercício |
| 134 | Demonstração | 20h16–20h20 | Resultado salvo do exercício gráfico |
| 135 | Intervalo | 20h20–20h45 | Intervalo |
| 136 | Exercícios comentados | 20h45–20h46 | Noite 4 — Exercícios
comentados |
| 137 | Exercícios comentados | 20h46–20h51 | Exercício 4.1 — Criar e salvar um dashboard |
| 138 | Exercícios comentados | 20h51–20h56 | Exercício 4.2 — Registrar um evento manual |
| 139 | Exercícios comentados | 20h56–21h00 | Exercício 4.3 — Exibir erros como anotações |
| 140 | Prática do aluno | 21h00–21h00 | Noite 4 — Prática do aluno |
| 141 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 142 | Correção | 22h15–22h30 | Correção e fechamento |
## Noite 5

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 143 | Teoria | 18h30–18h35 | Noite 5 — Alertas e projeto final |
| 144 | Teoria | 18h35–18h39 | O que dispara um alerta |
| 145 | Teoria | 18h39–18h43 | Regra, instância e mensagem |
| 146 | Teoria | 18h43–18h47 | Consulta da regra |
| 147 | Teoria | 18h47–18h51 | A, B e C |
| 148 | Teoria | 18h51–18h55 | Escolha de um limite |
| 149 | Teoria | 18h55–18h59 | Avaliação e espera |
| 150 | Teoria | 18h59–19h03 | Estados do alerta |
| 151 | Teoria | 19h03–19h07 | Sem dados e falha de avaliação |
| 152 | Teoria | 19h07–19h11 | Contato e entrega |
| 153 | Teoria | 19h11–19h15 | Duas opções de webhook |
| 154 | Teoria | 19h15–19h19 | Alerta e painel relacionado |
| 155 | Teoria | 19h19–19h23 | Vídeo: alertas no dashboard |
| 156 | Teoria | 19h23–19h27 | Diagnóstico de alertas |
| 157 | Teoria | 19h27–19h31 | Síntese do ciclo completo |
| 158 | Teoria | 19h31–19h35 | E-mail: servidor e destinatário |
| 159 | Teoria | 19h35–19h39 | SMTP: exemplo de configuração |
| 160 | Teoria | 19h39–19h43 | Webhook: alerta para uma API externa |
| 161 | Teoria | 19h43–19h47 | Webhook e API do Grafana |
| 162 | Teoria | 19h47–19h51 | Arquitetura das notificações |
| 163 | Teoria | 19h51–19h55 | O que uma integração precisa validar |
| 164 | Demonstração | 19h55–19h56 | Noite 5 — Demonstração |
| 165 | Demonstração | 19h56–19h59 | Ponto de contato |
| 166 | Demonstração | 19h59–20h02 | Redução e limite |
| 167 | Demonstração | 20h02–20h05 | Prática de disparo |
| 168 | Demonstração | 20h05–20h08 | Receptor de notificações |
| 169 | Demonstração | 20h08–20h10 | Consulta da regra de CPU |
| 170 | Demonstração | 20h10–20h12 | Prévia da condição normal |
| 171 | Demonstração | 20h12–20h14 | Prévia com condição atendida |
| 172 | Demonstração | 20h14–20h16 | Vínculo do alerta com o painel |
| 173 | Demonstração | 20h16–20h18 | Onde configurar o destinatário |
| 174 | Demonstração | 20h18–20h20 | Onde configurar o Webhook |
| 175 | Intervalo | 20h20–20h45 | Intervalo |
| 176 | Exercícios comentados | 20h45–20h46 | Noite 5 — Exercícios
comentados |
| 177 | Exercícios comentados | 20h46–20h51 | Exercício 5.1 — Validar o ponto de contato |
| 178 | Exercícios comentados | 20h51–20h56 | Exercício 5.2 — Criar e disparar a regra |
| 179 | Exercícios comentados | 20h56–21h00 | Exercício 5.3 — Vincular e apresentar o projeto |
| 180 | Prática do aluno | 21h00–21h00 | Noite 5 — Prática do aluno |
| 181 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 182 | Correção | 22h15–22h30 | Correção e fechamento |
| 183 | Referência | 22h30–22h30 | Referências e continuidade |
| 184 | Correção | 22h30–22h30 | Obrigado |
