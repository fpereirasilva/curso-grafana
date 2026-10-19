# Laboratórios: versão vigente e ambientes preservados

O curso atual tem **cinco noites, das 18h30 às 22h30, com intervalo das 20h20 às 20h45**. O [índice principal](../00_COMECE_AQUI.html) concentra os arquivos para a turma.

## Laboratório local do aluno

Use [`../Curso_Grafana_Green_V8/lab/tutorial-environment/`](../Curso_Grafana_Green_V8/lab/tutorial-environment/README.md). Ele acompanha o Grafana Fundamentals e os exercícios com prints da V8. Inicie pelo lançador `../iniciar-lab-alunos.ps1` no Windows, ou pelo script `../Curso_Grafana_Green_V8/iniciar-lab.sh` no Ubuntu com Docker/Compose.

Grafana local: <http://localhost:3300>. Aplicação: <http://localhost:38081>. Receptor didático de Webhook: <http://localhost:38090>.

## Ambientes mantidos no lugar

- `professor/`: ambiente de demonstração do professor. Configurações e caminhos preservados; esta organização não iniciou nem sincronizou a stack.
- `dia1/` a `dia4/`: estrutura anterior, preservada por dependências dos pipelines e por histórico. O nome dessas pastas não corresponde à divisão atual em cinco noites.
- `homelab-suse-redundancy/`: material operacional existente, preservado e separado do laboratório do aluno.
- `dashboards-prontos-importacao/`: exemplos anteriores associados à stack do professor. Consulte o README local antes de usar.

## Exemplos atuais

Há [exemplos opcionais separados dos exercícios manuais](../Curso_Grafana_Green_V8/exemplos-importaveis/README.html). Confira em qual ambiente cada exemplo funciona, quais fontes exige e como deve ser carregado. A existência de um JSON não garante que todas as suas métricas estejam disponíveis em outra stack.

Os exemplos de instalação nativa Ubuntu ficam no roteiro da V8. A validação em VM Azure permanece uma etapa separada.
