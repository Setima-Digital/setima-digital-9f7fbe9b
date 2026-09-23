# Seção "Clientes que Confiam" com marquee de logos

## O que será construído

Uma nova seção logo após o Portfólio (`#portfolio`), antes da seção de Processo, exibindo os logos dos clientes em um carrossel infinito horizontal.

## Conteúdo

- Título: "Empresas que confiam na Sétima Digital" (estilo sóbrio, alinhado aos demais títulos de seção)
- 9 logos enviados no chat:
  1. Japahaus
  2. A8 Imóveis
  3. Auto Posto Marechal
  4. Construtora HJF
  5. Dr. Diego C. Stapazoli (Advocacia)
  6. Eisen Barbearia
  7. Farma Linz
  8. FMR Marcenaria
  9. Germânia Imobiliária

## Comportamento

- Marquee infinito: logos deslizando horizontalmente em loop contínuo (lista duplicada no DOM para loop perfeito, animação CSS `translateX(-50%)`)
- Pausa da animação ao passar o mouse (`animation-play-state: paused` no hover)
- Logos em escala de cinza por padrão (`filter: grayscale(1)` + leve redução de opacidade); coloridos e opacidade total no hover, com transição suave
- Altura uniforme dos logos: ~40px no mobile, ~44–48px no desktop (`height` fixa + `width: auto`, `object-fit: contain`)
- Logos com fundo branco/claro (A8, Farma Linz, FMR) recebem fundo claro sutil ou são servidos como estão — os PNGs têm transparência, então funcionam sobre o fundo escuro; logos escuros demais (Germânia, FMR com cinza escuro) ganham leve fundo claro arredondado para legibilidade sobre o fundo #0A0A0B

## Responsividade

- O marquee usa largura baseada no conteúdo com `overflow: hidden` no wrapper — nunca estoura a viewport (sem rolagem horizontal em nenhuma largura)
- Máscara de fade nas bordas (gradiente lateral via `mask-image`) para entrada/saída suave dos logos
- Velocidade da animação ajustada por breakpoint (mais lenta no mobile para legibilidade)
- Validado em 320, 375, 390, 414, 768 e 1280 px

## Restrições respeitadas

- Desktop atual e demais seções intocados
- Sem `!important`
- Sem esconder conteúdo essencial
- Cores, fontes e identidade visual preservadas (mesma tipografia e tokens de `src/styles/setima.css`)

## Detalhes técnicos

- Upload dos 9 PNGs via `lovable-assets` (a partir de `/mnt/user-uploads/`) gerando ponteiros `.asset.json` em `src/assets/`
- Nova seção em `src/routes/index.tsx` após o fechamento de `#portfolio`: `section-wrap#clientes` com título e `.clients-marquee` contendo `.clients-track` com os logos duplicados (`aria-hidden` na segunda cópia)
- CSS novo em `src/styles/setima.css`: keyframes `clients-scroll`, `.clients-marquee` (overflow hidden, mask-image), `.clients-track` (flex, gap, animação), `.client-logo` (altura fixa, grayscale, transição, hover), regras mobile nos blocos @media existentes
- Acessibilidade: `role="list"`/`role="listitem"` ou lista semântica, `alt` com o nome de cada empresa, `prefers-reduced-motion` desativa a animação
- Validação via Playwright nas larguras 320–1280 px: scrollWidth = viewport, marquee animando, pausa no hover, logos cinza→colorido
