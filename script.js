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
    location:  ",
    phone: "+90 532 222 33 44",
    phoneHref: "+905322223344",
    whatsappHref: "https://wa.me/905322223344?text=Merhaba%20Cortexa%20Labs%2C%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
    calendar: "https://cal.com/cortexalabs/30min"
  },

  projects: [
    {
      title: "Kahve Durağı QR Menü Platformu",
      desc: "Her masa için benzersiz QR, fotoğraflı menü yönetimi ve günlük kampanya duyuruları.",
      tags: ["QR", "Next.js", "Supabase"]
    },
    {
      title: "Bursa Kebap Evi Web Sitesi",
      desc: "SEO uyumlu vitrin, rezervasyon & paket servis formları, Google Business senkronizasyonu.",
      tags: ["SEO", "Form", "Analytics"]
    },
    {
      title: "Meyra Pastaneleri POS Entegrasyonu",
      desc: "Stok-satış raporları, Yemeksepeti/Getir entegrasyonları ve günlük kasa kapanışı otomasyonu.",
      tags: ["POS", "API", "Raporlama"]
    },
    {
      title: "Granola Cafe Sadakat Uygulaması",
      desc: "iOS/Android uygulamasıyla puan toplama, push kampanyaları ve teslimat takibi.",
      tags: ["Mobil", "Push", "Firebase"]
    }
  ],

  stack: [
    {
      area: "Önyüz",
      items: ["Next.js", "React", "Tailwind", "Astro", "Alpine.js"],
      note: "Hızlı açılan, SEO dostu ve çok dilli web siteleri."
    },
    {
      area: "Sunucu Tarafı",
      items: ["Node.js", "FastAPI", "tRPC", "Directus", "Hasura"],
      note: "Sipariş, rezervasyon ve stok yönetimi için güvenilir API'ler."
    },
    {
      area: "Veri & Raporlama",
      items: ["PostgreSQL", "Supabase", "Firebase", "Metabase", "PowerBI"],
      note: "Şube bazlı satış raporları ve gerçek zamanlı dashboard'lar."
    },
    {
      area: "Mobil",
      items: ["React Native", "SwiftUI", "Kotlin", "Expo"],
      note: "Sadakat, teslimat ve saha ekipleri için native deneyimler."
    },
    {
      area: "DevOps",
      items: ["Vercel", "Railway", "Docker", "Fly.io", "Cloudflare"],
      note: "Otomatik güncellemeler ve kesintisiz yayın akışı."
    },
    {
      area: "Kalite",
      items: ["Playwright", "Lighthouse", "Sentry", "Datadog"],
      note: "Her yayında performans ve güvenlik kontrolleri."
    }
  ],

  // Fiyatları gizli tutuyoruz: "Custom quote"
  pricing: [
    {
      plan: "QR Menü Starter",
      price: "Başlangıç 18.000₺",
      bestFor: "Kafeler & restoranlar",
      features: ["Sınırsız kategori ve ürün", "Her masa için QR", "Günlük menü ve kampanya alanı"],
      cta: "Teklif İste"
    },
    {
      plan: "Web Site Express",
      price: "4 haftada teslim",
      bestFor: "Yerel işletme vitrinleri",
      features: ["SEO uyumlu tek sayfa", "Rezervasyon/iletişim formları", "Google Business entegrasyonu"],
      cta: "Teklif İste"
    },
    {
      plan: "POS & Entegrasyon Paketi",
      price: "Aylık abonelik",
      bestFor: "Şube ve franchise",
      features: ["Stok & satış raporları", "Yemeksepeti/Getir entegrasyonları", "Özel eğitim ve onboarding"],
      cta: "Teklif İste"
    }
  ],

  // Blog: tarihleri ISO veya YYYY-MM-DD tut
  blog: [
    {
      title: "QR Menünüzü 1 Günde Nasıl Güncellersiniz?",
      date: "2025-08-12",
      excerpt: "Mevsimsel ürünler, alerjen bilgisi ve kampanyaları tek panelden yönetmenin ipuçları.",
      tags: ["QR Menü", "İpuçları"],
      url: "#"
    },
    {
      title: "Restoranlar İçin 5 Ödeme Entegrasyonu",
      date: "2025-07-01",
      excerpt: "Yemeksepeti, Getir, Trendyol ve POS cihazlarınızı aynı ekranda buluşturun.",
      tags: ["POS", "Entegrasyon"],
      url: "#"
    },
    {
      title: "Yerel SEO ile Masanızı Doldurun",
      date: "2025-05-20",
      excerpt: "Google Business, Instagram ve web sitenizle organik rezervasyon artırma rehberi.",
      tags: ["SEO", "Pazarlama"],
      url: "#"
    }
  ],

  // SSS içeriği: EN/TR çeviriler zaten script’te TALL ile geliyor
  faq: [
    {
      q: "QR menüyü ne kadar sürede yayına alıyorsunuz?",
      a: "Menü içeriğiniz hazırsa aynı gün içinde yayınlıyoruz; eğitim ve tanıtım materyallerini de teslim ediyoruz."
    },
    {
      q: "Web sitemizde rezervasyon ve sipariş alabilir miyiz?",
      a: "Evet. Rezervasyon formu, online sipariş ve WhatsApp yönlendirmelerini aynı panelden yönetebilirsiniz."
    },
    {
      q: "POS entegrasyonlarında hangi sistemleri destekliyorsunuz?",
      a: "Mikro, Logo, Paraşüt gibi muhasebe yazılımlarıyla Yemeksepeti, Getir, Trendyol gibi kanalları entegre ediyoruz."
    },
    {
      q: "Destek sonrası bakım sunuyor musunuz?",
      a: "Aylık bakım paketiyle sürüm yükseltmeleri, yedekleme ve güvenlik kontrollerini biz üstleniyoruz."
    }
  ]
};
/* ======== /REAL(ISTIC) DATA ======== */

