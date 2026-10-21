# Roteiro dos slides — V12

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
| 49 | Teoria | 18h30–18h32 | Métricas e contexto de observabilidade |
| 50 | Teoria | 18h32–18h35 | A evolução da observação de sistemas |
| 51 | Teoria | 18h35–18h38 | Monitoramento e observabilidade |
| 52 | Teoria | 18h38–18h41 | Métricas, logs e traces |
| 53 | Teoria | 18h41–18h44 | Métrica: número com contexto |
| 54 | Teoria | 18h44–18h47 | Infraestrutura, aplicação e negócio |
| 55 | Teoria | 18h47–18h50 | Uma série temporal acompanha um contexto |
| 56 | Teoria | 18h50–18h53 | Eventos não são amostras |
| 57 | Teoria | 18h53–18h56 | Coleta: frequência, tempo e lacunas |
| 58 | Teoria | 18h56–18h59 | Do sistema observado até o painel |
| 59 | Teoria | 18h59–19h02 | Exporters e instrumentação |
| 60 | Teoria | 19h02–19h05 | Gauge: um estado que pode subir e descer |
| 61 | Teoria | 19h05–19h08 | Counter: acumulado de eventos |
| 62 | Teoria | 19h08–19h11 | O conceito é geral; os modelos variam |
| 63 | Teoria | 19h11–19h14 | Histograma: a distribuição importa |
| 64 | Teoria | 19h14–19h18 | p95 não é média nem máximo |
| 65 | Teoria | 19h18–19h21 | Labels: recortar a pergunta |
| 66 | Teoria | 19h21–19h24 | Cardinalidade: quantas séries surgem? |
| 67 | Teoria | 19h24–19h27 | Taxa: quanto acontece por unidade de tempo |
| 68 | Teoria | 19h27–19h30 | increase e o cuidado com resets |
| 69 | Teoria | 19h30–19h33 | Agregar no espaço e no tempo |
| 70 | Teoria | 19h33–19h36 | A média das porcentagens pode enganar |
| 71 | Teoria | 19h36–19h39 | Quatro perguntas sobre saúde |
| 72 | Teoria | 19h39–19h42 | Zero, ausência e dado antigo |
| 73 | Teoria | 19h42–19h45 | Período exibido não é janela de cálculo |
| 74 | Teoria | 19h45–19h48 | Resolução: o gráfico também faz escolhas |
| 75 | Teoria | 19h48–19h51 | Baseline e limites precisam de contexto |
| 76 | Teoria | 19h51–19h54 | Seis verificações antes de concluir |
| 77 | Teoria | 19h54–19h57 | Regras e notificações |
| 78 | Teoria | 19h57–20h00 | Logs, Loki e LogQL |
| 79 | Teoria | 20h00–20h03 | Traces, spans e Tempo |
| 80 | Teoria | 20h03–20h06 | Correlação entre os sinais |
| 81 | Teoria | 20h06–20h09 | Arquitetura de coleta e consulta |
| 82 | Teoria | 20h09–20h12 | Configuração e fontes de dados |
| 83 | Teoria | 20h12–20h15 | A escolha do painel |
| 84 | Teoria | 20h15–20h18 | Caso em sala: interprete antes do clique |
| 85 | Teoria | 20h18–20h20 | Síntese antes do intervalo |
| 86 | Intervalo | 20h20–20h45 | Intervalo |
| 87 | Exercício guiado | 20h45–20h49 | Agora, todos no Grafana |
| 88 | Exercício guiado | 20h49–20h55 | Guiado 1 — Ler o acumulado |
| 89 | Exercício guiado | 20h55–21h01 | Guiado 2 — Ajustar o período |
| 90 | Exercício guiado | 21h01–21h08 | Guiado 3 — Calcular taxa por rota |
| 91 | Exercício guiado | 21h08–21h14 | Guiado 4 — Comparar por status HTTP |
| 92 | Exercício guiado | 21h14–21h20 | Guiado 5 — Conferir e seguir sozinho |
| 93 | Prática autônoma | 21h20–21h20 | Consolidação dos exercícios |
| 94 | Prática autônoma | 21h20–22h15 | Prática autônoma |
| 95 | Desafio opcional | Após 2.3–Até 22h15 | Desafio 2.4 — Filtrar por label |
| 96 | Desafio opcional | Após 2.3–Até 22h15 | Desafio 2.5 — rate ou increase? |
| 97 | Desafio opcional | Após 2.3–Até 22h15 | Desafio 2.6 — Latência: p95 |
| 98 | Correção | 22h15–22h30 | Correção e interpretação |
## Noite 3

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 99 | Teoria | 18h30–18h35 | Noite 3 — Exploração de logs |
| 100 | Teoria | 18h35–18h42 | Métricas e eventos |
| 101 | Teoria | 18h42–18h49 | Estrutura de um evento de log |
| 102 | Teoria | 18h49–18h56 | Labels e conteúdo no Loki |
| 103 | Teoria | 18h56–19h03 | Leitura do seletor LogQL |
| 104 | Teoria | 19h03–19h10 | Filtro por texto |
| 105 | Teoria | 19h10–19h17 | Leitura de uma linha |
| 106 | Teoria | 19h17–19h24 | Erro, evento e diagnóstico |
| 107 | Teoria | 19h24–19h31 | A janela da investigação |
| 108 | Teoria | 19h31–19h37 | Live e histórico |
| 109 | Teoria | 19h37–19h43 | Volume de logs e detalhes |
| 110 | Teoria | 19h43–19h49 | Evidência e hipótese |
| 111 | Teoria | 19h49–19h55 | Roteiro de investigação |
| 112 | Demonstração | 19h55–19h56 | Noite 3 — Demonstração |
| 113 | Demonstração | 19h56–20h00 | Conexão com o Loki |
| 114 | Demonstração | 20h00–20h04 | Uma consulta de logs |
| 115 | Demonstração | 20h04–20h08 | Um erro controlado |
| 116 | Demonstração | 20h08–20h11 | Filtro por conteúdo |
| 117 | Demonstração | 20h11–20h14 | Erros de pagamento no Loki |
| 118 | Demonstração | 20h14–20h17 | JSON do Docker e evento da aplicação |
| 119 | Demonstração | 20h17–20h20 | Do log ao trace no Tempo |
| 120 | Intervalo | 20h20–20h45 | Intervalo |
| 121 | Exercícios comentados | 20h45–20h46 | Noite 3 — Exercícios
comentados |
| 122 | Exercícios comentados | 20h46–20h51 | Exercício 3.1 — Conectar e explorar Loki |
| 123 | Exercícios comentados | 20h51–20h56 | Exercício 3.2 — Gerar e localizar um erro |
| 124 | Exercícios comentados | 20h56–21h00 | Exercício 3.3 — Explicar a investigação |
| 125 | Prática do aluno | 21h00–21h00 | Noite 3 — Prática do aluno |
| 126 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 127 | Correção | 22h15–22h30 | Correção e fechamento |
## Noite 4

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 128 | Teoria | 18h30–18h35 | Noite 4 — Dashboards e anotações |
| 129 | Teoria | 18h35–18h42 | Uma pergunta por painel |
| 130 | Teoria | 18h42–18h49 | Dashboard e painel |
| 131 | Teoria | 18h49–18h55 | Consulta e apresentação |
| 132 | Teoria | 18h55–19h01 | Escolha da visualização |
| 133 | Teoria | 19h01–19h07 | Título e unidade |
| 134 | Teoria | 19h07–19h13 | Eixos, legenda e período |
| 135 | Teoria | 19h13–19h19 | Agregação e redução visual |
| 136 | Teoria | 19h19–19h25 | Salvamento e organização |
| 137 | Teoria | 19h25–19h31 | Evento pontual e intervalo |
| 138 | Teoria | 19h31–19h37 | Anotações manuais e por consulta |
| 139 | Teoria | 19h37–19h43 | Correlação e causalidade |
| 140 | Teoria | 19h43–19h49 | Dashboard compreensível |
| 141 | Teoria | 19h49–19h55 | Revisão antes da demonstração |
| 142 | Demonstração | 19h55–19h56 | Noite 4 — Demonstração |
| 143 | Demonstração | 19h56–20h00 | Do Explore ao dashboard |
| 144 | Demonstração | 20h00–20h04 | Anotação manual |
| 145 | Demonstração | 20h04–20h08 | Anotações vindas do Loki |
| 146 | Demonstração | 20h08–20h12 | Painel criado pela interface |
| 147 | Demonstração | 20h12–20h16 | Anotação manual do exercício |
| 148 | Demonstração | 20h16–20h20 | Resultado salvo do exercício gráfico |
| 149 | Intervalo | 20h20–20h45 | Intervalo |
| 150 | Exercícios comentados | 20h45–20h46 | Noite 4 — Exercícios
comentados |
| 151 | Exercícios comentados | 20h46–20h51 | Exercício 4.1 — Criar e salvar um dashboard |
| 152 | Exercícios comentados | 20h51–20h56 | Exercício 4.2 — Registrar um evento manual |
| 153 | Exercícios comentados | 20h56–21h00 | Exercício 4.3 — Exibir erros como anotações |
| 154 | Prática do aluno | 21h00–21h00 | Noite 4 — Prática do aluno |
| 155 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 156 | Correção | 22h15–22h30 | Correção e fechamento |
## Noite 5

