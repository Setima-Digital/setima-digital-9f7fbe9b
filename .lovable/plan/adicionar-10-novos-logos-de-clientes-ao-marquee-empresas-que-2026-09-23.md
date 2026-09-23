# Adicionar 10 novos logos de clientes ao marquee "Empresas que confiam na Sétima Digital"

## O que será construído

Adicionar 10 novos logos enviados no chat à seção existente `#clientes`, mantendo-os junto aos 9 logos já presentes (Japahaus, A8 Imóveis, Auto Posto Marechal, Construtora HJF, Dr. Diego, Eisen, Farma Linz, FMR Marcenaria, Germânia). O marquee infinito, a pausa no hover, o grayscale→colorido e a altura uniforme continuam funcionando com a lista ampliada.

## Os 10 novos logos

| # | Arquivo enviado | Nome de exibição (alt) | Fundo / contraste |
|---|---|---|---|
| 1 | PetFish_-_Original.png | Pet Fish | Fundo preto, logo colorido — ok sobre fundo escuro |
| 2 | JETA_IMÓVEIS.png | JETA Imóveis | Fundo preto, azul — ok |
| 3 | Kowski_-_Original.png | Kowski Plásticos | Fundo preto, amarelo — ok |
| 4 | KR_ADV.jpeg | Krueger & Rodrigues Alves — Advocacia | Fundo claro, logo preto — precisa de fundo claro arredondado |
| 5 | inifi.png | Inifi | Fundo preto, colorido — ok |
| 6 | animalgold.png | Animal Gold | Fundo preto, colorido — ok |
| 7 | baher.png | Baher | Fundo preto, branco — ok |
| 8 | biseli_textil.png | Biselli Têxtil | Fundo preto, branco — ok |
| 9 | decopizza.png | Deco Pizzas | Fundo preto, branco — ok |
| 10 | Fran_Arquitetura.png | Fran Arquitetura | Fundo preto, branco — ok |

## Passos

1. **Upload dos 10 arquivos** via `lovable-assets` (a partir de `/mnt/user-uploads/`), criando ponteiros `.asset.json` em `src/assets/` com nomes estáveis (`PET_FISH.png.asset.json`, `JETA_IMOVEIS.png.asset.json`, `KOWSKI.png.asset.json`, `KR_ADV.png.asset.json`, `INIFI.png.asset.json`, `ANIMAL_GOLD.png.asset.json`, `BAHER.png.asset.json`, `BISELI_TEXTIL.png.asset.json`, `DECOPIZZA.png.asset.json`, `FRAN_ARQUITETURA.png.asset.json`). O KR_ADV é JPEG; será salvo como `.png` pelo pipeline de assets (extensão do ponteiro acompanha o `--filename`).
2. **Importar os 10 ponteiros** em `src/routes/index.tsx` (logo do PetFish, JETA, Kowski, KR Adv, Inifi, Animal Gold, Baher, Biseli, Deco Pizzas, Fran Arquitetura).
3. **Acrescentar 10 entradas** ao array `clientLogos`, após a Germânia, mantendo o padrão `{ src, name }`.
4. **Tratamento de contraste do KR Adv**: como esse logo é preto sobre fundo claro, aplicar a ele um fundo claro arredondado já previsto no plano original para logos escuros. Implementação: adicionar classe `client-logo--light-bg` no `<li>` correspondente e regra CSS `.client-logo--light-bg img { background: rgba(255,255,255,0.92); border-radius: 8px; padding: 4px 10px; }` em `src/styles/setima.css`. Os demais 9 logos têm fundo escuro/transparente e seguem o grayscale padrão sem ajuste.
5. **Velocidade do marquee**: com 19 logos (duplicados = 38 itens), a duração atual de 38s pode ficar muito lenta/rápida. Reajustar para ~52s para manter velocidade de leitura similar; manter a pausa no hover e o `prefers-reduced-motion`.
6. **Validação via Playwright** em 320, 375, 390, 414, 768 e 1280 px: zero rolagem horizontal (`scrollWidth === innerWidth`), marquee animando, pausa no hover, 19 logos visíveis na faixa, KR Adv legível com fundo claro, grayscale→colorido preservado e desktop intacto.

## Restrições respeitadas

- Desktop atual e demais seções intocados (apenas o array `clientLogos` cresce e o CSS do marquee é ajustado/acrescentado).
- Sem `!important`.
- Sem esconder conteúdo essencial.
- Cores, fontes e identidade visual preservadas (tokens de `src/styles/setima.css`).
- Sem rolagem horizontal em nenhuma largura.

## Arquivos alterados

- `src/routes/index.tsx` — 10 imports + 10 entradas em `clientLogos` (+ classe no `<li>` do KR Adv).
- `src/styles/setima.css` — regra `.client-logo--light-bg img` e ajuste de duração da animação `clientsScroll`.
- `src/assets/` — 10 novos ponteiros `.asset.json`.
