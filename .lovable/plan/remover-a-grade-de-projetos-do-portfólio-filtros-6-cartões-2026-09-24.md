# Remover a grade de projetos do Portfólio (filtros + 6 cartões)

A imagem anexada mostra os filtros ("Todos os Projetos / Vídeos / Fotografia") e os 6 cartões de projetos. O usuário confirmou: remover **tudo o que está na imagem**. O Portfólio passa a conter apenas o cabeçalho da seção, o botão "Ver mais no Instagram" e a galeria de vídeos verticais (Shorts).

## O que permanece em #portfolio
1. `.section-head` — selo PORTFÓLIO, título e descrição (fora da imagem; permanece).
2. `.portfolio-bottom-action` — botão "Ver mais no Instagram" (fora da imagem; permanece).
3. `.shorts-block` — galeria de vídeos em destaque (permanece).

## Alterações

### 1. `src/routes/index.tsx` — remover JSX
- Bloco `.portfolio-filters` (linhas ~733–737): os 3 botões de filtro.
- Bloco `.portfolio-grid#portfolioGrid` (linhas ~739–877): os 6 `<article class="portfolio-card">`.

### 2. `src/routes/index.tsx` — remover a janela de detalhe órfã
O modal "Prévia do Projeto" (`.lightbox-modal#lightboxModal`, linhas ~1238–1260) só era aberto pelos cartões removidos; sem eles ele nunca abre. Remover o bloco inteiro junto com os cartões.

### 3. `src/routes/index.tsx` — remover o JS morto no `useEffect`
- Loop `tabBtns` (linhas ~170–189): filtro por categoria — só existia para os cartões.
- Loop `portfolioCards` + ouvintes do lightbox (`lightboxModal`, `lightboxClose`, `modalTag`, `modalTitle`, `modalDesc`, `onModalClick`, `onKeyDown`) (linhas ~191–225): abrir/fechar a prévia do projeto.
- Manter intactos todos os demais blocos do `useEffect` (stats, chips, formulário, menu, etc.).

### 4. `src/styles/setima.css` — remover CSS órfão
Classes usadas exclusivamente pelos elementos removidos (desktop e respectivas regras de media mobile):
- `.portfolio-filters`, `.tab-btn` (+ `:hover`, `.active`)
- `.portfolio-grid`, `.portfolio-card` (+ `:hover`), `.frame-bg`, `.frame-bg-1..6`, `.frame-letterbox` (+ `.top/.bottom`), `.frame-meta-tag`, `.frame-play-badge` (+ variantes de hover)
- `.project-client`, `.project-title`, `.project-meta-row`, `.project-cta-link`
- `.lightbox-modal` (+ `.active`), `.lightbox-card`, `.lightbox-close-btn`, `.lightbox-preview-area`, `.lightbox-body`, `.lightbox-actions`
- Referências a essas classes dentro dos blocos `@media` (ex.: linhas ~1756, 1767, 1778–1810, 1838–1854, 2008).

Não tocar em: `.section-head`, `.portfolio-bottom-action`, `.btn-cinema-secondary`, `.shorts-*`, nem em regras de seções não relacionadas.

## Validação
- Build OK, sem `!important`, zero rolagem horizontal.
- Playwright em 320, 375, 768 e 1280 px: seção Portfólio exibindo cabeçalho → botão do Instagram → galeria de Shorts; nenhum vestígio dos filtros/cartões/modal; console sem erros.
- Desktop preservado fora da área removida.
