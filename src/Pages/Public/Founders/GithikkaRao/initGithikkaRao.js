/* eslint-disable */
// Behaviour for the githikka-rao profile. It runs against the shadow root that
// ShadowProfile attaches, and returns a teardown that undoes every timer and
// window listener it registered.
export default function initGithikkaRao(H, R) {
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


const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
/* name letter rise */
const h1=R.getElementById('name');{const full=h1.dataset.name;h1.setAttribute('aria-label',full);let d=0;
  h1.innerHTML=full.split(' ').map(w=>`<span class="w" aria-hidden="true">${[...w].map(c=>`<span class="ch" style="animation-delay:${(d+=.045).toFixed(3)}s">${c}</span>`).join('')}</span>`).join(' ')}
/* rotating roles */
const words=["Bharatanatyam dancer","international Taekwondo athlete","district-level skater","technology enthusiast"];
const rot=R.getElementById('rot');let wi=0;
if(!reduce)setInterval(()=>{const old=rot.querySelector('b:not(.out)'),nb=document.createElement('b');nb.className='in';nb.textContent=words[wi=(wi+1)%words.length];rot.appendChild(nb);
  requestAnimationFrame(()=>requestAnimationFrame(()=>{nb.className='';old.className='out'}));setTimeout(()=>old.remove(),650)},2600);
/* marquee */
const mq=["MBBS","Technology & IT","Bharatanatyam","Taekwondo","120+ medals","2 trophies","International from age 8","District-level skating"].map(t=>`<span>${t}</span>`).join('');
R.getElementById('mq').innerHTML=mq+mq;
/* headings word split */
R.querySelectorAll('.sec-head h2').forEach(h=>{h.innerHTML=h.textContent.split(' ').map((w,i)=>`<span class="w" style="transition-delay:${i*60}ms">${w}</span>`).join(' ')});
/* observers */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;io.unobserve(el);
  if(el.dataset.to){const to=+el.dataset.to,suf=el.dataset.suf,t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/1400);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)})(t0);el.closest('.stat').classList.add('lit')}
  else{el.classList.remove('pending')}}),{threshold:.2});
if(!reduce){
  R.querySelectorAll('.stat b[data-to]').forEach(b=>{b.textContent='0'+b.dataset.suf;io.observe(b)});
  R.querySelectorAll('.sec-head,.dc').forEach((el,i)=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('rv','pending');if(el.matches('.dc'))el.style.transitionDelay=(i%5)*90+'ms';io.observe(el)}});
}
/* scroll bar */
const sb=R.getElementById('sbar');let raf=0;addEventListener('scroll',()=>{if(raf)return;raf=requestAnimationFrame(()=>{raf=0;const m=document.documentElement.scrollHeight-innerHeight;sb.style.transform=`scaleX(${m>0?scrollY/m:0})`})},{passive:true});
/* tilt + glow */
if(!reduce&&matchMedia('(hover:hover)').matches){
  const p=R.querySelector('.portrait');p.style.transition='transform .5s var(--ease)';
  p.addEventListener('pointermove',e=>{const r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});
  p.addEventListener('pointerleave',()=>p.style.transform='');
  const hero=R.querySelector('.hero'),g=document.createElement('div');g.className='glow';hero.prepend(g);
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();g.style.left=(e.clientX-r.left)+'px';g.style.top=(e.clientY-r.top)+'px'});
}


  return () => teardown.forEach((fn) => fn());
}
