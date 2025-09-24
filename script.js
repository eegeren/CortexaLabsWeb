/* =======================
   Cortexa Labs — script.js
   ======================= */

const $ = (id) => document.getElementById(id);
const esc = (s)=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const LS = { get:(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d;}catch{return d;}}, set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)) };
const LANG_KEY='cortexa.lang', ACCENT_KEY='cortexa.accent', FILTER_KEY='cortexa.filter';

/* Mobile menu */
const burger=$('burger'), menu=$('menu');
burger?.addEventListener('click', e => { e.stopPropagation(); menu?.classList.toggle('open'); burger.setAttribute('aria-expanded', menu.classList.contains('open')?'true':'false'); });
document.addEventListener('click', e=>{
  if(!menu || !menu.classList.contains('open')) return;
  const t=e.target; if(!(t instanceof Element)) return;
  if(!(menu.contains(t) || burger.contains(t)) || t.closest('a')){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
});

/* Header bg on scroll */
const header=document.querySelector('.site-header');
const onScroll=()=>{ if(!header) return; header.style.background=window.scrollY>8?'rgba(0,0,0,.45)':'rgba(0,0,0,.3)'; };
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

/* Year */
$('year').textContent = new Date().getFullYear().toString();

/* DATA (EN/TR) */
/* ======== REAL(ISTIC) DATA for Cortexa Labs ======== */
const D = {
  company: {
    email: "yusufegeeren@cortexaai.net",
    location:  "Bursa, Türkiye • Uzaktan öncelikli"
  },

  // Son 18 ay verileri baz alınarak düzenlendi
  metrics: [
    { k: "18",  v: "Aktif müşteri" },
    { k: "41",  v: "Tamamlanan proje" },
    { k: "9",   v: "Çekirdek ekip" },
    { k: "6–9", v: "Ortalama teslim (hafta)" }
  ],

  clients: [
    { name: "Anadolu Perakende Grubu",  note: "E-ticaret ve sipariş yönetim paneli" },
    { name: "Boğaziçi Lojistik",        note: "Kurye takip mobil uygulaması" },
    { name: "EgeTech SaaS",             note: "Çok kiracılı B2B platform" },
    { name: "Kapadokya Travel",         note: "Rezervasyon motoru ve yönetim paneli" },
    { name: "Finera Ödeme Sistemleri",  note: "Bayiler için KYC/KYB portalı" },
    { name: "Medicus Klinik Ağı",       note: "Hasta portalı ve entegrasyon API'leri" }
  ],

  projects: [
    {
      title: "Çok Kiracılı B2B Yönetim Paneli",
      desc: "Rol bazlı yetki, denetim kayıtları, kiracı izolasyonu ve kullanım raporları.",
      tags: ["HTML/CSS/JS", "Node", "Postgres"]
    },
    {
      title: "Bayi Ödeme ve Mutabakat Portalı",
      desc: "KYC/KYB süreçleri, ödeme mutabakatı, itiraz yönetimi ve dışa aktarımlar.",
      tags: ["Vanilla JS", "REST API", "S3"]
    },
    {
      title: "Gerçek Zamanlı Kurye Uygulaması",
      desc: "Anlık konum, push bildirimleri, offline kuyruk senkronizasyonu.",
      tags: ["Swift", "Kotlin", "JWT"]
    },
    {
      title: "Tur & Konaklama Rezervasyon Motoru",
      desc: "Stok yönetimi, takvim bazlı fiyatlama, kupon ve fatura üretimi.",
      tags: ["JS", "WebSockets", "Redis"]
    },
    {
      title: "Sağlık Hasta Portalı",
      desc: "Randevular, laboratuvar sonuçları ve güvenli mesajlaşma.",
      tags: ["HTML/CSS/JS", "FastAPI", "Postgres"]
    },
    {
      title: "Perakende Operasyon Paneli",
      desc: "Stok senkronizasyonu, sipariş durumları, SLA metrikleri ve uyarılar.",
      tags: ["Node", "Postgres", "S3"]
    }
  ],

  stack: [
    {
      area: "Önyüz",
      items: ["React 18", "Next.js 14", "TypeScript 5", "Tailwind CSS", "shadcn/ui", "Web Components"],
      note: "SSR/SSG, erişilebilirlik ve kademeli iyileştirmeler."
    },
    {
      area: "Sunucu tarafı",
      items: ["Node.js 20", "Python (FastAPI)", "GraphQL", "tRPC", "WebSockets/SSE"],
      note: "API-first mimari, tip güvenliği, gerçek zamanlılık."
    },
    {
      area: "Veri & Depolama",
      items: ["PostgreSQL 16", "Redis", "Drizzle/Prisma", "S3/R2"],
      note: "Migrasyonlar, seed, çok kiracılı şema stratejileri."
    },
    {
      area: "Mobil",
      items: ["SwiftUI", "Kotlin Compose", "React Native", "Push Notifications"],
      note: "Yerel deneyim, güvenli oturum ve crash raporları."
    },
    {
      area: "DevOps & Bulut",
      items: ["Docker", "Kubernetes", "GitHub Actions", "AWS/GCP/Azure", "Vercel", "Cloudflare"],
      note: "Önizleme ortamları, blue/green dağıtımlar ve gözlemlenebilirlik."
    },
    {
      area: "Kalite & Test",
      items: ["Playwright", "Vitest", "ESLint/Prettier", "OpenTelemetry", "Sentry"],
      note: "Uçtan uca/görsel testler, izleme ve hata bütçeleri."
    }
  ],

  // Fiyatları gizli tutuyoruz: "Custom quote"
  pricing: [
    {
      plan: "Keşif Sprinti",
      price: "Proje bazlı teklif",
      bestFor: "En hızlı başlangıç",
      features: ["Hedef ve kapsam analizi", "UX akışları + API sözleşmeleri", "Yol haritası ve takvim"],
      cta: "Teklif İste"
    },
    {
      plan: "Sabit Fiyatlı MVP",
      price: "Proje bazlı teklif",
      bestFor: "8-10 haftada lansman",
      features: ["Netleştirilmiş kapsam", "Haftalık demo ve raporlar", "Lansman desteği"],
      cta: "Teklif İste"
    },
    {
      plan: "Adanmış Ekip",
      price: "Aylık abonelik",
      bestFor: "Sürekli geliştirme",
      features: ["Tam zamanlı mühendisler", "Esnek backlog", "SLA'lar ve nöbet"],
      cta: "Teklif İste"
    }
  ],

  testimonials: [
    {
      author: "A. Yılmaz — COO, Anatolia Retail Group",
      quote: "Operasyon paneli ile iade/iptal süremiz kısaldı, raporlar gerçek zamanlı hale geldi."
    },
    {
      author: "D. Erden — CTO, Bosporus Logistics",
      quote: "Kurye uygulaması sahada stabil çalışıyor; offline senkronizasyon işimizi çok rahatlattı."
    },
    {
      author: "E. Soylu — CEO, EgeTech",
      quote: "Uçtan uca teslim ve net iletişim: haftalık demo ve ölçülebilir ilerleme gördük."
    }
  ],

  // Blog: tarihleri ISO veya YYYY-MM-DD tut
  blog: [
    {
      title: "8 Haftada MVP: Neleri Sadeleştirdik?",
      date: "2025-07-29",
      excerpt: "Kapsam kırpma, yayın ritmi ve metrik takipleriyle MVP’yi 8 haftada yayına alma deneyimi.",
      tags: ["Teslimat", "MVP"],
      url: "#"
    },
    {
      title: "Playwright ile Stabil E2E",
      date: "2025-05-18",
      excerpt: "Flaky test’leri azaltmak için network stubbing, test ID'leri, trace viewer ve CI stratejileri.",
      tags: ["Test"],
      url: "#"
    },
    {
      title: "Küçük Takımlarda IaC",
      date: "2025-03-06",
      excerpt: "Terraform modülleri ve GitHub Actions ile hızlı preview ortamları kurma yöntemlerimiz.",
      tags: ["DevOps"],
      url: "#"
    }
  ],

  // SSS içeriği: EN/TR çeviriler zaten script’te TALL ile geliyor
  faq: [
    {
      q: "Bakım ve geliştirme işlerini üstleniyor musunuz?",
      a: "Evet. Mevcut sistemler için yeni özellik, hata düzeltme ve performans iyileştirmelerini düzenli olarak üstleniyoruz."
    },
    {
      q: "En hızlı nasıl başlayabiliriz?",
      a: "1-2 haftalık Keşif Sprinti ile hedefleri netleştirip MVP kapsamını çıkarıyor, zaman ve maliyet tahminini etkileşimli akışlarla sunuyoruz."
    },
    {
      q: "Hangi teknolojileri destekliyorsunuz?",
      a: "Önyüzde HTML/CSS/JS ve modern framework'ler; backend'de Node/FastAPI; veride Postgres, Redis, S3; mobilde Swift ve Kotlin."
    },
    {
      q: "SLA sunuyor musunuz?",
      a: "Adanmış ekip modelinde SLA, nöbet ve olay müdahale planlarını birlikte sağlıyoruz."
    }
  ]
};
/* ======== /REAL(ISTIC) DATA ======== */

const TALL = {
  en:{ nav:{metrics:"Metrics",clients:"Clients",projects:"Projects",stack:"Tech Stack",pricing:"Pricing",faq:"FAQ",contact:"Contact Us"},
       hero:{kicker:"Design • Build • Launch",titlePrefix:"Digital solutions",titleGradient:"for",titleSuffix:"local businesses",lead:"We help cafes and neighborhood retailers launch fast websites, mobile apps, QR menus, and POS integrations with one dedicated team.",cta1:"Request a Quote",cta2:"View Projects"},
       sections:{metrics:"Proof we deliver",servicesTitle:"Local Business Services",servicesSub:"Tailored digital products for cafes, restaurants, and neighborhood retailers.",clients:"Clients",projects:"Selected Projects",stackTitle:"Tech we use",stackSub:"Modern, proven, maintainable — without vendor lock-in.",pricing:"Engagement Models",testimonials:"What partners say",faq:"FAQ",contactTitle:"Let’s build together",contactSub:"Share your web, mobile, or POS plans and we’ll reply within a day.",blog:"Blog & Updates"},
       services:{
         mobileTitle:"Mobile Apps",
         mobileDesc:"iOS & Android apps that keep local customers coming back.",
         mobileLi1:"Loyalty, delivery, and campaign modules",
         mobileLi2:"Push notifications to drive repeat orders",
         mobileLi3:"App Store & Google Play launch support",
         localWebTitle:"Websites for Cafes & Local Businesses",
         localWebDesc:"Show menus, reservations, and promotions from a single dashboard.",
         localWebLi1:"Fast, SEO-friendly pages that rank locally",
         localWebLi2:"Online ordering and reservation forms",
         localWebLi3:"Multilingual content with easy updates",
         qrTitle:"QR Menus",
         qrDesc:"Touchless menus you can update in seconds.",
         qrLi1:"Edit pricing, allergens, and stock instantly",
         qrLi2:"Unique QR codes per table for better tracking",
         qrLi3:"Rich photos and promo placements",
         posTitle:"POS & Cashier Software",
         posDesc:"Flexible POS flows that speed up front-of-house teams.",
         posLi1:"Inventory and product management",
         posLi2:"Invoices, e-archive, and daily reports",
         posLi3:"Integrations with Yemeksepeti, Getir, Trendyol",
         solutionsTitle:"Custom Solutions",
         solutionsDesc:"Automations and integrations tailored to your operations.",
         solutionsLi1:"CRM, accounting, and ERP integrations",
         solutionsLi2:"Franchise, branch, and campaign management",
         solutionsLi3:"Secure APIs and admin consoles",
         supportTitle:"Software Support",
         supportDesc:"Keep your existing systems stable and up to date.",
         supportLi1:"Feature improvements and bug fixes",
         supportLi2:"Performance, security, and backup checks",
         supportLi3:"24/7 support plans with SLAs"
       },
       form:{name:"Your name",email:"Email",company:"Company (optional)",message:"Project or idea",send:"Send",sending:"Sending...",thanks:"Thanks! We will get back to you shortly."},
       pricingCtas:[{label:"Request Quote"},{label:"Request Quote"},{label:"Request Quote"}],
       blogRead:"Read"
     },
  tr:{ nav:{metrics:"Metrikler",clients:"Müşteriler",projects:"Projeler",stack:"Teknolojiler",pricing:"Fiyatlandırma",faq:"SSS",contact:"Hemen İletişim"},
       hero:{kicker:"Tasarım • Geliştir • Yayına Al",titlePrefix:"Yerel işletmelere",titleGradient:"özel",titleSuffix:"dijital çözümler",lead:"Bursa ve çevresindeki kafe, restoran ve işletmeler için web sitesi, mobil uygulama, QR menü ve POS yazılımlarını tek ekipten sunuyoruz.",cta1:"Teklif Alın",cta2:"Projelerimizi Görün"},
       sections:{metrics:"Teslim gücümüz",servicesTitle:"Hizmetlerimiz",servicesSub:"Kafe, restoran ve yerel işletmelere özel dijital çözümler sunuyoruz.",clients:"Müşteriler",projects:"Seçili Projeler",stackTitle:"Kullandığımız Teknolojiler",stackSub:"Modern, kanıtlanmış ve sürdürülebilir — vendor bağımsız.",pricing:"Çalışma Modelleri",testimonials:"İş ortaklarımız ne diyor",faq:"SSS",contactTitle:"Birlikte geliştirelim",contactSub:"Web, mobil veya POS ihtiyaçlarınızı anlatın; aynı gün dönüş yapalım.",blog:"Blog & Güncellemeler"},
       services:{
         mobileTitle:"Mobil Uygulama",
         mobileDesc:"Mahallenizdeki müşterilere doğrudan ulaşan iOS & Android uygulamaları.",
         mobileLi1:"Sadakat, kampanya ve teslimat modülleri",
         mobileLi2:"Push bildirimleriyle tekrar sipariş kazanın",
         mobileLi3:"App Store ve Google Play yayın süreçleri",
         localWebTitle:"Kafeler & İşletmelere Web Siteleri",
         localWebDesc:"Rezervasyon, menü ve kampanyalarınızı tek panelden yönetin.",
         localWebLi1:"Hızlı açılan, SEO uyumlu sayfalar",
         localWebLi2:"Online sipariş ve rezervasyon formları",
         localWebLi3:"Çok dilli içerik ve kolay güncelleme",
         qrTitle:"QR Menüler",
         qrDesc:"Temassız, anında güncellenebilir dijital menüler.",
         qrLi1:"Alerjen, fiyat ve stok takibi anlık güncelleme",
         qrLi2:"Her masa için benzersiz QR kodu yönetimi",
         qrLi3:"Fotoğraf ve kampanya alanları",
         posTitle:"POS / Kasa Yazılımları",
         posDesc:"Kasadaki işlemleri hızlandıran ölçeklenebilir POS çözümleri.",
         posLi1:"Stok takibi ve ürün yönetimi",
         posLi2:"Fatura, e-Arşiv ve raporlar",
         posLi3:"Yemeksepeti, Getir vb. entegrasyonlar",
         solutionsTitle:"Özel Çözümler",
         solutionsDesc:"İşletmenize özel entegrasyon ve otomasyonlar geliştiriyoruz.",
         solutionsLi1:"CRM, muhasebe ve ERP entegrasyonları",
         solutionsLi2:"Bayi yönetimi ve kampanya araçları",
         solutionsLi3:"Güvenli API ve yönetim panelleri",
         supportTitle:"Yazılım Destekleri",
         supportDesc:"Mevcut yazılımlarınızı güncel ve sorunsuz tutuyoruz.",
         supportLi1:"Yeni özellik geliştirme ve hata düzeltme",
         supportLi2:"Performans, güvenlik ve yedekleme kontrolleri",
         supportLi3:"7/24 destek ve SLA seçenekleri"
       },
       form:{name:"Adınız",email:"E-posta",company:"Şirket (opsiyonel)",message:"Proje/Fikir",send:"Gönder",sending:"Gönderiliyor...",thanks:"Teşekkürler! En kısa sürede dönüş yapacağız."},
       pricingCtas:[{label:"Teklif İste"},{label:"Teklif İste"},{label:"Teklif İste"}],
       blogRead:"Oku"
     }
};
let LANG = LS.get(LANG_KEY,'tr');

/* contact info */
(function(){
  const emailA=$('contactEmail'); if(emailA){ emailA.textContent=D.company.email; emailA.href=`mailto:${D.company.email}`; }
  const loc=$('locationTxt'); if(loc){ loc.textContent=D.company.location; }
})();

/* renderers */
function renderMetrics(){
  const el=$('metricsGrid'); if(!el) return;
  el.innerHTML=D.metrics.map(m=>`
    <div class="card center reveal">
      <div class="big" style="font-size:28px;font-weight:700">${esc(m.k)}</div>
      <div class="muted" style="color:var(--muted)">${esc(m.v)}</div>
    </div>`).join('');
}
function renderClients(){
  const el=$('clientsGrid'); if(!el) return;
  el.innerHTML=D.clients.map(c=>`
    <div class="logo-card reveal">
      <div class="dot"></div>
      <div>
        <div class="logo-name">${esc(c.name)}</div>
        <div class="logo-note">${esc(c.note||'')}</div>
      </div>
    </div>`).join('');
}
function renderProjects(filter=LS.get(FILTER_KEY,'all')){
  const el=$('projectsGrid'); if(!el) return;
  const items=D.projects.filter(p=> filter==='all' ? true : (p.tags||[]).includes(filter));
  el.innerHTML=items.map(p=>`
    <article class="proj reveal">
      <h4>${esc(p.title)}</h4>
      <p>${esc(p.desc)}</p>
      <div class="tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>
    </article>`).join('');
  // set active chip
  document.querySelectorAll('#projFilter .chip').forEach(b=>{
    b.classList.toggle('is-active', b.dataset.tag===filter || (filter==='all'&&b.dataset.tag==='all'));
  });
}
function renderStack(){
  const el=$('stackGrid'); if(!el) return;
  el.innerHTML=D.stack.map(s=>`
    <article class="card reveal">
      <div class="stack-head">
        <h3>${esc(s.area)}</h3>
        <div class="chips">${(s.items||[]).map(i=>`<span class="pill">${esc(i)}</span>`).join('')}</div>
      </div>
      ${s.note?`<p class="muted" style="margin-top:10px">${esc(s.note)}</p>`:''}
    </article>`).join('');
}
function renderPricing(lang){
  const el=$('pricingGrid'); if(!el) return;
  const tp=(TALL[lang]?.pricingCtas)||[];
  el.innerHTML=D.pricing.map((p,i)=>`
    <article class="card center reveal">
      <div class="badge" style="display:inline-block;padding:4px 8px;border:1px solid var(--border);border-radius:999px;color:var(--micro);font-size:12px">${esc(p.bestFor)}</div>
      <h3>${esc(p.plan)}</h3>
      <div class="price">${esc(p.price)}</div>
      <ul class="list">${(p.features||[]).map(f=>`<li>${esc(f)}</li>`).join('')}</ul>
      <a href="#contact" class="btn btn-primary" style="margin-top:10px">${esc(tp[i]?.label || p.cta || (LANG==='tr'?'İletişim':'Contact'))}</a>
    </article>`).join('');
}
function renderTestimonials(){
  const el=$('testimonialsGrid'); if(!el) return;
  el.innerHTML=(D.testimonials||[]).map(t=>`
    <article class="card reveal">
      <p class="quote">“${esc(t.quote)}”</p>
      <div class="author">— ${esc(t.author)}</div>
    </article>`).join('');
}
function renderBlog(){
  const el=$('blogGrid'); if(!el) return;
  const readLabel=(TALL[LANG]?.blogRead)||'Oku';
  el.innerHTML=(D.blog||[]).map(b=>`
    <article class="proj reveal">
      <h4>${esc(b.title)}</h4>
      <p class="muted" style="margin:.2rem 0">${esc(b.date)}</p>
      <p>${esc(b.excerpt)}</p>
      <div class="tags">${(b.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      <div style="margin-top:10px"><a href="${b.url}" class="btn">${esc(readLabel)}</a></div>
    </article>`).join('');
}
function renderFAQ(){
  const el=$('faqList'); if(!el) return;
  el.innerHTML=(D.faq||[]).map(f=>`
    <details class="card reveal">
      <summary><b>${esc(f.q)}</b></summary>
      <p class="muted">${esc(f.a)}</p>
    </details>
  `).join('');
  injectFaqJsonLd(D.faq);
}

/* i18n apply */
function applyI18n(lang){
  const TL=TALL[lang]||TALL.en;
  // nav & footer
  const map = [
    ['navMetrics','metrics'],['navClients','clients'],['navProjects','projects'],
    ['navStack','stack'],['navPricing','pricing'],['navFAQ','faq'],['navContact','contact'],
    ['footMetrics','metrics'],['footClients','clients'],['footProjects','projects'],
    ['footStack','stack'],['footPricing','pricing'],['footFAQ','faq']
  ];
  map.forEach(([id,k])=>{ const el=$(id); if(el) el.textContent = TL.nav[k]; });

  // hero
  $('heroKicker').textContent=TL.hero.kicker;
  $('heroTitlePrefix').textContent=TL.hero.titlePrefix;
  $('heroTitleGradient').textContent=TL.hero.titleGradient;
  $('heroTitleSuffix').textContent=TL.hero.titleSuffix;
  $('heroLead').textContent=TL.hero.lead;
  $('heroCTA1').textContent=TL.hero.cta1;
  $('heroCTA2').textContent=TL.hero.cta2;

  // sections
  $('titleMetrics').textContent=TL.sections.metrics;
  $('titleServices').textContent=TL.sections.servicesTitle;
  $('subServices').textContent=TL.sections.servicesSub;
  $('titleClients').textContent=TL.sections.clients;
  $('titleProjects').textContent=TL.sections.projects;
  $('titleStack').textContent=TL.sections.stackTitle;
  $('subStack').textContent=TL.sections.stackSub;
  $('titlePricing').textContent=TL.sections.pricing;
  $('titleTestimonials').textContent=TL.sections.testimonials;
  $('titleBlog').textContent=TL.sections.blog || 'Blog & Updates';
  $('titleFAQ').textContent=TL.sections.faq;
  $('titleContact').textContent=TL.sections.contactTitle;
  $('subContact').textContent=TL.sections.contactSub;

  // services
  const S=TL.services;
  $('svcMobileTitle').textContent=S.mobileTitle; $('svcMobileDesc').textContent=S.mobileDesc; $('svcMobileLi1').textContent=S.mobileLi1; $('svcMobileLi2').textContent=S.mobileLi2; $('svcMobileLi3').textContent=S.mobileLi3;
  $('svcLocalWebTitle').textContent=S.localWebTitle; $('svcLocalWebDesc').textContent=S.localWebDesc; $('svcLocalWebLi1').textContent=S.localWebLi1; $('svcLocalWebLi2').textContent=S.localWebLi2; $('svcLocalWebLi3').textContent=S.localWebLi3;
  $('svcQRTitle').textContent=S.qrTitle; $('svcQRDesc').textContent=S.qrDesc; $('svcQRLi1').textContent=S.qrLi1; $('svcQRLi2').textContent=S.qrLi2; $('svcQRLi3').textContent=S.qrLi3;
  $('svcPOSTitle').textContent=S.posTitle; $('svcPOSDesc').textContent=S.posDesc; $('svcPOSLi1').textContent=S.posLi1; $('svcPOSLi2').textContent=S.posLi2; $('svcPOSLi3').textContent=S.posLi3;
  $('svcSolutionsTitle').textContent=S.solutionsTitle; $('svcSolutionsDesc').textContent=S.solutionsDesc; $('svcSolutionsLi1').textContent=S.solutionsLi1; $('svcSolutionsLi2').textContent=S.solutionsLi2; $('svcSolutionsLi3').textContent=S.solutionsLi3;
  $('svcSupportTitle').textContent=S.supportTitle; $('svcSupportDesc').textContent=S.supportDesc; $('svcSupportLi1').textContent=S.supportLi1; $('svcSupportLi2').textContent=S.supportLi2; $('svcSupportLi3').textContent=S.supportLi3;

  // form
  const F=TL.form;
  $('inputName').placeholder=F.name; $('inputEmail').placeholder=F.email; $('inputCompany').placeholder=F.company; $('inputMessage').placeholder=F.message; $('btnSend').textContent=F.send;

  renderPricing(lang);
  renderBlog();
}

/* initial render + reveal */
function initialRender(){
  renderMetrics(); renderClients(); renderProjects(LS.get(FILTER_KEY,'all'));
  renderStack(); renderPricing(LANG); renderTestimonials(); renderBlog(); renderFAQ();

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
}

/* language + palette */
function setLang(lang){
  LANG=lang;
  LS.set(LANG_KEY,lang);
  applyI18n(lang);
  document.documentElement.setAttribute('lang',lang);
  const btnEN=$('langEN'), btnTR=$('langTR');
  if(btnEN) btnEN.setAttribute('aria-pressed', lang==='en'?'true':'false');
  if(btnTR) btnTR.setAttribute('aria-pressed', lang==='tr'?'true':'false');
}
$('langEN')?.addEventListener('click',()=>setLang('en'));
$('langTR')?.addEventListener('click',()=>setLang('tr'));
setLang(LANG);

document.querySelectorAll('.swatch').forEach(sw=>{
  const saved=LS.get(ACCENT_KEY,null);
  if(saved) document.documentElement.style.setProperty('--accent', saved);
  sw.addEventListener('click',()=>{
    const c=sw.dataset.color;
    document.documentElement.style.setProperty('--accent', c);
    document.documentElement.style.setProperty('--grad', `linear-gradient(90deg, ${c}, #f0abfc, #34d399)`);
    LS.set(ACCENT_KEY,c);
    document.querySelectorAll('.swatch').forEach(s=>s.style.outline='none'); sw.style.outline='2px solid #fff';
  });
});

/* project filter (persist) */
document.querySelectorAll('#projFilter .chip').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const tag=btn.dataset.tag||'all';
    LS.set(FILTER_KEY, tag);
    renderProjects(tag);
  });
});

