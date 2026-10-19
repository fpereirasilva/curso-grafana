# Curso Grafana — Green Tecnologia

**Versão vigente: V8 · Fábio Silva, Arquiteto de Soluções · 5 noites · 20 horas de programação.**

Abra [00_COMECE_AQUI.html](00_COMECE_AQUI.html) no navegador. Ele reúne os materiais atuais e os arquivos opcionais para importação.

O curso acontece das **18h30 às 22h30**, com intervalo das **20h20 às 20h45** em cada noite. As 20 horas incluem os cinco intervalos; são 17h55 de atividades e 2h05 de intervalos.

| Horário | Atividade |
|---|---|
| 18h30–19h55 | Teoria — 85 minutos |
| 19h55–20h20 | Demonstração do professor — 25 minutos |
| 20h20–20h45 | Intervalo — 25 minutos |
| 20h45–21h00 | Exercícios comentados pelo professor — 15 minutos |
| 21h00–22h15 | Prática do aluno — 75 minutos |
| 22h15–22h30 | Correção e fechamento — 15 minutos |

## Material atual

Tudo que o aluno e o professor precisam para a versão vigente está em [`Curso_Grafana_Green_V8/`](Curso_Grafana_Green_V8/README.md):

- [Apresentação PowerPoint](Curso_Grafana_Green_V8/Curso_Grafana_Green_5_Noites_V8.pptx) e [prévia com notas](Curso_Grafana_Green_V8/Previa_Curso_Grafana_Green_V8.html).
- [Apostila do aluno](Curso_Grafana_Green_V8/Apostila_do_Aluno_V8.pdf).
- [Guia visual no navegador](Curso_Grafana_Green_V8/alunos/Guia_Visual_Exercicios_V8.html) e [guia visual em PDF](Curso_Grafana_Green_V8/Guia_Visual_Exercicios_V8.pdf).
- PDFs e fontes dos exercícios das cinco noites em `Curso_Grafana_Green_V8/alunos/`.
- [Exemplos opcionais para importar](Curso_Grafana_Green_V8/exemplos-importaveis/README.html). O exercício manual continua sendo a atividade principal; os exemplos servem como apoio e comparação.
- [Arquitetura editável no draw.io](Curso_Grafana_Green_V8/arquitetura/Arquitetura_Grafana_Green.drawio).
- Notas, roteiro e registros de validação em `Curso_Grafana_Green_V8/instrutor/`.

## Iniciar o laboratório do aluno

Com o Docker Desktop ou Docker Engine e Compose ativos, abra o PowerShell nesta pasta e execute:

```powershell
.\iniciar-lab-alunos.ps1
```

Esse lançador chama o script existente dentro da pasta V8. No Ubuntu com Docker/Compose, use `bash ./Curso_Grafana_Green_V8/iniciar-lab.sh`.

Depois de concluir a inicialização, abra o Grafana em <http://localhost:3300>, a aplicação de notícias em <http://localhost:38081> e o receptor didático de Webhook em <http://localhost:38090>. Os primeiros downloads dependem da conexão e podem levar alguns minutos.

## Pastas preservadas

- `lab/professor/`: configurações do ambiente de demonstração, preservadas.
- `lab/dia1/` a `lab/dia4/`: laboratórios da estrutura anterior, mantidos por compatibilidade; não representam a divisão atual em cinco noites.
- `docs/`, `assets/` e os pipelines antigos de `scripts/`: produção e capturas de versões anteriores. Seus caminhos foram mantidos porque existem dependências entre eles. Não geram automaticamente a apostila V8.
- `historico/`: materiais antigos e verificações visuais arquivados, conforme o inventário da organização.

Os scripts operacionais do professor e o estado do Git foram preservados. Esta organização de arquivos não inicia nem sincroniza ambientes remotos.

## Referência do curso

Base didática: [Grafana Fundamentals, Grafana Labs](https://grafana.com/tutorials/grafana-fundamentals/). Instrutor: [Fábio Silva](https://www.linkedin.com/in/silvapfabio).

Os exemplos de instalação nativa estão em `Curso_Grafana_Green_V8/Roteiro_Ubuntu.md`; a validação de instaladores em VM Azure continua em uma etapa separada. Consulte o README do exemplo antes de importar: dashboards, consultas e regras usam formatos e pré-requisitos diferentes.
