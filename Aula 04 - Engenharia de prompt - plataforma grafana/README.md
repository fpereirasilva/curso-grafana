# Laboratório de observabilidade no Azure com IA

Instalação, configuração e uso de **Grafana OSS, Prometheus, Loki, Grafana Alloy e Alertmanager** em sala de aula, com execução assistida pelo **Claude Code**.

## Início rápido para o professor

1. Coloque este `README.md` e o arquivo `PROMPT_Grafana_Azure_Claude_Code_Compacto.json` na mesma pasta dedicada ao laboratório.
2. Abra essa pasta no Claude Code.
3. Envie a instrução:

```text
Leia integralmente o README.md e siga a ordem de leitura indicada.
Use PROMPT_Grafana_Azure_Claude_Code_Compacto.json como especificação
principal. Inspecione o ambiente e a sessão Azure antes de qualquer
alteração. Prepare o projeto completo e avance pelas fases autorizadas,
preservando os projetos e recursos existentes fora do laboratório.
```

O README orienta a inicialização. O JSON define os requisitos completos. A simples presença deste README na pasta não garante sua leitura automática: use a instrução acima na primeira sessão.

## Instruções para o Claude Code

### 1. Ordem de leitura obrigatória

Antes de criar arquivos, instalar dependências ou alterar recursos:

1. Leia este `README.md` integralmente.
2. Identifique e respeite instruções existentes aplicáveis, incluindo `CLAUDE.md`, `AGENTS.md` e regras do repositório. Não sobrescreva arquivos do usuário.
3. Leia e valide integralmente `PROMPT_Grafana_Azure_Claude_Code_Compacto.json`. Ele é a especificação principal do laboratório.
4. Se o projeto já tiver sido iniciado, leia `STATUS.md`, `harness/state.json`, o checkpoint mais recente e `memory/INDEX.md`, quando existirem.
5. Carregue os documentos de contexto e as skills necessários à fase atual. Revalide no ambiente os fatos que possam ter mudado.

Se o JSON estiver ausente ou inválido, registre o bloqueio. Não improvise uma especificação diferente e não provisione recursos antes de resolver o problema. Continue apenas inspeções e preparações independentes que não dependam do conteúdo ausente.

As instruções explícitas do professor prevalecem sobre estes arquivos dentro dos limites das permissões efetivas. Se houver conflito entre instruções existentes e a especificação, identifique-o antes da ação afetada. Este README não concede autorização para modificar outros projetos.

### 2. Inspeção inicial

- Identifique pasta de trabalho, sistema operacional, shell e situação do Git. Preserve alterações existentes.
- Verifique ferramentas e versões: Claude Code, Azure CLI, SSH, Git e dependências necessárias.
- Consulte a sessão Azure autenticada, assinatura, tenant, permissões, região, quotas e recursos relacionados ao laboratório.
- Reutilize a autenticação disponível. Não solicite senhas, tokens ou chaves privadas pelo chat.
- Resolva ambiguidades de assinatura antes de criar recursos. Não presuma que a assinatura padrão seja a correta.
- Registre o que foi efetivamente verificado, suas fontes e os bloqueios encontrados.

### 3. Arquitetura e organização

Implemente a arquitetura especificada no JSON:

- **Infraestrutura:** resource group exclusivo, VM Linux Azure, rede restrita e Docker Compose.
- **Observabilidade:** aplicação didática e Node Exporter → Prometheus; logs da aplicação → Alloy → Loki; Grafana consulta Prometheus e Loki; Prometheus → Alertmanager → receptor HTTP interno.
- **Harness:** runtime do Claude Code como coordenador, com políticas, estado, checkpoints, scripts e evidências do projeto.
- **Agentes:** arquitetura, infraestrutura Azure, observabilidade, validação, diagnóstico e instrução da turma.
- **Skills:** procedimentos reutilizáveis em `.claude/skills/`, com entradas, passos, ferramentas e critérios de sucesso.
- **Contexto e memória:** inventário e requisitos atuais, decisões verificadas, incidentes e aprendizados com fonte e data.

Não crie um segundo orquestrador de LLM apenas para demonstrar o termo harness. Não instale um modelo de IA na VM. A stack deve continuar funcionando sem uma sessão de IA ativa.

