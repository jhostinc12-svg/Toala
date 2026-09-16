const CONFIG={whatsapp:"TU_NUMERO_DE_WHATSAPP",email:"TU_CORREO@EJEMPLO.COM"};
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const menuBtn=$(".menu-btn"), nav=$(".nav-menu");
const header=$(".header");
const setHeaderState=()=>header?.classList.toggle("scrolled",window.scrollY>18);
setHeaderState();
window.addEventListener("scroll",setHeaderState,{passive:true});
menuBtn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);});
$$(".nav-menu a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false");}));

$$(".brand-signature").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const rect=card.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width;
    const y=(e.clientY-rect.top)/rect.height;
    card.style.setProperty("--mx",`${x*100}%`);
    card.style.setProperty("--my",`${y*100}%`);
    card.style.setProperty("--rx",`${(0.5-y)*7}deg`);
    card.style.setProperty("--ry",`${(x-0.5)*9}deg`);
  });
  card.addEventListener("mouseleave",()=>{
    card.style.setProperty("--mx","50%");
    card.style.setProperty("--my","50%");
    card.style.setProperty("--rx","0deg");
    card.style.setProperty("--ry","0deg");
  });
});

document.addEventListener("click",e=>{
  const link=e.target.closest("a[href]");
  if(!link||link.target==="_blank"||link.hasAttribute("download"))return;
  const href=link.getAttribute("href");
  if(!href||href==="#"||href.startsWith("mailto:")||href.startsWith("tel:")||href.startsWith("https://wa.me/"))return;
  const next=new URL(link.href,location.href);
  if(next.origin!==location.origin||next.pathname===location.pathname&&next.hash)return;
  e.preventDefault();
  document.body.classList.add("is-leaving");
  setTimeout(()=>{location.href=link.href},230);
});

const revealObserver="IntersectionObserver" in window?new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.14,rootMargin:"0px 0px -40px 0px"}):null;
function watchReveals(scope=document){
  const targets=scope.querySelectorAll(".section,.page-hero,.cta-band,.service-section,.service-preview article,.steps>div,.project-block,.gallery button,.contact-cards>div,.form-card");
  targets.forEach((el,i)=>{
    if(el.classList.contains("reveal"))return;
    el.classList.add("reveal");
    el.style.transitionDelay=`${Math.min(i%6,5)*55}ms`;
    if(revealObserver)revealObserver.observe(el);
    else el.classList.add("visible");
  });
}

$$(".wa").forEach(a=>{
  if(CONFIG.whatsapp!=="TU_NUMERO_DE_WHATSAPP"){
    a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hola, me gustaría solicitar información sobre un proyecto de remodelación.")}`;
    a.target="_blank";a.rel="noopener";
  }else a.addEventListener("click",e=>{e.preventDefault();alert("Configura el número de WhatsApp en js/script.js");});
});
$$(".mail").forEach(a=>{if(CONFIG.email!=="TU_CORREO@EJEMPLO.COM")a.href=`mailto:${CONFIG.email}`;});

