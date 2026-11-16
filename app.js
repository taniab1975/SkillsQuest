'use strict';
const pages = [
 {id:'existing-prototype',title:'SkillsQuest prototype',intro:'Copied from the CEAWA SkillsQuest tab: explore the playable prototype, student portfolio and learner and teacher walkthroughs.'},
 {id:'overview',title:'Overview',intro:'SkillQuest is Tania’s personal project to develop an employability learning and portfolio program for Years 10–12. This hub brings together the playable Skillsville prototype and the plans for a proposed SCSA endorsed program.'},
 {id:'purpose',title:'Purpose',intro:'Define what SkillsQuest is here to achieve, who it is for and the difference it should make.'},
 {id:'who-will-host',title:'Who will host',intro:'Explore who could host, own and support the program. No host has been confirmed.'},
 {id:'how-it-will-work',title:'How it will work',intro:'Map the learner journey and the practical arrangements that make it possible.'},
 {id:'skills-choice',title:'Skills Choice',intro:'Compare the options and choose the most appropriate skills framework. The prototype lab themes provide a starting point for the formal framework.'},
 {id:'pedagogy',title:'Pedagogy',intro:'Set out the learning principles that will guide the design of SkillsQuest.'},
 {id:'main-ecosystem',title:'Main Ecosystem',intro:'Skillsville houses the Skills Labs and My Portfolio. Labs give learners room to experiment and develop capabilities. My Portfolio helps them record meaningful experiences and revisit them over time.',children:['skills-labs','portfolio-entry','portfolio-view','teacher-view','provider-view']},
 {id:'skills-labs',title:'Skills labs',parent:'main-ecosystem',intro:'A place to design experiences that help learners explore and practise skills.'},
 {id:'portfolio-entry',title:'Portfolio entry',parent:'main-ecosystem',intro:'Design how learners capture an experience and connect it with the skills they have used.'},
 {id:'portfolio-view',title:'Portfolio View',parent:'main-ecosystem',intro:'Plan how learners review their experiences, evidence and developing skills over time.'},
 {id:'teacher-view',title:'Teacher View',parent:'main-ecosystem',intro:'Define the information and tools teachers need to support learning and review progress.'},
 {id:'provider-view',title:'Provider View',parent:'main-ecosystem',intro:'Explore how participating providers could contribute to and review learning.'},
 {id:'assessment',title:'Assessment',intro:'The draft assessment approach focuses on what learners can explain about their own actions, results and learning in authentic contexts. Lab feedback supports practice and a portfolio review considers the evidence.',children:['reflection-tool','evidence-of-learning']},
 {id:'reflection-tool',title:'Reflection Tool',parent:'assessment',intro:'Design prompts that help learners explain their choices, recognise learning and consider their next step.'},
 {id:'evidence-of-learning',title:'Evidence of Learning',parent:'assessment',intro:'Clarify what counts as evidence and how it demonstrates the intended learning.'},
 {id:'scsa-requirements',title:'SCSA requirements',intro:'A dedicated place to collect and check the requirements relevant to a proposed endorsed program.'},
 {id:'scsa-application',title:'SCSA Application',intro:'Organise the application material when the program design and requirements are ready.'}
];
const drafts = {
  'purpose': {
    heading: "Program purpose",
    lead: "SkillQuest helps Years 10–12 learners recognise employability capabilities in everyday life, practise them in Skillsville and explain how they used them in real experiences.",
    items: ["Describe a capability and recognise observable behaviours in context.","Try different approaches, use feedback and explain what changed.","Use specific examples to explain your contribution, what you learned and what you might try next.","Revisit experiences across school, work, home, volunteering and community life to notice interests, enjoyment and possible futures."]
  },
  'who-will-host': {
    heading: "Roles to confirm",
    lead: "Tania is developing SkillQuest as a personal project. The pilot school, applicant, platform operator and any external partners are open decisions.",
    items: ["The applicant would own program materials, delivery expectations, moderation and completion records.","A participating school would organise learner access, teaching, support and feedback.","An experience partner could provide an activity or verify agreed details where appropriate."]
  },
  'how-it-will-work': {
    heading: "A learner’s journey",
    lead: "Start in Skillsville. Choose a Skills Lab, discover what a capability looks like and try it in a challenge where choices change the outcome.",
    items: ["Discuss what happened and how the same behaviour might help in a real setting.","Choose a meaningful experience and record it in My Portfolio using Situation, Task, Action and Result.","Use feedback to clarify your own contribution, then revisit earlier entries to see growth and decide what to try next."]
  },
  'skills-choice': {
    heading: "The current prototype set",
    lead: "Skillsville has eight agreed lab themes for the world design. The formal endorsed-program framework, definitions and progression are still open.",
    items: ["Communication and Collaboration cover clear exchanges, listening and working towards a shared outcome.","Initiative and Self-management cover noticing what needs doing, following through and organising time and effort.","Problem-solving and Adaptability cover investigating a problem, testing options and adjusting when conditions change.","Creativity and Leadership cover generating and improving ideas, inviting input and helping a group act.","Use Skills Builder as a reference when comparing definitions and overlap. Check permissions before adapting third-party material."]
  },
  'pedagogy': {
    heading: "Learn, experiment and reflect",
    lead: "Make exploration and replay enjoyable. Teach the capability vocabulary explicitly, show it in context and let learners test their own approaches.",
    items: ["Use specific feedback to help students explain why an approach worked and where else they could use it.","Offer different ways to access instructions and demonstrate learning. Use worked examples or sentence starters where learners need support.","Let learners choose authentic experiences that matter to them and use feedback to strengthen their reflections."]
  },
  'skills-labs': {
    heading: "Communication Skills Lab",
    lead: "Relay Rescue is the playable example. Learners choose radio instructions for Kai, see the consequences and use feedback to retry. The Signal Keeper stamp records mission completion.",
    items: ["Each lab is designed for discovery, experimentation, practice and drawing conclusions about a capability.","The other seven lab exteriors establish the world’s layout and visual identities. Their learning activities remain to be designed."]
  },
  'portfolio-entry': {
    heading: "Capture a real experience",
    lead: "Proposed entry fields include the date, setting, title, one or more relevant capabilities and a STAR reflection.",
    items: ["Situation and Task describe what was happening and what you needed to do or were responsible for.","Action explains what you personally did and why. Result describes what happened and what you learned.","Invite learners to record what they enjoyed and what they would try next. Evidence attachments and sharing permissions are future design decisions."]
  },
  'portfolio-view': {
    heading: "Revisit and connect experiences",
    lead: "My Portfolio groups key experiences by date and capability so learners can find earlier examples, compare their actions over time and notice changing interests.",
    items: ["A learner could choose entries for a careers conversation, interview or future application. Sharing and export are proposed features.","The current prototype keeps entries in the browser. Use fictional examples when demonstrating the public prototype."]
  },
  'teacher-view': {
    heading: "Support practice and review evidence",
    lead: "A proposed cohort view would show lab participation, portfolio submissions and items that need feedback.",
    items: ["Teachers could review submitted examples by learner, date or capability, ask for clarification and see what changed between versions.","Show game progress and evidence review as distinct information. School accounts, access permissions and review workflow are design decisions."]
  },
  'provider-view': {
    heading: "Support authentic experiences",
    lead: "A provider is a possible partner offering a real experience or confirming a learner’s role and activities. The applicant’s responsibility for program completion and quality assurance is a separate role.",
    items: ["If verification is useful, start with the activity, dates and agreed details of the learner’s contribution.","Provider access, consent and verification arrangements remain open."]
  },
  'reflection-tool': {
    heading: "Prompts for a learner",
    lead: "What was happening, and what were you trying to achieve?",
    items: ["What did you personally do? Why did you choose that approach?","What happened as a result, and which capability did you use?","What did you enjoy? What did you learn about your interests or strengths?","What would you do differently next time, or where else could you use this capability?"]
  },
  'evidence-of-learning': {
    heading: "What a reviewer could look for",
    lead: "Start with an authentic STAR example linked to an observable behaviour and a stated learning outcome. A reviewer should be able to identify the learner’s own actions and the result.",
    items: ["Where appropriate, a work sample, observation or confirmation by someone involved could support the reflection.","Use feedback and revised examples to test whether draft criteria are clear and can be applied consistently. Participation, scores and stamps track practice.","Evidence quantity, completion rules, moderation, retention and certification require decisions before an application."]
  },
  'scsa-requirements': {
    heading: "What the proposal needs to establish",
    lead: "Use the current SCSA guidance and confirm the appropriate application pathway once the applicant is identified.",
    items: ["Set out substantial learning outcomes and show how the proposed program avoids duplicating WACE courses.","Describe the teaching sequence and estimate average learning time across instruction, practice, reflection and assessment. Use pilot records to support that estimate.","Define evidence and successful completion criteria, quality assurance, certification, recordkeeping and program evaluation."]
  },
  'scsa-application': {
    heading: "Draft program summary",
    lead: "SkillQuest is a proposed employability learning and portfolio program for Years 10–12. Learners develop capability vocabulary, try and refine approaches in Skillsville, then document and reflect on authentic experiences in My Portfolio.",
    items: ["Build the application around a teaching scope and sequence, sample activities, annotated fictional evidence, draft completion criteria and a moderation plan.","Use a pilot to gather learning-time estimates, evidence quality and feedback on teaching, learner experience and accessibility.","Open decisions include the applicant, route, delivery model, approved framework and completion standard. Endorsement, hours and unit equivalence are unconfirmed."]
  }
};
const byId = Object.fromEntries(pages.map(p=>[p.id,p]));
const nav=document.querySelector('#navigation');
let number=0;
nav.innerHTML=pages.filter(p=>!p.parent).map(p=>{const n=String(++number).padStart(2,'0');return `<a href="#${p.id}" data-page="${p.id}"><span class="num">${n}</span>${p.title}</a>${p.children?`<div class="children">${p.children.map(id=>`<a href="#${id}" data-page="${id}">${byId[id].title}</a>`).join('')}</div>`:''}`}).join('');
const menu=document.querySelector('#menu-toggle');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
function cards(ids){return `<div class="grid">${ids.map(id=>{const p=byId[id];return `<a class="card" href="#${id}"><div class="card-top"><span class="arrow" aria-hidden="true">↗</span></div><h3>${p.title}</h3><p>${p.intro}</p></a>`}).join('')}</div>`}
function render(focus=false){let id=location.hash.slice(1)||'overview';if(!byId[id])id='overview';const p=byId[id];
 document.title=`${p.title} · SkillsQuest`;
 document.querySelector('#breadcrumb').textContent=p.parent?`${byId[p.parent].title} / ${p.title}`:p.title;
 nav.querySelectorAll('a').forEach(a=>{if(a.dataset.page===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 const main=document.querySelector('main');
 const header=`<p class="eyebrow">${p.parent?byId[p.parent].title:'Personal project · Endorsed program'}</p><h1 id="page-title">${id==='overview'?'SkillQuest':p.title}</h1><p class="lead">${p.intro}</p>`;
 if(id==='existing-prototype')main.innerHTML=`${header}<p><a href="skillsquest-prototype.html" target="_blank" rel="noopener">Open prototype and portfolio in a full window ↗</a></p><iframe title="SkillsQuest prototype and capabilities portfolio" src="skillsquest-prototype.html" style="width:100%;height:850px;border:1px solid #dce2d5;border-radius:18px" allowfullscreen></iframe>`;
 else if(id==='overview')main.innerHTML=`<div class="hero"><div>${header}</div><div class="hero-mark" aria-hidden="true"><span>SQ</span></div></div><div class="section-bar"><h2>A foundation to build on</h2><span>Start anywhere. Keep the whole picture in view.</span></div>${cards(['existing-prototype','purpose','skills-choice','main-ecosystem','pedagogy','assessment','scsa-application'])}<div class="note"><span class="note-icon" aria-hidden="true">i</span><div><strong>Program in development</strong><br>The prototype and first program drafts are available here. Hosting, the formal framework and completion criteria are open for review.</div></div>`;
 else if(p.children)main.innerHTML=`${header}<div class="section-bar"><h2>Explore this part of the program</h2><span>${p.children.length} connected sections</span></div>${cards(p.children)}`;
 else {
  const draft = drafts[id];
  const sources = id === 'scsa-requirements' ? `<p><a href="https://senior-secondary.scsa.wa.edu.au/vet/endorsed-programs">SCSA endorsed program guidance and application forms</a></p>` : '';
  main.innerHTML = `${header}<section class="content-panel"><h2>${draft.heading}</h2><p>${draft.lead}</p><ul>${draft.items.map(item => `<li>${item}</li>`).join('')}</ul>${sources}</section>`;
 }
 const idx=pages.indexOf(p);main.insertAdjacentHTML('beforeend',`<div class="page-bottom">${idx?`<a href="#${pages[idx-1].id}">← ${pages[idx-1].title}</a>`:''}${idx<pages.length-1?`<a class="next" href="#${pages[idx+1].id}">${pages[idx+1].title} →</a>`:''}</div>`);
 nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(focus){main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();document.querySelector('main').focus()});
window.addEventListener('hashchange',()=>render(true));render();
