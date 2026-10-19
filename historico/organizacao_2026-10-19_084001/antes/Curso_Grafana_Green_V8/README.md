# Curso Grafana Green — Pacote V8

Fábio Silva • 5 noites • 18h30–22h30 • intervalo 20h20–20h45.

Comece por alunos/Guia_Visual_Exercicios_V8.html: os 15 exercícios foram detalhados com cliques, campos, consultas, resultados esperados, diagnóstico e capturas reais do laboratório local. Clique nas imagens para ampliar. Cada noite tem seu PDF e Markdown em alunos/.

Guia_Visual_Exercicios_V8.pdf reúne o passo a passo. Apostila_do_Aluno_V8.pdf reúne os fundamentos revisados, o novo guia e as demonstrações do professor, com marcador para a segunda parte. Os 178 slides V7 e as quatro arquiteturas editáveis foram preservados nesta entrega focada nos exercícios; a revisão dos parâmetros de alerta está no complemento do instrutor.

Na Noite 4, o aluno pode criar manualmente OU importar alunos/importar/01-dashboard-base.json e personalizar. O modelo 02-dashboard-completo.json serve para comparação posterior. Ambos foram importados e validados no navegador. O JSON não transporta dados históricos, anotações manuais, fontes, contatos ou regras de alerta.

Use o pacote completo extraído. Inicie na raiz com iniciar-lab.ps1 no Windows ou bash ./iniciar-lab.sh no Ubuntu com Docker/Compose. Grafana: http://localhost:3300 ; aplicação: http://localhost:38081 ; receptor local: http://localhost:38090. O Docker precisa estar ativo. Instalação nativa e testes Azure seguem reservados à etapa posterior.

As capturas V8 são do Grafana 12.0.1 do aluno. A demonstração da VM do professor usa Grafana 11.3 e permanece separada. O alerta do aluno foi avaliado e uma notificação chegou ao receptor Docker local; a regra de captura foi pausada depois. Nenhum e-mail foi enviado. Promtail permanece como componente legado do tutorial.
