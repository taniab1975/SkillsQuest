'use strict';
function loadVisible(){
 document.querySelectorAll('iframe[data-src]').forEach(frame=>{if(!frame.closest('[hidden]')&&!frame.src)frame.src=frame.dataset.src});
 document.querySelectorAll('video').forEach(video=>{if(video.closest('[hidden]'))video.pause();});
}
document.querySelectorAll('.media-switch').forEach(group=>{
 const choices=group.querySelector(':scope > .media-choices');
 const frame=group.querySelector(':scope > .media-frame');
 if(!choices||!frame)return;
 choices.querySelectorAll('button[data-view]').forEach(button=>button.addEventListener('click',()=>{
  choices.querySelectorAll('button[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  [...frame.children].filter(p=>p.hasAttribute('data-panel')).forEach(panel=>panel.hidden=panel.dataset.panel!==button.dataset.view);
  loadVisible();
 }));
});
loadVisible();
