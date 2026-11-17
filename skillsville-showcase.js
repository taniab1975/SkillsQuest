/* Progressive enhancement: live world where WebGL is available, still otherwise. */
(() => {
 const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let webgl=false;
 try {const canvas=document.createElement('canvas');const gl=canvas.getContext('webgl');webgl=Boolean(gl);gl?.getExtension('WEBGL_lose_context')?.loseContext();}catch(_error){}
 function enhance(){
  const hero=document.querySelector('.overview-art');if(!hero||hero.dataset.showcase)return;
  hero.dataset.showcase='true';
  const controls=document.createElement('div');controls.className='showcase-controls';
  const status=document.createElement('span');status.textContent=webgl?'Skillsville · live world':'Skillsville · image preview';
  const button=document.createElement('button');button.type='button';
  const link=document.createElement('a');link.href='#skillsville-world';link.textContent='Explore Skillsville ↗';
  controls.append(status);if(webgl)controls.append(button);controls.append(link);hero.after(controls);
  let frame;
  function pause(){frame?.remove();frame=null;button.textContent='Play live view';button.setAttribute('aria-pressed','false');status.textContent='Skillsville · image preview';hero.setAttribute('role','img');}
  function play(){
   if(frame)return;hero.removeAttribute('role');
   frame=document.createElement('iframe');
   frame.src='skillsville/';
   frame.title='Playable Skillsville world';
   frame.loading='lazy';
   frame.className='showcase-frame';
   frame.style.pointerEvents='auto';
   hero.append(frame);
   button.textContent='Pause live view';button.setAttribute('aria-pressed','true');status.textContent='Skillsville · live world';
   frame.addEventListener('load',()=>{try{const game=frame.contentDocument?.querySelector('iframe');const doc=game?.contentDocument;const canvas=doc?.querySelector('#view3d');if(canvas?.hidden)pause();}catch(_error){}});
  }
  button.addEventListener('click',()=>frame?pause():play());
  pause();if(webgl&&!reduceMotion)play();
 }
 new MutationObserver(enhance).observe(document.querySelector('main'),{childList:true});enhance();
})();
