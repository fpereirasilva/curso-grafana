# Curso Grafana Green — V12

Fábio Silva, Arquiteto de Soluções • Green Tecnologia  
LinkedIn: https://www.linkedin.com/in/silvapfabio  
5 noites de 18h30 a 22h30 • intervalo de 20h20 a 20h45.

## Desafios preservados

Os desafios opcionais 2.4, 2.5 e 2.6 da edição anterior continuam disponíveis após a prática principal. As três capturas correspondentes foram preservadas. Eles cabem no mesmo bloco de consolidação, sem aumentar a duração da aula. Na comparação de rate e increase, use o mesmo instante, janela e filtros.

## Material principal

- `Curso_Grafana_Green_5_Noites_V12.pptx`: apresentação no template oficial Green v5, com notas de condução e transição para o professor. As duas mídias online exigem internet e compatibilidade do PowerPoint.
- `Previa_Curso_Grafana_Green_V12.html`: slides e notas no navegador.
- `Apostila_do_Aluno_V12.pdf`: 102 páginas de fundamentos atualizados e exercícios ilustrados.
- `Guia_Visual_Exercicios_V12.pdf`: 60 páginas com os mesmos 15 exercícios das cinco noites.
- `alunos/Guia_Visual_Exercicios_V12.html`: passos, campos, consultas e capturas ampliáveis. Os PDFs e arquivos Markdown individuais estão em `alunos/`.
- `arquitetura/Arquitetura_Grafana_Green.drawio`: quatro páginas editáveis da arquitetura.

## Noite 2 — teoria de métricas e execução depois do intervalo

A teoria integra a apresentação de referência sobre observabilidade ao conteúdo de métricas. Inclui monitoramento e observabilidade, sinais, exporters, regras, correlação, arquitetura, configuração e escolha de painéis. A parte geral de métricas preserva: significado da medida, unidade, população, tempo, dimensões, cardinalidade, tipos, distribuições, taxas, agregações e interpretação. Prometheus e PromQL aplicam esses conceitos ao laboratório. Os exemplos conceituais e as perguntas de interpretação ocupam o bloco anterior ao intervalo.

| Bloco | Horário | Minutos |
|---|---|---|
| Teoria de métricas | 18h30–20h20 | 110 |
| Intervalo | 20h20–20h45 | 25 |
| Exercício guiado: professor e alunos no Grafana | 20h45–21h20 | 35 |
| Consolidação autônoma dos mesmos exercícios | 21h20–22h15 | 55 |
| Correção | 22h15–22h30 | 15 |

Não há bloco separado de demonstração de métricas antes do intervalo. O professor abre o ambiente e conduz os três exercícios junto com os alunos às 20h45. Os 55 minutos seguintes servem para repetir os passos no próprio ambiente, comparar resultados e finalizar as entregas. Os exercícios 2.1, 2.2 e 2.3 mantêm os mesmos 28 passos operacionais e cinco imagens de referência; nenhuma nova atividade obrigatória foi acrescentada.

## Noites 1, 3, 4 e 5

| Bloco | Horário | Minutos |
|---|---|---|
| Teoria | 18h30–19h55 | 85 |
| Demonstração | 19h55–20h20 | 25 |
| Intervalo | 20h20–20h45 | 25 |
| Exercícios comentados | 20h45–21h00 | 15 |
| Prática do aluno | 21h00–22h15 | 75 |
| Correção | 22h15–22h30 | 15 |

As folhas dessas quatro noites foram preservadas. São 20 horas de programação, incluindo os cinco intervalos; tempo de atividades: 17h55.

## Laboratório do aluno

Extraia todo o pacote e deixe o Docker ativo. No Windows, execute `iniciar-lab.ps1`; no Ubuntu com Docker/Compose, `bash ./iniciar-lab.sh`.

- Navegador: Grafana http://localhost:3300, aplicação http://localhost:38081, receptor Webhook http://localhost:38090.
- Configurações dentro do Grafana: Prometheus `http://prometheus:9090`, Loki `http://loki:3100`, contato `http://webhook:8080/`.
- O laboratório Grafana News usa acesso anônimo. As capturas de referência são do Grafana 12.0.1, obtidas em 19/10/2026. Os valores e os horários podem variar.
- O ambiente do professor é separado. Um endereço eventualmente informado em sala substitui apenas o endereço de acesso daquela sessão; as capturas não representam acesso atual à VM.
- A instalação nativa Ubuntu continua descrita em `Roteiro_Ubuntu.md`, com os scripts e os testes Azure reservados à etapa posterior combinada.

## Dez exemplos de infraestrutura

`alunos/10_Exemplos_PromQL_Noite_2.html` reúne CPU, RAM, filesystem, rede, disco, load e uptime. Há também versões Markdown e PDF. As consultas exigem Linux com node_exporter coletado no Prometheus selecionado. O Grafana News não possui essas séries por padrão. O JSON opcional `exemplos-importaveis/aluno/10-node-exporter-variados.json` contém os dez painéis. Não há novo exercício obrigatório.

## Exemplos para importar

Os exercícios mantêm a criação manual. `exemplos-importaveis/` reúne dashboards do aluno, seis cópias portáteis do professor e dois modelos técnicos de alerting para o instrutor. O arquivo adicional de dados públicos recebido na pasta do aluno também foi preservado. Consulte `exemplos-importaveis/README.html` para requisitos e instruções. Não há aplicação automática.

Dashboards importados não transportam dados históricos, fontes, anotações manuais, contatos nem regras de alerta. Os exemplos do professor exigem sua stack específica. Os seis exemplos mais recentes do professor e os arquivos adicionais da pasta V9 em E: foram preservados nesta edição.

## Arquivos de referência preservados

`Complemento_Visual_V7.pdf`, `instrutor/Demonstracoes_Reais_V7.md` e os registros V8/V9 de revisão preservam o contexto e as capturas de versões anteriores. São referências históricas opcionais, com numeração antiga de slides; não integram o cronograma atual da Noite 2. O complemento V7 não foi anexado à apostila V12. Arquivos com sufixos V7/V8/V9 mantêm essa identificação para distinguir seu registro original.

Os exercícios principais mantêm 231 passos e 41 imagens, acompanhados dos três desafios opcionais e suas capturas; a pasta possui 53 capturas disponíveis. SMTP permanece ilustrativo. Esta revisão é de conteúdo e organização didática, baseada na documentação oficial, sem novo acesso ao ambiente do professor.

Base didática: https://grafana.com/tutorials/grafana-fundamentals/ . Promtail permanece identificado como componente legado; a visão de evolução inclui Alloy.