| Slide | Bloco | Horário | Conteúdo |
|---|---|---|---|
| 157 | Teoria | 18h30–18h35 | Noite 5 — Alertas e projeto final |
| 158 | Teoria | 18h35–18h39 | O que dispara um alerta |
| 159 | Teoria | 18h39–18h43 | Regra, instância e mensagem |
| 160 | Teoria | 18h43–18h47 | Consulta da regra |
| 161 | Teoria | 18h47–18h51 | A, B e C |
| 162 | Teoria | 18h51–18h55 | Escolha de um limite |
| 163 | Teoria | 18h55–18h59 | Avaliação e espera |
| 164 | Teoria | 18h59–19h03 | Estados do alerta |
| 165 | Teoria | 19h03–19h07 | Sem dados e falha de avaliação |
| 166 | Teoria | 19h07–19h11 | Contato e entrega |
| 167 | Teoria | 19h11–19h15 | Duas opções de webhook |
| 168 | Teoria | 19h15–19h19 | Alerta e painel relacionado |
| 169 | Teoria | 19h19–19h23 | Vídeo: alertas no dashboard |
| 170 | Teoria | 19h23–19h27 | Diagnóstico de alertas |
| 171 | Teoria | 19h27–19h31 | Síntese do ciclo completo |
| 172 | Teoria | 19h31–19h35 | E-mail: servidor e destinatário |
| 173 | Teoria | 19h35–19h39 | SMTP: exemplo de configuração |
| 174 | Teoria | 19h39–19h43 | Webhook: alerta para uma API externa |
| 175 | Teoria | 19h43–19h47 | Webhook e API do Grafana |
| 176 | Teoria | 19h47–19h51 | Arquitetura das notificações |
| 177 | Teoria | 19h51–19h55 | O que uma integração precisa validar |
| 178 | Demonstração | 19h55–19h56 | Noite 5 — Demonstração |
| 179 | Demonstração | 19h56–19h59 | Ponto de contato |
| 180 | Demonstração | 19h59–20h02 | Redução e limite |
| 181 | Demonstração | 20h02–20h05 | Prática de disparo |
| 182 | Demonstração | 20h05–20h08 | Receptor de notificações |
| 183 | Demonstração | 20h08–20h10 | Consulta da regra de CPU |
| 184 | Demonstração | 20h10–20h12 | Prévia da condição normal |
| 185 | Demonstração | 20h12–20h14 | Prévia com condição atendida |
| 186 | Demonstração | 20h14–20h16 | Vínculo do alerta com o painel |
| 187 | Demonstração | 20h16–20h18 | Onde configurar o destinatário |
| 188 | Demonstração | 20h18–20h20 | Onde configurar o Webhook |
| 189 | Intervalo | 20h20–20h45 | Intervalo |
| 190 | Exercícios comentados | 20h45–20h46 | Noite 5 — Exercícios
comentados |
| 191 | Exercícios comentados | 20h46–20h51 | Exercício 5.1 — Validar o ponto de contato |
| 192 | Exercícios comentados | 20h51–20h56 | Exercício 5.2 — Criar e disparar a regra |
| 193 | Exercícios comentados | 20h56–21h00 | Exercício 5.3 — Vincular e apresentar o projeto |
| 194 | Prática do aluno | 21h00–21h00 | Noite 5 — Prática do aluno |
| 195 | Prática do aluno | 21h00–22h15 | Agora é com você |
| 196 | Correção | 22h15–22h30 | Correção e fechamento |
| 197 | Referência | 22h30–22h30 | Referências e continuidade |
| 198 | Correção | 22h30–22h30 | Obrigado |
