# Implementação

## Regra responsiva

- `>= 128 px`: assinatura completa.
- `< 128 px`: ícone compacto R15.
- Navegação: motion desligado.
- Institucional e confirmação: R18 pode executar uma vez.
- App compacto: R15 pode executar uma vez.
- `prefers-reduced-motion`: substituir por estado estático.

## React

```tsx
<BrandLogo
  mode="auto"
  theme="light"
  motion="off"
  context="navigation"
  width={180}
/>
```

Consulte o pacote em [`packages/react-brand-logo/`](../packages/react-brand-logo/).

## Figma

Crie um Component Set `Brand / Logo` com as propriedades:

- `Format`: Full | Compact
- `Theme`: Light | Dark
- `Motion`: Static | Motion
- `Size`: 16 | 24 | 32 | 48 | 64 | 128 | 160 | 180 | 220

A troca automática por largura pertence à implementação; no Figma, o designer seleciona a variante correta.

## QA mínimo

- Validar 16, 24, 32, 48, 64, 128, 160, 180 e 220 px.
- Confirmar contraste em fundos reais.
- Preservar `viewBox`, proporção e área de proteção.
- Verificar fallback com redução de movimento.
- Impedir autoplay repetitivo em navegação.
- Validar paridade entre design e código.
