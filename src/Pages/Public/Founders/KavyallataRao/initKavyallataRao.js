/* eslint-disable */
// Behaviour for the kavyallata-rao profile. It runs against the shadow root that
// ShadowProfile attaches, and returns a teardown that undoes every timer and
// window listener it registered.
export default function initKavyallataRao(H, R) {
  const teardown = [];
  const addEventListener = (type, fn, opts) => {
    window.addEventListener(type, fn, opts);
    teardown.push(() => window.removeEventListener(type, fn, opts));
  };
  const setInterval = (fn, ms) => {
    const id = window.setInterval(fn, ms);
    teardown.push(() => window.clearInterval(id));
    return id;
  };
  const setTimeout = (fn, ms) => {
    const id = window.setTimeout(fn, ms);
    teardown.push(() => window.clearTimeout(id));
    return id;
  };


const IMG={"c-ddp.jpg": "/images/img-80-55777f98cd.jpg", "c-esg.jpg": "/images/img-81-62d7bfb19d.jpg", "c-brsr.jpg": "/images/img-82-29040a51bf.jpg", "c-iica.jpg": "/images/img-83-883345335b.jpg", "c-cxo.jpg": "/images/img-84-9762d85ffe.jpg", "c-ntt.jpg": "/images/img-85-31abb55a13.jpg", "c-cyberres.jpg": "/images/img-86-3689a25b0f.jpg", "c-dataprivacy.jpg": "/images/img-87-db8718fe7f.jpg", "c-phishing.jpg": "/images/img-88-a5871935e5.jpg", "c-sales.jpg": "/images/img-89-2fc4fa0a59.jpg"};

const C=[
 {f:"gov",img:"c-ddp.jpg",t:"Digital Directors' Program",by:"Directors' Institute – World Council of Directors",d:"Certified Digital Director · effective 16 Feb 2025",id:"DDP-2025DI1931602"},
 {f:"gov",img:"c-esg.jpg",t:"ESG Expert Certification",by:"Directors' Institute – World Council of Directors",d:"Certified ESG Expert · effective 30 Dec 2024",id:"WDC-2024-DI3943012"},
 {f:"gov",img:"c-brsr.jpg",t:"BRSR Expert Certificate",by:"World Development Corporation · Directors' Institute",d:"Certified BRSR Expert · dated 30 Dec 2024",id:"WDC-2024-DI3943012"},
 {f:"gov",img:"c-iica.jpg",t:"Independent Director's Databank",by:"Indian Institute of Corporate Affairs (MCA, Govt. of India)",d:"Online Proficiency Self-Assessment Test · 2 Sep 2024",id:"IDDB-DI-202408-063811"},
 {f:"lead",img:"c-cxo.jpg",t:"Global CXO Blueprint Program",by:"CXO Hive · Mudit Saxena, ICF-PCC",d:"May 2025 to June 2025"},
 {f:"tech",img:"c-ntt.jpg",t:"AI in the Workplace",by:"NTT DATA",d:"Artificial Intelligence 2024 · 16 Feb 2025"},
 {f:"tech",img:"c-cyberres.jpg",t:"The Business Case for Cyber Resiliency",by:"ePlus",d:"22 June 2026 · 13 minutes"},
 {f:"tech",img:"c-dataprivacy.jpg",t:"Cybersecurity Fundamentals: Data Privacy",by:"ePlus",d:"22 June 2026 · 6 minutes"},
 {f:"tech",img:"c-phishing.jpg",t:"ePlus Cybersecurity Fundamentals: Types of Phishing",by:"ePlus",d:"22 June 2026 · 4 minutes"},
 {f:"lead",img:"c-sales.jpg",t:"Sales Positioning and Resources",by:"ePlus",d:"22 June 2026 · 9 minutes"}
];
const grid=R.getElementById('certs');let shown=C.map((_,i)=>i),cur=0;
function render(f){
  shown=C.map((c,i)=>i).filter(i=>f==='all'||C[i].f===f);
  grid.innerHTML=shown.map((i,k)=>{const c=C[i];return `<figure class="cert"><button type="button" data-k="${k}" aria-label="View ${c.t} full size"><img src="${IMG[c.img]}" alt="${c.t} certificate awarded to Kavyallata Rao" loading="lazy"></button><figcaption><b>${c.t}</b><span>${c.by}</span><span>${c.d}</span>${c.id?`<code>Vide no: ${c.id}</code>`:''}</figcaption></figure>`}).join('');
}
render('all');
R.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
  R.querySelectorAll('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));render(b.dataset.f)});
const lb=R.getElementById('lb'),li=R.getElementById('lbimg'),lc=R.getElementById('lbcap');let last;
function open(k){cur=(k+shown.length)%shown.length;const c=C[shown[cur]];li.src=IMG[c.img];li.alt=c.t;lc.textContent=`${c.t} · ${c.by} · ${c.d}`;lb.hidden=false;R.getElementById('lbx').focus()}
function close(){lb.hidden=true;last&&last.focus()}
grid.addEventListener('click',e=>{const b=e.target.closest('button[data-k]');if(b){last=b;open(+b.dataset.k)}});
R.getElementById('lbx').onclick=close;
R.getElementById('lbp').onclick=()=>open(cur-1);
R.getElementById('lbn').onclick=()=>open(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1)});
R.getElementById('copy').onclick=async function(){const t=R.getElementById('em').textContent;
  try{await navigator.clipboard.writeText(t);this.textContent='Copied'}catch(_){const r=document.createRange();r.selectNodeContents(R.getElementById('em'));const s=getSelection();s.removeAllRanges();s.addRange(r);this.textContent='Selected – press copy'}
  setTimeout(()=>this.textContent='Copy email',2000)};

