# Concluir o checklist de aceite mobile

## Correções necessárias
- Adicionar um controle “fechar” visível e com área de toque de 44 × 44 px dentro do menu móvel, preservando os mesmos links e fechando também por link e pela tecla Escape.
- Garantir área de toque mínima de 44 px nos links do logotipo no topo e no rodapé, somente até 768 px.
- Elevar para 14 px o único texto informativo móvel abaixo do mínimo; manter os símbolos de confirmação como ícones, sem alterar sua aparência.
- Preservar copy, cores, fontes, imagens e o layout acima de 1024 px.

## Validação final
- Repetir os testes em 320, 375, 390, 414 e 768 px com o menu fechado e aberto.
- Confirmar: largura sem rolagem, conteúdo útil dentro da viewport, textos sem cortes ou quebras anormais, campos em 16 px, controles com 44 px, menu abrindo e fechando, imagens 1:1 com dimensões reservadas e baixo deslocamento visual.
- Comparar captura de 1280 px para confirmar que o desktop permanece visualmente inalterado.
- Verificar interações do menu, formulário e modal, erros no navegador e compilação.

## Arquivos previstos
- `src/routes/index.tsx`: controle de fechar e comportamento acessível do menu.
- `src/styles/setima.css`: ajustes móveis de toque, legibilidade e posicionamento do controle.

## Entrega
Ao final, apresentar o resultado do checklist, listar os arquivos alterados e resumir as mudanças em até cinco linhas.
