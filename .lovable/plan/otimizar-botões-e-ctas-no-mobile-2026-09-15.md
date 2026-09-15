# Otimizar botões e CTAs no mobile

Garantir botões fáceis de tocar, ações principais bem destacadas e rótulos legíveis em celular, sem alterar a aparência aprovada do desktop.

## Ajustes planejados

1. **Garantir áreas de toque adequadas**
   - Aplicar altura mínima de 44 px ao menu móvel, botões principais e secundários, links sociais, filtros, chips, envio do formulário e fechamento da prévia.
   - Manter ícones com tamanho estável e centralizados dentro das ações.

2. **Organizar CTAs no celular**
   - Fazer o CTA principal e os botões isolados ocuparem toda a largura disponível no celular e voltarem à largura automática a partir de 640 px.
   - Manter o par de ações do topo empilhado, com intervalo de 12 px e mesma largura no celular; restaurar a disposição horizontal a partir de 640 px.
   - Aplicar o mesmo comportamento ao par de ações da janela de prévia.

3. **Limitar rótulos a duas linhas**
   - Centralizar os textos dos botões, permitir quebra natural e limitar a duas linhas.
   - Encurtar no mobile os rótulos que hoje ocupam três ou quatro linhas: “Ver mais no Instagram”, “Orçamento no WhatsApp”, “Instagram”, “Linktree” e “Enviar Orçamento”.
   - Preservar os textos completos no desktop quando houver espaço suficiente.

4. **Validar interação e aparência**
   - Conferir todos os botões em 320, 375, 393, 640, 768 e 1280 px.
   - Abrir menu e prévia do portfólio, testar filtros, chips e formulário.
   - Confirmar altura mínima de 44 px, no máximo duas linhas por rótulo, larguras consistentes e ausência de rolagem horizontal.

## Detalhes técnicos

- Os ajustes serão concentrados nas regras responsivas de `src/styles/setima.css`, com pequenas marcações em `src/routes/index.tsx` apenas para alternar rótulos curtos e completos por largura de tela.
- Os links, destinos e comportamentos atuais serão preservados; somente apresentação e texto visual dos botões serão ajustados.
- As regras entram abaixo de 640 px e são revertidas a partir desse ponto, mantendo o desktop intacto.