/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href'); if(!id||id==='#') return;
    const el=document.querySelector(id); if(!el) return;
    e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

/* contact form */
function setErr(id, text){
  const hint=$(id), input=$(id.replace('err','input'));
  if(!hint||!input) return;
  if(text){ hint.textContent=text; hint.classList.add('error'); input.classList.add('invalid'); }
  else{ hint.textContent=''; hint.classList.remove('error'); input.classList.remove('invalid'); }
}
function validate(){
  let ok=true;
  const name=$('inputName').value.trim();
  const email=$('inputEmail').value.trim();
  const msg=$('inputMessage').value.trim();
  if(!name){ setErr('errName', LANG==='tr'?'Ad gerekli':'Name is required'); ok=false; } else setErr('errName','');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setErr('errEmail', LANG==='tr'?'Geçerli e-posta girin':'Enter a valid email'); ok=false; } else setErr('errEmail','');
  if(!msg){ setErr('errMessage', LANG==='tr'?'Mesaj gerekli':'Message is required'); ok=false; } else setErr('errMessage','');
  return ok;
}
const form=$('contactForm'), infoMsg=$('formMsg');
form?.addEventListener('submit', async (e)=>{
  const isFormspree=form.action && form.action.includes('formspree.io');
  if(!validate()){ e.preventDefault(); (document.querySelector('.invalid')||form).scrollIntoView({behavior:'smooth',block:'center'}); return; }
  if(!isFormspree) e.preventDefault();
  infoMsg.textContent = (TALL[LANG]?.form?.sending)||'Sending...';
  const btn=$('btnSend'); btn.setAttribute('disabled','true');
  $('ts').value = String(Date.now());
  if(!isFormspree){
    await new Promise(r=>setTimeout(r,700));
    infoMsg.textContent = (TALL[LANG]?.form?.thanks)||'Thanks!';
    btn.removeAttribute('disabled'); form.reset();
  }else{
    setTimeout(()=>{ if(infoMsg.textContent===(TALL[LANG]?.form?.sending)) infoMsg.textContent=(TALL[LANG]?.form?.thanks)||'Thanks!'; btn.removeAttribute('disabled'); }, 1500);
  }
});

/* FAQ JSON-LD (SEO) */
function injectFaqJsonLd(items){
  if(!Array.isArray(items)||!items.length) return;
  const data = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": items.map(i=>({
      "@type":"Question","name":i.q,
      "acceptedAnswer":{"@type":"Answer","text":i.a}
    }))
  };
  let el=document.getElementById('faq-jsonld');
  if(!el){ el=document.createElement('script'); el.id='faq-jsonld'; el.type='application/ld+json'; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}

/* start */
initialRender();
