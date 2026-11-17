/* Decorative heading illustrations, deliberately separate from proposal content. */
(() => {
 const paths = {
  compass:'<circle cx="32" cy="32" r="23"/><path d="m43 21-7 15-15 7 7-15z"/>',
  shield:'<path d="M32 7 52 15v16c0 13-9 21-20 26C21 52 12 44 12 31V15z"/><rect x="23" y="29" width="18" height="15" rx="3"/><path d="M26 29v-5a6 6 0 0 1 12 0v5"/>',
  building:'<path d="m8 23 24-14 24 14M10 26h44M12 54h40M18 29v21m14-21v21m14-21v21"/>',
  route:'<circle cx="14" cy="15" r="5"/><circle cx="50" cy="49" r="5"/><path d="M19 15h19a10 10 0 0 1 0 20H25a7 7 0 0 0 0 14h20m-9-41 7 7-7 7"/>',
  book:'<path d="M32 17C24 11 13 11 7 14v34c9-3 18-2 25 4 7-6 16-7 25-4V14c-6-3-17-3-25 3v35M14 22l11 2m-11 6 11 2m14-8 11-2m-11 10 11-2"/>',
  light:'<path d="M23 41c0-6-9-8-9-19a18 18 0 0 1 36 0c0 11-9 13-9 19M23 43h18m-18 7h18m-13 7h8M32 6V1M8 14l-5-3m53 3 5-3"/>',
  network:'<rect x="24" y="24" width="16" height="16" rx="4"/><circle cx="10" cy="10" r="6"/><circle cx="54" cy="10" r="6"/><circle cx="10" cy="54" r="6"/><circle cx="54" cy="54" r="6"/><path d="m15 15 10 10m14 0 10-10M15 49l10-10m14 0 10 10"/>',
  flask:'<path d="M23 7h18M27 7v20L12 49a5 5 0 0 0 4 8h32a5 5 0 0 0 4-8L37 27V7M21 39h22"/><circle cx="29" cy="46" r="2"/><circle cx="39" cy="50" r="2"/>',
  portfolio:'<rect x="7" y="19" width="50" height="35" rx="5"/><path d="M23 19v-7h18v7M7 31c15 8 35 8 50 0M29 32v8h6v-8"/>',
  people:'<circle cx="32" cy="19" r="9"/><path d="M16 53v-7a16 16 0 0 1 32 0v7M14 29a7 7 0 1 1 5-12M50 29a7 7 0 1 0-5-12M6 49v-8a10 10 0 0 1 7-9m45 17v-8a10 10 0 0 0-7-9"/>',
  checklist:'<path d="M22 11H13v46h38V11h-9"/><rect x="22" y="6" width="20" height="10" rx="3"/><path d="m20 28 3 3 5-6m7 4h8m-23 12 3 3 5-6m7 4h8"/>',
  document:'<path d="M15 7h24l12 12v38H15zM39 7v13h12M23 30h20M23 39h20M23 48h12"/>',
  search:'<circle cx="27" cy="27" r="18"/><path d="m40 40 15 15M19 27h16m-8-8v16"/>',
  leaf:'<path d="M12 50C4 21 29 8 54 10c0 27-12 43-35 39M12 55l30-33M26 40V26m0 14h15"/>'
 };
 const icons = {'overview':'compass','who-will-host':'building','secure-records':'shield','how-it-will-work':'route','learning-design':'book','skills-choice':'compass','efficacy-building':'leaf','pedagogy':'book','transferable-skills':'route','main-ecosystem':'network','skills-labs':'flask','portfolio-entry':'portfolio','portfolio-view':'portfolio','teacher-view':'people','provider-view':'building','assessment':'checklist','reflection-tool':'light','evidence-of-learning':'checklist','scsa':'building','scsa-requirements':'checklist','scsa-application':'document','existing-prototype':'network','research-background':'search','research-origins':'leaf','research-frameworks':'network','research-practice':'book','research-pathways':'route'};
 function decorate(){
  const title=document.querySelector('main #page-title');
  if(!title || title.closest('.page-heading'))return;
  const id=location.hash.slice(1).split('/')[0]||'overview';
  const wrap=document.createElement('div');wrap.className='page-heading';title.before(wrap);wrap.append(title);
  const icon=document.createElement('span');icon.className='heading-icon';icon.setAttribute('aria-hidden','true');
  icon.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${paths[icons[id]||'book']}</svg>`;wrap.append(icon);
  const hero=document.querySelector('.overview-art');if(hero)hero.setAttribute('aria-label','Current Skillsville 3D scene: sunset boardwalk, learner avatar, glass-domed Communication lab and landscaped learning paths');
 }
 new MutationObserver(decorate).observe(document.querySelector('main'),{childList:true});
 decorate();
})();
