# Exports de produção

Os arquivos prontos para handoff ficam em `exports/`. SVG continua sendo o formato preferencial para interfaces; PNG deve ser usado somente quando o canal não aceitar vetor.

## Assinatura completa

| Variante | Larguras PNG | Uso |
| --- | --- | --- |
| primary | 320, 640, 1280 e 2560 px | fundos claros |
| negative | 320, 640, 1280 e 2560 px | fundos escuros |

## Ícone compacto

PNG transparente em 128, 256, 512 e 1024 px. Favicons menores continuam em `assets/logo/favicon/`.

## Regras de implementação

- Não redimensionar o raster acima do tamanho exportado.
- Não aplicar sombra, contorno, gradiente ou recoloração.
- Respeitar a troca responsiva: assinatura completa a partir de 128 px; ícone compacto abaixo desse limite.
- Para motion, usar os SVGs oficiais ou os exemplos de splash/loading e respeitar `prefers-reduced-motion`.

O ZIP oficial inclui documentação, logos, motion, fotografia e exports, mas exclui arquivos de desenvolvimento e histórico Git.
