# Otimizar a performance visual no mobile

Reduzir o custo de renderização e o carregamento inicial em celulares, mantendo a identidade visual e o desktop aprovado.

## Ajustes planejados

1. **Aliviar efeitos pesados no celular**
   - Remover o desfoque de 120 px das três luzes grandes do topo no mobile, substituindo-o por fundos radiais equivalentes e mais leves.
   - Reduzir ou remover sombras extensas nos grandes blocos de estatísticas e contato.
   - Trocar o desfoque de fundo do selo do topo por uma superfície translúcida simples no mobile.
   - Manter sombras menores nos botões e elementos de destaque, que não cobrem áreas grandes.
   - Preservar todos os efeitos atuais no desktop.

2. **Carregar imagens conforme a necessidade**
   - Manter o símbolo do cabeçalho com carregamento imediato, por aparecer na primeira tela.
   - Marcar o símbolo repetido no rodapé para carregamento tardio e decodificação assíncrona.
   - Preservar as dimensões declaradas para evitar deslocamentos durante o carregamento.

3. **Enxugar o carregamento das fontes**
   - Manter apenas as duas famílias atuais: Montserrat e Inter.
   - Reduzir o pedido externo para três pesos por família, escolhidos conforme os papéis visuais existentes: fino, regular e forte na Montserrat; regular, médio e forte na Inter.
   - Preservar `display=swap`, que já está ativo, para o texto aparecer imediatamente.
   - Ajustar pesos intermediários no CSS para os pesos disponíveis mais próximos, evitando downloads e síntese desnecessários sem descaracterizar títulos e textos.

4. **Validar aparência e carregamento**
   - Conferir em 320, 375, 393, 640, 768 e 1280 px.
   - Comparar topo, cartões, contato e rodapé para garantir que a hierarquia visual permaneça consistente.
   - Confirmar que o símbolo do rodapé usa carregamento tardio, que o cabeçalho continua imediato, que há somente duas famílias e três pesos carregados por família, e que não existe rolagem horizontal.

## Detalhes técnicos

- Os efeitos serão ajustados somente dentro das regras até 768 px em `src/styles/setima.css`.
- Os atributos de carregamento serão aplicados apenas às duas imagens existentes em `src/routes/index.tsx`.
- A solicitação das fontes será reduzida em `src/routes/__root.tsx`, preservando Montserrat, Inter e `display=swap`.
- Não serão alterados textos, cores, estrutura, links ou comportamento da página.