const SITE_DATA = {"covers":{"Cocinas":"imagenes/servicios/cocinas.png","Baños":"imagenes/servicios/ba-os.png","Muebles":"imagenes/servicios/muebles.png","Ebanistería":"imagenes/servicios/ebanister-a.jpeg","Gypsum y acabados":"imagenes/servicios/gypsum-y-acabados.jpeg","Pisos":"imagenes/servicios/pisos.jpeg","Plomería":"imagenes/servicios/plomer-a.jpeg"},"galleries":{"Cocinas":[{"name":"Cocinas","images":["imagenes/proyectos/cocinas/general/foto-01.png","imagenes/proyectos/cocinas/general/foto-02.png","imagenes/proyectos/cocinas/general/foto-03.jpeg","imagenes/proyectos/cocinas/general/foto-04.jpeg","imagenes/proyectos/cocinas/general/foto-05.jpeg","imagenes/proyectos/cocinas/general/foto-06.jpeg","imagenes/proyectos/cocinas/general/foto-07.jpeg","imagenes/proyectos/cocinas/general/foto-08.jpeg","imagenes/proyectos/cocinas/general/foto-09.jpeg","imagenes/proyectos/cocinas/general/foto-10.jpeg","imagenes/proyectos/cocinas/general/foto-11.jpeg","imagenes/proyectos/cocinas/general/foto-12.jpeg","imagenes/proyectos/cocinas/general/foto-13.jpeg"]}],"Baños":[{"name":"INSTALACIÓN DE VIDRIO DE DUCHA","images":["imagenes/proyectos/ba-os/instalaci-n-de-vidrio-de-ducha/foto-01.jpeg"]},{"name":"MUEBLE DE BAÑO, PH VISTA PARK, EL CARMEN","images":["imagenes/proyectos/ba-os/mueble-de-ba-o-ph-vista-park-el-carmen/foto-01.png"]}],"Muebles":[{"name":"Mueble de baño · PH Vista Park, El Carmen","images":["imagenes/proyectos/muebles/ph-vista-park/foto-01.png"]}],"Ebanistería":[{"name":"CONFECCIÓN DE CLOSET, DON BOSCO","images":["imagenes/proyectos/ebanister-a/confecci-n-de-closet-don-bosco/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-closet-don-bosco/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-closet-don-bosco/foto-03.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-closet-don-bosco/foto-04.jpeg"]},{"name":"CONFECCIÓN DE PUERTA","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puerta/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta/foto-03.jpeg"]},{"name":"CONFECCIÓN DE PUERTA CORREDIZA, COSTA DEL ESTE, PH PARQUE DEL ESTE","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-03.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-04.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-05.jpeg"]},{"name":"CONFECCIÓN DE PUERTA, LUNA DEL MAR, COCO DEL MAR","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-03.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-04.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-05.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-06.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-07.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-08.jpeg"]},{"name":"CONFECCIÓN DE PUERTA, PH VISTAPARK, EL CARMEN","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puerta-ph-vistapark-el-carmen/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puerta-ph-vistapark-el-carmen/foto-02.jpeg"]},{"name":"CONFECCIÓN DE PUERTAS DE OFICINA","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina/foto-03.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina/foto-04.jpeg"]},{"name":"CONFECCIÓN DE PUERTAS DE OFICINA, PH TIMES SQUARE CENTER, COSTA DEL ESTE","images":["imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-01.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-02.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-03.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-04.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-05.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-06.jpeg","imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-07.jpeg"]},{"name":"MUEBLE WALKING CLOSET","images":["imagenes/proyectos/ebanister-a/mueble-walking-closet/foto-01.jpeg","imagenes/proyectos/ebanister-a/mueble-walking-closet/foto-02.jpeg","imagenes/proyectos/ebanister-a/mueble-walking-closet/foto-03.jpeg","imagenes/proyectos/ebanister-a/mueble-walking-closet/foto-04.jpeg"]}],"Gypsum y acabados":[{"name":"CONFECCIÓN DE PARED DE GYPSUM SPORTLINE, MEGAMALL","images":["imagenes/proyectos/gypsum-y-acabados/confecci-n-de-pared-de-gypsum-sportline-megamall/foto-01.jpeg","imagenes/proyectos/gypsum-y-acabados/confecci-n-de-pared-de-gypsum-sportline-megamall/foto-02.jpeg","imagenes/proyectos/gypsum-y-acabados/confecci-n-de-pared-de-gypsum-sportline-megamall/foto-03.jpeg","imagenes/proyectos/gypsum-y-acabados/confecci-n-de-pared-de-gypsum-sportline-megamall/foto-04.jpeg"]},{"name":"MANTENIMIENTO DE GYPSUM, SPORTLINE, MULTIPLAZA","images":["imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-01.jpeg","imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-02.jpeg","imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-03.jpeg","imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-04.jpeg","imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-05.jpeg","imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-06.jpeg"]},{"name":"MOLDURAS DE PARED","images":["imagenes/proyectos/gypsum-y-acabados/molduras-de-pared/foto-01.jpeg","imagenes/proyectos/gypsum-y-acabados/molduras-de-pared/foto-02.jpeg","imagenes/proyectos/gypsum-y-acabados/molduras-de-pared/foto-03.jpeg","imagenes/proyectos/gypsum-y-acabados/molduras-de-pared/foto-04.jpeg"]}],"Pisos":[{"name":"Pisos","images":["imagenes/proyectos/pisos/general/foto-01.jpeg"]}],"Plomería":[{"name":"INSTALACIÓN DE PLOMERÍA","images":["imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-01.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-02.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-03.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-04.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-05.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-06.jpeg","imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-07.jpeg"]}]},"hero_slides":[{"service":"Cocinas","category":"Cocinas","image":"imagenes/proyectos/cocinas/general/foto-01.png"},{"service":"INSTALACIÓN DE VIDRIO DE DUCHA","category":"Baños","image":"imagenes/proyectos/ba-os/instalaci-n-de-vidrio-de-ducha/foto-01.jpeg"},{"service":"MUEBLE DE BAÑO, PH VISTA PARK, EL CARMEN","category":"Baños","image":"imagenes/proyectos/ba-os/mueble-de-ba-o-ph-vista-park-el-carmen/foto-01.png"},{"service":"Mueble de baño · PH Vista Park, El Carmen","category":"Muebles","image":"imagenes/proyectos/muebles/ph-vista-park/foto-01.png"},{"service":"CONFECCIÓN DE CLOSET, DON BOSCO","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-closet-don-bosco/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTA","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puerta/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTA CORREDIZA, COSTA DEL ESTE, PH PARQUE DEL ESTE","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puerta-corrediza-costa-del-este-ph-parque-del-este/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTA, LUNA DEL MAR, COCO DEL MAR","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puerta-luna-del-mar-coco-del-mar/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTA, PH VISTAPARK, EL CARMEN","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puerta-ph-vistapark-el-carmen/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTAS DE OFICINA","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina/foto-01.jpeg"},{"service":"CONFECCIÓN DE PUERTAS DE OFICINA, PH TIMES SQUARE CENTER, COSTA DEL ESTE","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/confecci-n-de-puertas-de-oficina-ph-times-square-center-costa-del-este/foto-01.jpeg"},{"service":"MUEBLE WALKING CLOSET","category":"Ebanistería","image":"imagenes/proyectos/ebanister-a/mueble-walking-closet/foto-01.jpeg"},{"service":"CONFECCIÓN DE PARED DE GYPSUM SPORTLINE, MEGAMALL","category":"Gypsum y acabados","image":"imagenes/proyectos/gypsum-y-acabados/confecci-n-de-pared-de-gypsum-sportline-megamall/foto-01.jpeg"},{"service":"MANTENIMIENTO DE GYPSUM, SPORTLINE, MULTIPLAZA","category":"Gypsum y acabados","image":"imagenes/proyectos/gypsum-y-acabados/mantenimiento-de-gypsum-sportline-multiplaza/foto-01.jpeg"},{"service":"MOLDURAS DE PARED","category":"Gypsum y acabados","image":"imagenes/proyectos/gypsum-y-acabados/molduras-de-pared/foto-01.jpeg"},{"service":"Pisos","category":"Pisos","image":"imagenes/proyectos/pisos/general/foto-01.jpeg"},{"service":"INSTALACIÓN DE PLOMERÍA","category":"Plomería","image":"imagenes/proyectos/plomer-a/instalaci-n-de-plomer-a/foto-01.jpeg"}]};
function loadContent(){ return Promise.resolve(SITE_DATA); }

