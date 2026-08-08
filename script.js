const menu=document.querySelector('.menu'),nav=document.querySelector('nav'),header=document.querySelector('.site-header'),hero=document.querySelector('.hero');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'Fermer':'Menu'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='Menu';menu.setAttribute('aria-expanded','false')}));
document.querySelectorAll('form[data-message]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const notice=form.querySelector('.notice');if(notice){notice.textContent=form.dataset.message}else{alert(form.dataset.message)}}));

const progress=document.createElement('div');progress.className='scroll-progress';document.body.append(progress);
const topButton=document.createElement('button');topButton.className='back-to-top';topButton.type='button';topButton.setAttribute('aria-label','Retourner en haut');topButton.innerHTML='↑';document.body.append(topButton);
const updateScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max?scrollY/max:0})`;header.classList.toggle('is-scrolled',scrollY>40);topButton.classList.toggle('is-visible',scrollY>700)};
addEventListener('scroll',updateScroll,{passive:true});updateScroll();
topButton.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const targets=document.querySelectorAll('.intro,.room,.gabon-photo,.gabon-copy,.section-head,.now article,.atelier-note,.portrait,.about-copy,.newsletter,.contact > div,.contact-form,footer');
 targets.forEach((el,i)=>{el.classList.add('reveal-item');el.style.setProperty('--reveal-delay',`${Math.min(i%4,3)*85}ms`)});
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
 targets.forEach(el=>observer.observe(el));
 hero?.addEventListener('pointermove',event=>{const x=(event.clientX/innerWidth-.5)*7,y=(event.clientY/innerHeight-.5)*5;hero.style.setProperty('--mouse-x',`${x}px`);hero.style.setProperty('--mouse-y',`${y}px`)});
}
// Small premium touches for the GitHub Pages version
requestAnimationFrame(()=>document.body.classList.add('site-ready'));
document.querySelectorAll('.room,.now article,.feature-list article').forEach(card=>{
 card.addEventListener('pointermove',event=>{const r=card.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;card.style.setProperty('--tilt-x',`${y*-2}deg`);card.style.setProperty('--tilt-y',`${x*2}deg`)});
 card.addEventListener('pointerleave',()=>{card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y')});
});
