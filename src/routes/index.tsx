import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import "@/styles/setima.css";
import setimaSymbol from "@/assets/setima-symbol.png.asset.json";
import logoJapahaus from "@/assets/JAPAHAUS.png.asset.json";
import logoA8 from "@/assets/a8_imoveis.png.asset.json";
import logoMarechal from "@/assets/AUTO_POSTO_MARECHAL.png.asset.json";
import logoHjf from "@/assets/CONSTRUTORA_HJF.png.asset.json";
import logoDrDiego from "@/assets/DR_DIEGO.png.asset.json";
import logoEisen from "@/assets/EISEN_BARBEARIA.png.asset.json";
import logoFarmaLinz from "@/assets/FARMA_LINZ.png.asset.json";
import logoFmr from "@/assets/FMR_MARCENARIA.png.asset.json";
import logoGermania from "@/assets/GERMANIA_IMOBILIARIA.png.asset.json";
import logoPetFish from "@/assets/PET_FISH.png.asset.json";
import logoJeta from "@/assets/JETA_IMOVEIS.png.asset.json";
import logoKowski from "@/assets/KOWSKI.png.asset.json";
import logoKrAdv from "@/assets/KR_ADV.png.asset.json";
import logoInifi from "@/assets/INIFI.png.asset.json";
import logoAnimalGold from "@/assets/ANIMAL_GOLD.png.asset.json";
import logoBaher from "@/assets/BAHER.png.asset.json";
import logoBiseli from "@/assets/BISELI_TEXTIL.png.asset.json";
import logoDecopizza from "@/assets/DECOPIZZA.png.asset.json";
import logoFran from "@/assets/FRAN_ARQUITETURA.png.asset.json";

const clientLogos = [
  { src: logoJapahaus.url, name: "Japahaus" },
  { src: logoA8.url, name: "A8 Imóveis" },
  { src: logoMarechal.url, name: "Auto Posto Marechal" },
  { src: logoHjf.url, name: "Construtora HJF" },
  { src: logoDrDiego.url, name: "Diego C. Stapazoli — Advocacia" },
  { src: logoEisen.url, name: "Eisen Barbearia" },
  { src: logoFarmaLinz.url, name: "Farma Linz" },
  { src: logoFmr.url, name: "FMR Marcenaria" },
  { src: logoGermania.url, name: "Germânia Assessoria Imobiliária" },
  { src: logoPetFish.url, name: "Pet Fish" },
  { src: logoJeta.url, name: "JETA Imóveis" },
  { src: logoKowski.url, name: "Kowski Plásticos" },
  { src: logoKrAdv.url, name: "Krueger & Rodrigues Alves — Advocacia", lightBg: true },
  { src: logoInifi.url, name: "Inifi" },
  { src: logoAnimalGold.url, name: "Animal Gold" },
  { src: logoBaher.url, name: "Baher" },
  { src: logoBiseli.url, name: "Biselli Têxtil" },
  { src: logoDecopizza.url, name: "Deco Pizzas" },
  { src: logoFran.url, name: "Fran Arquitetura" },
];

// Categorias de vídeos por segmento — novas categorias (Gastronômico,
// Dentista, Advogados, Automotivo) entram aqui seguindo o mesmo padrão.
type PortfolioVideo = {
  id: string;
  title: string;
  startAt?: number;
  platform?: "drive" | "instagram";
  embedUrl?: string;
  thumbnailUrl?: string;
  contentType?: "photo";
  linkUrl?: string;
};

const videoCategories: {
  id: string;
  title: string;
  contentType?: "photo";
  videos: PortfolioVideo[];
}[] = [
  {
    id: "imobiliario",
    title: "Imobiliário",
    videos: [
      { id: "lVCSBA4-la0", title: "Imobiliário — vídeo 1" },
      { id: "Z1RholsVwtM", title: "Imobiliário — vídeo 2" },
      { id: "-pddYQF_p8Q", title: "Imobiliário — vídeo 3" },
      { id: "W1UU9qCmjKQ", title: "Imobiliário — vídeo 4" },
      { id: "c6JCaeYgibQ", title: "Imobiliário — vídeo 5" },
    ],
  },
  {
    id: "clipes-institucionais",
    title: "Clipes Institucionais",
    videos: [
      { id: "hMNTpUBeFsc", title: "Clipe institucional — vídeo 1" },
      { id: "GOh9xA0djwk", title: "Clipe institucional — vídeo 2" },
      { id: "KbTOXU2Slck", title: "Clipe institucional — vídeo 3", startAt: 12 },
      { id: "KiNX8sRnCbQ", title: "Clipe institucional — vídeo 4" },
    ],
  },
  {
    id: "seguimentos-em-geral",
    title: "Seguimentos em Geral",
    videos: [
      {
        id: "1HjglqLHdu7xrlUn_wse5ufPqc1WXdOVW",
        title: "Seguimentos em Geral — vídeo 1",
        platform: "drive",
        embedUrl: "https://drive.google.com/file/d/1HjglqLHdu7xrlUn_wse5ufPqc1WXdOVW/preview",
        thumbnailUrl: "https://drive.google.com/thumbnail?id=1HjglqLHdu7xrlUn_wse5ufPqc1WXdOVW&sz=w640",
      },
      {
        id: "DHYYecous0I",
        title: "Seguimentos em Geral — vídeo 2",
        platform: "instagram",
        embedUrl: "https://www.instagram.com/p/DHYYecous0I/embed",
        thumbnailUrl: "/images/seguimentos-video2-thumbnail.jpg",
      },
      {
        id: "1QxW9qV-PBxzNPUxmNknq1LcecTdgm-6-",
        title: "Seguimentos em Geral — vídeo 3",
        platform: "drive",
        embedUrl: "https://drive.google.com/file/d/1QxW9qV-PBxzNPUxmNknq1LcecTdgm-6-/preview",
        thumbnailUrl: "https://drive.google.com/thumbnail?id=1QxW9qV-PBxzNPUxmNknq1LcecTdgm-6-&sz=w640",
      },
      {
        id: "DDAqUSHvFG2",
        title: "Seguimentos em Geral — vídeo 4",
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/DDAqUSHvFG2/embed",
      },
      {
        id: "C77gM5AS1tk",
        title: "Seguimentos em Geral — vídeo 5",
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/C77gM5AS1tk/embed",
      },
      {
        id: "C9ViWigS-Eo",
        title: "Seguimentos em Geral — vídeo 6",
        platform: "instagram",
        embedUrl: "https://www.instagram.com/reel/C9ViWigS-Eo/embed",
      },
    ],
  },
  {
    id: "material-gastronomico",
    title: "Material Gastronômico",
    contentType: "photo",
    videos: [
      {
        id: "C220mBqOGXJ",
        title: "Material Gastronômico — foto 1",
        platform: "instagram",
        contentType: "photo",
        linkUrl: "https://www.instagram.com/p/C220mBqOGXJ/",
      },
      {
        id: "19w4Jf1PYNreiscBf9siTamfcBuB74hwS",
        title: "Material Gastronômico — foto 2",
        platform: "drive",
        contentType: "photo",
        linkUrl: "https://drive.google.com/file/d/19w4Jf1PYNreiscBf9siTamfcBuB74hwS/view",
        thumbnailUrl: "https://drive.google.com/thumbnail?id=19w4Jf1PYNreiscBf9siTamfcBuB74hwS&sz=w640",
      },
      {
        id: "C2aj-xmhbhN",
        title: "Material Gastronômico — foto 3",
        platform: "instagram",
        contentType: "photo",
        linkUrl: "https://www.instagram.com/reel/C2aj-xmhbhN/",
      },
      {
        id: "1A1kMw5X1ZPDXPSIywlfAecJnyFcMonXt",
        title: "Material Gastronômico — foto 4",
        platform: "drive",
        contentType: "photo",
        linkUrl: "https://drive.google.com/file/d/1A1kMw5X1ZPDXPSIywlfAecJnyFcMonXt/view",
        thumbnailUrl: "https://drive.google.com/thumbnail?id=1A1kMw5X1ZPDXPSIywlfAecJnyFcMonXt&sz=w640",
      },
      {
        id: "DWR_Hsdk1Cs",
        title: "Material Gastronômico — foto 5",
        platform: "instagram",
        contentType: "photo",
        linkUrl: "https://www.instagram.com/p/DWR_Hsdk1Cs/",
      },
      {
        id: "C2dNCnZMSv9",
        title: "Material Gastronômico — foto 6",
        platform: "instagram",
        contentType: "photo",
        linkUrl: "https://www.instagram.com/reels/C2dNCnZMSv9/",
      },
    ],
  },
];