function initHero(data){
  const box=$("#heroSlides"), progress=$("#heroProgress"), title=$("#heroTitle"), kicker=$("#heroKicker"), link=$("#heroLink");
  if(!box)return;
  const slides=data.hero_slides;
  let current=0,timer;
  slides.forEach((s,i)=>{
    const div=document.createElement("div");div.className="hero-slide"+(i===0?" active":"");
    div.innerHTML=`<img src="${s.image}" alt="${s.service} — Toala Remodelaciones">`;
    box.appendChild(div);
    const p=document.createElement("button");p.type="button";p.setAttribute("aria-label",`Mostrar ${s.service}`);p.className=i===0?"active":"";
    p.addEventListener("click",()=>go(i,true));progress.appendChild(p);
  });
  const update=()=>{const s=slides[current];title.textContent=s.service;kicker.textContent="TOALA REMODELACIONES · "+String(current+1).padStart(2,"0");link.href=`servicios.html#${slug(s.category)}`;};
  function go(i,manual=false){
    const previous=current;
    current=(i+slides.length)%slides.length;
    if(previous===current)return;
    box.querySelectorAll(".hero-slide").forEach((x,n)=>{
      x.classList.toggle("active",n===current);
      x.classList.toggle("leaving",n===previous);
      if(n===previous)setTimeout(()=>x.classList.remove("leaving"),950);
    });
    progress.querySelectorAll("button").forEach((x,n)=>x.classList.toggle("active",n===current));
    update();
    if(manual)restart();
  }
  const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(current+1),4000)}; 
  $("#heroPrev")?.addEventListener("click",()=>go(current-1,true));$("#heroNext")?.addEventListener("click",()=>go(current+1,true));
  update();restart();
}
function slug(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}

