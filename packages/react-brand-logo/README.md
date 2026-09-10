# Compra Viagem - Componentes de Marca R20

## Decisão central

O nome completo é prioritário. O componente troca para a R15 somente quando o espaço disponível fica abaixo de 128 px.

## API React

```tsx
<BrandLogo mode="auto" theme="light" motion="off" context="navigation" width={180} />
```

### Propriedades

- `mode`: `auto`, `full` ou `compact`.
- `theme`: `light` para fundos claros ou `dark` para fundos azul-marinho.
- `motion`: `off` ou `on`.
- `context`: `navigation`, `institutional`, `confirmation` ou `app`.
- `width`: largura numérica em pixels ou valor CSS.

## Regras de comportamento

- `auto`: wordmark a partir de 128 px; R15 abaixo de 128 px.
- Navegação: sempre estática.
- Motion R18: somente em contexto institucional ou confirmação relevante.
- Motion R15: somente na abertura compacta do aplicativo.
- `prefers-reduced-motion`: substitui qualquer motion por seu estado estático.
- O compacto não substitui a assinatura completa por conveniência.

## Figma

Monte um Component Set `Brand / Logo` com propriedades `Format`, `Theme`, `Motion` e `Size`. A troca automática por largura é uma regra de implementação; no Figma, o designer seleciona a variante adequada.

## QA mínimo

- Verificar 16, 24, 32, 48, 64, 128, 160, 180 e 220 px.
- Confirmar contraste nos dois temas.
- Confirmar fallback estático com redução de movimento.
- Não permitir autoplay repetitivo em navegação.
- Preservar `viewBox`, proporção e área de proteção dos SVGs.

