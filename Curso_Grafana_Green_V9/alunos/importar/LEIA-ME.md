# Arquivos prontos para importar

- 01-dashboard-base.json: painel Tráfego por rota. Exige mapear Prometheus. Disponível como apoio opcional; o exercício mantém a criação manual.
- 02-dashboard-completo.json: mesmo painel e consulta de anotações de erros no Loki. Exige mapear Prometheus e Loki. Use para comparar depois de tentar.

Os dois foram importados pela interface do Grafana 12.0.1 e exibiram dados no laboratório local. Os arquivos derivam do dashboard criado manualmente e exportado com a opção de uso em outra instância. ID/UID vazios deixam o Grafana criar cópias independentes.

Não incluem fontes de dados, logs, métricas históricas, eventos manuais, contatos nem regras de alerta. O arquivo do professor baseado em node_exporter é de outro ambiente; não o use como substituto destes modelos Grafana News.
