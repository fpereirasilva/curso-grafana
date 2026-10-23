# Laboratório da turma Green — Grafana News

Este diretório é uma adaptação do tutorial oficial https://github.com/grafana/tutorial-environment. As portas foram alteradas para permitir coexistência com outras instalações.

Execute o iniciador na raiz do pacote: iniciar-lab.ps1 no Windows ou bash ./iniciar-lab.sh no Ubuntu com Docker/Compose. Ele usa o nome de projeto green-fundamentals. Não execute dentro do ZIP.

No navegador: Grafana http://localhost:3300 ; aplicação http://localhost:38081 ; receptor http://localhost:38090. O lab usa acesso anônimo. Os nomes internos são prometheus:9090, loki:3100 e webhook:8080, utilizados nas configurações dentro do Grafana.

O roteiro completo está em alunos/Guia_Visual_Exercicios_V10.html e nos PDFs por noite, na raiz do pacote extraído. Exportar o dashboard preserva sua definição; logs, métricas históricas, contatos, regras e eventos manuais exigem preservação separada.

Para parar sem remover containers, na pasta deste arquivo use docker compose -p green-fundamentals stop. Se o plugin Compose não estiver no PATH do Windows, siga a alternativa Docker Desktop no guia. Para retomar, execute o iniciador da raiz novamente. Não use down -v para encerrar uma aula.
