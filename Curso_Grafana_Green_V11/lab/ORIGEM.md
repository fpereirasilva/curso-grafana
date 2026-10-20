# Origem do laboratório

Upstream: https://github.com/grafana/tutorial-environment
Commit: 8e20919c7e72bfa3f44d7b1a97c0aeba71fba397

Adaptações do curso: portas publicadas vinculadas a 127.0.0.1 (3300, 39090, 33100, 38081, 38082), serviço webhook local (38090), e remoção do campo version obsoleto do Compose. Os serviços mantêm as versões do snapshot oficial. O ambiente usa acesso anônimo para fins didáticos.

O receptor webhook foi criado para este curso e mantém mensagens somente em memória.
