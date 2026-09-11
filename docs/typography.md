# Tipografia

## Wordmark

A assinatura é lettering proprietário, não uma fonte disponível para digitação. O `i` foi construído sem ponto nativo; o círculo coral é o único ponto do sistema.

## Interface

A família de produto é **Manrope**, com fallback de sistema:

```css
font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

| Papel | Tamanho / entrelinha | Peso sugerido |
| --- | --- | ---: |
| Display | 48 / 56 px | 600–700 |
| H1 | 40 / 48 px | 600–700 |
| H2 | 32 / 40 px | 600 |
| Corpo | 16 / 24 px | 400–500 |
| Label | 14 / 20 px | 500–600 |
| Caption | 12 / 16 px | 400–500 |

Não imite no produto os gestos proprietários do wordmark. A tipografia de interface deve apoiar clareza e leitura, sem competir com a assinatura.

## Instalação

Manrope é uma família variável open source disponível no [Google Fonts](https://fonts.google.com/specimen/Manrope). O repositório não redistribui os binários: cada produto deve obtê-los de sua dependência oficial e manter a licença junto do pacote.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Para aplicações que exigem self-hosting, baixe os arquivos oficiais, mantenha os nomes de família e inclua a licença SIL Open Font License distribuída com a fonte. A referência oficial da licença está no [catálogo google/fonts](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt).

## Pesos e carregamento

- Carregue somente 400, 500, 600 e 700.
- Use `font-display: swap` para não bloquear a primeira renderização.
- Prefira WOFF2 em interfaces web e faça subset apenas com processo que preserve os termos da licença.
- Não use Manrope para reconstruir ou editar o wordmark proprietário.

## Acessibilidade

- Corpo mínimo recomendado: 16 px / 24 px.
- Evite peso 400 sobre fotografia sem camada de contraste.
- Não use apenas peso ou cor para transmitir estado.
- Valide zoom a 200%, reflow e contraste antes da entrega.
