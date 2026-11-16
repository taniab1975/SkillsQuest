'use strict';
const pages = [
 {id:'overview',title:'Overview',intro:'SkillsQuest is a proposed Provider Endorsed Program with the School Curriculum and Standards Authority (SCSA).'},
 {id:'purpose',title:'Purpose',intro:'Define what SkillsQuest is here to achieve, who it is for and the difference it should make.'},
 {id:'who-will-host',title:'Who will host',intro:'Explore who could host, own and support the program. No host has been confirmed.'},
 {id:'how-it-will-work',title:'How it will work',intro:'Map the learner journey and the practical arrangements that make it possible.'},
 {id:'transferable-skills',title:'Transferable Skills',intro:'A placeholder for Tania’s work on how skills carry across tasks, subjects and work settings.',post:{path:'transferable-skills-post.svg',width:714,height:1344,alt:'Tania Byrnes’s post on transfer, illustrated with examples from bus driving, oral presentations and training. The post describes identifying common skills and gaps, reducing cognitive load during initial practice and using consistent teaching across contexts.'}},
 {id:'efficacy-building',title:'Efficacy Building',intro:'A starting point for thinking about self-efficacy, learner agency and confidence in career learning.',post:{path:'efficacy-building-post.svg',width:420,height:1182,alt:'Tania Byrnes’s post on learner self-efficacy and confidence. It discusses recognising unhelpful thinking, explicit teaching, supportive practice, flexible pathways and revisiting progress. The diagram connects self-efficacy, outcome expectations, goals, behaviour and contextual influences.'}},
 {id:'skills-choice',title:'Skills Choice',intro:'Compare the options and choose the most appropriate skills framework. The prototype lab themes provide a starting point for the formal framework.'},
 {id:'pedagogy',title:'Pedagogy',intro:'Set out the learning principles that will guide the design of SkillsQuest.'},
 {id:'main-ecosystem',title:'Main Ecosystem',intro:'Skillsville houses the Skills Labs and My Portfolio. Labs give learners room to experiment and develop capabilities. My Portfolio helps them record meaningful experiences and revisit them over time.',children:['skills-labs','portfolio-entry','portfolio-view','teacher-view','provider-view','skillsville-world']},
 {id:'skills-labs',title:'Skills labs',parent:'main-ecosystem',intro:'A place to design experiences that help learners explore and practise skills.'},
 {id:'portfolio-entry',title:'Portfolio entry',parent:'main-ecosystem',intro:'Design how learners capture an experience and connect it with the skills they have used.'},
 {id:'portfolio-view',title:'Portfolio View',parent:'main-ecosystem',intro:'Plan how learners review their experiences, evidence and developing skills over time.'},
 {id:'teacher-view',title:'Teacher View',parent:'main-ecosystem',intro:'Define the information and tools teachers need to support learning and review progress.'},
 {id:'provider-view',title:'Provider View',parent:'main-ecosystem',intro:'Explore how participating providers could contribute to and review learning.'},
 {id:'skillsville-world',title:'Skillsville prototype world',parent:'main-ecosystem',href:'skillsville/',intro:'Open Skillsville to explore the playable world.'},
 {id:'assessment',title:'Assessment',intro:'The draft assessment approach focuses on what learners can explain about their own actions, results and learning in authentic contexts. Lab feedback supports practice and a portfolio review considers the evidence.',children:['reflection-tool','evidence-of-learning']},
 {id:'reflection-tool',title:'Reflection Tool',parent:'assessment',intro:'Design prompts that help learners explain their choices, recognise learning and consider their next step.'},
 {id:'evidence-of-learning',title:'Evidence of Learning',parent:'assessment',intro:'Clarify what counts as evidence and how it demonstrates the intended learning.'},
 {id:'scsa-requirements',title:'SCSA requirements',intro:'A dedicated place to collect and check the requirements relevant to a proposed endorsed program.'},
 {id:'scsa-application',title:'SCSA Application',intro:'Organise the application material when the program design and requirements are ready.'},
 {id:'existing-prototype',title:'SkillsQuest prototype',intro:'Copied from the CEAWA SkillsQuest tab: explore the playable prototype, student portfolio and learner and teacher walkthroughs.'},
 {id:'research-background',title:'Research & Background',intro:'Source index for the extracts and design ideas used across the SkillQuest tabs.'}
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
const originPost = {
  path: 'project-purpose-post.svg',
  width: 534,
  height: 1086,
  alt: 'Tania Byrnes reflects on helping people return to work and recognising skills gained through sports clubs, caring and household responsibilities. She connects that experience to broader recognition of student capabilities and confidence in future pathways.'
};

function postFigure(post) {
 return `<figure class="content-panel" style="margin-inline:0;max-width:760px"><img src="${post.path}" width="${post.width}" height="${post.height}" alt="${post.alt}" style="display:block;max-width:100%;height:auto"><figcaption>Original post by Tania Byrnes</figcaption></figure>`;
}

const references = [
  {
    "id": "halsall",
    "title": "Work Capabilities literature review",
    "type": "WA Department of Education research and guidance",
    "citation": "Dr Lucy Halsall. Supplied excerpt in Work Capabilities, 7 February 2023, pp. 1–8. The presentation also credits Janet Silburn Barker.",
    "links": [
      "skills-choice",
      "pedagogy",
      "reflection-tool"
    ],
    "url": "https://myresources.education.wa.edu.au/programs/career-learning-toolkit/work-capabilities",
    "linkTitle": "WA Career Learning Toolkit"
  },
  {
    "id": "rossmoyne",
    "title": "Rossmoyne SHS illustration of practice",
    "type": "School practice",
    "citation": "Janet Silburn Barker, Rossmoyne SHS section of Work Capabilities, 7 February 2023, pp. 9–39.",
    "links": [
      "pedagogy",
      "teacher-view",
      "scsa-application"
    ]
  },
  {
    "id": "harrisdale",
    "title": "Harrisdale Entrepreneurship and Capabilities",
    "type": "School practice",
    "citation": "Embedding Capabilities into the Entrepreneurship and Innovation Elective, pp. 4, 16, 23 and 30.",
    "links": [
      "skills-choice",
      "skills-labs",
      "pedagogy"
    ]
  },
  {
    "id": "tkc",
    "title": "TKC Thoughts",
    "type": "Earlier project thinking",
    "citation": "TKC Thoughts [Auto-saved], slides 13–16 and 21–32.",
    "links": [
      "purpose",
      "skills-choice",
      "portfolio-view",
      "evidence-of-learning"
    ]
  },
  {
    "id": "kolb",
    "title": "Kolbe and reporting",
    "type": "Earlier project thinking",
    "citation": "Kolbe and reporting, slides 1, 4–5.",
    "links": [
      "pedagogy",
      "reflection-tool",
      "portfolio-view"
    ]
  },
  {
    "id": "matching",
    "title": "Matching Not Ranking",
    "type": "Earlier careers and portfolio thinking",
    "citation": "Matching Not Ranking 2, opening slide and the learner profile and e-portfolio sections.",
    "links": [
      "purpose",
      "portfolio-view",
      "portfolio-entry"
    ],
    "url": "https://education.unimelb.edu.au/melbourne-metrics/our-research/matching-for-success/research",
    "linkTitle": "Related Melbourne Metrics research"
  },
  {
    "id": "pathways",
    "title": "Pathways to Post-School Success Expert Panel Report",
    "type": "WA policy background",
    "citation": "WA Expert Panel, final report, 2024, pp. 47–48, recommendations 26–27.",
    "links": [
      "purpose",
      "portfolio-view",
      "assessment",
      "scsa-requirements"
    ],
    "url": "https://www.education.wa.edu.au/dl/l46qpd2x",
    "linkTitle": "Read the final report"
  }
];
const sourceNotes = {
  "purpose": [
    [
      "matching",
      "Use portfolio examples to connect students’ capabilities, interests and aspirations with possible pathways as their plans evolve."
    ],
    [
      "pathways",
      "The panel’s learner profile discussion gives historical context for recording learning across settings."
    ],
    [
      "tkc",
      "An earlier design question still applies. What can a learner show about a transferable capability across school, work and community experiences?"
    ]
  ],
  "skills-choice": [
    [
      "halsall",
      "Compare the vocabulary and intended uses of different frameworks before setting the program’s capability names."
    ],
    [
      "harrisdale",
      "Use the elective’s four initial areas to compare coverage and overlap with the eight prototype themes."
    ],
    [
      "tkc",
      "Test the sets against real activities. Compare observable behaviours, where learners can practise them and what evidence they could collect. Formal selection is open."
    ]
  ],
  "pedagogy": [
    [
      "kolb",
      "Build a cycle into lab activities. Have an experience, reflect on what happened, draw a conclusion and test a revised approach."
    ],
    [
      "harrisdale",
      "Use short, enjoyable projects to practise several capabilities together. Debrief the choices and what changed."
    ],
    [
      "rossmoyne",
      "Support consistent teaching with shared definitions, model lessons and teacher-led discussion."
    ]
  ],
  "skills-labs": [
    [
      "harrisdale",
      "A design challenge could make learners use more than one capability. Scope a clear opportunity to practise and revisit each target behaviour."
    ]
  ],
  "portfolio-entry": [
    [
      "tkc",
      "The earlier activity map links a real experience to capability behaviours and captures a Situation, Action and Outcome."
    ],
    [
      "matching",
      "Add an optional prompt about what made this experience interesting and which future roles or settings it might connect to."
    ]
  ],
  "portfolio-view": [
    [
      "tkc",
      "Explore a future learner profile with a learner-authored introduction, selected evidence, real experiences and achievements."
    ],
    [
      "kolb",
      "The portfolio collects work and reflections. A passport could collect verified credentials, and a profile could summarise selected evidence for an audience."
    ],
    [
      "matching",
      "Let learners choose examples for a pathway conversation, review their interests and update what they want to explore."
    ],
    [
      "pathways",
      "Recommendation 26 provides context for exploring learner profiles as a longer-term idea."
    ]
  ],
  "teacher-view": [
    [
      "rossmoyne",
      "A shared set of fictional examples and review prompts could help teachers compare judgements in a pilot."
    ]
  ],
  "assessment": [
    [
      "pathways",
      "Recommendation 27 proposes investigating assessment of complex competencies through course content. SkillQuest’s own completion and moderation approach remains in development."
    ],
    [
      "tkc",
      "Use observable behaviours, sample evidence and shared teacher judgements to test draft criteria."
    ]
  ],
  "reflection-tool": [
    [
      "tkc",
      "SAO is Situation, Action, Outcome. STAR adds an explicit Task field for responsibility or the goal. Compare the two using the same fictional experience."
    ],
    [
      "kolb",
      "Kolb’s cycle helps a learner use the experience to plan their next attempt. Add prompts such as ‘What did this teach you?’ and ‘What will you try next?’ alongside the account of what happened."
    ],
    [
      "halsall",
      "Use shared capability language so learners can identify what they did, self-assess and describe their progress to others."
    ]
  ],
  "evidence-of-learning": [
    [
      "tkc",
      "Use the activity map to find opportunities for evidence. Assess the described actions and supporting examples against a behaviour or outcome."
    ],
    [
      "kolb",
      "The reporting deck’s three forms of recognition suggest distinct purposes for collected work, credentials and a learner summary."
    ]
  ],
  "scsa-requirements": [
    [
      "pathways",
      "The Expert Panel report is historical policy context. Consult current SCSA guidance for the application requirements."
    ]
  ],
  "scsa-application": [
    [
      "rossmoyne",
      "Use teacher exemplars and shared discussion to prepare for the pilot and learn where the review criteria need clarification."
    ]
  ]
};
const topicExtracts = {
  "skills-choice": [
    [
      "Capabilities in context",
      "Bill Lucas’s 2018 Mitchell Institute snapshot traces how education systems have described capabilities over time and compares 15 international frameworks. Pages 2–5 include examples such as Habits of Mind, the International Baccalaureate learner profile, New Pedagogies for Deep Learning and UNESCO’s transversal competencies. For SkillQuest, it is a useful check on whether a proposed set gives enough attention to reflection, learning dispositions and citizenship alongside work skills.",
      [["Read Capabilities in Context (PDF)","https://vuir.vu.edu.au/38693/1/Capabilities-in-context.pdf"]]
    ],
    [
      "What counts as a skill?",
      "Lucy Sattler’s October 2026 study compares eight workforce frameworks, including O*NET, ESCO, SkillsFuture Singapore and the former Australian Skills Classification. Twelve core concepts appeared in at least half of the frameworks. Communication, teamwork and problem solving appeared in all eight, even where labels and definitions differed. For SkillQuest, this supports testing learner-friendly names and keeping a record of equivalent terms used in school and work. The study provides a comparison point for the eight prototype themes.",
      [
        [
          "Read Sattler’s paper and Table 4",
          "https://gjsd.gile-edu.org/index.php/home/article/view/14-sattler-3-20"
        ]
      ]
    ],
    [
      "Australian skills taxonomy progress",
      "The Australian Skills Classification organised occupational information into core competencies, specialist tasks and technology tools. Jobs and Skills Australia is building the National Skills Taxonomy on lessons from that work. Consultation began in June 2024 and the October 2026 newsletter reported testing and independent review. JSA’s November webinar describes giving one skill a consistent identity while making it discoverable across several occupations or settings. The design paper was planned for March 2027 as of the October update.",
      [
        [
          "National Skills Taxonomy project",
          "https://www.jobsandskills.gov.au/data/national-skills-taxonomy"
        ],
        [
          "October 2026 progress update",
          "https://www.jobsandskills.gov.au/sites/default/files/2026-10/nst_newsletter_-_october_2026.pdf"
        ],
        [
          "November webinar",
          "https://www.jobsandskills.gov.au/news/webinar-more-than-one-way-find-skill"
        ]
      ]
    ],
    [
      "SCSA General Capabilities updates",
      "SCSA published updated Pre-primary to Year 10 General Capabilities in 2026, adapting Australian Curriculum v9 for Western Australia. The seven areas are Critical and creative thinking, Digital literacy, Ethical understanding, Intercultural understanding, Literacy, Numeracy, and Personal and social capability. SCSA also updated course-specific statements in Year 11 ATAR and General syllabuses for 2026 and reviewed the equivalent Year 12 statements for teaching in 2027. These are curriculum references for comparing coverage and language, with endorsed program requirements handled separately.",
      [
        [
          "WA General Capabilities and continua",
          "https://k10outline.scsa.wa.edu.au/home/wa-curriculum/general-capabilities"
        ],
        [
          "Year 11 syllabus update",
          "https://www.scsa.wa.edu.au/7to12-circulars/edition-1-february-2026/2.-courses-11-and-12/atar-and-general-year-11-syllabus-updates-for-2026"
        ],
        [
          "Years 11 and 12 syllabus review",
          "https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/syllabus-review"
        ]
      ]
    ],
    [
      "Compare models in their original context",
      "Lucy Halsall’s Department slides bring together Australian and international models. Rossmoyne groups capabilities for consistent teaching across learning areas. Harrisdale shows how an elective chose a teachable subset and later drew on Skills Builder. The TKC slides compare a competency model and an activity map across multiple frameworks. The formal SkillQuest capability set remains open."
    ]
  ],
  "assessment": [
    [
      "Kolb, STAR and SAO in practice",
      "The reporting deck and Matching Not Ranking slides show David Kolb’s cycle. Learners have an experience, reflect on it, draw a conclusion and try a revised approach. STAR helps them account for their situation, task, action and result. The earlier Harrisdale and TKC examples use Situation, Action, Outcome (SAO). For a pilot, the same fictional experience can show whether separating Task helps students describe their responsibility and whether a next-attempt prompt helps them apply the learning."
    ],
    [
      "Assessment that fits the learning goal",
      "The WA Expert Panel’s recommendations 11 and 12 propose designing assessment around the learning goal and choosing methods appropriate to what is being assessed. Recommendation 27 considers how complex competencies could be assessed through course content. In SkillQuest, that gives a rationale for considering STAR evidence, observations and work samples together when the outcome calls for them.",
      [["Final WA Expert Panel report", "https://www.education.wa.edu.au/dl/l46qpd2x"]]
    ]
  ],
  "reflection-tool": [
    [
      "Use the worked example",
      "The Assessment tab holds the original Kolb slides, including the worked example from Matching Not Ranking. Use the cycle to move from describing what happened to deciding what to try next.",
      [
        [
          "See the extracted slides on Assessment",
          "#assessment"
        ]
      ]
    ]
  ],
  "purpose": [
    [
      "Pathways and broader recognition",
      "Matching Not Ranking asks how strengths, interests and aspirations can help learners find a suitable course or occupation. The WA Expert Panel’s final report places broader recognition in the context of school engagement, different pathways and preparation for life beyond school. Its recommendations 26 and 27 investigate learner profiles and complex competencies.",
      [
        [
          "Expert Panel final report, pp. 47–48",
          "https://www.education.wa.edu.au/dl/l46qpd2x"
        ]
      ]
    ]
  ],
  "who-will-host": [
    [
      "What school implementation involved",
      "Rossmoyne’s example used a cross-curriculum team, leadership support, teacher professional learning, shared resources and a school audit. That experience helps identify the support a pilot school would need. The applicant and host remain open.",
      [
        [
          "Rossmoyne professional learning slides",
          "#teacher-view"
        ]
      ]
    ]
  ],
  "how-it-will-work": [
    [
      "From practice to evidence",
      "Harrisdale’s elective sequenced explicit capability teaching, project practice, learner self-assessment and a progress log. Rossmoyne’s implementation started with shared definitions and teacher examples before widening delivery. SkillQuest can use these as school practice examples for designing a pilot.",
      [
        [
          "Harrisdale project examples",
          "#skills-labs"
        ],
        [
          "Progress log extract",
          "#portfolio-entry"
        ]
      ]
    ]
  ],
  "main-ecosystem": [
    [
      "Where the source ideas fit",
      "The source examples connect explicit teaching and repeat practice to recording and reviewing an authentic experience. The Skills Labs, Portfolio Entry, Portfolio View and Teacher View tabs contain the corresponding extracts."
    ]
  ],
  "provider-view": [
    [
      "Experience and verification",
      "The recognition slides distinguish learner-collected work from credentials attested by a person or organisation. That distinction helps define when a provider might confirm an experience and what a teacher would still need to review.",
      [
        [
          "Portfolio, passport and profile extract",
          "#portfolio-view"
        ]
      ]
    ]
  ],
  "evidence-of-learning": [
    [
      "From activity to observable evidence",
      "The TKC activity map shows how school activities might give learners opportunities to demonstrate a capability. The New Metrics slides give examples of behavioural indicators and a validation process. A framework crosswalk describes the opportunity. The learner’s actions and supporting evidence allow a reviewer to judge what was demonstrated.",
      [
        [
          "Assessment and behavioural indicator slides",
          "#assessment"
        ],
        [
          "Activity map",
          "#portfolio-entry"
        ]
      ]
    ]
  ],
  "scsa-requirements": [
    [
      "Curriculum changes and endorsement",
      "The SCSA syllabus and General Capabilities updates sit in Skills Choice for comparison with the proposed outcomes. The Expert Panel’s recommendations about learner profiles and complex competencies sit in Purpose and Assessment as policy background.",
      [
        [
          "SCSA updates on Skills Choice",
          "#skills-choice"
        ],
        [
          "Expert Panel final report",
          "https://www.education.wa.edu.au/dl/l46qpd2x"
        ]
      ]
    ]
  ]
};
const slideGroups = {
  "skills-choice": [
    "skills-choice-a",
    "skills-choice-b"
  ],
  "assessment": [
    "assessment"
  ],
  "pedagogy": [
    "pedagogy"
  ],
  "skills-labs": [
    "skills-labs"
  ],
  "portfolio-entry": [
    "portfolio-entry"
  ],
  "portfolio-view": [
    "portfolio-view"
  ],
  "teacher-view": [
    "teacher-view"
  ],
  "efficacy-building": [
    "efficacy-building"
  ],
  "transferable-skills": [
    "transferable-skills"
  ],
  "scsa-application": [
    "scsa-application"
  ]
};
const byId = Object.fromEntries(pages.map(p=>[p.id,p]));
const pageHref = id => '#' + id;
const nav=document.querySelector('#navigation');
let number=0;
nav.innerHTML=pages.filter(p=>!p.parent).map(p=>{const n=String(++number).padStart(2,'0');return `<a href="#${p.id}" data-page="${p.id}"><span class="num">${n}</span>${p.title}</a>${p.children?`<div class="children">${p.children.map(id=>`<a href="${pageHref(id)}" data-page="${id}">${byId[id].title}</a>`).join('')}</div>`:''}`}).join('');
const menu=document.querySelector('#menu-toggle');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
function cards(ids){return `<div class="grid">${ids.map(id=>{const p=byId[id];return `<a class="card" href="${pageHref(id)}"><div class="card-top"><span class="arrow" aria-hidden="true">↗</span></div><h3>${p.title}</h3><p>${p.intro}</p></a>`}).join('')}</div>`}
function researchLibrary() {
 return references.map(source => `
  <section class="content-panel" id="source-${source.id}">
   <p class="eyebrow">${source.type}</p>
   <h2>${source.title}</h2>
   <p><cite>${source.citation}</cite></p>
   ${source.url ? `<p><a href="${source.url}">${source.linkTitle}</a></p>` : ''}
   <p>Related tabs · ${source.links.map(id => `<a href="#${id}">${byId[id].title}</a>`).join(' · ')}</p>
  </section>`).join('');
}
function renderSourceNotes(notes) {
 return `<section class="content-panel"><h2>Ideas from the sources</h2><ul>${notes.map(([id, idea]) => {
  const source = references.find(entry => entry.id === id);
  return `<li>${idea} <a href="#research-background/${id}">${source.title}</a></li>`;
 }).join('')}</ul></section>`;
}
const capabilityModels = [
  [
    "WA Department of Education",
    "Work Capabilities · Halsall, slide 6",
    "#research-background/halsall"
  ],
  [
    "Rossmoyne SHS",
    "Capabilities for Learning and Life · slide 24",
    "#research-background/rossmoyne"
  ],
  [
    "Harrisdale SHS",
    "Initial elective focus · slide 16",
    "#research-background/harrisdale"
  ],
  [
    "Skills Builder",
    "2024 version shown at Harrisdale · slide 18",
    "#research-background/harrisdale"
  ],
  [
    "Melbourne New Metrics",
    "Six complex competencies · TKC slide 27",
    "#research-background/tkc"
  ],
  [
    "SCSA",
    "WA General Capabilities · 2026",
    "https://k10outline.scsa.wa.edu.au/home/wa-curriculum/general-capabilities"
  ],
  [
    "Australian Skills Classification",
    "Historical core competencies",
    "https://www.jobsandskills.gov.au/sites/default/files/2022-02/Skills%20and%20jobs%20of%20the%20future%20%E2%80%93%20the%20Four%20Cs.pdf"
  ],
  [
    "Sattler",
    "Recurring concepts across eight taxonomies · Table 4",
    "https://gjsd.gile-edu.org/index.php/home/article/view/14-sattler-3-20"
  ]
];
const capabilityRows = [
 ["Communication","Interpersonal skills and communication","Communication","Interpersonal skills and communication","Listening + speaking","Communication","~Literacy","Oral communication","Communication"],
 ["Collaboration","Teamwork and collaboration","Teamwork and collaboration","Teamwork and collaboration","Teamwork","Collaboration","~Personal and social capability","Teamwork","Teamwork"],
 ["Initiative","Initiative","~Learner agency, work ethic","","~Aiming high","~Agency in learning","~Personal and social capability","Initiative and innovation","Adaptability and initiative"],
 ["Problem-solving","Problem solving","Problem solving","Problem solving","Problem solving","~Quality thinking","~Critical and creative thinking","Problem solving","Problem solving and decision making"],
 ["Adaptability","Adaptability and resilience","Adaptability","","~Staying positive","~Agency in learning","~Personal and social capability","","Adaptability and initiative"],
 ["Self-management","~Planning and organisation","~Work ethic, learner agency","","~Aiming high, staying positive","~Agency in learning","~Personal and social capability","~Planning and organising","~Planning and organising"],
 ["Creativity","Creativity","Creative thinking","Creativity","Creativity","~Quality thinking","Critical and creative thinking","~Initiative and innovation","Creativity and innovation"],
 ["Leadership","","Leadership","","Leadership","~Collaboration","~Personal and social capability","","Leadership and developing others"],
 ["Critical thinking","Critical thinking","Critical thinking","","","~Quality thinking","Critical and creative thinking","","Critical and analytical thinking"],
 ["Learning, agency and metacognition","~Lifelong learning","Learner agency, metacognition","","~Aiming high","Agency in learning","~Critical and creative thinking","Learning","Learning"],
 ["Resilience and emotional intelligence","~Adaptability and resilience","Resilience, emotional intelligence","","~Staying positive","~Agency in learning","~Personal and social capability","",""],
 ["Planning and organising","Planning and organisation","~Work ethic, learner agency","","~Aiming high","~Agency in learning","~Personal and social capability","Planning and organising","Planning and organising"],
 ["Ethics, culture and citizenship","Cultural responsiveness, ethical integrity","Ethical and cultural understanding","","","Acting ethically, active citizenship","Ethical understanding, intercultural understanding","",""],
 ["Digital literacy","Foundational literacies","Digital literacy","","","","Digital literacy","Digital engagement","Digital literacy"],
 ["Literacy and numeracy","Foundational literacies","Literacy, numeracy","","","","Literacy, numeracy","Reading, writing, numeracy","Literacy, numeracy"]
];

function capabilityComparison() {
 const columns = capabilityModels.map(([name, version, href]) => `<th scope="col"><a href="${href}">${name}</a><small>${version}</small></th>`).join('');
 const body = capabilityRows.map(([concept, ...matches], index) => {
  const cells = matches.map(match => {
   if (!match) return '<td class="capability-empty"><span aria-label="No separate match in the source">—</span></td>';
   if (match.startsWith('~')) return `<td class="capability-partial"><small>Partial</small>${match.slice(1)}</td>`;
   return `<td class="capability-match">${match}</td>`;
  }).join('');
  const group = index === 0 ? 'Current prototype lab themes' : index === 8 ? 'Other capabilities to consider' : '';
  return `${group ? `<tr class="capability-group"><th colspan="${capabilityModels.length+1}">${group}</th></tr>` : ''}<tr><th scope="row">${concept}</th>${cells}</tr>`;
 }).join('');
 return `<section class="content-panel" id="capability-comparison">
  <h2>Compare capability models</h2>
  <p>Read across a row to compare the labels. A shaded cell shows an explicit match or close synonym. <strong>Partial</strong> marks a broader or related concept. A dash means the source has no separate match at the level compared here.</p>
  <p>Scroll across to see all eight sources. Select a column heading to open its source.</p>
  <div class="capability-scroll" tabindex="0" role="region" aria-label="Scrollable capability comparison">
   <table class="capability-table">
    <thead><tr><th scope="col">SkillQuest theme or candidate</th>${columns}</tr></thead>
    <tbody>${body}</tbody>
   </table>
  </div>
  <h3>Questions for the capability decision</h3>
  <ul>
   <li><strong>Separate or combine?</strong> Explore whether to keep Initiative and Adaptability separate, and whether to explicitly teach critical thinking within Problem-solving and Creativity.</li>
   <li><strong>Where does learning to learn sit?</strong> Learner agency, reflection and planning appear in several sources. Decide whether to name them, include them within Self-management or teach them across the labs.</li>
   <li><strong>Which capabilities run across the program?</strong> Consider how literacy, numeracy, digital literacy, ethical judgement and intercultural understanding would appear in lab tasks and portfolio evidence.</li>
  </ul>
  <p>This is a draft interpretation of the source labels and their scope. Harrisdale’s column shows its initial elective focus, while Skills Builder shows the version it later illustrated. The historical Australian Skills Classification and Sattler’s research synthesis are workforce references. Track the developing National Skills Taxonomy in the update below.</p>
 </section>`;
}

function renderTopicExtracts(extracts) {
 return extracts.map(([title, summary, links = []]) => `
  <section class="content-panel">
   <h2>${title}</h2>
   <p>${summary}</p>
   ${links.length ? `<p>${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join(' · ')}</p>` : ''}
  </section>`).join('');
}

async function loadSourceSlides(container, groups) {
 try {
  const batches = await Promise.all(groups.map(async group => {
   const response = await fetch(`research-slides/${group}.json`);
   if (!response.ok) throw new Error('Slides unavailable');
   return response.json();
  }));
  container.innerHTML = batches.flat().map(slide => `
   <figure class="source-slide">
    <h3>${slide.title}</h3>
    <img src="${slide.src}" width="${slide.width}" height="${slide.height}" loading="lazy" alt="${slide.title}">
    <figcaption>${slide.credit}</figcaption>
   </figure>`).join('');
 } catch {
  container.textContent = 'The source slides could not load. Reload this page to try again.';
 }
}
function render(focus=false){let [id, sourceId]=location.hash.slice(1).split('/');id=id||'overview';if(!byId[id])id='overview';const p=byId[id];
 document.title=`${p.title} · SkillsQuest`;
 document.querySelector('#breadcrumb').textContent=p.parent?`${byId[p.parent].title} / ${p.title}`:p.title;
 nav.querySelectorAll('a').forEach(a=>{if(a.dataset.page===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 const main=document.querySelector('main');
 const isWorld=id==='skillsville-world';
 document.body.classList.toggle('world-view',isWorld);
 if(isWorld){main.removeAttribute('aria-labelledby');main.setAttribute('aria-label','Skillsville prototype world')}else{main.removeAttribute('aria-label');main.setAttribute('aria-labelledby','page-title')}
 const header=`<p class="eyebrow">${p.parent?byId[p.parent].title:'Personal project · Endorsed program'}</p><h1 id="page-title">${id==='overview'?'SkillQuest':p.title}</h1><p class="lead">${p.intro}</p>`;
 if(id==='existing-prototype')main.innerHTML=`${header}<p><a href="skillsquest-prototype.html" target="_blank" rel="noopener">Open prototype and portfolio in a full window ↗</a></p><p><a href="#skillsville-world">Play the full SkillQuest game</a> · <a href="https://taniab1975.github.io/skillquest/proposal.html">Read the original SkillQuest design proposal</a></p><iframe title="SkillsQuest prototype and capabilities portfolio" src="skillsquest-prototype.html" style="width:100%;height:850px;border:1px solid #dce2d5;border-radius:18px" allowfullscreen></iframe>`;
 else if(p.href)main.innerHTML=`<iframe class="world-frame" title="Skillsville prototype world" src="${p.href}" allow="fullscreen" allowfullscreen></iframe>`;
 else if(p.post)main.innerHTML=`${header}${postFigure(p.post)}`;
 else if(id==='research-background')main.innerHTML=`${header}${researchLibrary()}`;
 else if(id==='overview')main.innerHTML=`<p class="eyebrow">Proposed Provider Endorsed Program</p><h1 id="page-title">SkillsQuest</h1><p class="lead">${p.intro}</p><section class="content-panel"><h2>Three key ways learners develop</h2><p>SkillsQuest is a program of learning that enables learners to:</p><ol><li><strong>Build confidence, self-efficacy and a positive sense of identity.</strong> Recognise the value of their life experiences and articulate the highly valued employability skills they have developed.</li><li><strong>Connect their skills and experiences to opportunities.</strong> Learn to contextualise their skills and experiences to selection criteria, while identifying skills gaps and areas for improvement.</li><li><strong>Understand employability skills.</strong> Learn about the key components of employability skills and what they look like in practice.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Two ways students progress</h2><ol><li><strong>Skills learning and exercises.</strong> Develop knowledge and understanding of employability skills, the dimensions of competence and the Dreyfus Model of Skill Acquisition.</li><li><strong>Self-evaluation, reflection and portfolio building.</strong> Map their own experiences against established employability skills, evaluate what they have learned and build a portfolio that makes their development visible.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Recording experiences and working towards WACE</h2><p>Students will log their experiences as part of the program. Subject to SCSA approval and the unit equivalence granted, successful completion may contribute unit equivalents towards the Western Australian Certificate of Education (WACE), including its C-grade requirement.</p><p><strong>SkillsQuest is not yet SCSA endorsed.</strong></p></section>`;
 else if(p.children)main.innerHTML=`${header}<div class="section-bar"><h2>Explore this part of the program</h2><span>${p.children.length} connected sections</span></div>${cards(p.children)}`;
 else {
  const draft = drafts[id];
  const sources = id === 'scsa-requirements' ? `<p><a href="https://senior-secondary.scsa.wa.edu.au/vet/endorsed-programs">SCSA endorsed program guidance and application forms</a></p>` : '';
  main.innerHTML = `${header}<section class="content-panel"><h2>${draft.heading}</h2><p>${draft.lead}</p><ul>${draft.items.map(item => `<li>${item}</li>`).join('')}</ul>${sources}</section>`;
 }
 if(id==='purpose')main.insertAdjacentHTML('beforeend',`<section class="content-panel"><h2>What inspired SkillQuest</h2>${postFigure(originPost)}</section>`);
 if(id==='skills-choice')main.insertAdjacentHTML('beforeend',capabilityComparison());
 if(topicExtracts[id])main.insertAdjacentHTML('beforeend',renderTopicExtracts(topicExtracts[id]));
 if(slideGroups[id]) {
  main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Extracts from the source slides</h2><div id="source-slides">Loading source slides…</div></section>');
  void loadSourceSlides(document.getElementById('source-slides'), slideGroups[id]);
 }
 if(sourceNotes[id])main.insertAdjacentHTML('beforeend',renderSourceNotes(sourceNotes[id]));
 const idx=pages.indexOf(p);if(!isWorld)main.insertAdjacentHTML('beforeend',`<div class="page-bottom">${idx?`<a href="#${pages[idx-1].id}">← ${pages[idx-1].title}</a>`:''}${idx<pages.length-1?`<a class="next" href="#${pages[idx+1].id}">${pages[idx+1].title} →</a>`:''}</div>`);
 nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(focus){main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}if(id==='research-background' && sourceId){document.getElementById(`source-${sourceId}`)?.scrollIntoView()}
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();document.querySelector('main').focus()});
window.addEventListener('hashchange',()=>render(true));render();