const TALL = {
  en:{ nav:{projects:"Projects",stack:"Tech Stack",pricing:"Pricing",faq:"FAQ",contact:"Contact Us"},
       hero:{kicker:"Design • Build • Launch",titlePrefix:"Digital solutions",titleGradient:"for",titleSuffix:"local businesses",lead:"We help cafes and neighborhood retailers launch fast websites, mobile apps, QR menus, and POS integrations with one dedicated team.",cta1:"Request a Quote",cta2:"View Projects"},
       sections:{servicesTitle:"Local Business Services",servicesSub:"Tailored digital products for cafes, restaurants, and neighborhood retailers.",projects:"Selected Projects",stackTitle:"Tech we use",stackSub:"Fast, reliable tools for hospitality, retail, and delivery teams.",pricing:"Packages",faq:"FAQ",contactTitle:"Let’s build together",contactSub:"Share your web, mobile, or POS plans and we’ll reply within a day.",blog:"Blog & Updates"},
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
       quick:{title:"Quick contact",note:"Reach us via WhatsApp, phone, or book a call. We'll respond the same day.",whatsapp:"Message on WhatsApp",call:"Call now",meeting:"Schedule a meeting"},
       form:{name:"Your name",email:"Email",company:"Company (optional)",message:"Project or idea",send:"Send",sending:"Sending...",thanks:"Thanks! We will get back to you shortly."},
       pricingCtas:[{label:"Request Quote"},{label:"Request Quote"},{label:"Request Quote"}],
       blogRead:"Read"
     },
  tr:{ nav:{projects:"Projeler",stack:"Teknolojiler",pricing:"Fiyatlandırma",faq:"SSS",contact:"Hemen İletişim"},
       hero:{kicker:"Tasarım • Geliştir • Yayına Al",titlePrefix:"Yerel işletmelere",titleGradient:"özel",titleSuffix:"dijital çözümler",lead:"Bursa ve çevresindeki kafe, restoran ve işletmeler için web sitesi, mobil uygulama, QR menü ve POS yazılımlarını tek ekipten sunuyoruz.",cta1:"Teklif Alın",cta2:"Projelerimizi Görün"},
       sections:{servicesTitle:"Hizmetlerimiz",servicesSub:"Kafe, restoran ve yerel markalara özel dijital çözümler geliştiriyoruz.",projects:"Seçili Projeler",stackTitle:"Kullandığımız Teknolojiler",stackSub:"Hızlı, güvenilir ve yerel ihtiyaçlara uygun araçlar.",pricing:"Paketler",faq:"SSS",contactTitle:"Birlikte geliştirelim",contactSub:"Web, mobil veya POS ihtiyaçlarınızı anlatın; aynı gün dönüş yapalım.",blog:"Blog & Güncellemeler"},
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
       quick:{title:"Hızlı iletişim kanalları",note:"WhatsApp, telefon veya takvimden bize ulaşın; aynı gün dönüş yapalım.",whatsapp:"WhatsApp'tan Yazın",call:"Hemen Arayın",meeting:"Görüşme Planlayın"},
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
  $('quickWhatsapp')?.setAttribute('href', D.company.whatsappHref||'#');
  $('quickPhone')?.setAttribute('href', D.company.phoneHref?`tel:${D.company.phoneHref}`:'#');
  $('quickMeeting')?.setAttribute('href', D.company.calendar||'#');
})();

/* renderers */
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
    ['navProjects','projects'],['navStack','stack'],
    ['navPricing','pricing'],['navFAQ','faq'],['navContact','contact'],
    ['footProjects','projects'],
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
  $('titleServices').textContent=TL.sections.servicesTitle;
  $('subServices').textContent=TL.sections.servicesSub;
  $('titleProjects').textContent=TL.sections.projects;
  $('titleStack').textContent=TL.sections.stackTitle;
  $('subStack').textContent=TL.sections.stackSub;
  $('titlePricing').textContent=TL.sections.pricing;
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

  // quick contact
  const Q=TL.quick;
  if(Q){
    $('quickContactTitle').textContent=Q.title;
    $('quickContactNote').textContent=Q.note;
    $('quickWhatsapp').textContent=Q.whatsapp;
    $('quickPhone').textContent=Q.call;
    $('quickMeeting').textContent=Q.meeting;
  }

  // form
  const F=TL.form;
  $('inputName').placeholder=F.name; $('inputEmail').placeholder=F.email; $('inputCompany').placeholder=F.company; $('inputMessage').placeholder=F.message; $('btnSend').textContent=F.send;

  renderPricing(lang);
  renderBlog();
}

/* initial render + reveal */
function initialRender(){
  renderProjects(LS.get(FILTER_KEY,'all'));
  renderStack(); renderPricing(LANG); renderBlog(); renderFAQ();

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
