# Teste da V11 (Noite 2 + desafios 2.4 a 2.6)

## O que mudou em relação à V10

- `Curso_Grafana_Green_5_Noites_V11.pptx`: o PPTX V11 enviado, com 3 slides novos (90 a 92, desafios 2.4, 2.5 e 2.6) depois da "Prática autônoma". Os números de página passam a ser "N / 193". O slide 89 e suas notas citam os desafios.
- `Apostila_do_Aluno.md` e `Apostila_do_Aluno_V11.pdf`: seção "Desafios opcionais 2.4 a 2.6" ao fim da Noite 2.
- `alunos/Aluno_Noite_2.md` e `.pdf`: os mesmos desafios no fim da folha.
- `alunos/Guia_Visual_Exercicios_V11.html` e `Guia_Visual_Exercicios_V11.pdf`: três cartões novos (n2-e6, n2-e7, n2-e8) e capturas 51 a 53.
- `alunos/Aluno_Noite_2_Exercicios_Extras.md`: texto avulso dos desafios.
- Arquivos V10 substituídos foram movidos para `_anteriores_V10/`.

## Pontos para conferir antes da aula

1. As consultas `tns_` dos desafios ainda precisam ser testadas no laboratório local dos alunos. As capturas 51 a 53 vêm do ambiente do professor (Grafana 11.3.0, métrica `http_requests_total`), e cada exercício avisa isso.
2. Os PDFs desta versão foram gerados por outro caminho que o dos PDFs V10 (que usavam ReportLab). O conteúdo é o mesmo, mas o visual é simples e verde. Se quiser o visual anterior, regere a partir do seu gerador original usando os `.md` e o `.html` da V11.
3. `Previa_Curso_Grafana_Green_V10.html` foi movida para `_anteriores_V10/`: ela espelha o PPTX V10, não o V11.
4. Conferir se a Noite 2 continua cabendo no horário: os desafios são opcionais e não alteram o cronograma.

## Teste pelo PowerShell

Com o laboratório dos alunos iniciado (`iniciar-lab.ps1`) e a aplicação aberta em `http://localhost:38081` (atualize algumas vezes):

```powershell
cd "E:\01_Projetos\Curso Grafana\Curso_Grafana_Green_V11"
.\validar-desafios-noite2.ps1
```

O script confere a saúde do Grafana, localiza a fonte Prometheus e executa as consultas dos desafios 2.4 a 2.6, mostrando quantas séries cada uma retornou. Para o ambiente do Azure:

```powershell
.\validar-desafios-noite2.ps1 -BaseUrl http://20.97.218.160:3000 -Ambiente professor
```

Saída esperada: linhas `[OK]` com séries e valores. `[VAZIO]` significa que falta tráfego; `[ERRO]` indica fonte ou rota incorreta.

### Prompt sugerido para o Claude no PowerShell

```text
Leia Curso_Grafana_Green_V11\TESTE_V11.md e Curso_Grafana_Green_V11\alunos\Aluno_Noite_2.md.
Rode .\validar-desafios-noite2.ps1 contra o laboratório local. Se alguma consulta tns_ retornar
vazio ou erro, corrija o texto dos desafios 2.4 a 2.6 em alunos\Aluno_Noite_2.md,
Apostila_do_Aluno.md e alunos\Guia_Visual_Exercicios_V11.html, e me diga o que mudou.
Não altere os exercícios 2.1 a 2.3 nem a pasta V10.
```