function initPreview(data){
  const el=$("#servicePreview");if(!el)return;
  Object.entries(data.covers).forEach(([service,img])=>{
    const a=document.createElement("a");a.href=`servicios.html#${slug(service)}`;a.innerHTML=`<article><img src="${img}" alt="${service}"><div><small>TOALA · SERVICIO</small><strong>${service}</strong></div></article>`;el.appendChild(a);
  });
  watchReveals(el);
}

function initServices(data){
  const container=$("#servicesContainer");if(!container)return;
  Object.entries(data.galleries).forEach(([service,projects])=>{
    const id=slug(service), section=document.createElement("section");section.className="service-section";section.id=id;
    section.innerHTML=`<div class="container"><div class="service-head"><div><p class="eyebrow">SERVICIO</p><h2>${service}</h2></div><p>Galería organizada con los trabajos y fotografías correspondientes a esta categoría.</p></div><div class="projects"></div></div>`;
    const projectsBox=section.querySelector(".projects");
    projects.forEach(project=>{
      const block=document.createElement("div");block.className="project-block";
      block.innerHTML=`<h3 class="project-title">${escapeHtml(project.name)}<small>${project.images.length} fotografías</small></h3><div class="gallery"></div>`;
      const gallery=block.querySelector(".gallery");
      if(project.images.length===1)gallery.classList.add("single");
      project.images.forEach((img,i)=>{
        const b=document.createElement("button");b.type="button";b.dataset.images=JSON.stringify(project.images);b.dataset.index=i;b.dataset.title=project.name;
        b.innerHTML=`<img src="${img}" loading="lazy" alt="${escapeHtml(project.name)} — fotografía ${i+1}">`;
        b.addEventListener("click",()=>openGallery(project.images,i,project.name));
        gallery.appendChild(b);
      });
      projectsBox.appendChild(block);
    });
    container.appendChild(section);
  });
  watchReveals(container);
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

let galleryState={images:[],index:0,title:""};
function setModalImage(src,caption){
  const img=$("#modalImage"), cap=$("#modalCaption");
  if(!img||!cap)return;
  img.classList.add("switching");
  setTimeout(()=>{img.src=src;cap.textContent=caption;},90);
  setTimeout(()=>img.classList.remove("switching"),260);
}
function openGallery(images,index,title){galleryState={images,index,title};const m=$("#galleryModal");if(!m)return;setModalImage(images[index],`${title} · ${index+1} / ${images.length}`);m.classList.add("open");m.setAttribute("aria-hidden","false");}
function closeGallery(){const m=$("#galleryModal");if(!m)return;m.classList.remove("open");m.setAttribute("aria-hidden","true");}
function moveGallery(step){if(!galleryState.images.length)return;galleryState.index=(galleryState.index+step+galleryState.images.length)%galleryState.images.length;setModalImage(galleryState.images[galleryState.index],`${galleryState.title} · ${galleryState.index+1} / ${galleryState.images.length}`);}
$("#modalClose")?.addEventListener("click",closeGallery);$("#modalPrev")?.addEventListener("click",()=>moveGallery(-1));$("#modalNext")?.addEventListener("click",()=>moveGallery(1));$("#galleryModal")?.addEventListener("click",e=>{if(e.target.id==="galleryModal")closeGallery()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeGallery();if(e.key==="ArrowLeft")moveGallery(-1);if(e.key==="ArrowRight")moveGallery(1)});

$("#quoteForm")?.addEventListener("submit",e=>{e.preventDefault();const status=$("#status");status.textContent="Solicitud preparada correctamente. Conecta el formulario a WhatsApp, correo o un backend para recibir los datos.";});

loadContent().then(data=>{initHero(data);initPreview(data);initServices(data);watchReveals()}).catch(err=>console.error("No se pudo cargar content.json",err));
