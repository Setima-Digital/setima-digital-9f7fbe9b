# Corrigir a lista “Pilar de Maior Interesse”

Ajustar a lista suspensa do formulário “Solicite uma Proposta” para que todas as opções fiquem legíveis e consistentes com o visual escuro da página.

## Alterações

- Aplicar fundo escuro e texto claro às opções da lista, eliminando a área branca mostrada na imagem.
- Indicar ao navegador que esse campo utiliza esquema escuro, melhorando a aparência do menu nativo nos navegadores compatíveis.
- Preservar os oito pilares, o valor selecionado e o funcionamento atual do formulário.
- Conferir a abertura da lista no computador e no celular, além do estado fechado e de foco.

## Detalhes técnicos

- A falha está no menu nativo do `select`: o campo tem texto branco, mas suas opções abertas não receberam um fundo escuro explícito.
- A correção ficará restrita aos estilos de `.form-select` e de suas opções, sem alterar outras partes da página.
