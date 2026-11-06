/* eslint-disable */
// Behaviour for the yogesh-prajapati profile. It runs against the shadow root that
// ShadowProfile attaches, and returns a teardown that undoes every timer and
// window listener it registered.
export default function initYogeshPrajapati(H, R) {
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



const C=[
 {f:"sec",img:"",t:"Certified Ethical Hacker (CEH)",by:"IT security & cybersecurity",d:""},
 {f:"sec",img:"",t:"Palo Alto ACE",by:"IT security & cybersecurity",d:""},
 {f:"sec",img:"",t:"Certified Security Associate",by:"IT security & cybersecurity",d:""},
 {f:"pm",img:"",t:"PMP",by:"PMI",d:""},
 {f:"pm",img:"",t:"PRINCE2 Practitioner",by:"Project management",d:""},
 {f:"pm",img:"",t:"DevOps Fundamentals",by:"DASA",d:""},
 {f:"cloud",img:"",t:"Cloud Computing",by:"Rackspace",d:""},
 {f:"cloud",img:"",t:"CloudStack Professional",by:"Cloud technologies",d:""},
 {f:"cloud",img:"",t:"Web Hosting",by:"Rackspace",d:""},
 {f:"cloud",img:"",t:"Digital Marketing Master",by:"Digital & web",d:""},
 {f:"cloud",img:"",t:"Web Analytics Master",by:"Digital & web",d:""},
 {f:"net",img:"",t:"Polycom PCVE",by:"Networking & infrastructure",d:""},
 {f:"net",img:"",t:"Application Delivery Controllers",by:"Array",d:""},
 {f:"net",img:"",t:"Link Load Balancing",by:"Networking & infrastructure",d:""},
 {f:"qs",img:"",t:"Certified TQM Professional",by:"Quality management",d:""},
 {f:"qs",img:"",t:"Six Sigma Black, Green, Yellow and White Belt",by:"Aveta",d:""},
 {f:"qs",img:"",t:"WHMIS Certification in Safety",by:"Health & safety",d:""}
];
const grid=R.getElementById('certs');
function render(f){
  grid.innerHTML=C.filter(c=>f==='all'||c.f===f).map(c=>`<article class="cert"><span class="ci"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="M8.6 13.4 7 21l5-3 5 3-1.6-7.6"/></svg></span><div class="cb"><h3>${c.t}</h3><span class="by">${c.by}</span><span class="cd">${c.d}</span></div></article>`).join('');
}
render('all');
R.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
  R.querySelectorAll('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));render(b.dataset.f)});
R.getElementById('copy').onclick=async function(){const t=R.getElementById('em').textContent;
  try{await navigator.clipboard.writeText(t);this.textContent='Copied'}catch(_){const r=document.createRange();r.selectNodeContents(R.getElementById('em'));const s=getSelection();s.removeAllRanges();s.addRange(r);this.textContent='Selected – press copy'}
  setTimeout(()=>this.textContent='Copy email',2000)};

/* ---- career rail ---- */
const T=[
 {y:"2004 - 2011",m:"network",w:"July 2004 – January 2011",t:"Power Transmission & Hydropower",o:"Early engineering roles",s:"Early engineering roles",k:[],p:["PLCC networks, VSAT, LAN/WAN, Windows and Linux servers.","Telemetry, teleprotection and SCADA/RTU communication integration.","Remote-site connectivity, 24x7 operations and technical support."]},
 {y:"2011 - 2019",m:"building",w:"January 2011 – July 2019",t:"Power Generation, Energy, FMCG & Infrastructure",o:"Led IT infrastructure and services",s:"Led IT infrastructure and services",k:[],p:["Greenfield thermal power plant infrastructure, enterprise networks, storage, backup and disaster recovery.","SAP ECC, Oracle ERP and unified communications.","Cybersecurity, IT budgeting, vendor governance and SLA management."]},
 {y:"2019 - 2025",m:"display",w:"July 2019 – June 2025",t:"Defence, Aerospace & Advanced Engineering",o:"Led IT, business applications and CISO responsibilities",s:"Led IT, business applications and CISO responsibilities",k:[],p:["Defence, aerospace, satellites, cyber and physical security, MRO, land mobility and airborne platforms.","Hybrid infrastructure, cloud, ERP, MES, PLM and engineering applications.","SOC, Zero Trust, compliance, international collaboration and mission-critical operations."]},
 {y:"June 2025 – Present",m:"growth",w:"June 2025 – Present",t:"Industrial Automation & Manufacturing",o:"Senior IT leadership",s:"Senior IT leadership",k:[],p:["Infrastructure, enterprise applications, cybersecurity, automation and digital transformation in a multi-location environment.","SAP S/4HANA stabilization and innovation, custom business applications and AI productivity solutions.","Global connectivity, data centre modernization, DPDP readiness, security controls and IT cost optimization."]}
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
  const hero=R.querySelector('.hero'),glow=document.createElement('div');glow.className='cursor-glow';hero.appendChild(glow);
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();glow.style.left=(e.clientX-r.left)+'px';glow.style.top=(e.clientY-r.top)+'px'});
}

/* ---- hero text ---- */
const h1=R.querySelector('.split');let d=0;
h1.querySelectorAll('.w1,.w2').forEach(w=>{const txt=w.textContent;w.textContent='';[...txt].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.animationDelay=(d+=0.045)+'s';s.setAttribute('aria-hidden','true');w.appendChild(s)})});
const words=["Enterprise IT Strategy","Infrastructure","Cybersecurity","Applications","Automation","AI/ML","Industry 4.0"];
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
