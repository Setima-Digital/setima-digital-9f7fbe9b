# Otimizar seções específicas no mobile

Aprimorar topo, formulário, rodapé e janela de portfólio em celulares, preservando integralmente o desktop aprovado.

## Ajustes planejados

1. **Topo da página**
   - Manter o texto principal e os dois botões empilhados no celular.
   - Limitar visualmente o título principal a no máximo três linhas, com tamanho fluido e sem quebra no meio das palavras.
   - Confirmar que os botões seguem com a mesma largura e espaçamento consistente.

2. **Formulário sem zoom no iPhone**
   - Manter campos, seleção e área de mensagem com largura total.
   - Definir texto dos campos em 16 px no mobile para impedir o zoom automático do iOS.
   - Preservar todas as etiquetas acima de seus respectivos campos e garantir que textos longos não ultrapassem a largura disponível.

3. **Conteúdo em uma coluna**
   - Manter recursos, serviços e etapas em uma coluna no celular.
   - Não criar tratamentos para tabelas, planos ou depoimentos, pois esses elementos não existem nesta página.

4. **Rodapé acessível**
   - Manter as colunas empilhadas no celular.
   - Ampliar a área vertical clicável dos links e uniformizar o intervalo entre eles, sem alterar o desenho do desktop.

5. **Janela de portfólio**
   - Aplicar largura móvel de `calc(100% - 2rem)`, limite de 90% da altura da tela e rolagem vertical interna.
   - Preservar o botão de fechar com área de toque mínima de 44 px e impedir qualquer estouro horizontal.

6. **Validação**
   - Conferir em 320, 375, 393, 640, 768 e 1280 px.
   - Testar o topo, todos os campos do formulário, links do rodapé e abertura/fechamento da janela de portfólio.
   - Confirmar ausência de rolagem horizontal, título com até três linhas, campos em 16 px no mobile e desktop inalterado.

## Detalhes técnicos

- Os ajustes ficarão concentrados nas regras responsivas de `src/styles/setima.css`.
- A estrutura atual já empilha o topo, os recursos e o rodapé; será reforçada apenas onde faltam tamanho de texto, área de toque e limites exatos da janela.
- Nenhum texto, cor, fonte de marca, link ou comportamento será alterado.