/* ---- career rail ---- */
const T=[
 {y:"2004 - 2016",m:"handshake",w:"Apr 2004 – Mar 2016",t:"Operations & Customer Relationship",o:"ADSYNC · Airtel · MEDA Enterprises · Print Zone · BrandXpression Solutions Pvt. Ltd.",s:"ADSYNC · Airtel · MEDA Enterprises · Print Zone · BrandXpression Solutions Pvt. Ltd.",k:[],p:["APRIL 2004 – MAY 2005 | ADSYNC as Accounts Executive / Client Servicing","JULY 2005 – JAN 2006 | Airtel as Corporate Customer Relationship Officer","AUG 2006 – JAN 2008 | MEDA Enterprises as Manager – Operations & Customer Relationship","JAN 2008 – JAN 2012 | Print Zone as Head – Productions","APRIL 2012 – MAR 2016 | BrandXpression Solutions Pvt. Ltd. as Head – Production & Operations"]},
 {y:"2016 - 2020",m:"display",w:"April 2016 – May 2020",t:"Director – Operations & Customer Relationship",o:"Citrus Signs & Display",s:"Citrus Signs & Display",k:[[50,"%","market share increase over three years"],[30,"%","reduction in overhead costs"],[100,"+","partners onboarded"]],p:["Sales & Marketing Oversight: spearheaded the sales and marketing teams, aligning them with operational goals.","Client Relationship Building: enhanced client loyalty by 40%.","Channel Partner Strategy: channel revenue contribution from 25% to 55%; 100+ partners across India/South Asia/APAC."]},
 {y:"2021 - 2021",m:"network",w:"Jan 2021 – Dec 2021",t:"Deputy General Manager – India",o:"Pragati BioCare Pvt. Ltd.",s:"Pragati BioCare Pvt. Ltd.",k:[[40,"%","channel revenue (from 20%)"],[150,"+","partners onboarded"],[18,"%","less operational inefficiency"]],p:["Led the achievement of business targets, driving individual and team performance.","Oversaw compliance with legal, statutory and regulatory requirements and quality management systems.","Strengthened relationships with government agencies and key stakeholders."]},
 {y:"2022 - 2024",m:"building",w:"Jun 2022 – Jan 2024",t:"Large Enterprise Account Management",o:"Frontier Business Systems Pvt. Ltd.",s:"Frontier Business Systems Pvt. Ltd.",k:[[120,"%","of annual target in Q1"],[90,"%","customer satisfaction"],[25,"%","revenue increase via partnerships"]],p:["Developed C-level relationships with an 80%+ solution acceptance rate.","Increased market share by 15%.","Managed high-profile accounts such as Tata Group, Wipro Group and Siemens."]},
 {y:"2024 - 2025",m:"growth",w:"Jan 2024 – Nov 2025",t:"Business Development (SS) – South India",o:"NTT Data Inc.",s:"NTT Data Inc.",k:[[35,"%","year-on-year revenue growth"],[20,"%","forecast accuracy improvement"],[100,"%","team retention"]],p:["Drove regional strategy for Digital Workspace Solutions.","Expanded channel revenue contribution from 30% to 65% over a year.","Onboarded and enabled 50+ partners across India/South Asia/APAC."]},
 {y:"Nov 2025 – Till Date",m:"cloud",w:"Nov 2025 – Till Date",t:"Business Development (SS) – India",o:"Eplus CloudUno",s:"Eplus CloudUno",k:[],p:["Spearheaded India market expansion for enterprise digital infrastructure across large enterprises, Data Center and GCCs.","Built and expanded strategic enterprise accounts with CIO/CTO leadership.","Strengthened OEM ecosystem engagement with Cisco, Dell Technologies, Hewlett Packard Enterprise and NetApp."]}
];
const ICON={
 handshake:'<path d="M11 17l2 2a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4L15 9"/><path d="M14 7l-2-2a1 1 0 0 0-1.4 0L3 12.6"/><path d="M2 11l5 5"/><path d="M22 11l-5 5"/><path d="M7 12l3 3"/><path d="M9 10l3 3"/>',
 display:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/><path d="M7 8h6M7 11h10"/>',
 network:'<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M12 7.2v4.3M12 11.5l-5.6 4.8M12 11.5l5.6 4.8"/>',
 building:'<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16"/><path d="M15 10h4a1 1 0 0 1 1 1v10"/><path d="M3 21h18"/><path d="M8 8h3M8 12h3M8 16h3"/>',
 growth:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
 cloud:'<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4 4 0 0 1-.5 9.5z"/><path d="M12 12v5M9.5 14.5L12 12l2.5 2.5"/>'
};
const svgI=k=>`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[k]}</svg>`;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const DUR=4200;
const rail=R.getElementById('rail'),panel=R.getElementById('panel'),fill=R.getElementById('fill'),head=R.getElementById('head'),dots=R.getElementById('dots'),playBtn=R.getElementById('tl-play');
H.style.setProperty('--dur',DUR+'ms');
T.forEach((x,i)=>{const li=document.createElement('li');li.innerHTML=`<button class="stop" type="button" role="tab" id="tl-${i}" aria-selected="false"><span class="card"><span class="mono">${svgI(x.m)}</span><span class="yr">${x.y}</span><span class="co">${x.s}</span><span class="timer"></span></span></button>`;rail.appendChild(li);dots.appendChild(document.createElement('span'))});
const stops=[...rail.querySelectorAll('.stop')];
let ti=-1,auto=!reduce,timer;
function place(){const s=stops[ti];if(!s)return;const x=s.parentElement.offsetLeft;head.style.transform=`translateX(${x-2}px)`;fill.style.width=(x+8)+'px'}
function countKpi(el){const to=+el.dataset.to,suf=el.dataset.suf;if(reduce){el.textContent=to+suf;return}const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)})(t0)}
function showT(i,dir){if(i===ti)return;dir=dir||(i>ti?1:-1);ti=i;const x=T[i];
  stops.forEach((b,k)=>{b.setAttribute('aria-selected',k===i);b.classList.toggle('past',k<i);const tm=b.querySelector('.timer');tm.classList.remove('run');});
  [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
  place();panel.dataset.big=x.y;
  panel.innerHTML=`<div class="pin ${reduce?'':(dir>0?'enter-r':'enter-l')}"><div><div class="when">${x.w}</div><h3>${x.t}</h3><div class="org">${x.o}</div>${x.k.length?`<div class="kpis">`:""}${x.k.map((k,n)=>`<div class="kpi" style="animation-delay:${.15+n*.08}s"><b data-to="${k[0]}" data-suf="${k[1]}">${k[0]}${k[1]}</b><span>${k[2]}</span></div>`).join('')}${x.k.length?`</div>`:""}</div><ul>${x.p.map((s,n)=>`<li style="animation-delay:${.12+n*.08}s">${s}</li>`).join('')}</ul></div>`;
  panel.querySelectorAll('.kpi b').forEach(countKpi);
  if(auto){const tm=stops[i].querySelector('.timer');void tm.offsetWidth;tm.classList.add('run')}
  const sc=rail.closest('.rail-scroll');if(sc.scrollWidth>sc.clientWidth){const li=stops[i].parentElement;sc.scrollTo({left:li.offsetLeft-sc.clientWidth/2+li.offsetWidth/2,behavior:reduce?'auto':'smooth'})}
}
function startAuto(){clearInterval(timer);if(auto)timer=setInterval(()=>showT((ti+1)%T.length,1),DUR)}
function stopAuto(){auto=false;clearInterval(timer);playBtn.setAttribute('aria-pressed','false');stops.forEach(b=>b.querySelector('.timer').classList.remove('run'))}
function go(n,dir){showT((n+T.length)%T.length,dir);}
showT(T.length-1,1);playBtn.setAttribute('aria-pressed',auto);startAuto();
addEventListener('resize',place);
rail.addEventListener('click',e=>{const b=e.target.closest('.stop');if(!b)return;stopAuto();showT(stops.indexOf(b))});
rail.addEventListener('keydown',e=>{if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;const d=e.key==='ArrowRight'?1:-1;stopAuto();go(ti+d,d);stops[ti].focus()});
R.getElementById('tl-prev').onclick=()=>{stopAuto();go(ti-1,-1)};
R.getElementById('tl-next').onclick=()=>{stopAuto();go(ti+1,1)};
playBtn.onclick=()=>{if(auto){stopAuto()}else{auto=true;playBtn.setAttribute('aria-pressed','true');go(ti+1,1);startAuto()}};
let sx=null;panel.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
panel.addEventListener('touchend',e=>{if(sx==null)return;const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40){stopAuto();go(ti+(dx<0?1:-1),dx<0?1:-1)}sx=null});

