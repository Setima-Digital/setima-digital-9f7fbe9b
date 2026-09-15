# Otimizar a responsividade mobile da landing page

Ajustar exclusivamente tablet e celular, mantendo intactos o layout desktop aprovado, a identidade visual e todos os textos.

## Ajustes planejados

1. **Eliminar a rolagem horizontal**
   - Aplicar a proteção de largura e `overflow-x: hidden` em `html`, `body` e no contêiner principal.
   - Corrigir o menu móvel recolhido para não aumentar a largura da página fora da tela.
   - Conter constelação, luzes, marca-d'água, animações de entrada e demais elementos decorativos dentro de seus respectivos blocos.

2. **Padronizar containers no mobile**
   - Usar largura total com limite seguro, `min-width: 0` e margens automáticas nos conteúdos internos.
   - Aplicar respiro lateral equivalente a 16 px no celular, 24 px no tablet e preservar os valores atuais no desktop.
   - Substituir larguras rígidas de blocos por dimensões fluidas onde houver risco de estouro, mantendo tamanhos fixos apenas em ícones e elementos decorativos contidos.

3. **Reorganizar grades e conteúdos estreitos**
   - Manter as grades em uma coluna no celular e garantir que cartões, formulário, estatísticas, portfólio, processo, abrangência e rodapé ocupem somente a largura disponível.
   - Ajustar o sétimo pilar, linhas de metadados, filtros, chips e grupos de botões para quebra de linha sem sobreposição.
   - Reduzir apenas no mobile os espaçamentos internos excessivos de cartões e blocos de destaque.

4. **Melhorar legibilidade e navegação móvel**
   - Ajustar títulos longos, nome da marca, selo inicial e textos de botões para caberem em telas estreitas sem cortes.
   - Fazer ações principais ocuparem largura confortável no celular e manter ícones estáveis.
   - Ajustar formulário, modal e menu para altura dinâmica da tela, rolagem interna quando necessária e áreas de toque adequadas.

5. **Validação**
   - Conferir a página em 320, 375, 393 e 768 px de largura.
   - Verificar menu, filtros do portfólio, modal, chips de abrangência e formulário.
   - Confirmar ausência de rolagem horizontal, cortes, sobreposições e erros, além de comparar o desktop para garantir que permaneceu visualmente inalterado.

## Detalhes técnicos

- As alterações ficarão concentradas nas regras responsivas de `src/styles/setima.css`, com mudanças mínimas de classes/estrutura em `src/routes/index.tsx` somente quando necessárias para contenção correta.
- As regras existentes acima de 1024 px serão preservadas; os novos ajustes serão específicos para tablet e celular.
- A implementação seguirá a estrutura atual em React/TanStack Start com Tailwind CSS disponível, sem trocar tecnologias ou reescrever a página.
