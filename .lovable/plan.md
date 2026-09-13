# Reconstruir a página da Sétima Digital

Reproduzir fielmente o arquivo `index.html` enviado, seção por seção, dentro do site atual.

## Observação importante sobre as seções

O arquivo enviado não tem "depoimentos" nem "FAQ". As seções reais, na ordem em que aparecem, são:

1. Menu fixo no topo (logo SÉTIMA DIGITAL, links e botão "Orçamento no WhatsApp")
2. Hero de tela cheia: selo "Conexão • Ligação • Conversão", título SÉTIMA DIGITAL, subtítulo de agência, texto de apresentação, botões "Falar no WhatsApp" e "Ver Portfólio", constelação de 7 pontos girando ao fundo, luzes coloridas desfocadas e indicador "EXPLORAR"
3. Quem Somos: manifesto, citação em destaque, palavras-chave (Originalidade, Compromisso, Resultado...), 4 diferenciais com check, números (3.200+ seguidores, 7 pilares, 100% compromisso, 150+ produções) e contato de Matheus de Paula
4. 7 Pilares do Marketing Digital: seis cartões numerados (vídeos, fotografia, tráfego pago, social media, transmissões ao vivo, IA) mais o sétimo cartão em destaque (estratégia e posicionamento)
5. Portfólio: filtros (Todos / Vídeos / Fotografia), seis projetos com etiqueta, título e link, janela de detalhe ao clicar e botão para o Instagram
6. Faixa deslizante de palavras (CONEXÃO — LIGAÇÃO — CONVERSÃO — RESULTADO — ORIGINALIDADE — COMPROMISSO), que faz o papel da barra de confiança
7. Nosso Processo: quatro etapas (Estratégia, Produção, Distribuição, Otimização)
8. Abrangência: regiões e segmentos clicáveis, com texto que muda conforme a escolha
9. Chamada final "Pronto para transformar sua marca?": botões de WhatsApp, Instagram e Linktree + formulário de proposta com mensagem de confirmação
10. Rodapé: marca, navegação, lista dos 7 pilares, canais oficiais e aviso de direitos

Se você quiser mesmo depoimentos e uma seção de perguntas frequentes, eu crio conteúdo novo para elas — basta avisar.

## Identidade visual (copiada do arquivo)

- Fundo: #0B0B12; cartões #12121E; cartão em foco #191A2A
- Gradiente da marca: laranja #FF6B1A → rosa #FF3D9A → roxo #9C27B0 → violeta #7B2FBE → azul #2962FF
- Texto principal #EDF0F8, texto secundário cinza-azulado
- Fontes: Montserrat para títulos (peso 900 no "SÉTIMA" e 200 no "DIGITAL") e Inter para os textos
- Detalhes preservados: granulado de filme sobre a tela, menu que escurece ao rolar, animação de entrada das seções, botões arredondados com brilho colorido

Observação: o pedido citava #0A0A0B e #00E0FF, mas o arquivo enviado usa a paleta acima. Vou seguir o arquivo, como você pediu ("referência exata").

## Detalhes técnicos

- Cores, gradientes e fontes entram como variáveis de tema em `src/styles.css`; Montserrat e Inter carregados por `<link>` no `src/routes/__root.tsx`.
- Página montada em `src/routes/index.tsx`, com componentes por seção em `src/components/sections/` (Navbar, Hero, QuemSomos, Pilares, Portfolio, Marquee, Processo, Abrangencia, CtaContato, Footer).
- Ilustrações vetoriais (constelação de 7 nós, ícones de cada pilar, ícones sociais) recriadas como SVG inline, iguais aos do arquivo.
- Interações em React: menu móvel, rolagem suave, revelação por scroll, filtro do portfólio, janela de projeto, abas de abrangência e envio do formulário com mensagem de confirmação (sem backend — só confirmação na tela).
- Conteúdo dos projetos do portfólio: o arquivo original não traz imagens reais, apenas blocos com gradiente; mantenho o mesmo tratamento visual.
- Metadados da página atualizados para o título "Sétima Digital — Agência de Marketing e Produtora Audiovisual".
