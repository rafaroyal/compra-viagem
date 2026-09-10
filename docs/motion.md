# Motion

## R18 — motion completo

A narrativa aprovada é fixa e deve permanecer igual em SVG, GIF, MP4 e implementações equivalentes.

| Tempo | Evento |
| ---: | --- |
| 0–450 ms | `Compra` aparece |
| 450–650 ms | Pausa de leitura |
| 650–1.550 ms | O ponto percorre a trajetória R15 |
| 1.550–1.900 ms | `Viagem` aparece |
| 1.900–2.160 ms | Pulso de chegada |
| 2.160–4.200 ms | Assinatura limpa e estável |

## R15 — compacto

O ícone animado é permitido em abertura compacta de aplicativo. Duração-base: **800 ms**, uma execução.

## Decisão por contexto

| Contexto | Comportamento |
| --- | --- |
| Cabeçalho e navegação | Wordmark estático |
| Splash institucional | R18 completa, uma vez |
| Confirmação relevante | R18 completa, uma vez |
| App icon e avatar | R15 estática |
| Abertura compacta | R15 animada, uma vez |
| `prefers-reduced-motion` | Estado final estático |

Nunca use a animação em loop infinito ou como carregamento contínuo. Nenhuma informação pode depender do movimento.
