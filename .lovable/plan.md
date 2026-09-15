# Ajustar layouts e grids no mobile

Organizar cartões, blocos horizontais e espaçamentos em celular e tablet, mantendo intactos o layout desktop aprovado, as cores, as fontes e os textos.

## Ajustes planejados

1. **Padronizar as grades de cartões**
   - Serviços e portfólio ficarão em uma coluna abaixo de 640 px, duas colunas a partir de 640 px e manterão três colunas no desktop.
   - O processo ficará em uma coluna no celular, duas no tablet e manterá as quatro etapas lado a lado no desktop, preservando sua composição aprovada.
   - O rodapé seguirá uma coluna no celular, duas no tablet e a estrutura desktop atual.
   - Todas as colunas usarão trilhas flexíveis para impedir estouros por conteúdo longo.

2. **Reorganizar blocos horizontais**
   - Transformar em coluna no celular os grupos que precisam de mais espaço, incluindo ações, destaques, metadados e áreas de contato.
   - Manter lado a lado a partir do tablet quando houver largura suficiente.
   - Preservar `flex-wrap` nos filtros, chips, selos e grupos de links que devem quebrar naturalmente.

3. **Uniformizar espaçamentos**
   - Aplicar 48 px entre os limites das seções no celular e 64 px no tablet.
   - Preservar o espaçamento atual do desktop aprovado em telas maiores.
   - Padronizar os intervalos internos móveis em 16, 20 ou 24 px conforme a densidade de cada grupo.

4. **Validar o resultado**
   - Conferir as larguras de 320, 375, 393, 640, 768 e 1024 px.
   - Verificar serviços, portfólio, processo, contato, rodapé, filtros e chips.
   - Confirmar que não existem sobreposições, cartões apertados, desalinhamentos ou rolagem horizontal e comparar com o desktop atual.

## Detalhes técnicos

- As mudanças ficarão concentradas nas regras responsivas de `src/styles/setima.css`; a estrutura da página só será alterada se algum agrupamento não puder ser corrigido com CSS.
- Como a página atual usa classes próprias em CSS, serão aplicados os mesmos pontos de quebra e comportamentos pedidos, sem converter toda a página para classes utilitárias.
- A grade destacada do sétimo pilar continuará ocupando a largura completa quando houver mais de uma coluna.
