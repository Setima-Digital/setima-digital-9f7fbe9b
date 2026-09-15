# Ajustar a tipografia mobile

## Objetivo
Completar os critérios do item 2 sem alterar o desktop, as cores, as fontes de marca ou os textos.

## Alterações
- Aplicar balanceamento aos títulos e quebra visual mais natural aos parágrafos e textos corridos no mobile.
- Manter os títulos com tamanhos fluidos já existentes e complementar os títulos que ainda não possuem tratamento responsivo.
- Remover quebras no meio de palavras (`overflow-wrap: anywhere`) e usar quebra somente entre palavras; não ativar hifenização.
- Preservar `nowrap` apenas na faixa animada, onde ele é necessário para o movimento contínuo.
- Garantir 16px nos textos corridos no mobile e nunca menos de 14px nos textos auxiliares, etiquetas, botões, formulário e rodapé.
- Ajustar textos corridos para entrelinha de 1.5 a 1.7.
- Validar em 320, 375 e 393 px: títulos, parágrafos, botões, cartões, formulário e rodapé, sem cortes ou rolagem horizontal.

## Situação atual confirmada
- Os títulos principais já usam tamanhos fluidos com `clamp()`.
- Os principais parágrafos já têm entrelinha entre 1.6 e 1.7.
- Ainda existem textos mobile abaixo de 14px e textos corridos abaixo de 16px.
- Não há hifenização automática.
- O único `nowrap` encontrado pertence à faixa animada e deve permanecer.
- Há usos de quebra no meio de palavras que precisam ser substituídos.

## Arquivo previsto
- `src/styles/setima.css`, somente nas regras mobile.
