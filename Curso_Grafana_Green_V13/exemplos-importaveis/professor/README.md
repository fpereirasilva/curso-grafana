# Dashboards anteriores para a stack do professor

Esta pasta foi preservada como parte do laboratório anterior. O curso vigente tem **cinco noites, das 18h30 às 22h30, com intervalo das 20h20 às 20h45**. Comece pelo [índice principal](../../00_COMECE_AQUI.html).

Os [exemplos atuais, opcionais e separados dos exercícios](../../Curso_Grafana_Green_V9/exemplos-importaveis/README.html) estão na pasta V9, com indicação do ambiente e do formato de uso. Siga o passo a passo manual dos exercícios para a prática principal.

## Arquivos existentes nesta pasta

| Arquivo | Finalidade original |
|---|---|
| `01-visao-geral-host.json` | Métricas de host |
| `02-host-dinamico.json` | Host com variáveis e seletores |
| `03-containers.json` | Métricas de containers |
| `04-central-logs-loki.json` | Pesquisa e visualização de logs |
| `05-ecommerce-apm-traces.json` | Telemetria da aplicação de demonstração |
| `06-dados-publicos-ibge-ssl-terremotos.json` | Dados públicos e verificações adicionais, dependentes dos serviços e plugins previstos no modelo |

Estes arquivos dependem das métricas, fontes, rótulos e eventuais plugins do ambiente em que foram criados. O laboratório Grafana News do aluno tem um conjunto diferente de dados. Não se deve esperar que todos os painéis funcionem apenas ao importar o JSON em qualquer Grafana.

## Importação opcional

No Grafana do ambiente compatível, abra **Dashboards → New → Import**, envie o JSON e confira o mapeamento das fontes antes de concluir. Se não houver solicitação de mapeamento, verifique as referências de fonte no modelo. Escolha outro nome ou UID quando desejar preservar um dashboard já existente.

A importação do dashboard não inclui histórico de dados, fontes, contatos, regras de alerta nem anotações manuais. Os novos exemplos da V8 têm suas próprias instruções; consulte o README deles. Esta organização de diretório não certifica novos testes em interface para os arquivos listados acima.
