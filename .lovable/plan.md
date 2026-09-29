# GEO/AEO para a Sétima Digital

Deixar o site mais fácil de citar pelas IAs e pelos buscadores, sem mexer no visual aprovado, na copy atual nem no menu.

## 1. Dados estruturados (JSON-LD)
- Ampliar o bloco que já existe e transformá-lo em um `@graph` com:
  - **ProfessionalService**: nome, url, logo (símbolo no CDN), telefone +55 47 99630-0079, endereço em Blumenau/SC, areaServed Brasil, sameAs (Instagram e Linktree), contactPoint com Matheus de Paula.
  - **7 Service**, um por pilar, cada um com descrição própria que cita "Sétima Digital", ligados ao ProfessionalService.
  - **FAQPage** com o mesmo texto da nova seção de perguntas.
  - **WebSite** e **BreadcrumbList** (Início).
- Validar que o JSON é válido e confere com o HTML gerado.

## 2. Nova seção "Perguntas frequentes"
- Entra antes da chamada final de contato, com o mesmo estilo das outras seções (título, cartões escuros, abrir/fechar acessível).
- 9 perguntas em H3 com respostas diretas de 40 a 60 palavras que citam "Sétima Digital": serviços, custo de vídeo em Blumenau, produtora full service, atendimento fora de SC, transmissão ao vivo multicâmera, IA na produção de conteúdo, tráfego pago, fotografia corporativa e como pedir orçamento.
- **Preço:** não vou inventar valores. A resposta fala dos fatores que definem o preço e do orçamento gratuito pelo WhatsApp. Se você me passar uma faixa real de preços, eu incluo.
- As respostas ficam sempre no HTML (visíveis para robôs mesmo com a pergunta fechada).
- Um link "Perguntas" será adicionado **apenas no rodapé**, para o menu do topo ficar igual.

## 3. HTML semântico e títulos
- Hoje o site já usa `header`, `section` e `footer`, e tem um único H1. Vou adicionar `<main>` envolvendo as seções, `<nav aria-label>` no menu e `<article>` em cada cartão de pilar e de pergunta.
- **H1:** o título visível "SÉTIMA DIGITAL" fica como está. Dentro do mesmo H1 entra um complemento visível só para leitores de tela e robôs: "Agência de Marketing e Produtora Audiovisual em Blumenau". Assim o visual não muda.
- Conferir se os títulos seguem a ordem H2 → H3 em todas as seções.
- Alt text: as miniaturas dos vídeos já têm descrição. Os logos de clientes vão ganhar descrições como "Logo da A8 Imóveis, cliente da Sétima Digital". A antiga grade de fotos do portfólio foi removida, então não há outras imagens.

## 4. Meta tags
- Título com até 60 caracteres e descrição de 150 a 160 caracteres com chamada para ação.
- Open Graph completo com `og:locale pt_BR` e Twitter Card, incluindo `og:image`/`twitter:image` com uma imagem de compartilhamento de 1200x630 no CDN, criada a partir da marca.
- Canonical, og:url, sitemap, robots e JSON-LD passam todos para **https://www.setimadigital.com.br**, como você pediu. Antes vou confirmar que o endereço com www responde direto, sem redirecionar para o endereço sem www. Se redirecionar, aviso você antes de trocar.

## 5. Arquivos para IAs
- `public/llms.txt`: resumo em markdown com quem é a Sétima Digital, os 7 pilares, diferenciais, números (150+ produções, 3.200+ seguidores, 7 pilares), WhatsApp, Instagram, Linktree e links para as seções (`/#servicos`, `/#portfolio`, `/#faq`...).
- `robots.txt`: manter as regras atuais e liberar GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended e meta-externalagent.
- `sitemap.xml`: o site tem uma página só, e endereços com `#` não são aceitos em sitemaps. Então ele terá a página inicial e o `llms.txt` fica listado no próprio arquivo, sem inventar páginas.

## 6. Conteúdo pensado para respostas de IA (sem reescrever a copy)
- Nenhum texto atual será removido ou alterado. Só entram frases novas ao redor:
  - uma frase-resumo curta no começo de cada pilar ("A Sétima Digital produz...");
  - "Sétima Digital" escrito por extenso em cada seção onde ainda não aparece;
  - menções naturais a Blumenau, Vale do Itajaí, Santa Catarina e atendimento em todo o Brasil em Abrangência e na FAQ;
  - uma frase de casos com contexto sobre A8 Imóveis e Germânia na seção de clientes, sem inventar resultados ou números.
- **Ponto de atenção:** essas frases aparecem na tela. Se preferir que nenhuma frase visível seja adicionada fora da FAQ, eu coloco essas informações só nos dados estruturados e no llms.txt.

## 7. Performance e acessibilidade
- A primeira tela não tem foto, só texto e desenho, então não há imagem para pré-carregar. Vou pré-carregar o símbolo do cabeçalho.
- Carregamento tardio em todas as imagens abaixo da primeira tela, incluindo os logos.
- WebP: os logos de clientes serão convertidos para WebP e reenviados ao CDN, mantendo o PNG original como reserva.
- Revisar os aria-labels (setas do carrossel, botões de vídeo, menu, redes sociais) e o contraste dos textos novos.

## Detalhes técnicos
- Arquivos: `src/routes/index.tsx` (head, JSON-LD @graph, `<main>`, FAQ, H1 com `.sr-only`, alts), `src/styles/setima.css` (estilos `.faq-*` com mobile-first, sem `!important`), `public/robots.txt`, `public/sitemap.xml`, novo `public/llms.txt`.
- As perguntas da FAQ ficam em um único array, que alimenta o HTML e o FAQPage, para os dois nunca ficarem diferentes.
- Validação: parsear o JSON-LD do HTML renderizado pelo servidor, Playwright de 320 a 1280 px (zero rolagem horizontal, desktop igual ao anterior), build OK.
- As mudanças só chegam ao site no ar depois de publicar. Depois disso, peço um novo rastreamento no Search Console.
