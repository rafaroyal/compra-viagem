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

Nunca use o **logo R18** em loop infinito ou como carregamento contínuo. Para espera indeterminada, use o loader de rota em `assets/motion/loading/`, que não redesenha a assinatura. Nenhuma informação pode depender do movimento; em `prefers-reduced-motion`, apresente estado estático e texto de status.

## Implementações web

- `assets/motion/splash.html`: splash institucional com R18, uma execução e fallback estático.
- `assets/motion/loading/compra-viagem-loading.svg`: espera indeterminada, compacta e em loop.
- `assets/motion/loading/demo.html`: exemplo acessível com mensagem em `aria-live`.
