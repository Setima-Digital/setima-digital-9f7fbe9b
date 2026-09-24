# Reposicionar os chips de valores para o espaço entre os cards finais

Remover a lista de chips empilhados da seção "Quem Somos" e realocá-los como badges discretos no espaço escuro entre os dois cards da seção final ("Pronto para transformar sua marca?" e "Solicite uma Proposta"). Manter o marquee de clientes e o marquee do manifesto intactos, além de não alterar os dois cards principais nem o restante da página.

## Itens envolvidos

- Chips atuais (em `src/routes/index.tsx`, bloco `.brand-values-grid` ~linhas 478–487): Originalidade, Compromisso, Resultado, Interesse, Inclusiva, Aberta, Simples, Engajada (8 chips).
- Local de destino: seção `#contato`, dentro de `.cta-container`, entre `.cta-text-side` e `.contact-form-card`.

## Ajustes planejados

1. **Remover a lista empilhada do Quem Somos**
   - Excluir o bloco `<div className="brand-values-grid">…</div>` (linhas 478–487) de `src/routes/index.tsx`.
   - Manter o `.manifesto-box` (acima) e o `.about-features` (abaixo) exatamente como estão.
   - A regra CSS `.brand-values-grid`/`.brand-value-chip` fica sem uso (não é removida, para não mexer no resto).

2. **Inserir os chips no espaço entre os dois cards**
   - Adicionar um novo elemento `<div className="cta-values-cluster">` como filho do meio de `.cta-container`, entre `.cta-text-side` e `.contact-form-card`.
   - Conteúdo: os 8 chips (Originalidade, Compromisso, Resultado, Interesse, Inclusiva, Aberta, Simples, Engajada) como `<span className="cta-value-chip">`.
   - No desktop, dispor em 2 linhas horizontais de 4 chips, centralizadas verticalmente no espaço escuro.
   - Se, na validação, ficarem apertados ou quebrando, reduzir para 6 chips (manter Originalidade, Compromisso, Resultado, Interesse, Inclusiva, Engajada; remover Aberta e Simples) em 2 linhas de 3, conforme combinado.

3. **Estilo discreto de badges/tags**
   - `.cta-value-chip`: pílula pequena e sutil — fundo `rgba(255,255,255,0.03)`, borda fina `rgba(255,255,255,0.10)`, raio `9999px`, fonte `0.7rem`, `text-transform: uppercase`, `letter-spacing: 0.08em`, cor `rgba(255,255,255,0.72)`, padding `0.3rem 0.7rem`. Sem caixas grandes, alinhado ao design atual.
   - `.cta-values-cluster`: `display: flex; flex-wrap: wrap; justify-content: center; align-content: center; gap: 0.5rem;` — bloco centralizado.
   - Sem `!important`.

4. **Ajustar a grade do `.cta-container` para abrir a calha central**
   - Desktop: `grid-template-columns: 1fr auto 1fr` (texto | cluster de chips | formulário), mantendo `gap` equilibrado. Os dois cards mantêm conteúdo, estilo e proporção; apenas a calha central é preenchida pelos chips.
   - A coluna `auto` fica do tamanho do cluster; o fundo escuro do `.cta-container` permanece visível ao redor.
   - Tablet/celular (já `1fr` hoje): o cluster aparece como uma faixa horizontal centralizada entre os cards empilhados, com no máximo 2 linhas, sem estourar a largura.
   - Garantir `min-width: 0` e `max-width: 100%` no cluster para evitar rolagem horizontal.

5. **Validação**
   - Playwright em 320, 375, 390, 414, 768 e 1280 px.
   - Conferir: zero rolagem horizontal; chips centralizados; no máximo 2 linhas no celular; cards principais e demais seções inalterados; marquee de clientes e do manifesto preservados.
   - Build OK e sem `!important`.

## Detalhes técnicos

- Mudanças em `src/routes/index.tsx` (remover bloco `.brand-values-grid`; inserir `.cta-values-cluster` em `#contato`) e em `src/styles/setima.css` (nova regra `.cta-values-cluster`/`.cta-value-chip` e ajuste de `grid-template-columns` do `.cta-container`).
- Nenhuma cor, fonte, copy ou comportamento existente será alterado.