function VideoCategoryCarousel({
  category,
  onPlay,
}: {
  category: (typeof videoCategories)[number];
  onPlay: (video: PortfolioVideo) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="video-category reveal-elem" data-category={category.id}>
      <div className="video-category-head">
        <h3 className="shorts-heading">{category.title}</h3>
        <div className="video-category-arrows">
          <button
            type="button"
            className="video-category-arrow"
            onClick={() => scroll(-1)}
            aria-label={`${category.contentType === "photo" ? "Fotos" : "Vídeos"} anteriores de ${category.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button
            type="button"
            className="video-category-arrow"
            onClick={() => scroll(1)}
            aria-label={`Próximas ${category.contentType === "photo" ? "fotos" : "vídeos"} de ${category.title}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
      <div className="video-category-track" ref={trackRef}>
        {category.videos.map((video) => (
          <button
            type="button"
            className="short-card video-category-card"
            key={video.id}
            onClick={() => onPlay(video)}
            aria-label={video.contentType === "photo" ? `Abrir foto: ${video.title}` : `Assistir vídeo: ${video.title}`}
          >
            {video.platform === "instagram" && !video.thumbnailUrl ? (
              <div className={video.contentType === "photo" ? "external-video-thumb external-photo-thumb" : "external-video-thumb"} data-platform="instagram">
                <span className="external-video-platform">Instagram</span>
                <strong>{video.title}</strong>
              </div>
            ) : (
              <img
                src={video.thumbnailUrl ?? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.contentType === "photo" ? `Foto de portfólio — ${video.title}` : `Miniatura do vídeo — ${video.title}`}
                loading="lazy"
                decoding="async"
              />
            )}
            <span className="short-play" aria-hidden="true">
              {video.contentType === "photo" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

const SITE_URL = "https://setimadigital.com.br/";

const pillarServices = [
  { name: "Produção de Vídeos Criativos", summary: "A Sétima Digital produz vídeos publicitários, institucionais e tours imobiliários em 4K a partir de Blumenau/SC." },
  { name: "Produção Fotográfica", summary: "A Sétima Digital realiza fotografia corporativa, de produtos e de arquitetura para empresas de Santa Catarina e do Brasil." },
  { name: "Gestão de Tráfego Pago", summary: "A Sétima Digital gerencia anúncios em Meta Ads, Google Ads e TikTok com foco em leads qualificados e vendas." },
  { name: "Social Media (Reels e Conteúdo)", summary: "A Sétima Digital planeja e produz Reels e conteúdo recorrente para redes sociais com linha editorial estratégica." },
  { name: "Transmissões ao Vivo", summary: "A Sétima Digital faz transmissões ao vivo multicâmera de eventos, palestras e lançamentos em todo o Brasil." },
  { name: "Inteligência Artificial para Conteúdo", summary: "A Sétima Digital usa inteligência artificial para acelerar roteiros, edição e variações de conteúdo sem perder a identidade da marca." },
  { name: "Estratégia e Posicionamento de Marca", summary: "A Sétima Digital define posicionamento, mensagem e buyer persona para integrar todos os pilares em uma estratégia única." },
];

const faqItems = [
  { q: "Quais serviços oferece a Sétima Digital?", a: "A Sétima Digital, agência de marketing e produtora audiovisual de Blumenau/SC, trabalha com 7 pilares integrados: produção de vídeos criativos, produção fotográfica, gestão de tráfego pago, social media com Reels, transmissões ao vivo, inteligência artificial para conteúdo e estratégia e posicionamento de marca, com atendimento em todo o Brasil." },
  { q: "Quanto custa produzir um vídeo publicitário em Blumenau?", a: "O preço de um vídeo publicitário em Blumenau depende do roteiro, da duração, do número de diárias de gravação, de locações, equipamentos como drone e da complexidade da edição. A Sétima Digital monta um orçamento personalizado e gratuito pelo WhatsApp (47) 99630-0079 após entender o objetivo da sua campanha." },
  { q: "O que é uma produtora audiovisual full service?", a: "Uma produtora audiovisual full service cuida de todas as etapas de um projeto: estratégia, roteiro, captação, edição, finalização e distribuição do conteúdo. A Sétima Digital atua assim, unindo produção de vídeo e fotografia à gestão de tráfego pago e redes sociais para transformar o conteúdo em resultado mensurável." },
  { q: "A Sétima Digital atende empresas fora de Santa Catarina?", a: "Sim. A Sétima Digital tem base em Blumenau, no Vale do Itajaí, e atende empresas em todo o Brasil. Tráfego pago, social media, estratégia de marca e conteúdo com inteligência artificial funcionam de forma remota, e a equipe se desloca para gravações, fotografia e transmissões ao vivo em outros estados." },
  { q: "Como contratar transmissão ao vivo multicâmera para eventos?", a: "Para contratar uma transmissão ao vivo multicâmera, informe data, local, duração e plataforma de exibição do evento. A Sétima Digital avalia a estrutura de internet e som, define câmeras e operação técnica e entrega a transmissão ao vivo para YouTube, Instagram ou plataformas privadas, em Santa Catarina ou em todo o Brasil." },
  { q: "Vale a pena usar inteligência artificial na produção de conteúdo?", a: "Vale a pena quando a inteligência artificial é usada com estratégia. Na Sétima Digital, a IA acelera roteiros, legendas, edição e variações de anúncios, reduzindo prazos e custos, enquanto a direção criativa humana garante originalidade, identidade da marca e mensagens alinhadas à buyer persona de cada cliente." },
  { q: "Como funciona a gestão de tráfego pago da Sétima Digital?", a: "A gestão de tráfego pago da Sétima Digital começa pela definição da buyer persona e das metas de conversão. Em seguida, a equipe cria campanhas em Meta Ads, Google Ads e TikTok, produz os criativos em vídeo e imagem, acompanha os resultados e otimiza os anúncios continuamente para gerar leads qualificados." },
  { q: "A Sétima Digital faz fotografia corporativa e de produtos?", a: "Sim. A Sétima Digital realiza fotografia corporativa para retratos de autoridade, fotos de equipe, catálogo de produtos, arquitetura e interiores de alto padrão e cobertura de eventos. Os ensaios são feitos em Blumenau, no Vale do Itajaí e em outras cidades do Brasil, com edição profissional incluída." },
  { q: "Como pedir um orçamento para a Sétima Digital?", a: "O jeito mais rápido de pedir um orçamento é pelo WhatsApp (47) 99630-0079 ou pelo formulário de proposta no final desta página. Conte o objetivo, o serviço de interesse e o prazo. Matheus de Paula, responsável pela Sétima Digital, retorna com uma proposta personalizada para a sua empresa." },
];

const seoTitle = "Sétima Digital | Produtora Audiovisual em Blumenau/SC";
const seoDescription = "Agência de marketing e produtora audiovisual em Blumenau/SC: vídeo, foto, tráfego pago e lives em todo o Brasil. Peça seu orçamento pelo WhatsApp.";

const orgId = `${SITE_URL}#organizacao`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": orgId,
      name: "Sétima Digital",
      description: "Agência de marketing digital e produtora audiovisual em Blumenau/SC, com atendimento em todo o Brasil. Mais de 150 produções e campanhas realizadas.",
      url: SITE_URL,
      logo: setimaSymbol.url,
      image: setimaSymbol.url,
      telephone: "+55 47 99630-0079",
      address: { "@type": "PostalAddress", addressLocality: "Blumenau", addressRegion: "SC", addressCountry: "BR" },
      areaServed: { "@type": "Country", name: "Brasil" },
      sameAs: ["https://www.instagram.com/setimadigital/", "https://linktr.ee/setimadigital"],
      contactPoint: {
        "@type": "ContactPoint",
        name: "Matheus de Paula",
        telephone: "+55 47 99630-0079",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "7 Pilares do Marketing Digital",
        itemListElement: pillarServices.map((s, i) => ({ "@type": "Offer", itemOffered: { "@id": `${SITE_URL}#servico-${i + 1}` } })),
      },
    },
    ...pillarServices.map((s, i) => ({
      "@type": "Service",
      "@id": `${SITE_URL}#servico-${i + 1}`,
      name: s.name,
      serviceType: s.name,
      description: s.summary,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "Brasil" },
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#site`,
      url: SITE_URL,
      name: "Sétima Digital",
      inLanguage: "pt-BR",
      publisher: { "@id": orgId },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL }],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: setimaSymbol.url },
      { rel: "alternate", type: "text/markdown", href: "/llms.txt", title: "llms.txt" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  component: SetimaDigitalPage,
});


function SetimaDigitalPage() {
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const [activeShortStart, setActiveShortStart] = useState(0);
  const [activeShortEmbedUrl, setActiveShortEmbedUrl] = useState<string | null>(null);

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 40) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuClose = document.getElementById("menuClose");
    const setMenuOpen = (open: boolean) => {
      navMenu?.classList.toggle("active", open);
      menuToggle?.setAttribute("aria-expanded", String(open));
      menuToggle?.setAttribute("aria-label", open ? "Fechar menu de navegação" : "Abrir menu de navegação");
    };
    const toggleMenu = () => setMenuOpen(!navMenu?.classList.contains("active"));
    menuToggle?.addEventListener("click", toggleMenu);
    cleanups.push(() => menuToggle?.removeEventListener("click", toggleMenu));
    const closeMenu = () => setMenuOpen(false);
    menuClose?.addEventListener("click", closeMenu);
    cleanups.push(() => menuClose?.removeEventListener("click", closeMenu));
    navMenu?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
      cleanups.push(() => link.removeEventListener("click", closeMenu));
    });
    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !navMenu?.classList.contains("active")) return;
      closeMenu();
      menuToggle?.focus();
    };
    document.addEventListener("keydown", closeMenuOnEscape);
    cleanups.push(() => document.removeEventListener("keydown", closeMenuOnEscape));

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal-elem").forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    const counters = document.querySelectorAll<HTMLElement>(".counter");
    let countersStarted = false;
    const timers: Array<ReturnType<typeof setInterval>> = [];
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            counters.forEach((counter) => {
              const target = Number(counter.getAttribute("data-target"));
              const stepTime = 20;
              const increment = target / (1800 / stepTime);
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  counter.textContent = target.toLocaleString("pt-BR");
                  clearInterval(timer);
                } else {
                  counter.textContent = Math.floor(current).toLocaleString("pt-BR");
                }
              }, stepTime);
              timers.push(timer);
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    const statsMatrix = document.querySelector(".stats-card-matrix");
    if (statsMatrix) statsObserver.observe(statsMatrix);
    cleanups.push(() => {
      statsObserver.disconnect();
      timers.forEach(clearInterval);
    });

    const chipItems = document.querySelectorAll<HTMLElement>(".chip-item");
    const chipInfoBox = document.getElementById("chip-info-box");
    chipItems.forEach((chip) => {
      const onClick = () => {
        chipItems.forEach((c) => c.classList.remove("active-chip"));
        chip.classList.add("active-chip");
        const info = chip.getAttribute("data-info");
        if (!chipInfoBox) return;
        chipInfoBox.style.opacity = "0";
        setTimeout(() => {
          chipInfoBox.textContent = info;
          chipInfoBox.style.opacity = "1";
        }, 150);
      };
      chip.addEventListener("click", onClick);
      cleanups.push(() => chip.removeEventListener("click", onClick));
    });

    const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
    const formStatus = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");
    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (!submitBtn) return;
      const originalText = submitBtn.textContent;

      // Coletar valores dos campos
      const name = (document.getElementById("formName") as HTMLInputElement)?.value?.trim() ?? "";
      const contact = (document.getElementById("formContact") as HTMLInputElement)?.value?.trim() ?? "";
      const service = (document.getElementById("formService") as HTMLSelectElement)?.value?.trim() ?? "";
      const message = (document.getElementById("formMessage") as HTMLTextAreaElement)?.value?.trim() ?? "";

      // Montar mensagem para WhatsApp
      const lines: string[] = ["*Nova Solicitação de Orçamento — Sétima Digital*", ""];
      if (name) lines.push(`*Nome/Empresa:* ${name}`);
      if (contact) lines.push(`*Contato:* ${contact}`);
      if (service) lines.push(`*Pilar de Interesse:* ${service}`);
      if (message) lines.push(`*Descrição:* ${message}`);
      lines.push("", "Vim através do site setimadigital.com.br.");

      const waUrl = `https://wa.me/5547996300079?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(waUrl, "_blank");

      (submitBtn as HTMLButtonElement).disabled = true;
      submitBtn.textContent = "Enviando...";
      setTimeout(() => {
        (submitBtn as HTMLButtonElement).disabled = false;
        submitBtn.textContent = "Solicitação Enviada!";
        formStatus?.classList.add("success");
        contactForm?.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
        }, 4000);
      }, 800);
    };
    contactForm?.addEventListener("submit", onSubmit);
    cleanups.push(() => contactForm?.removeEventListener("submit", onSubmit));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="setima-page">



        <div className="film-grain" aria-hidden="true"></div>


        <header className="nav-header" id="navbar">
          <div className="nav-container">
            <a href="#inicio" className="brand-logo" aria-label="Sétima Digital Início">

              <span className="brand-symbol-icon" aria-hidden="true">
                <img src={setimaSymbol.url} alt="" width="344" height="344" loading="eager" decoding="async" fetchPriority="high" />
              </span>

              <span className="brand-name">
                <span className="brand-bold">SÉTIMA</span>
                <span className="brand-slim">DIGITAL</span>
              </span>
            </a>

            <button className="menu-toggle" id="menuToggle" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="navMenu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>

            <nav className="nav-primary" aria-label="Navegação principal">
            <ul className="nav-menu" id="navMenu">
              <li className="menu-close-item">
                <button className="menu-close" id="menuClose" aria-label="Fechar menu de navegação">×</button>
              </li>
              <li><a href="#quem-somos" className="nav-link">Quem Somos</a></li>
              <li><a href="#servicos" className="nav-link">7 Pilares</a></li>
              <li><a href="#portfolio" className="nav-link">Portfólio</a></li>
              <li><a href="#processo" className="nav-link">Processo</a></li>
              <li><a href="#atendimento" className="nav-link">Atendimento</a></li>
              <li><a href="#contato" className="nav-link">Contato</a></li>
            </ul>
            </nav>

            <a href="https://wa.me/5547996300079?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="nav-cta-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Orçamento no WhatsApp
            </a>
          </div>
        </header>


        <main id="conteudo">
        <section className="hero-section" id="inicio">

          <div className="hero-constellation-bg" aria-hidden="true">
            <svg viewBox="0 0 500 500" width="100%" height="100%">
              <defs>
                <linearGradient id="heroNetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B1A"></stop>
                  <stop offset="25%" stopColor="#FF3D9A"></stop>
                  <stop offset="50%" stopColor="#9C27B0"></stop>
                  <stop offset="75%" stopColor="#7B2FBE"></stop>
                  <stop offset="100%" stopColor="#2962FF"></stop>
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff"></stop>
                  <stop offset="60%" stopColor="#FF3D9A"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </radialGradient>
              </defs>










              <polygon points="250,40 414,119 454,296 341,439 159,439 46,296 86,119" stroke="url(#heroNetGrad)" strokeWidth="1.8" fill="none" opacity="0.45"></polygon>

              <polygon points="250,40 454,296 159,439 86,119 414,119 341,439 46,296" stroke="url(#heroNetGrad)" strokeWidth="1.5" fill="none" opacity="0.6"></polygon>
              <polygon points="250,40 341,439 86,119 454,296 46,296 414,119 159,439" stroke="url(#heroNetGrad)" strokeWidth="1.2" fill="none" opacity="0.35"></polygon>


              <line x1="250" y1="40" x2="250" y2="250" stroke="#FF6B1A" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="414" y1="119" x2="250" y2="250" stroke="#FF3D9A" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="454" y1="296" x2="250" y2="250" stroke="#9C27B0" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="341" y1="439" x2="250" y2="250" stroke="#7B2FBE" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="159" y1="439" x2="250" y2="250" stroke="#2962FF" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="46" y1="296" x2="250" y2="250" stroke="#3F51B5" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>
              <line x1="86" y1="119" x2="250" y2="250" stroke="#FF8A00" strokeWidth="1" opacity="0.3" strokeDasharray="4 6"></line>


              <circle cx="250" cy="40" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="250" cy="40" r="5" fill="#FF6B1A"></circle>

              <circle cx="414" cy="119" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="414" cy="119" r="5" fill="#FF3D9A"></circle>

              <circle cx="454" cy="296" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="454" cy="296" r="5" fill="#E91E8C"></circle>

              <circle cx="341" cy="439" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="341" cy="439" r="5" fill="#9C27B0"></circle>

              <circle cx="159" cy="439" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="159" cy="439" r="5" fill="#7B2FBE"></circle>

              <circle cx="46" cy="296" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="46" cy="296" r="5" fill="#3F51B5"></circle>

              <circle cx="86" cy="119" r="10" fill="url(#nodeGlow)"></circle>
              <circle cx="86" cy="119" r="5" fill="#2962FF"></circle>
            </svg>
          </div>


          <div className="hero-ambient-lights" aria-hidden="true">
            <div className="light-orb light-orb-1"></div>
            <div className="light-orb light-orb-2"></div>
            <div className="light-orb light-orb-3"></div>
          </div>

          <div className="hero-content">
            <div className="hero-pill reveal-elem visible">
              <span className="clapper-icon" aria-hidden="true">✦</span>
              <span>Conexão • Ligação • Conversão</span>
            </div>


            <h1 className="hero-title reveal-elem visible">
              <span className="title-bold">SÉTIMA</span>
              <span className="title-slim">DIGITAL</span>
              <span className="sr-only"> — Agência de Marketing e Produtora Audiovisual em Blumenau</span>
            </h1>

            <div className="hero-tagline reveal-elem visible">
              Agência de Marketing &amp; Produtora Audiovisual
            </div>

            <p className="hero-subtitle reveal-elem visible">
              Conexão. Ligação. Conversão. Do analógico ao digital, unindo audiovisual de alta qualidade e criatividade estratégica para alcançar e transformar a buyer persona da sua marca.
            </p>

            <div className="hero-actions reveal-elem visible">
              <a href="https://wa.me/5547996300079?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="btn-brand-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Falar no WhatsApp
              </a>
              <a href="#portfolio" className="btn-cinema-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Ver Portfólio
              </a>
            </div>

            <div className="hero-badge-float reveal-elem visible">
              <div className="badge-icon-box">
                <svg viewBox="0 0 100 100" width="22" height="22" fill="none">
                  <polygon points="50,8 87,27 96,70 71,96 29,96 4,70 13,27" stroke="#FF3D9A" strokeWidth="6"></polygon>
                  <circle cx="50" cy="8" r="7" fill="#FF6B1A"></circle>
                  <circle cx="87" cy="27" r="7" fill="#FF3D9A"></circle>
                  <circle cx="96" cy="70" r="7" fill="#9C27B0"></circle>
                  <circle cx="71" cy="96" r="7" fill="#7B2FBE"></circle>
                  <circle cx="29" cy="96" r="7" fill="#2962FF"></circle>
                  <circle cx="4" cy="70" r="7" fill="#3F51B5"></circle>
                  <circle cx="13" cy="27" r="7" fill="#FF8A00"></circle>
                </svg>
              </div>
              <div className="badge-text">
                <strong>Do físico para o virtual</strong>
                <span>Audiovisual de alto impacto + Estratégia de conversão</span>
              </div>
            </div>
          </div>

          <a href="#quem-somos" className="scroll-indicator" aria-label="Rolar para a próxima seção">
            <span>EXPLORAR</span>
            <div className="scroll-mouse">
              <div className="scroll-wheel" style={{ background: "var(--brand-fuchsia)" }}></div>
            </div>
          </a>
        </section>


        <section className="section-wrap" id="quem-somos">
          <div className="about-grid">
            <div className="about-text-col reveal-elem visible">
              <span className="section-tag">QUEM SOMOS</span>
              <h2 className="section-title">
                SÉTIMA <span className="title-slim">DIGITAL</span> — CONEXÃO, LIGAÇÃO, CONVERSÃO
              </h2>
              <div className="about-copy">
                <p>
                  Ajudamos marcas a superar os desafios do mercado digital unindo <strong>audiovisual de qualidade e criatividade</strong> para alcançar a buyer persona. Respeitamos cada cliente, cumprindo o prazo e surpreendendo com os resultados.
                </p>
                <p>
                  O símbolo da Sétima representa os <strong>7 nós de um algoritmo em constante conexão</strong>: uma união viva de dados, estética e pessoas em direção à conversão.
                </p>
              </div>


              <div className="manifesto-box">
                “Conexão. Ligação. Conversão. Transformação do analógico para o digital. Do físico para o virtual. O mundo muda a toda hora. Mas nada muda nossa necessidade: se não tiver significado, esquece. Marketing digital não é métrica, apenas. É constante transformação. Não é uma simples campanha. É conteúdo. É oferta, é entrega. É compromisso.”
              </div>


              <div className="brand-values-grid">
                <span className="brand-value-chip">Originalidade</span>
                <span className="brand-value-chip">Compromisso</span>
                <span className="brand-value-chip">Resultado</span>
                <span className="brand-value-chip">Interesse</span>
                <span className="brand-value-chip">Inclusiva</span>
                <span className="brand-value-chip">Aberta</span>
                <span className="brand-value-chip">Simples</span>
                <span className="brand-value-chip">Engajada</span>
              </div>

              <div className="about-features" style={{ marginTop: "2rem" }}>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Audiovisual com narrativa de impacto</span>
                </div>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Tráfego pago focado na buyer persona</span>
                </div>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>Rigor de entrega e cumprimento de prazos</span>
                </div>
                <div className="about-feat-item">
                  <span className="feat-check">✓</span>
                  <span>IA e inovação a favor da conversão</span>
                </div>
              </div>
            </div>

            <div className="about-stats-col reveal-elem visible">
              <div className="stats-card-matrix">
                <div className="stat-row">
                  <div className="stat-item">
                    <div className="stat-number">
                      <span className="counter" data-target="3200">3.200</span>
                      <span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">Seguidores no Instagram @setimadigital</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <span className="counter" data-target="7">7</span>
                      <span className="stat-plus">★</span>
                    </div>
                    <div className="stat-label">Pilares estratégicos de atuação</div>
                  </div>
                </div>

                <div className="stat-row stat-row-secondary">
                  <div className="stat-item">
                    <div className="stat-number">
                      <span className="counter" data-target="100">100</span>
                      <span className="stat-plus">%</span>
                    </div>
                    <div className="stat-label">Compromisso com prazos &amp; resultados</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      <span className="counter" data-target="150">150</span>
                      <span className="stat-plus">+</span>
                    </div>
                    <div className="stat-label">Produções e campanhas ativas</div>
                  </div>
                </div>

                <div className="stat-badge-highlight">
                  <span className="official-contact">Contato oficial: Matheus de Paula</span>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <a href="https://www.instagram.com/setimadigital/" target="_blank" rel="noopener noreferrer" className="instagram-pill">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                      Instagram
                    </a>
                    <a href="https://linktr.ee/setimadigital" target="_blank" rel="noopener noreferrer" className="instagram-pill" style={{ borderColor: "rgba(255, 61, 154, 0.4)" }}>
                      Linktree
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="section-wrap services-section-wrap" id="servicos">

          <div className="services-watermark-symbol" aria-hidden="true">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <polygon points="50,6 89,28 98,73 72,99 28,99 2,73 11,28" stroke="#ffffff" strokeWidth="1.5" fill="none"></polygon>
              <polygon points="50,6 72,99 11,28 98,73 28,99 89,28 2,73" stroke="#ffffff" strokeWidth="1" fill="none"></polygon>
            </svg>
          </div>

          <div className="section-head reveal-elem visible">
            <span className="section-tag">SERVIÇOS OFICIAIS</span>
            <h2 className="section-title">
              7 PILARES DO <span className="title-slim">MARKETING DIGITAL</span>
            </h2>
            <p className="section-desc">
              Sete pilares integrados para conectar sua marca à buyer persona: do audiovisual de cinema ao tráfego e IA para conversão direta.
            </p>
          </div>

          <div className="services-grid">

            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">01</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                  </div>
                </div>
                <h3 className="service-title">Produção de Vídeos Criativos</h3>
                <p className="service-summary">{pillarServices[0]?.summary}</p>
                <p className="service-desc">
                  Comerciais, filmes institucionais, tours imobiliários e narrativas envolventes com direção fotográfica apurada e captação 4K.
                </p>
              </div>
              <span className="service-pill-tag">Cinema Comercial</span>
            </div>


            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">02</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  </div>
                </div>
                <h3 className="service-title">Produção Fotográfica</h3>
                <p className="service-summary">{pillarServices[1]?.summary}</p>
                <p className="service-desc">
                  Ensaios corporativos de autoridade, catálogo de produtos, fotos de arquitetura de alto padrão e cobertura editorial exclusiva.
                </p>
              </div>
              <span className="service-pill-tag">Ensaio &amp; Imagem</span>
            </div>


            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">03</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                  </div>
                </div>
                <h3 className="service-title">Gestão de Tráfego Pago</h3>
                <p className="service-summary">{pillarServices[2]?.summary}</p>
                <p className="service-desc">
                  Estratégias de mídia em Meta Ads, Google Ads e TikTok voltadas para atração qualificada da buyer persona e conversões consistentes.
                </p>
              </div>
              <span className="service-pill-tag">Alta Performance</span>
            </div>


            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">04</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                </div>
                <h3 className="service-title">Social Media (Reels e Conteúdo)</h3>
                <p className="service-summary">{pillarServices[3]?.summary}</p>
                <p className="service-desc">
                  Conteúdo diário que retém atenção nos primeiros 3 segundos, gera engajamento e fortalece a conexão genuína com sua comunidade.
                </p>
              </div>
              <span className="service-pill-tag">Reels &amp; Engajamento</span>
            </div>


            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">05</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path><circle cx="12" cy="12" r="2"></circle><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19.1"></path></svg>
                  </div>
                </div>
                <h3 className="service-title">Transmissões ao Vivo</h3>
                <p className="service-summary">{pillarServices[4]?.summary}</p>
                <p className="service-desc">
                  Estrutura multicâmera de padrão broadcast para lançamentos, convenções, leilões e eventos corporativos com transmissão estável.
                </p>
              </div>
              <span className="service-pill-tag">Lives Multicâmera</span>
            </div>


            <div className="service-card reveal-elem visible">
              <div>
                <div className="service-top">
                  <span className="service-num">06</span>
                  <div className="service-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
                  </div>
                </div>
                <h3 className="service-title">Inteligência Artificial para Conteúdo</h3>
                <p className="service-summary">{pillarServices[5]?.summary}</p>
                <p className="service-desc">
                  Fluxos avançados de IA para roteirização rápida, avatares realistas, testes criativos A/B dinâmicos e escala de produção de ativos.
                </p>
              </div>
              <span className="service-pill-tag">Inovação &amp; Escala</span>
            </div>


            <div className="service-card pillar-featured reveal-elem visible">
              <div className="service-icon-wrap" style={{ width: "60px", height: "60px", background: "rgba(255, 61, 154, 0.15)", borderColor: "rgba(255, 61, 154, 0.4)" }}>
                <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
                  <polygon points="50,6 89,28 98,73 72,99 28,99 2,73 11,28" stroke="url(#logoGrad)" strokeWidth="4"></polygon>
                  <circle cx="50" cy="50" r="14" fill="#FF3D9A"></circle>
                </svg>
              </div>

              <div>
                <div className="featured-service-heading">
                  <span className="service-num" style={{ color: "var(--brand-fuchsia)", fontSize: "1.5rem" }}>07</span>
                  <h3 className="service-title" style={{ margin: "0" }}>Estratégia e Posicionamento de Marca</h3>
                <p className="service-summary">{pillarServices[6]?.summary}</p>
                </div>
                <p className="service-desc" style={{ marginBottom: "0", maxWidth: "780px" }}>
                  O nó central que conecta todos os outros 6 pilares: diagnóstico de mercado, definição clara da buyer persona, discurso comercial e arquitetura de narrativa para transformar audiência em clientes leais.
                </p>
              </div>

              <span className="service-pill-tag" style={{ background: "var(--brand-gradient-h)", color: "#ffffff", border: "none", padding: "0.5rem 1.2rem" }}>
                Conexão com a Buyer Persona
              </span>
            </div>
          </div>
        </section>


        <section className="section-wrap" id="portfolio">
          <div className="section-head reveal-elem visible">
            <span className="section-tag">PORTFÓLIO</span>
            <h2 className="section-title">Solidez em cada frame realizado</h2>
            <p className="section-desc">
              Explore projetos que alavancaram o posicionamento de empresas referências em seus setores.
            </p>
          </div>

          <div className="portfolio-bottom-action reveal-elem">
            <a href="https://www.instagram.com/setimadigital/" target="_blank" rel="noopener noreferrer" className="btn-cinema-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span className="cta-label label-mobile">Ver mais no Instagram</span>
              <span className="cta-label label-desktop">Ver mais no Instagram (@setimadigital)</span>
            </a>
          </div>

          {videoCategories.map((category) => (
            <VideoCategoryCarousel
              key={category.id}
              category={category}
              onPlay={(video) => {
                if (video.contentType === "photo" && video.linkUrl) {
                  window.open(video.linkUrl, "_blank", "noopener,noreferrer");
                  return;
                }
                setActiveShort(video.id);
                setActiveShortStart(video.startAt ?? 0);
                setActiveShortEmbedUrl(
                  video.embedUrl ??
                    `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0${video.startAt ? `&start=${video.startAt}` : ""}`,
                );
              }}
            />
          ))}
        </section>


        <section className="section-wrap clients-section" id="clientes" aria-label="Clientes que confiam na Sétima Digital">
          <div className="section-head reveal-elem">
            <span className="section-tag">CLIENTES</span>
            <h2 className="section-title">Empresas que confiam na Sétima Digital</h2>
            <p className="section-desc">Da A8 Imóveis à Germânia Assessoria Imobiliária, a Sétima Digital produz vídeos, fotos e campanhas para empresas de Blumenau, do Vale do Itajaí e de todo o Brasil.</p>
          </div>

          <div className="clients-marquee reveal-elem">
            <ul className="clients-track">
              {clientLogos.map((logo) => (
                <li className={`client-logo${logo.lightBg ? " client-logo--light-bg" : ""}`} key={logo.name}>
                  <img src={logo.src} alt={`Logo da ${logo.name}, cliente da Sétima Digital`} loading="lazy" decoding="async" />
                </li>
              ))}
              {clientLogos.map((logo) => (
                <li className={`client-logo${logo.lightBg ? " client-logo--light-bg" : ""}`} key={`${logo.name}-dup`} aria-hidden="true">
                  <img src={logo.src} alt="" loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
        </section>


        <aside className="marquee-container" aria-label="Manifesto Sétima Digital">
          <div className="marquee-track">
            <div className="marquee-item">
              <span>CONEXÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>LIGAÇÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>CONVERSÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>RESULTADO</span>
              <span className="marquee-sep">⸻</span>
              <span>ORIGINALIDADE</span>
              <span className="marquee-sep">⸻</span>
              <span>COMPROMISSO</span>
              <span className="marquee-sep">⸻</span>
            </div>
            <div className="marquee-item" aria-hidden="true">
              <span>CONEXÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>LIGAÇÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>CONVERSÃO</span>
              <span className="marquee-sep">⸻</span>
              <span>RESULTADO</span>
              <span className="marquee-sep">⸻</span>
              <span>ORIGINALIDADE</span>
              <span className="marquee-sep">⸻</span>
              <span>COMPROMISSO</span>
              <span className="marquee-sep">⸻</span>
            </div>
          </div>
        </aside>


        <section className="section-wrap" id="processo" style={{ background: "#090a11" }}>
          <div className="section-head reveal-elem">
            <span className="section-tag">NOSSO PROCESSO</span>
            <h2 className="section-title">Como construímos resultados consistentes</h2>
            <p className="section-desc">
              Uma esteira de produção pensada para assegurar máxima agilidade sem abrir mão do padrão estético cinematográfico.
            </p>
          </div>

          <div className="process-timeline">
            <div className="process-step reveal-elem">
              <div className="step-header">
                <span className="step-badge">01</span>
                <span className="step-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                </span>
              </div>
              <h3 className="step-title">Estratégia</h3>
              <p className="step-desc">
                Imersão no seu modelo de negócios, estudo do público-alvo, definição da tese criativa e roteirização detalhada de cada tomada.
              </p>
            </div>

            <div className="process-step reveal-elem">
              <div className="step-header">
                <span className="step-badge">02</span>
                <span className="step-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                </span>
              </div>
              <h3 className="step-title">Produção</h3>
              <p className="step-desc">
                Captação no local com equipe técnica, direção de fotografia, iluminação de cinema, captação de áudio cristalino e drones 4K.
              </p>
            </div>

            <div className="process-step reveal-elem">
              <div className="step-header">
                <span className="step-badge">03</span>
                <span className="step-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                </span>
              </div>
              <h3 className="step-title">Distribuição</h3>
              <p className="step-desc">
                Configuração de campanhas de tráfego pago, segmentação por interesses e geolocalização exata para atingir o cliente no momento de decisão.
              </p>
            </div>

            <div className="process-step reveal-elem">
              <div className="step-header">
                <span className="step-badge">04</span>
                <span className="step-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
                </span>
              </div>
              <h3 className="step-title">Otimização</h3>
              <p className="step-desc">
                Análise contínua das taxas de retenção, cliques e conversões. Ajustes periódicos para aumentar o retorno sobre cada real investido.
              </p>
            </div>
          </div>
        </section>


        <section className="section-wrap" id="atendimento">
          <div className="coverage-wrap reveal-elem">
            <span className="section-tag">ABRANGÊNCIA</span>
            <h2 className="section-title">Atendemos empresas em todo o Brasil</h2>
            <p className="section-desc" style={{ maxWidth: "650px" }}>
              Base operacional em Santa Catarina e atendimento a negócios, indústrias e eventos de relevância em âmbito nacional. Clique nos segmentos para ver nossa atuação:
            </p>

            <div className="chips-group" id="chipsContainer">
              <button className="chip-item active-chip" data-info="Blumenau e região: atendimento presencial com equipe completa de estúdio e externas.">
                <span className="dot"></span> Blumenau
              </button>
              <button className="chip-item" data-info="Vale do Itajaí: captação sob demanda para indústrias têxteis, de tecnologia e serviços.">
                <span className="dot"></span> Vale do Itajaí
              </button>
              <button className="chip-item" data-info="Santa Catarina: atuação nos maiores polos econômicos do litoral e planalto.">
                <span className="dot"></span> Santa Catarina
              </button>
              <button className="chip-item" data-info="Mercado Imobiliário: vídeos de alto padrão com drones e iluminação personalizada para lançamentos.">
                <span className="dot"></span> Imobiliário
              </button>
              <button className="chip-item" data-info="Comércio &amp; Varejo: campanhas de alta velocidade, ofertas e anúncios promocionais diários.">
                <span className="dot"></span> Comércio &amp; Varejo
              </button>
              <button className="chip-item" data-info="Indústria: vídeos institucionais para feiras, investidores e treinamento corporativo.">
                <span className="dot"></span> Indústria
              </button>
              <button className="chip-item" data-info="Eventos Corporativos: transmissão ao vivo e cobertura fotográfica/audiovisual integral.">
                <span className="dot"></span> Eventos &amp; Feiras
              </button>
            </div>

            <div id="chip-info-box">
              Blumenau e região: atendimento presencial com equipe completa de estúdio e externas.
            </div>
          </div>
        </section>


        <section className="section-wrap faq-section" id="faq" aria-labelledby="faq-title">
          <div className="section-head reveal-elem visible">
            <span className="section-tag">PERGUNTAS FREQUENTES</span>
            <h2 className="section-title" id="faq-title">Dúvidas sobre a Sétima Digital</h2>
            <p className="section-desc">Respostas diretas sobre produção de vídeo, fotografia, tráfego pago e transmissões ao vivo em Blumenau, Santa Catarina e todo o Brasil.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <article className="faq-item" key={item.q}>
                <details>
                  <summary>
                    <h3 className="faq-question">{item.q}</h3>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              </article>
            ))}
          </div>
        </section>


        <section className="section-wrap" id="contato">
          <div className="cta-container reveal-elem">
            <div className="cta-text-side">
              <div>
                <span className="section-tag">VAMOS CONVERSAR</span>
                <h2 className="cta-big-title">Pronto para transformar sua marca?</h2>
                <p className="cta-p">
                  Do físico para o virtual: vamos conectar sua marca à buyer persona com audiovisual de impacto, tráfego assertivo e compromisso de entrega.
                </p>
              </div>

              <div className="direct-links">
                <a href="https://wa.me/5547996300079?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" className="whatsapp-direct-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  <span className="cta-label label-mobile">Orçamento no WhatsApp</span>
                  <span className="cta-label label-desktop">Orçamento no WhatsApp: (47) 99630-0079</span>
                </a>

                <a href="https://www.instagram.com/setimadigital/" target="_blank" rel="noopener noreferrer" className="instagram-direct-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span className="cta-label label-mobile">Instagram</span>
                  <span className="cta-label label-desktop">Siga @setimadigital no Instagram</span>
                </a>

                <a href="https://linktr.ee/setimadigital" target="_blank" rel="noopener noreferrer" className="instagram-direct-btn" style={{ borderColor: "rgba(255, 61, 154, 0.35)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  <span className="cta-label label-mobile">Linktree</span>
                  <span className="cta-label label-desktop">Acessar Bio &amp; Agenda Oficial (Linktree)</span>
                </a>
              </div>
            </div>


            <form className="contact-form-card" id="contactForm">
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "800", fontSize: "1.3rem", marginBottom: "0.5rem", textTransform: "uppercase" }}>Solicite uma Proposta</h3>

              <div className="form-group">
                <label className="form-label" htmlFor="formName">Seu Nome / Empresa</label>
                <input className="form-input" type="text" id="formName" required placeholder="Ex.: Lucas — Imobiliária Vale" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="formContact">WhatsApp ou E-mail</label>
                <input className="form-input" type="text" id="formContact" required placeholder="(47) 99999-9999 ou contato@suaempresa.com" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="formService">Pilar de Maior Interesse</label>
                <select className="form-select" id="formService">
                  <option value="01 Produção de Vídeos Criativos">01 Produção de Vídeos Criativos</option>
                  <option value="02 Produção Fotográfica">02 Produção Fotográfica</option>
                  <option value="03 Gestão de Tráfego Pago">03 Gestão de Tráfego Pago</option>
                  <option value="04 Social Media (Reels e Conteúdo)">04 Social Media (Reels e Conteúdo)</option>
                  <option value="05 Transmissões ao Vivo">05 Transmissões ao Vivo</option>
                  <option value="06 Inteligência Artificial para Conteúdo">06 Inteligência Artificial para Conteúdo</option>
                  <option value="07 Estratégia e Posicionamento">07 Estratégia e Posicionamento (Buyer Persona)</option>
                  <option value="Pacote Completo dos 7 Pilares">Pacote Completo dos 7 Pilares</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="formMessage">Breve Descrição do Projeto</label>
                <textarea className="form-textarea" id="formMessage" placeholder="Conte-nos o objetivo da sua marca, desafios e prazos desejados..."></textarea>
              </div>

              <button type="submit" className="form-submit-btn" id="submitBtn">
                <span className="cta-label label-mobile">Enviar Orçamento</span>
                <span className="cta-label label-desktop">Enviar Solicitação de Orçamento</span>
              </button>

              <div className="form-status" id="formStatus">
                Recebemos sua mensagem! Matheus de Paula e a equipe da Sétima Digital retornarão em breve via WhatsApp.
              </div>
            </form>
          </div>
        </section>


        </main>

        <footer className="site-footer">
          <div className="footer-top">
            <div>
              <a href="#inicio" className="brand-logo" style={{ marginBottom: "1rem" }}>
                <span className="brand-symbol-icon" aria-hidden="true">
                  <img src={setimaSymbol.url} alt="" width="344" height="344" loading="lazy" decoding="async" />
                </span>
                <span className="brand-name">
                  <span className="brand-bold">SÉTIMA</span>
                  <span className="brand-slim">DIGITAL</span>
                </span>
              </a>
              <p className="footer-brand-p">
                Conteúdo que vende, posiciona e transforma. Conexão e algoritmo a favor da conversão da sua buyer persona.
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Navegação</h4>
              <ul className="footer-links">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#quem-somos">Quem Somos</a></li>
                <li><a href="#servicos">7 Pilares</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#processo">Processo</a></li>
                <li><a href="#atendimento">Atendimento</a></li>
                <li><a href="#faq">Perguntas frequentes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">7 Pilares</h4>
              <ul className="footer-links">
                <li><a href="#servicos">01. Vídeos Criativos</a></li>
                <li><a href="#servicos">02. Produção Fotográfica</a></li>
                <li><a href="#servicos">03. Tráfego Pago</a></li>
                <li><a href="#servicos">04. Social Media &amp; Reels</a></li>
                <li><a href="#servicos">05. Transmissões ao Vivo</a></li>
                <li><a href="#servicos">06. Inteligência Artificial</a></li>
                <li><a href="#servicos">07. Estratégia de Marca</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Canais Oficiais</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://wa.me/5547996300079?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
                    WhatsApp: 47 996 300 079
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/setimadigital/" target="_blank" rel="noopener noreferrer">
                    Instagram: @setimadigital
                  </a>
                </li>
                <li>
                  <a href="https://linktr.ee/setimadigital" target="_blank" rel="noopener noreferrer">
                    Linktree: setimadigital
                  </a>
                </li>
                <li>
                  <span style={{ color: "#6a7185", fontSize: "0.9rem" }}>
                    Contato: Matheus de Paula
                  </span>
                </li>
                <li>
                  <span style={{ color: "#6a7185", fontSize: "0.9rem" }}>
                    Blumenau / SC — Atendimento Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 Sétima Digital. Todos os direitos reservados.
            </div>
            <div style={{ color: "#656c80" }}>
              Conexão • Ligação • Conversão
            </div>
          </div>
        </footer>


        <a
          className="floating-whatsapp-btn"
          href="https://wa.me/5547996300079?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
          title="Solicitar orçamento pelo WhatsApp"
        >
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M16.04 3C8.86 3 3.02 8.82 3.02 15.98c0 2.29.6 4.53 1.75 6.5L3 29l6.7-1.75a13.05 13.05 0 0 0 6.33 1.62h.01c7.17 0 13.01-5.82 13.01-12.98A12.91 12.91 0 0 0 25.23 6.7 12.94 12.94 0 0 0 16.04 3zm0 23.65h-.01a10.8 10.8 0 0 1-5.5-1.5l-.4-.24-3.98 1.04 1.06-3.87-.26-.4a10.68 10.68 0 0 1-1.64-5.7c0-5.91 4.82-10.72 10.74-10.72 2.86 0 5.55 1.11 7.57 3.14a10.64 10.64 0 0 1 3.14 7.57c0 5.91-4.81 10.68-10.72 10.68zm5.9-8.02c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.32c.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"/>
          </svg>
        </a>

        <Dialog open={activeShort !== null} onOpenChange={(open) => { if (!open) setActiveShort(null); }}>
          <DialogContent className="shorts-dialog" aria-describedby={undefined}>
            <DialogTitle className="sr-only">Player de vídeo</DialogTitle>
            {activeShort !== null && (
              <div className="shorts-player">
                <iframe
                  src={activeShortEmbedUrl ?? `https://www.youtube.com/embed/${activeShort}?autoplay=1&rel=0${activeShortStart > 0 ? `&start=${activeShortStart}` : ""}`}
                  title="Vídeo da Sétima Digital"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>






    </div>
  );
}
