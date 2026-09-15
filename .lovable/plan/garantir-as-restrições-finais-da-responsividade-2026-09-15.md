# Garantir as restrições finais da responsividade

## Objetivo
Consolidar as regras móveis sem mudar textos, cores, fontes, identidade visual ou o layout aprovado no desktop.

## Alterações planejadas
- Remover as seis declarações `!important` encontradas nas regras móveis e substituí-las por seletores suficientemente específicos e pela ordem correta das regras.
- Preservar todos os conteúdos essenciais no mobile; manter ocultos somente controles alternativos por largura, estados fechados e elementos decorativos.
- Manter o menu móvel fora da área visível quando fechado sem permitir que ele aumente a largura da página.
- Não alterar copy, paleta, famílias tipográficas ou estilos acima de 1024 px.

## Validação
- Conferir visualmente celular e desktop para detectar qualquer regressão de layout ou identidade.
- Testar larguras de 320, 360, 375, 390, 393, 412, 430, 480, 540, 640, 768, 820, 912, 1024 e 1280 px.
- Confirmar em cada largura que a largura rolável coincide com a viewport e que todas as sete seções continuam presentes.
- Verificar menu, filtros, formulário e modal, além do resultado de compilação.

## Detalhes técnicos
A auditoria atual já confirmou ausência de rolagem horizontal nas 15 larguras testadas. A mudança de código ficará restrita às regras CSS móveis necessárias para eliminar `!important`, preservando a cascata e a aparência existente.