/* ---- micro-interactions: tilt + hero glow ---- */
if(!reduce&&matchMedia('(hover:hover)').matches){
  const tilt=(el,max)=>{el.classList.add('tilt');el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(800px) rotateY(${px*max}deg) rotateX(${-py*max}deg) translateZ(0)`});el.addEventListener('pointerleave',()=>el.style.transform='')};
  tilt(R.querySelector('.portrait'),8);
  R.getElementById('certs').addEventListener('pointerover',e=>{const b=e.target.closest('.cert button');if(b&&!b.dataset.t){b.dataset.t=1;tilt(b,10)}});
  const hero=R.querySelector('.hero'),glow=document.createElement('div');glow.className='cursor-glow';hero.appendChild(glow);
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();glow.style.left=(e.clientX-r.left)+'px';glow.style.top=(e.clientY-r.top)+'px'});
}

/* ---- hero text ---- */
const h1=R.querySelector('.split');let d=0;
h1.querySelectorAll('.w1,.w2').forEach(w=>{const txt=w.textContent;w.textContent='';[...txt].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.animationDelay=(d+=0.045)+'s';s.setAttribute('aria-hidden','true');w.appendChild(s)})});
const words=["Digital Director","ESG Expert","BRSR Expert","Independent Director","AWS Cloud Sales professional"];
const rot=R.getElementById('rot');let wi=0;
if(!reduce)setInterval(()=>{const old=rot.querySelector('b:not(.out)');const nb=document.createElement('b');nb.className='in';nb.textContent=words[wi=(wi+1)%words.length];rot.appendChild(nb);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{nb.className='';old.className='out'}));setTimeout(()=>old.remove(),650)},2600);
/* typewriter on thesis */
const th=R.getElementById('thesis');
if(!reduce){const full=th.textContent;th.setAttribute('aria-label',full);th.textContent='';const cur=document.createElement('span');cur.className='caret';const txt=document.createTextNode('');th.append(txt,cur);let k=0;
  setTimeout(function type(){k+=2;txt.data=full.slice(0,k);if(k<full.length)setTimeout(type,14);else setTimeout(()=>cur.remove(),1600)},900)}

/* ---- count-up + reveals ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);
  if(el.dataset.to){const to=+el.dataset.to,suf=el.dataset.suf,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=v+suf;if(p<1)requestAnimationFrame(f)})(t0)}
  else el.classList.remove('pending')}),{threshold:.15});
R.querySelectorAll('.sec-head h2').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w" style="transition-delay:${i*60}ms">${w}</span>`).join(' ')});
if(!reduce){
  R.querySelectorAll('.stat b[data-to]').forEach(b=>{b.textContent='0'+b.dataset.suf;io.observe(b)});
  R.querySelectorAll('.sec-head,.profile article,.gov>div,.edu>div,.comp').forEach((el,i)=>{const r=el.getBoundingClientRect();if(r.top>innerHeight){el.classList.add('rv','pending');el.style.transitionDelay=(el.matches('.sec-head')?0:(i%3)*90)+'ms';io.observe(el)}});
}

