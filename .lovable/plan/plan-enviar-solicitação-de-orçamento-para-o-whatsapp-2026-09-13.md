# Plan: Enviar solicitação de orçamento para o WhatsApp

## Resumo

Hoje o formulário "Solicite uma Proposta" apenas simula envio (mostra "Enviando..." → "Solicitação Enviada!" e descarta os dados). A mudança fará o botão **abrir o WhatsApp** com os dados preenchidos pelo usuário, enviando a mensagem para o número da Sétima Digital: **(47) 99630-0079** (já usado em outros botões do site).

## Como funciona

1. Ao clicar em "Enviar Solicitação de Orçamento", o código monta uma mensagem de texto com os campos preenchidos:
   - Nome/Empresa
   - WhatsApp ou E-mail
   - Pilar de Maior Interesse
   - Descrição do Projeto
2. Abre `https://wa.me/5547996300079?text=<mensagem codificada>` em uma nova aba.
3. Mantém o feedback visual ("Enviando..." → "Solicitação Enviada!") e o reset do formulário.

## Arquivo alterado

**`src/routes/index.tsx`** — função `onSubmit` dentro do `useEffect` (linhas 181–195):

- Coletar valores dos campos `#formName`, `#formContact`, `#formService`, `#formMessage`.
- Montar a mensagem em formato legível, ex.:
  ```
  *Nova Solicitação de Orçamento — Sétima Digital*

  *Nome/Empresa:* Lucas — Imobiliária Vale
  *Contato:* (47) 99999-9999
  *Pilar de Interesse:* 03 Gestão de Tráfego Pago
  *Descrição:* Conte o objetivo da marca...

  Vim pelo site setimadigital.lovable.app
  ```
- Codificar com `encodeURIComponent` e abrir via `window.open(url, "_blank")`.
- Campos vazios (ex: descrição opcional) são omitidos da mensagem.

## Sem backend

Esta solução é 100% frontend — abre o WhatsApp do próprio usuário com a mensagem pronta para envio. Não requer Lovable Cloud, banco de dados nem servidor.

## Validação

- Conferir em desktop e mobile que a aba do WhatsApp abre com a mensagem preenchida.
- Verificar que o feedback visual e o reset do formulário continuam funcionando.