Crie `CLAUDE.md` com instruções concisas para as próximas sessões, apontando explicitamente para este README, o JSON, as regras comuns e os arquivos de retomada. Use o formato nativo suportado pela versão instalada para agentes e skills. Não presuma carregamento automático de todas as pastas.

### 4. Sequência de trabalho

| Fase | Resultado esperado |
|---|---|
| 1. Descoberta | Ambiente, sessão Azure e inventário verificados; sem provisionamento |
| 2. Estrutura | Projeto, agentes, skills, contexto, memória e desenho |
| 3. Preparação | Bicep, scripts, Compose, aplicação e configurações validados no que for possível |
| 4. Plano Azure | Recursos, estimativa de custo e autorização necessária resolvidos |
| 5. Implantação | Infraestrutura e serviços instalados |
| 6. Configuração | Dados de demonstração, fontes, dashboards e alertas |
| 7. Validação | Fluxo completo comprovado, falhas corrigidas e ambiente saudável |
| 8. Entrega | Guias, exercícios, gabarito, evidências e procedimentos operacionais |

Ao terminar cada fase, atualize `STATUS.md`, `harness/state.json` e o checkpoint correspondente. Distinga **planejado, implementado, executado, validado e bloqueado**. Não marque um serviço como validado apenas porque o container iniciou.

### 5. Custos, segurança e autorização

- Prepare o projeto e o plano antes de solicitar aprovação para recursos cobrados.
- Apresente os recursos concretos e a estimativa com fonte, data, moeda, região e premissas. Se faltar limite de custo ou autorização para essa proposta, solicite uma confirmação consolidada.
- Respeite autorizações já concedidas; não peça confirmação repetidamente para o mesmo escopo.
- Não altere recursos fora do laboratório nem aumente capacidade silenciosamente.
- Mantenha os serviços internos protegidos. O acesso inicial ao Grafana é por túnel SSH, conforme a especificação.
- Não grave segredos em Git, documentação, memória, cloud-init ou evidências.
- Gere procedimentos de parada, desalocação e limpeza. Explique custos que permanecem após parar a VM.
- Execute a exclusão definitiva apenas quando o professor pedir explicitamente e após conferir o inventário do resource group.

### 6. Validação e entrega para a aula

Use os critérios completos do JSON. Comprove, no mínimo:

- Acesso autenticado ao Grafana e conexão às duas fontes de dados.
- Targets esperados UP e métricas atuais no Prometheus.
- Log conhecido recuperado no Loki e consultas LogQL funcionais.
- Dashboards com dados reais do gerador didático.
- Falha controlada produzindo alerta, entrega ao receptor e recuperação/resolved.
- Persistência após reinício e reversão dos cenários de falha.
- Rede restrita, custos documentados e roteiro reproduzível.

Registre PASS, FAIL ou BLOCKED com evidências sanitizadas. Não invente resultados, preços, versões ou verificações. Entregue guias separados para professor e aluno, exercícios, gabarito, troubleshooting e limpeza.

### 7. Retomada e economia de contexto

- Após a leitura inicial completa, carregue apenas o contexto necessário à tarefa atual.
- Mantenha o índice de memória curto e a evidência detalhada em arquivos próprios.
- Ao retomar, confira checkpoint e situação real antes de repetir etapas.
- Evite reproduzir documentos inteiros e logs extensos nas respostas.
- Delegue apenas tarefas independentes; coordene sequencialmente provisionamento, edição do Compose e estado compartilhado.
- Se subagentes não estiverem disponíveis, execute os papéis sequencialmente e informe a limitação.
- Diante de bloqueio, registre o motivo exato e conclua as entregas independentes possíveis.

## Arquivos de entrada e materiais complementares

| Arquivo | Uso |
|---|---|
| `README.md` | Inicialização e ordem de leitura |
| `PROMPT_Grafana_Azure_Claude_Code_Compacto.json` | Especificação principal e completa |
| `PROMPT_MESTRE_Laboratorio_Grafana_Azure_Claude_Code.md` | Versão narrativa de consulta, se estiver disponível; não é necessário relê-la a cada fase |
| `Arquitetura_IA_Observabilidade.drawio` | Referência visual opcional; o projeto deve gerar o desenho atualizado da implantação real |

Os materiais complementares são opcionais para começar. Este README não comprova implantação ou validação: o estado real será documentado durante a execução.
