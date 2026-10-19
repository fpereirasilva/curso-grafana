# Curso Grafana Green — V9

Fábio Silva, Arquiteto de Soluções • Green Tecnologia  
LinkedIn: https://www.linkedin.com/in/silvapfabio  
5 noites de 18h30 a 22h30, com intervalo de 20h20 a 20h45.

## Revisão visual da apresentação

A apresentação e a prévia V9 usam o template oficial Green v5 recebido para este curso, com fonte Segoe UI. A revisão preserva os 178 slides, o conteúdo, as notas do professor e as duas mídias online. Apostila, guias, exercícios, capturas, exemplos para importar, arquitetura e laboratório permanecem no conteúdo validado da V8; por isso seus arquivos mantêm o sufixo V8.

## Apresentação e material de leitura

- `Curso_Grafana_Green_5_Noites_V9.pptx`: 178 slides com notas do professor, teoria de cada noite, demonstrações e exercícios comentados. Vídeos online incorporados exigem internet e compatibilidade do PowerPoint.
- `Previa_Curso_Grafana_Green_V9.html`: prévia dos slides, notas expansíveis e vídeos online.
- `Apostila_do_Aluno_V8.pdf`: 109 páginas de fundamentos, roteiro ilustrado e demonstrações complementares do professor.
- `Guia_Visual_Exercicios_V8.pdf`: 56 páginas, 15 exercícios obrigatórios em cinco noites.
- `alunos/Guia_Visual_Exercicios_V8.html`: guia navegável; clique nas capturas para ampliar. Cada noite também tem PDF e Markdown em `alunos/`.
- `arquitetura/Arquitetura_Grafana_Green.drawio`: quatro páginas editáveis da arquitetura.

## Organização de cada noite

| Bloco | Horário | Minutos |
|---|---|---|
| Teoria | 18h30–19h55 | 85 |
| Demonstração | 19h55–20h20 | 25 |
| Intervalo | 20h20–20h45 | 25 |
| Exercícios comentados | 20h45–21h00 | 15 |
| Prática do aluno | 21h00–22h15 | 75 |
| Correção | 22h15–22h30 | 15 |

São 20 horas de programação, incluindo os cinco intervalos; tempo de atividade: 17h55. A teoria e a demonstração acontecem antes do intervalo, seguidas da execução individual.

## Laboratório do aluno

Extraia todo o pacote e deixe o Docker ativo. No Windows, execute `iniciar-lab.ps1`; no Ubuntu com Docker/Compose, `bash ./iniciar-lab.sh`.

- Navegador: Grafana http://localhost:3300, aplicação http://localhost:38081, receptor Webhook http://localhost:38090.
- Configurações dentro do Grafana: Prometheus `http://prometheus:9090`, Loki `http://loki:3100`, contato `http://webhook:8080/`.
- Grafana News usa acesso anônimo no laboratório. As capturas são do Grafana 12.0.1. A stack complementar do professor usa outro ambiente.
- Instalação nativa Ubuntu está descrita em `Roteiro_Ubuntu.md`. Scripts e testes dessa instalação na Azure serão feitos na etapa posterior combinada.

## Exemplos para importar

Os exercícios mantêm a criação manual. A pasta `exemplos-importaveis/` contém nove dashboards do aluno, seis cópias portáteis do professor e dois modelos técnicos de alerting para o instrutor, sem aplicação automática. Consulte o catálogo `exemplos-importaveis/README.html` para requisitos e instruções.

Os dois modelos iniciais do aluno já foram importados na interface. Os sete novos e as seis conversões foram validados estruturalmente. Dashboards não transportam dados históricos, fontes, eventos manuais, contatos ou regras de alerta. Os exemplos do professor requerem sua stack específica.

## Validação

Guia com 231 passos, 50 capturas disponíveis e 41 imagens inseridas nas atividades. As cinco práticas somam 75 minutos cada. Um alerta local foi avaliado e recebido no Webhook; a regra foi pausada após a captura. SMTP é apresentado apenas como configuração ilustrativa. Os detalhes e os limites de validação estão em `instrutor/Revisao_Exercicios_V8.md` e `instrutor/Validacao_Exercicios_V8.json`.

Base didática: https://grafana.com/tutorials/grafana-fundamentals/ . Promtail permanece identificado como componente legado; a visão de evolução inclui Alloy.
