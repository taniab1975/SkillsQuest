'use strict';
const pages = [
 {id:'overview',title:'Overview',intro:'SkillsQuest is a proposed provider-developed endorsed program, subject to approval by the School Curriculum and Standards Authority (<a href="#scsa">SCSA</a>).'},
 {id:'who-will-host',title:'Who will host',intro:'Compare the organisations that could provide SkillsQuest, operate the platform and fund equitable access. No provider model has been selected.'},
 {id:'secure-records',title:'Secure Records & Privacy',intro:'A discussion and evidence-preparation space for privacy, data integrity, security and trusted school use.'},
 {id:'how-it-will-work',title:'How it will work',intro:'A school-enrolled learning program: learn, record experiences, verify participation, reflect and demonstrate growth.'},
 {id:'learning-design',title:'Learning Design',intro:'How the choice of skills, self-efficacy, teaching approaches and transfer across contexts work together.',children:['skills-choice','efficacy-building','pedagogy','transferable-skills']},
 {id:'skills-choice',title:'Skills Choice',parent:'learning-design',intro:'Compare the options and choose the most appropriate skills framework. The prototype lab themes provide a starting point for the formal framework.'},
 {id:'efficacy-building',title:'Self-efficacy',parent:'learning-design',intro:'A starting point for thinking about self-efficacy, learner agency and confidence in career learning.',post:{path:'efficacy-building-post.svg',width:420,height:1182,alt:'Tania Byrnes’s post on learner self-efficacy and confidence. It discusses recognising unhelpful thinking, explicit teaching, supportive practice, flexible pathways and revisiting progress. The diagram connects self-efficacy, outcome expectations, goals, behaviour and contextual influences.'}},
 {id:'pedagogy',title:'Pedagogy',parent:'learning-design',intro:'Set out the learning principles that will guide the design of SkillsQuest.'},
 {id:'transferable-skills',title:'Transferable Skills',parent:'learning-design',intro:'Recognise the substantial capabilities learners already have, then identify what carries across, what needs adapting and what is genuinely new.',post:{path:'transferable-skills-post.svg',width:714,height:1344,alt:'Tania Byrnes’s post on transfer, illustrated with examples from bus driving, oral presentations and training. The post describes identifying common skills and gaps, reducing cognitive load during initial practice and using consistent teaching across contexts.'}},
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
 {id:'scsa',title:'SCSA',intro:'Requirements and application planning for the proposed provider-developed endorsed program.',children:['scsa-requirements','scsa-application']},
 {id:'scsa-requirements',title:'SCSA Requirements',parent:'scsa',intro:'A dedicated place to collect and check the requirements relevant to a proposed endorsed program.'},
 {id:'scsa-application',title:'SCSA Application',parent:'scsa',intro:'Organise the application material when the program design and requirements are ready.'},
 {id:'existing-prototype',title:'SkillsQuest prototype',intro:'Copied from the CEAWA SkillsQuest tab: explore the playable prototype, student portfolio and learner and teacher walkthroughs.'},
 {id:'research-background',title:'Research & Background',intro:'Source index for the extracts and design ideas used across the SkillQuest tabs.'}
];
const drafts = {
  'program-foundations': {
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
    lead: "The Skillsville lab themes are illustrative examples to show what is possible. Further work is needed to decide which skills to take forward and how they will be defined and developed.",
    items: ["Communication and Collaboration cover clear exchanges, listening and working towards a shared outcome.","Initiative and Self-management cover noticing what needs doing, following through and organising time and effort.","Problem-solving and Adaptability cover investigating a problem, testing options and adjusting when conditions change.","Creativity and Leadership cover generating and improving ideas, inviting input and helping a group act."]
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
      "overview",
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
      "overview",
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
      "overview",
      "portfolio-view",
      "assessment",
      "scsa-requirements"
    ],
    "url": "https://www.education.wa.edu.au/dl/l46qpd2x",
    "linkTitle": "Read the final report"
  }
];
const sourceNotes = {
  "research-background": [
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
  "research-background": [
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
const expandedGroups = new Set();
let groupNavigation = false;
nav.innerHTML=pages.filter(p=>!p.parent).map(p=>{
 const n=String(++number).padStart(2,'0');
 if(!p.children)return `<a href="#${p.id}" data-page="${p.id}"><span class="num">${n}</span>${p.title}</a>`;
 return `<div class="nav-group"><button class="submenu-toggle" type="button" data-group="${p.id}" aria-expanded="false" aria-controls="submenu-${p.id}"><span class="num">${n}</span><span>${p.title}</span><span class="chevron" aria-hidden="true">▸</span></button><div class="children" id="submenu-${p.id}" hidden style="display:none">${p.children.map(id=>`<a href="${pageHref(id)}" data-page="${id}">${byId[id].title}</a>`).join('')}</div></div>`;
}).join('');
function setGroupExpanded(id, open) {
 const button=nav.querySelector(`button[data-group="${id}"]`);
 const children=document.getElementById(`submenu-${id}`);
 if(!button||!children)return;
 if(open)expandedGroups.add(id);else expandedGroups.delete(id);
 button.setAttribute('aria-expanded',String(open));
 button.querySelector('.chevron').textContent=open?'▾':'▸';
 children.hidden=!open;
 children.style.display=open?'grid':'none';
}
nav.addEventListener('click',event=>{
 const toggle=event.target.closest('.submenu-toggle');
 if(toggle){event.preventDefault();const id=toggle.dataset.group;setGroupExpanded(id,!expandedGroups.has(id));if(location.hash==='#'+id){render(false);}else{groupNavigation=true;location.hash=id;}}
});
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
function render(focus=false){let [id, sourceId]=location.hash.slice(1).split('/');id=id||'overview';if(id==='purpose')id='research-background';if(!byId[id])id='overview';const p=byId[id];
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
 else if(id==='transferable-skills')main.innerHTML=`${header}<section class="content-panel" id="transfer-foundation"><h2>A new context does not erase existing capability</h2><p><strong>Students are not starting from scratch.</strong> Their experiences at school, work, home, in sport and in the community can develop substantial knowledge, skills and judgement. These should not be discounted simply because the next setting is different.</p><p>Equally, a broad label such as “teamwork” does not prove readiness for every task. The useful question is not “Does this experience count?” but <strong>“What do I already bring, how can I use it here, and what else do I need?”</strong></p><p>This is the working position for discussion: recognise existing assets without assuming that transfer is automatic or complete.</p></section>
<section class="content-panel" id="transfer-netball"><h2>Netball grand final → Christmas retail rush</h2><p>A student may have communicated clearly under pressure, understood their role, adjusted to changing conditions and supported teammates during a final. Those are real achievements, not irrelevant just because they happened on a court.</p><ul><li><strong>Carry across:</strong> experience of coordinating with others, listening, staying focused and responding to a shared goal.</li><li><strong>Adapt:</strong> use those behaviours with customers and unfamiliar coworkers, different priorities and workplace expectations.</li><li><strong>Learn anew:</strong> the register, stock information, store procedures and when to seek help.</li></ul><p>A credible claim is: “I have demonstrated teamwork under pressure in netball. These are the behaviours I can bring to retail, and these are the parts I would need to learn.” The particular student's actions and evidence matter, not participation in a final alone.</p></section>
<section class="content-panel" id="transfer-driving"><h2>“I can drive.” Great. In what circumstances?</h2><p>An experienced automatic-car driver learning a manual does not have to relearn steering, braking, road awareness or judging gaps from zero. They bring a large foundation while learning clutch and gear coordination. A change of vehicle does not cancel that foundation.</p><p>But driving an automatic, manual, electric car, tractor or heavy vehicle, in daylight, storms or snow, introduces different demands. We can ask about:</p><ul><li><strong>Depth:</strong> how well someone performs and exercises judgement in a familiar situation.</li><li><strong>Breadth:</strong> how they adapt across vehicles, equipment, conditions and tasks.</li><li><strong>Domain:</strong> which knowledge is shared, and where a substantially different activity, such as train operation, requires new learning.</li></ul><p>Dreyfus's model describes development from rule-led performance towards experienced judgement. His driving example shows why recognising context matters. For SkillsQuest, it is a useful learning lens, not a universal rating of “expert at everything” or a ready-made validated employability assessment scale. <a href="https://resolutionresources.com.au/wp-content/uploads/2022/02/Dreyfus-2004.pdf">Dreyfus (2004)</a></p></section>
<section class="content-panel" id="transfer-dimensions"><h2>Look beyond performing one task</h2><p>The dimensions of competence help ask whether a learner can perform a task, coordinate several tasks, respond when things change, meet the expectations of the setting and adapt to other tasks or equipment. These are useful questions for the driving example and for employability learning.</p><p>WA Training Accreditation Council guidance describes these dimensions in VET assessment. We are drawing on the ideas, not claiming they automatically define the assessment requirements for this proposed endorsed program. <a href="https://www.wa.gov.au/government/publications/fact-sheet-assessment-and-assessment-judgement">WA assessment and assessment judgement guidance</a></p></section>
<section class="content-panel" id="transfer-process"><h2>A habit of recognising, adapting and building</h2><p>The proposed SkillsQuest process starts with strengths, then makes the next learning step visible:</p><ol><li><strong>Describe:</strong> What did I actually do, in what conditions and with what support?</li><li><strong>Recognise:</strong> What capabilities did I use? What result, feedback or evidence supports this?</li><li><strong>Connect:</strong> Where else could these capabilities help? What is similar?</li><li><strong>Compare:</strong> What needs adapting, and what is genuinely new?</li><li><strong>Plan:</strong> What knowledge, practice, tools or support would close the gap?</li><li><strong>Apply and review:</strong> Try it in another situation, seek feedback and refine the approach.</li></ol><p>This is not “just reflection”. Recognising relevant experience and planning how to adapt it are learning outcomes worth teaching. Research on transfer supports helping learners understand principles and make connections across contexts, rather than assuming learning will transfer unaided. <a href="https://www.nationalacademies.org/read/9853/chapter/6">National Research Council: Learning and Transfer</a></p></section>
<section class="content-panel" id="transfer-evidence"><h2>Confidence grounded in what students already bring</h2><p>A portfolio can distinguish <strong>demonstrated in this context</strong>, <strong>relevant to a new context</strong>, and <strong>adapted and demonstrated elsewhere</strong>. These describe the evidence, not a ranking of the worth of an experience. A thoughtful reflection can explain a connection; a later example can show the adaptation in action.</p><p><strong>SkillsQuest helps students recognise, explain and build on their capabilities, adapt them to new situations and identify what they still need to learn.</strong></p><p>Discussion question: how can we recognise a student's existing foundation while making the next step specific, achievable and encouraging?</p></section>
<section class="content-panel"><h2>Earlier thinking and examples</h2>${postFigure(p.post)}</section>`;
 else if(p.post)main.innerHTML=`${header}${postFigure(p.post)}`;
 else if(id==='research-background')main.innerHTML=`${header}<section class="content-panel"><h2>What inspired SkillsQuest</h2>${postFigure(originPost)}</section><section class="content-panel"><h2>Earlier program design principles</h2><p>${drafts['program-foundations'].lead}</p><ul>${drafts['program-foundations'].items.map(item=>`<li>${item}</li>`).join('')}</ul></section>${researchLibrary()}`;
 else if(id==='overview')main.innerHTML=`<p class="eyebrow">Proposed Provider Endorsed Program</p><h1 id="page-title">SkillsQuest</h1><p class="lead">${p.intro}</p><section class="content-panel"><h2>Three key ways learners develop</h2><p>SkillsQuest is a program of learning that enables learners to:</p><ol><li><strong>Build confidence, self-efficacy and a positive sense of identity.</strong> Recognise the value of their life experiences and articulate the highly valued employability skills they have developed.</li><li><strong>Connect their skills and experiences to opportunities.</strong> Learn to contextualise their skills and experiences to selection criteria, while identifying skills gaps and areas for improvement.</li><li><strong>Understand employability skills.</strong> Learn about the key components of employability skills and what they look like in practice.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Two ways students progress</h2><ol><li><strong>Skills learning and exercises.</strong> Develop knowledge and understanding of employability skills, the dimensions of competence and the Dreyfus Model of Skill Acquisition.</li><li><strong>Self-evaluation, reflection and portfolio building.</strong> Map their own experiences against established employability skills, evaluate what they have learned and build a portfolio that makes their development visible. Experiences can come from school, work, home, volunteering and community life, helping learners recognise their interests and possible future pathways.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Recording experiences and working towards WACE</h2><p>Students will log their experiences as part of the program. Subject to SCSA approval and the unit equivalence granted, successful completion may contribute unit equivalents towards the Western Australian Certificate of Education (WACE), including its C-grade requirement.</p><p><strong>SkillsQuest is not yet SCSA endorsed.</strong></p></section>`;
 else if(id==='who-will-host')main.innerHTML=`${header}<section class="content-panel"><h2>A provider-developed program</h2><p>SkillsQuest is being developed independently, rather than by SCSA or a school. <a href="https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/endorsed-programs" target="_blank" rel="noopener">The intended pathway is a <strong>provider-developed endorsed program</strong>, subject to SCSA approval.</a> The organisation responsible for the program need not be the same organisation operating the software or funding student access.</p><p>Tania brings career development knowledge and learning-design experience. Her partner brings cybersecurity and records-management experience. These strengths would need to be supported by documented assessment, quality assurance, secure records, ongoing support and continuity arrangements.</p></section>
<section class="content-panel"><h2>Credibility, research and equitable access</h2><p>The aim is to help young people recognise the value of their experiences, build self-efficacy and communicate their strengths, particularly where those strengths are not fully recognised by conventional academic measures. Disadvantage or lower academic attainment should not be treated as evidence that an individual lacks capability or confidence.</p><ul><li>Use research-informed learning design, independent educational review and pilot evidence to test the program’s value.</li><li>Evaluate confidence, skill articulation and career aspirations rather than promise lifelong impact.</li><li>Make commercial interests, pricing and scholarship decisions transparent. Financial sustainability and access need to be designed together.</li><li>Consider devices, connectivity, accessibility and school support as well as licence cost. Low ICSEA can guide school-level targeting, not assumptions about individual learners.</li></ul></section>
<section class="content-panel"><h2>Three options to explore</h2><h3>1. Australian Career Breakthroughs</h3><p>An independent provider model under the proposed Australian Career Breakthroughs business. Schools would purchase access and enrol students; the provider would manage the program and certify successful completion.</p><ul><li><strong>Opportunity:</strong> direct control of learning design, software development, pricing and the equity commitment.</li><li><strong>Access model:</strong> paid school subscriptions could help fund scholarships or subsidised access for low-ICSEA schools, alongside sponsorship.</li><li><strong>To resolve:</strong> the applicant legal entity and registration details, ownership, fees, assessment capacity, independent review and long-term records arrangements.</li></ul>
<h3>2. CEAWA as the provider</h3><p>SkillsQuest could be a CEAWA product, with a contract covering software management and hosting, data administration and certification services. The precise responsibilities would need CEAWA’s agreement.</p><ul><li><strong>Opportunity:</strong> connection with a professional career-education community and shared expertise.</li><li><strong>To resolve:</strong> governance, program and software ownership, fees, operational responsibility and who is accountable for assessment, records and certificates.</li><li><strong>Transparency:</strong> any personal financial interests, decision-making roles and conflicts of interest would need to be declared and managed.</li></ul>
<h3>3. An organisation such as The Smith Family</h3><p>A potential purchase, commissioned development, operating contract or partnership could align SkillsQuest with an organisation focused on educational opportunity. A pilot or sponsored-access partnership is another option.</p><ul><li><strong>Opportunity:</strong> an equity-focused partner may help reach students who would otherwise miss out.</li><li><strong>To resolve:</strong> actual interest, fit with existing programs, ownership, funding, delivery and certification responsibilities.</li></ul><p><strong>These are options, not agreements.</strong> No CEAWA or Smith Family commitment, business-registration verification or SCSA endorsement is claimed here.</p></section>
<section class="content-panel"><h2>Decisions still to make</h2><p>Choose the applicant/provider, confirm ownership and operating responsibilities, agree the assessment and certification model, and decide how paid access and subsidies will work. Keep provider, software operator and equity sponsor as separate decisions until an arrangement is agreed.</p><p><strong>SCSA endorses the program; the provider certifies successful completion; the school reports achievement to SCSA.</strong> The final model must meet the requirements of the approved program.</p><p><a href="https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/endorsed-programs">SCSA endorsed-program guidance</a> · <a href="https://www.scsa.wa.edu.au/__data/assets/pdf_file/0018/1232028/_WACE-Manual-2026-April.pdf">2026 WACE Manual, section 5</a></p></section>`;
 else if(id==='secure-records')main.innerHTML=`${header}<section class="content-panel"><h2>Trust needs evidence, not just reassurance</h2><p>Schools need to understand what information a service collects, why it needs it, who can access it and how it is protected throughout its life. Privacy, security and reliable records should be designed into SkillsQuest from the start, not added after students begin using it.</p><p><strong>Current status: design and evidence preparation.</strong> This discussion site and its fictional learning-record mockup do not establish that a production student-record system is secure, independently assessed, Department-approved or SCSA-endorsed.</p></section>
<section class="content-panel"><h2>What informs this work?</h2><p>Earlier Department of Education guidance about Career Empire highlighted privacy by design, careful handling of de-identified information, and assurance about the other suppliers used to deliver a service. The relevant privacy and security obligations must be considered for both Career Empire and SkillsQuest. It also identified the Department's assessment process and Safer Technologies 4 Schools (ST4S) as useful pathways. That guidance informs these questions; it was not an approval of SkillsQuest.</p><p>Under the WA Department's <a href="https://www.education.wa.edu.au/web/policies/-/students-online-in-public-schools-procedures">Students Online in Public Schools Procedures, section 3.4</a>, schools must assess third-party service risk, check the catalogue or request assessment, and implement the applicable risk treatments and notification or consent arrangements. SCSA program endorsement and online-service privacy/security assessment are separate matters.</p></section>
<section class="content-panel"><h2>Evidence to prepare before real student use</h2><p>The Department's supplied Security and Privacy Questionnaire v4c is a useful working checklist. The items below are <strong>design requirements to resolve and evidence to gather</strong>, not claims that each control is already in place.</p><ul>
<li><strong>Minimum necessary information:</strong> document each data item, its purpose and who supplies it. Do not assume a code or pseudonym makes a student unidentifiable; consider the information that could reconnect a record to a person.</li>
<li><strong>Role and school boundaries:</strong> define student access, oversight of a school's own students, narrowly scoped external verification and provider responsibilities. Test those boundaries on the server, not only in the interface.</li>
<li><strong>Accurate, traceable records:</strong> distinguish planned, game-recorded and externally verified hours; preserve who verified or changed a record and when; provide a controlled correction process and prevent double-counting.</li>
<li><strong>Hosting and suppliers:</strong> document storage and processing locations, backups, subcontractors and their access. Obtain evidence of supplier security, testing and monitoring rather than assume a cloud platform makes the whole service compliant.</li>
<li><strong>Security and resilience:</strong> specify access controls, administrator protection, encryption, logs, vulnerability testing, incident response and tested recovery arrangements.</li>
<li><strong>Rights and lifecycle:</strong> define data ownership, access and correction requests, retention and deletion rules, certificate records, and a practical export/transfer plan if the provider stops operating. Reconcile privacy and applicable recordkeeping obligations.</li>
<li><strong>Clear notices and accountability:</strong> explain the service in language schools, students and families can understand; identify accountable people and document the assessment and evidence review.</li>
</ul></section>
<section class="content-panel"><h2>Public discussion is not the student-record system</h2><p>This public site is for colleagues to discuss the proposal. Comments and display names can be read by other visitors; names are not verified identities. Do not post student-identifying, confidential or sensitive information.</p><p>The separate discussion database will remain in Supabase's Tokyo region. Microsoft Entra is being considered for the future game’s identity and access management, but no decision or implementation is confirmed; choosing an identity service does not itself determine where student records are stored. Future student-data hosting remains a separate design decision, and this page does not claim that all SkillsQuest data is Australian-hosted. Student-record architecture, access, location, retention and assessment must be settled separately before real student use.</p></section>
<section class="content-panel"><h2>Standards and official guidance</h2><ul>
<li><a href="https://st4s.edu.au/st4s-vendor-guide/">ST4S vendor guide and assessment criteria</a> and <a href="https://st4s.edu.au/readiness-check/">readiness check</a>. Use the current framework and gather supporting evidence; a self-check is not independent assessment or permission to display an approval badge.</li>
<li><a href="https://st4s.edu.au/docs/st4s-framework-v2026-1/">ST4S framework 2026.1</a>, the current framework checked on 16 November 2026. Recheck the official source as standards change.</li>
<li><a href="https://www.oaic.gov.au/privacy/australian-privacy-principles">Australian Privacy Principles (OAIC)</a>: use these to examine collection, use, disclosure, information quality, security, access and correction. Confirm the provider's applicable legal and contractual obligations.</li>
<li><a href="https://www.wa.gov.au/organisation/office-of-the-information-commissioner/what-are-the-information-privacy-principles-ipps">WA Information Privacy Principles</a> and <a href="https://www.wa.gov.au/organisation/state-records-office-of-western-australia/privacy-and-responsible-information-sharing-act-2024-and-record-keeping-obligations">PRIS and recordkeeping guidance</a>: relevant to public-sector requirements, including protection of de-identified information and retention obligations.</li>
</ul></section>
<section class="content-panel"><h2>How to use the questionnaire</h2><p>Use the supplied workbook internally to record an honest response, supporting evidence, gaps, an owner and a review date. Publish an accessible summary of verified controls and remaining work, rather than a completed security questionnaire containing operational detail.</p><p>The supplied file is an uncompleted questionnaire, not an assessment result. The original email and workbook are not reproduced here. A public download should be considered only after confirming the Department's current version and permission to redistribute it; the public ST4S guidance is linked above.</p><p><strong>Next decisions:</strong> confirm the provider and accountable roles; map the proposed data flows; choose the assessment route; and agree the evidence and access arrangements required before schools enrol real students.</p></section>
`;
 else if(id==='how-it-will-work')main.innerHTML=`${header}<section class="content-panel"><h2>One journey, two connected ways to learn</h2><p>Students develop knowledge through skills learning and exercises, and develop their portfolio through self-evaluation and reflection on their own experiences. The learning includes employability skills, dimensions of competence and the Dreyfus Model of Skill Acquisition.</p><ol><li><strong>School enrols and supports.</strong> Schools purchase access and sign up students. A school coordinator monitors only their own students’ progress, hours, evidence and outstanding verification.</li><li><strong>Student learns and practises.</strong> Skills Labs and game activities teach the skills and give students opportunities to practise, receive feedback and try again.</li><li><strong>Student proposes or records an experience.</strong> They identify relevant employability skills, expected or completed hours, and an appropriate person who can verify external participation, such as a science teacher or swimming coach.</li><li><strong>Participation is recorded electronically.</strong> Game activity supplies a time record; external experiences use a digital log confirmed by the nominated verifier. Planned hours remain separate from completed hours.</li><li><strong>Student reflects and builds evidence.</strong> They explain their own contribution, what they learned, how the experience connects to skills and where improvement or further learning is needed. They practise adapting examples to opportunities and selection criteria.</li><li><strong>Provider reviews completion.</strong> The provider assesses the evidence against the program’s defined criteria, requests clarification where needed, and issues a completion certificate when requirements are met. Following endorsement, the school retains evidence and reports achievement to SCSA.</li></ol></section>
<section class="content-panel"><h2>Who sees and does what?</h2><ul><li><strong>Student:</strong> sees their own learning record, proposes and logs experiences, nominates verifiers, self-evaluates and develops their portfolio.</li><li><strong>School coordinator:</strong> oversees their own enrolled students, monitors progress and pending tasks, and provides support and feedback.</li><li><strong>External verifier:</strong> confirms the relevant activity, dates and hours they can attest to. Verification of participation is not an assessment of the whole program.</li><li><strong>Program provider:</strong> has cross-school oversight, manages quality assurance and records, assesses completion and issues certificates.</li></ul><p>These are proposed access boundaries. The public mockup uses fictional data and does not implement real accounts, school separation or secure verification.</p></section>
<section class="content-panel"><h2>Hours and learning are related, but different</h2><p><strong>The activity record shows participation. The portfolio shows learning.</strong> Time in the game or externally verified hours does not automatically demonstrate a skill or guarantee WACE credit.</p><ul><li>Record each activity’s time once, even when the experience supports several employability skills.</li><li>Keep game-recorded time, externally verified time and planned time distinguishable.</li><li>Use reflection and evidence to judge what the student understands and can demonstrate, not just how many hours they have accumulated.</li><li>Define eligible learning time, completion standards and the treatment of external experiences in the program design and SCSA application.</li></ul><p>The <a href="#assessment">Assessment</a> section develops the learning outcomes, evidence and criteria in more detail. This page explains the practical journey, without adding a separate administration tab or unnecessary approval gates.</p></section>
<section class="content-panel"><h2>Designed for electronic, statewide participation</h2><p>The model draws on the digital record-and-verification principles of the Duke of Edinburgh Online Record Book and the ADWPL logbook, without copying their materials or assuming their rules apply to SkillsQuest. Students can link experiences from school, work, home, sport, volunteering and community life to skills.</p><p><strong>SkillsQuest is not yet SCSA endorsed.</strong> Eligible hours, final criteria, unit equivalence, recordkeeping and reporting arrangements remain subject to program design and approval. A provider certificate would record completion; it would not itself issue SCSA endorsement.</p></section>`;
 else if(p.children)main.innerHTML=`${header}<div class="section-bar"><h2>Explore this part of the program</h2><span>${p.children.length} connected sections</span></div>${cards(p.children)}`;
 else {
  const draft = drafts[id];
  const sources = id === 'scsa-requirements' ? `<p><a href="https://senior-secondary.scsa.wa.edu.au/vet/endorsed-programs">SCSA endorsed program guidance and application forms</a></p>` : '';
  main.innerHTML = `${header}<section class="content-panel"><h2>${draft.heading}</h2><p>${draft.lead}</p><ul>${draft.items.map(item => `<li>${item}</li>`).join('')}</ul>${sources}</section>`;
 }
 if(id==='how-it-will-work')main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Secure records and school trust</h2><p>How records are protected and maintained is part of the design, not an assumption. See <a href="#secure-records">Secure Records &amp; Privacy</a> for the proposed controls, official guidance and evidence still to prepare.</p></section>');
 if(['how-it-will-work','portfolio-view','teacher-view','provider-view'].includes(id))main.insertAdjacentHTML('beforeend',`<section class="content-panel"><h2>Learning record & verification mockup</h2><p>Explore an original SkillsQuest concept: employability skill sections, game-recorded time, external verification and a separate portfolio review. Fictional data only; no records are sent or saved.</p><p><a href="learning-record.html" target="_blank" rel="noopener">Open the interactive mockup in a full window ↗</a></p><iframe src="learning-record.html" title="SkillsQuest learning record and verification mockup" style="width:100%;height:950px;border:1px solid #dce2d5;border-radius:16px" loading="lazy"></iframe></section>`);
 if(id==='skills-choice')main.insertAdjacentHTML('beforeend',capabilityComparison());
 if(topicExtracts[id])main.insertAdjacentHTML('beforeend',renderTopicExtracts(topicExtracts[id]));
 if(slideGroups[id]) {
  main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Extracts from the source slides</h2><div id="source-slides">Loading source slides…</div></section>');
  void loadSourceSlides(document.getElementById('source-slides'), slideGroups[id]);
 }
 if(sourceNotes[id])main.insertAdjacentHTML('beforeend',renderSourceNotes(sourceNotes[id]));
 const idx=pages.indexOf(p);if(!isWorld)main.insertAdjacentHTML('beforeend',`<div class="page-bottom">${idx?`<a href="#${pages[idx-1].id}">← ${pages[idx-1].title}</a>`:''}${idx<pages.length-1?`<a class="next" href="#${pages[idx+1].id}">${pages[idx+1].title} →</a>`:''}</div>`);
 if(focus){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}if(focus){main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}if(id==='research-background' && sourceId){document.getElementById(`source-${sourceId}`)?.scrollIntoView()}
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();document.querySelector('main').focus()});
window.addEventListener('hashchange',()=>{const focus=!groupNavigation;groupNavigation=false;render(focus)});render();

