/*
  ACTUALIZACIÓN DEL PORTAFOLIO DE INDIRA — NOVIEMBRE 2026
  Complemento no destructivo para index.html original.
  Foto y CV proporcionados por la estudiante.
  No realiza conexiones de red, no captura datos ni utiliza bibliotecas externas.
*/
(() => {
  'use strict';

  const R = {
    photo: './foto-indira.jpg',
    cv: './CV_ATS_Indira_Milagros_Tapia_Quispe.pdf',
    linkedin: 'https://www.linkedin.com/in/indira-tapia-quispe/',
    github: 'https://github.com/redfulltiem0976-web'
  };

  const styles = `
    .indira-profile-id {
      display:flex; align-items:center; gap:17px; margin:21px 0 0;
      max-width:560px; padding:12px 17px 12px 12px;
      background:rgba(255,255,255,.81); border:1px solid #d9e2fc;
      border-radius:24px; box-shadow:0 16px 35px rgba(74,88,173,.10);
    }
    .indira-photo {
      width:110px; height:110px; object-fit:cover; object-position:center 37%;
      border-radius:19px; flex:none; border:3px solid #fff;
      box-shadow:0 6px 22px rgba(59,86,180,.16);
    }
    .indira-intro-label {font-size:12px; font-weight:800; letter-spacing:.13em;
      color:#6b4ad3; text-transform:uppercase; margin-bottom:5px;}
    .indira-intro-name {font-size:21px; line-height:1.15; letter-spacing:-.025em;
      font-weight:850; color:#16223f; margin:0 0 6px;}
    .indira-intro-role {font-size:12px; line-height:1.45; font-weight:600;
      color:#566684;}
    .indira-social-link {font-size:12px; font-weight:800; color:#425c90;
      text-decoration:none; padding:10px 8px; border-radius:8px; white-space:nowrap;}
    .indira-social-link:hover {background:#edf1ff; color:#693fdf;}
    .indira-cv-header {display:inline-flex!important; align-items:center; gap:7px;
      background:linear-gradient(110deg,#426df0,#7540dc)!important;
      color:white!important; border:0!important; padding:10px 14px!important;
      border-radius:10px!important; font-weight:850; box-shadow:0 7px 18px #5360b53d;
      text-decoration:none!important;}
    .indira-cv-header:hover {filter:brightness(1.05);}
    .indira-metric-title {display:block; font-size:17px!important; line-height:1.25;
      color:#253259!important; font-weight:850; letter-spacing:-.02em;}
    .indira-metric-caption {display:block; font-size:12px!important; line-height:1.4;
      color:#6a7791;}
    .indira-contact-links {display:flex; gap:10px; flex-wrap:wrap; margin-top:24px;}
    .indira-contact-links a {display:inline-flex; align-items:center; gap:8px;
      padding:12px 17px; border:1px solid rgba(255,255,255,.4);
      border-radius:12px; font-size:13px; font-weight:750;
      color:#fff; background:rgba(255,255,255,.10); text-decoration:none;}
    .indira-contact-links a:hover {background:rgba(255,255,255,.23);}
    .indira-contact-links a.indira-download {background:white;color:#263d7b;}
    @media (max-width:1150px){
      .header .actions .indira-social-link {display:none;}
    }
    @media (max-width:780px){
      .header .actions .indira-cv-header {display:inline-flex!important;
        font-size:11px!important;padding:9px 11px!important;}
      .indira-profile-id{margin-top:19px;padding:10px;gap:12px;border-radius:17px;}
      .indira-photo{width:83px;height:83px;border-radius:13px;}
      .indira-intro-label{font-size:10px;}
      .indira-intro-name{font-size:16px;}
      .indira-intro-role{font-size:11px;}
      .navlinks .indira-social-link{display:block;font-size:12px;padding:6px 0;}
    }
    @media (max-width:420px){
      .indira-photo{width:72px;height:72px;}
      .indira-intro-name{font-size:14px;}
      .header .actions .indira-cv-header{font-size:10px!important;padding:8px!important;}
    }
  `;

  function injectStyles() {
    const s = document.createElement('style');
    s.id = 'indira-estilos-portafolio';
    s.textContent = styles;
    document.head.appendChild(s);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (typeof text === 'string') node.textContent = text;
    return node;
  }

  function link(text, url, className, external = true) {
    const a = el('a', className, text);
    a.href = url;
    if (external) {a.target = '_blank'; a.rel = 'noopener noreferrer';}
    return a;
  }

  function insertPhoto() {
    const hero = document.querySelector('.hero');
    if (!hero || hero.querySelector('.indira-profile-id')) return;
    const heading = hero.querySelector('h1');
    if (!heading) return;

    const id = el('div', 'indira-profile-id');
    const img = el('img', 'indira-photo');
    img.src = R.photo;
    img.alt = 'Fotografía profesional de Indira Milagros Tapia Quispe';
    img.width = 110; img.height = 110;
    img.loading = 'eager';
    img.decoding = 'async';
    const copy = el('div');
    copy.append(
      el('div','indira-intro-label','Hola, soy'),
      el('div','indira-intro-name','Indira Milagros Tapia Quispe'),
      el('div','indira-intro-role','Estudiante de Ingeniería de Software con IA · SENATI')
    );
    id.append(img, copy);
    heading.parentNode.insertBefore(id, heading);
  }

  function updateMetrics() {
    const cards = [...document.querySelectorAll('.metricbar .metric')];
    if (!cards.length) return;
    const texts = [
      ['▣','OPERACIONES','WorkFlow Técnico · órdenes y seguimiento'],
      ['▤','INVENTARIO','StockMind · repuestos y movimientos'],
      ['✓','APRENDIZAJE','SkillTrack Pro · competencias y metas']
    ];
    cards.slice(0,3).forEach((card,i) => {
      const [glyph,title,subtitle] = texts[i];
      card.replaceChildren();
      const ico = el('i','',glyph); ico.setAttribute('aria-hidden','true');
      const text = el('div');
      text.append(el('strong','indira-metric-title',title),
                  el('span','indira-metric-caption',subtitle));
      card.append(ico,text);
    });

    // Evita una estadística ambigua en la etiqueta flotante.
    document.querySelectorAll('.hero .float').forEach(f => {
      if (/03\s+proyectos\s+distintos|3\s+proyectos\s+distintos/i.test(f.textContent)) {
        f.replaceChildren(el('div', '', 'Tres proyectos académicos'),
                          el('small', '', 'Operaciones · Inventario · Aprendizaje'));
      }
    });
  }

  function updateCvLinks() {
    const cvLinks = [...document.querySelectorAll('a[href]')].filter(a =>
      /cv_ats_indira\.html/i.test(a.getAttribute('href')||'') ||
      /^(ver mi cv|consultar cv)$/i.test(a.textContent.trim())
    );
    cvLinks.forEach(a => {
      a.href = R.cv;
      a.setAttribute('download','CV_ATS_Indira_Milagros_Tapia_Quispe.pdf');
      a.textContent = '⬇ Descargar CV';
      a.title = 'Descargar currículum ATS en PDF';
      if (a.closest('.header')) a.classList.add('indira-cv-header');
    });
    const actions = document.querySelector('.header .actions') || document.querySelector('.header .navrow');
    if (actions) {
      if (!actions.querySelector('.indira-cv-header')) {
        const cv = link('⬇ Descargar CV',R.cv,'btn sm indira-cv-header', false);
        cv.setAttribute('download','CV_ATS_Indira_Milagros_Tapia_Quispe.pdf');
        actions.append(cv);
      }
      if (!actions.querySelector('.indira-social-link')) {
        actions.prepend(link('LinkedIn ↗', R.linkedin, 'indira-social-link'));
        actions.prepend(link('GitHub ↗', R.github, 'indira-social-link'));
      }
    }
    const nav = document.querySelector('.header .navlinks');
    if (nav && !nav.querySelector('.indira-social-link')) {
      nav.append(link('LinkedIn ↗', R.linkedin,'indira-social-link'));
      nav.append(link('GitHub ↗',R.github,'indira-social-link'));
    }
  }

  function updateContact() {
    const section = document.querySelector('.contact') || document.querySelector('#contacto');
    if (!section || section.querySelector('.indira-contact-links')) return;
    const host = section.querySelector('.wrap > div') || section.querySelector('.wrap') || section;
    const holder = el('div','indira-contact-links');
    holder.append(
      link('in  LinkedIn',R.linkedin),
      link('⌘  GitHub',R.github),
      link('⬇  Descargar CV',R.cv,'indira-download',false)
    );
    const cv = holder.querySelector('.indira-download');
    cv.setAttribute('download','CV_ATS_Indira_Milagros_Tapia_Quispe.pdf');
    host.appendChild(holder);
  }

  function run() {
    if (document.getElementById('indira-estilos-portafolio')) return;
    injectStyles();
    insertPhoto();
    updateMetrics();
    updateCvLinks();
    updateContact();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',run,{once:true});
  else run();
})();
