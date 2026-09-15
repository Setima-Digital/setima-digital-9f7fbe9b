# Ajustar imagens e mídia no mobile

## Objetivo
Concluir o item 3 sem alterar o layout aprovado no desktop nem substituir os elementos visuais existentes.

## Situação atual confirmada
- A página contém duas ocorrências da mesma imagem: o símbolo da marca no topo e no rodapé.
- Não existem vídeos nem iframes atualmente.
- Os cartões do portfólio usam áreas visuais em CSS, não arquivos de imagem; no mobile elas já possuem proporção `16 / 10`.
- A prévia ampliada já usa proporção `16 / 9` no mobile.
- O gráfico decorativo principal é SVG e já está dentro de um bloco quadrado com dimensões responsivas.

## Alterações
- Ajustar o símbolo da marca para altura fixa e largura automática, com limite de largura e proporção preservada.
- Adicionar dimensões intrínsecas à imagem do símbolo para reservar espaço antes do carregamento e evitar deslocamento visual.
- Garantir que imagens futuras dentro da página respeitem largura disponível, altura automática e limite máximo, sem afetar o tratamento específico do logo.
- Manter proporções explícitas nos blocos visuais do portfólio e da prévia ampliada no mobile.
- Adicionar uma regra responsiva preparada para vídeos e iframes (`16 / 9`, largura total e altura automática), sem inserir mídia inexistente.
- Validar em 320, 375 e 393 px que logo, SVGs e cartões não ultrapassam a tela nem causam rolagem horizontal.

## Arquivos previstos
- `src/routes/index.tsx`
- `src/styles/setima.css`
