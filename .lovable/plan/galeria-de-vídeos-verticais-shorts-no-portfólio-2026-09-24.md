# Galeria de vídeos verticais (Shorts) no Portfólio

Adicionar uma galeria de 5 vídeos do YouTube em formato vertical dentro da seção de Portfólio, com cards 9:16 e modal de player. Desktop aprovado permanece intocado; sem `!important`; sem rolagem horizontal.

## Alterações

1. **Dados dos vídeos** (`src/routes/index.tsx`)
   - Array `shortsVideos` com os 5 IDs: `lVCSBA4-la0`, `Z1RholsVwtM`, `-pddYQF_p8Q`, `W1UU9qCmjKQ`, `c6JCaeYgibQ`.
   - Thumbnail: `https://img.youtube.com/vi/ID/hqdefault.jpg` (lazy-load, `decoding="async"`).

2. **Grid de cards** (dentro de `#portfolio`, após os projetos existentes)
   - Subtítulo discreto (ex.: "Vídeos em destaque") mantendo o tom visual da página.
   - Grid responsivo: 3 colunas no desktop, 2 no tablet, 1–2 no celular (2 em ≥400px, 1 em telas muito estreitas).
   - Card: thumbnail em proporção 9:16 com `object-fit: cover`, ícone de play centralizado sobre a imagem (círculo com gradiente da marca), hover com leve destaque.
   - Card é um `<button>` acessível com `aria-label` "Assistir vídeo".

3. **Modal de player** (Shadcn Dialog, já existente em `src/components/ui/dialog.tsx`)
   - Abre ao clicar no card; fecha com botão X e ao clicar fora (comportamento padrão do Dialog).
   - Iframe `https://www.youtube.com/embed/ID?autoplay=1` com `allow="autoplay; encrypted-media; picture-in-picture"` e `allowFullScreen`.
   - Vídeo em proporção 9:16: largura máxima disponível, altura limitada a ~80vh para caber na tela.
   - Estado `activeVideo` no componente; ao fechar, o iframe é desmontado (para o áudio).
   - Estilo do modal alinhado à página: fundo escuro `#12121E`, bordas arredondadas, sem rolagem horizontal.

4. **Estilos** (`src/styles/setima.css`)
   - Novas classes: `.shorts-grid`, `.short-card`, `.short-card img`, `.short-play`, `.shorts-dialog`.
   - Regras mobile-first; desktop preservado.

5. **Validação**
   - Playwright em 320, 375, 390, 414, 768 e 1280 px: grid correto, zero rolagem horizontal, modal abre/fecha (X e clique fora), iframe carrega, proporção vertical mantida.
   - Build OK, sem `!important`, desktop inalterado.

## Arquivos previstos
- `src/routes/index.tsx` — array de vídeos, grid de cards, Dialog com iframe.
- `src/styles/setima.css` — estilos do grid, cards e modal.
