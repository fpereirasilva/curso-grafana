# Scripts preservados e pontos de entrada

Para o curso vigente, abra [00_COMECE_AQUI.html](../00_COMECE_AQUI.html). São **cinco noites, das 18h30 às 22h30**, com intervalo das **20h20 às 20h45**. O laboratório do aluno começa pelo lançador [`../iniciar-lab-alunos.ps1`](../iniciar-lab-alunos.ps1), que delega ao script local da pasta V9.

## Operação do professor

`deploy-azure-professor.ps1` e `sync-and-start-professor.ps1` foram preservados em seus caminhos originais. São scripts operacionais do professor, separados da inicialização local do aluno. Esta organização não os executou nem alterou. A sincronização tem operações de recriação da stack; consulte o código e o estado do ambiente antes de uma execução deliberada.

## Pipeline anterior de captura e produção

- `setup-e-capturar.ps1` e `setup-e-capturar.sh`: pipelines anteriores, ligados a `lab/dia2`, `assets` e aos geradores em `docs`.
- `capture_grafana_screenshots.py`: captura para `assets/screenshots` na estrutura anterior.
- `apply_brand.py`: personalização da versão anterior, com ativos em `assets/logo` e `assets/palette.json`.

Os caminhos foram mantidos para preservar dependências. Esses scripts não constituem o processo de geração da apostila V8 e não devem ser usados para substituir automaticamente os materiais atuais. O gerador `generate_pptx_with_screenshots.js` fica em `../docs/`.

O guia visual, os exercícios e os [exemplos opcionais para importar](../Curso_Grafana_Green_V9/exemplos-importaveis/README.html) ficam na pasta V9, preservando o conteúdo validado da V8. Consulte o README do exemplo para diferenciar importação de dashboard, provisionamento e consulta manual.