/* ===== extra motion ===== */
(function(){
  const sbar=R.getElementById('sbar'),top=R.getElementById('totop');
  let raf=0;addEventListener('scroll',()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;const m=document.documentElement.scrollHeight-innerHeight;const p=m>0?scrollY/m:0;sbar.style.transform=`scaleX(${p})`;top.classList.toggle('show',scrollY>600)})},{passive:true});
  top.onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
  // stat underline
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('lit');so.unobserve(e.target)}}),{threshold:.4});
  R.querySelectorAll('.stat').forEach((s,i)=>{s.style.setProperty('--d',i);s.querySelector&&so.observe(s);s.style.transitionDelay=i*120+'ms'});
  R.querySelectorAll('.stat').forEach((s,i)=>{s.addEventListener('transitionstart',()=>{})});
  // chips stagger
  R.querySelectorAll('.comp span').forEach((s,i)=>s.style.transitionDelay=(i*45)+'ms');
  R.querySelectorAll('.comp span').forEach(s=>s.addEventListener('mouseenter',()=>s.style.transitionDelay='0ms'));
  // connect heading wave
  const ch=R.querySelector('.connect h2 span');if(ch&&!reduce){const t=ch.textContent;ch.innerHTML=[...t].map((c,i)=>`<span class="lt" style="animation-delay:${i*.08}s">${c}</span>`).join('')}
  // certificate stagger on scroll + filter animation
  const cobs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('pending');cobs.unobserve(e.target)}}),{threshold:.1});
  function prep(){if(reduce)return;R.querySelectorAll('#certs .cert').forEach((c,i)=>{if(c.getBoundingClientRect().top>innerHeight){c.classList.add('pending');c.style.transitionDelay=(i%4)*90+'ms';cobs.observe(c)}})}
  prep();
  const _render=render;window.render=render=function(f){if(reduce){_render(f);return}const cs=[...grid.children];cs.forEach(c=>c.classList.add('hide'));setTimeout(()=>{_render(f);[...grid.children].forEach((c,i)=>{c.classList.add('hide');c.style.transitionDelay=i*50+'ms';requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.remove('hide')))})},cs.length?260:0)};
  // magnetic buttons
  if(!reduce&&matchMedia('(hover:hover)').matches){R.querySelectorAll('.cta,.mail button,.nav-btn,.totop').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.25}px`});b.addEventListener('pointerleave',()=>b.style.translate='')})}
})();


addEventListener('hashchange',function(){setTimeout(place,90)});


  return () => teardown.forEach((fn) => fn());
}
