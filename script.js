const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'Fermer':'Menu'});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='Menu';menu.setAttribute('aria-expanded','false')}));
document.querySelectorAll('form[data-message]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const notice=form.querySelector('.notice');if(notice){notice.textContent=form.dataset.message}else{alert(form.dataset.message)}}));
