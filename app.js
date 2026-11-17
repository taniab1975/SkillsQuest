'use strict';
const pages = [
 {id:'overview',title:'Overview',intro:'SkillsQuest is a proposed provider-developed endorsed program, subject to approval by the School Curriculum and Standards Authority (<a href="#scsa">SCSA</a>).'},
 {id:'who-will-host',title:'Who will host',intro:'Compare the organisations that could provide SkillsQuest, operate the platform and fund equitable access. No provider model has been selected.'},
 {id:'secure-records',title:'Secure Records & Privacy',intro:'A discussion and evidence-preparation space for privacy, data integrity, security and trusted school use.'},
 {id:'how-it-will-work',title:'How it will work',intro:'A school-enrolled learning program: learn in the labs, practise through simulations and real activities, reflect and demonstrate growth.'},
 {id:'learning-design',title:'Learning Design',intro:'How the choice of skills, self-efficacy, teaching approaches and transfer across contexts work together.',children:['skills-choice','efficacy-building','pedagogy','transferable-skills']},
 {id:'skills-choice',title:'Skills Choice',parent:'learning-design',intro:'For decades, educators, researchers, employers and career practitioners have pursued a common language and frameworks for skills. SkillsQuest draws on that work, while helping students make sense of the different ways employers describe what they need.'},
 {id:'efficacy-building',title:'Self-efficacy',parent:'learning-design',intro:'A starting point for thinking about self-efficacy, learner agency and confidence in career learning.',post:{path:'efficacy-building-post.svg',width:420,height:1182,alt:'Tania Byrnes’s post on learner self-efficacy and confidence. It discusses recognising unhelpful thinking, explicit teaching, supportive practice, flexible pathways and revisiting progress. The diagram connects self-efficacy, outcome expectations, goals, behaviour and contextual influences.'}},
 {id:'pedagogy',title:'Pedagogy',parent:'learning-design',intro:'Set out the learning principles that will guide the design of SkillsQuest.'},
 {id:'transferable-skills',title:'Transferable Skills',parent:'learning-design',intro:'Recognise the substantial capabilities learners already have, then identify what carries across, what needs adapting and what is genuinely new.',post:{path:'transferable-skills-post.svg',width:714,height:1344,alt:'Tania Byrnes’s post on transfer, illustrated with examples from bus driving, oral presentations and training. The post describes identifying common skills and gaps, reducing cognitive load during initial practice and using consistent teaching across contexts.'}},
 {id:'main-ecosystem',title:'Main Ecosystem',intro:'Skillsville houses the Skills Labs and My Portfolio. Labs give learners room to experiment and develop capabilities. My Portfolio helps them record meaningful experiences and revisit them over time.',children:['skills-labs','portfolio-entry','portfolio-view','teacher-view','provider-view','skillsville-world']},
 {id:'skills-labs',title:'Skills labs',parent:'main-ecosystem',intro:'A place to design experiences that help learners explore and practise skills.'},
 {id:'portfolio-entry',title:'Portfolio entry',parent:'main-ecosystem',intro:'Design how learners capture an experience and connect it with the skills they have used.'},
 {id:'portfolio-view',title:'Portfolio View',parent:'main-ecosystem',intro:'Plan how learners review their experiences, evidence and developing skills over time.'},
 {id:'teacher-view',title:'Teacher View',parent:'main-ecosystem',intro:'Define the information and tools teachers need to support learning and review progress.'},
 {id:'provider-view',title:'Provider View',parent:'main-ecosystem',intro:'Explore how the program provider oversees delivery, reviews completion and maintains quality and records.'},
 {id:'skillsville-world',title:'Skillsville prototype world',parent:'main-ecosystem',href:'skillsville/',intro:'Open Skillsville to explore the playable world.'},
 {id:'assessment',title:'Assessment',intro:'The draft assessment approach focuses on what learners can explain about their own actions, results and learning in authentic contexts. Lab feedback supports practice and a portfolio review considers the evidence.',children:['reflection-tool','evidence-of-learning']},
 {id:'reflection-tool',title:'Reflection Tool',parent:'assessment',intro:'Design prompts that help learners explain their choices, recognise learning and consider their next step.'},
 {id:'evidence-of-learning',title:'Evidence of Learning',parent:'assessment',intro:'Clarify what counts as evidence and how it demonstrates the intended learning.'},
 {id:'scsa',title:'SCSA',intro:'Requirements and application planning for the proposed provider-developed endorsed program.',children:['scsa-requirements','scsa-application']},
 {id:'scsa-requirements',title:'SCSA Requirements',parent:'scsa',intro:'A dedicated place to collect and check the requirements relevant to a proposed endorsed program.'},
 {id:'scsa-application',title:'SCSA Application',parent:'scsa',intro:'A working draft in the official provider-developed template.'},
 {id:'existing-prototype',title:'SkillsQuest prototype',intro:'Copied from the CEAWA SkillsQuest tab: explore the playable prototype, student portfolio and learner and teacher walkthroughs.'},
 {id:'research-background',title:'Research & Background',intro:'Explore the sources and earlier thinking by theme. These references inform the discussion; they are not an agreed SkillsQuest framework.',children:['research-origins','research-frameworks','research-practice','research-pathways']},
 {id:'research-origins',title:'Origins & Purpose',parent:'research-background',intro:'The experiences and early design questions that inspired SkillsQuest.'},
 {id:'research-frameworks',title:'Skills Frameworks',parent:'research-background',intro:'Research and definitions informing the choice of capabilities and skills.'},
 {id:'research-practice',title:'Learning & School Practice',parent:'research-background',intro:'Teaching, reflection and school implementation examples retained as background, not models selected for adoption.'},
 {id:'research-pathways',title:'Portfolios & Pathways',parent:'research-background',intro:'Research and policy thinking about recognising learning, learner profiles and future pathways.'}
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
    heading: "8 Drafted pilot labs – subject to change and discussion",
    lead: "A provisional working proposal for discussion with SCSA and career-development professionals.",
    items: []
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
    heading: "Oversee the program and review completion",
    lead: "The program provider manages delivery, quality assurance and records across participating schools, reviews evidence against the defined completion criteria and issues completion certificates. SCSA endorsement remains a separate approval of the program.",
    items: ["Schools oversee and support their own enrolled students. Provider access and cross-school responsibilities need clearly defined permissions.","An external verifier, such as a science teacher or swimming coach, confirms only the activity, dates and hours they can attest to. That is distinct from the program provider’s completion review.","The mockup illustrates proposed workflows with fictional data; provider accounts, secure access and final assessment arrangements remain to be developed."]
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
  "research-frameworks": [
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
  "research-frameworks": [
    [
      "What school implementation involved",
      "Rossmoyne’s example used a cross-curriculum team, leadership support, teacher professional learning, shared resources and a school audit. That experience helps identify the support a pilot school would need. The applicant and host remain open.",
      [
        [
          "Rossmoyne professional learning slides",
          "#research-frameworks/rossmoyne"
        ]
      ]
    ],
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
      "The SCSA syllabus and General Capabilities updates sit in Skills Frameworks for comparison with the proposed outcomes. The Expert Panel’s recommendations about learner profiles and complex competencies sit in Portfolios & Pathways and Assessment as policy background.",
      [
        [
          "SCSA updates in Skills Frameworks",
          "#research-frameworks"
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
  "research-frameworks": [
    "skills-choice-a",
    "skills-choice-b",
    "teacher-view"
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
const researchThemes = {
 'research-origins':['tkc'],
 'research-frameworks':['halsall','rossmoyne'],
 'research-practice':['harrisdale','kolb'],
 'research-pathways':['matching','pathways']
};
const sourceTheme = Object.fromEntries(Object.entries(researchThemes).flatMap(([theme,ids])=>ids.map(id=>[id,theme])));
function researchLibrary(ids) {
 return references.filter(source=>!ids||ids.includes(source.id)).map(source => `
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
  return `<li>${idea} <a href="#${sourceTheme[id]}/${id}">${source.title}</a></li>`;
 }).join('')}</ul></section>`;
}
const capabilityModels = [
  [
    "WA Department of Education",
    "Work Capabilities · Halsall, slide 6",
    "#research-background/halsall"
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
capabilityModels.push([
 "Core Skills for Work", "2013 framework · interpretive links to skill-area codes", "https://www.dewr.gov.au/skills-information-training-providers/core-skills-work-developmental-framework"
]);
const coreSkillsMatches = [
 "~2a: workplace communication",
 "~2b: working with others",
 "~1a / 3d: career action and innovation",
 "~3c: identifying and resolving problems",
 "~1a / 3c: responding to career and task changes",
 "~1a / 1b / 3a: managing work life, responsibilities and tasks",
 "~3d: developing and applying new ideas",
 "~2b: coordinating with others; not a standalone leadership scale",
 "~3b / 3c: evaluating decisions and problems",
 "~1a: learning for career and work needs",
 "~2b: awareness and regulation of behaviour in relationships",
 "~3a: organising tasks and workloads",
 "~1b / 2c: workplace responsibilities and diverse perspectives",
 "~3e: using digital systems for work",
 ""
];
const capabilityRows = [
  [
    "Communication",
    "Interpersonal skills and communication",
    "Listening + speaking",
    "Communication",
    "~Literacy",
    "Oral communication",
    "Communication"
  ],
  [
    "Collaboration",
    "Teamwork and collaboration",
    "Teamwork",
    "Collaboration",
    "~Personal and social capability",
    "Teamwork",
    "Teamwork"
  ],
  [
    "Initiative",
    "Initiative",
    "~Aiming high",
    "~Agency in learning",
    "~Personal and social capability",
    "Initiative and innovation",
    "Adaptability and initiative"
  ],
  [
    "Problem-solving",
    "Problem solving",
    "Problem solving",
    "~Quality thinking",
    "~Critical and creative thinking",
    "Problem solving",
    "Problem solving and decision making"
  ],
  [
    "Adaptability",
    "Adaptability and resilience",
    "~Staying positive",
    "~Agency in learning",
    "~Personal and social capability",
    "",
    "Adaptability and initiative"
  ],
  [
    "Self-management",
    "~Planning and organisation",
    "~Aiming high, staying positive",
    "~Agency in learning",
    "~Personal and social capability",
    "~Planning and organising",
    "~Planning and organising"
  ],
  [
    "Creativity",
    "Creativity",
    "Creativity",
    "~Quality thinking",
    "Critical and creative thinking",
    "~Initiative and innovation",
    "Creativity and innovation"
  ],
  [
    "Leadership",
    "",
    "Leadership",
    "~Collaboration",
    "~Personal and social capability",
    "",
    "Leadership and developing others"
  ],
  [
    "Critical thinking",
    "Critical thinking",
    "",
    "~Quality thinking",
    "Critical and creative thinking",
    "",
    "Critical and analytical thinking"
  ],
  [
    "Learning, agency and metacognition",
    "~Lifelong learning",
    "~Aiming high",
    "Agency in learning",
    "~Critical and creative thinking",
    "Learning",
    "Learning"
  ],
  [
    "Resilience and emotional intelligence",
    "~Adaptability and resilience",
    "~Staying positive",
    "~Agency in learning",
    "~Personal and social capability",
    "",
    ""
  ],
  [
    "Planning and organising",
    "Planning and organisation",
    "~Aiming high",
    "~Agency in learning",
    "~Personal and social capability",
    "Planning and organising",
    "Planning and organising"
  ],
  [
    "Ethics, culture and citizenship",
    "Cultural responsiveness, ethical integrity",
    "",
    "Acting ethically, active citizenship",
    "Ethical understanding, intercultural understanding",
    "",
    ""
  ],
  [
    "Digital literacy",
    "Foundational literacies",
    "",
    "",
    "Digital literacy",
    "Digital engagement",
    "Digital literacy"
  ],
  [
    "Literacy and numeracy",
    "Foundational literacies",
    "",
    "",
    "Literacy, numeracy",
    "Reading, writing, numeracy",
    "Literacy, numeracy"
  ]
];

function capabilityComparison() {
 const columns = capabilityModels.map(([name, version, href]) => `<th scope="col"><a href="${href}">${name}</a><small>${version}</small></th>`).join('');
 const body = capabilityRows.map(([concept, ...matches], index) => {
  const cells = [...matches,coreSkillsMatches[index]].map(match => {
   if (!match) return '<td class="capability-empty"><span aria-label="No separate match in the source">—</span></td>';
   if (match.startsWith('~')) return `<td class="capability-partial"><small>Partial</small>${match.slice(1)}</td>`;
   return `<td class="capability-match">${match}</td>`;
  }).join('');
  const group = index === 0 ? 'Capability concepts and proposed placement' : '';
  const placement = ['Communication','Teamwork & Collaboration','Initiative','Critical Thinking & Problem-solving','Adaptability','Self-management & Organisation','Creativity & Innovation','Embedded in Teamwork & Collaboration and Initiative','Critical Thinking & Problem-solving','Learning to Learn','Across Adaptability, Self-management and Learning to Learn; not a personality grade','Self-management & Organisation','Across all labs','Across all labs','Across all labs'][index];
  return `${group ? `<tr class="capability-group"><th colspan="${capabilityModels.length+2}">${group}</th></tr>` : ''}<tr><th scope="row">${concept}</th><td>${placement}</td>${cells}</tr>`;
 }).join('');
 return `<section class="content-panel" id="capability-comparison">
  <h2>8 Drafted pilot labs – subject to change and discussion</h2>
  <p>These lab themes are a provisional SkillsQuest working proposal, not a final framework or an SCSA-approved list. Input from SCSA and career-development professionals is invited to help refine the skill choices, definitions, learning activities and evidence of development.</p>
  <table class="capability-table"><thead><tr><th>Draft lab</th><th>Learning focus</th></tr></thead><tbody>
  <tr><th>Communication</th><td>Listen, clarify, explain and use feedback for different audiences and settings.</td></tr>
  <tr><th>Teamwork &amp; Collaboration</th><td>Coordinate roles, include others, resolve disagreements and practise collaborative leadership.</td></tr>
  <tr><th>Critical Thinking &amp; Problem-solving</th><td>Check evidence and assumptions, compare options and test decisions.</td></tr>
  <tr><th>Initiative</th><td>Notice opportunities and take appropriate action, considering permission, safety and impact.</td></tr>
  <tr><th>Creativity &amp; Innovation</th><td>Generate varied ideas, prototype, test and improve them.</td></tr>
  <tr><th>Self-management &amp; Organisation</th><td>Plan, prioritise, manage time and follow through reliably.</td></tr>
  <tr><th>Adaptability</th><td>Adjust approaches when conditions change, respond to feedback and seek support.</td></tr>
  <tr><th>Learning to Learn</th><td>Identify gaps, choose learning strategies, practise, reflect and apply learning in a new context.</td></tr>
  </tbody></table>
  <p>Digital capability, ethical judgement and cultural awareness should be integral to every lab’s learning design, feedback and portfolio evidence, not optional extras or a ninth lab. Literacy and numeracy also run across the labs. This is a design proposal; these features are not yet implemented across the prototype. Self-efficacy is supported through meaningful practice and feedback, not graded as a personality characteristic. Students should describe the context, what they already bring and what they still need to learn.</p>
  <ul><li><strong>Communication:</strong> consider privacy, audience and culturally different ways a message may be received.</li><li><strong>Critical Thinking &amp; Problem-solving:</strong> examine digital sources, bias and the consequences of decisions.</li><li><strong>Teamwork &amp; Collaboration:</strong> practise inclusion, respectful disagreement and equitable participation.</li><li><strong>Initiative:</strong> check permission, safety and impact before acting. Apply comparable prompts in the other labs and ask students to explain their judgement.</li></ul><p><a href="https://research.winchester.ac.uk/en/publications/learning-to-be-employable-practical-lessons-from-research-into-de-3/">Lucas and Hanson: Learning to Be Employable</a> supports attention to both transferable skills and habits of mind; it does not prescribe these eight titles. The <a href="https://www.dewr.gov.au/skills-information-training-providers/core-skills-work-developmental-framework">Core Skills for Work Developmental Framework</a> helps examine development and context, but is not itself an assessment tool. These inform the recommendation alongside the sources below.</p>
  <h2>Compare frameworks and the draft SkillsQuest proposal</h2>
  <p>The Core Skills for Work column is an interpretive crosswalk, not an official equivalence. Its cells use shortened descriptions and skill-area codes; select the source to read the full definitions. All links in that column are marked Partial because each framework groups and describes capability differently. A blank literacy/numeracy cell does not imply those skills are unimportant or unused.</p>
  <p>Read across a row to compare the labels. A shaded cell shows an explicit match or close synonym. <strong>Partial</strong> marks a broader or related concept. A dash means the source has no separate match at the level compared here.</p>
  <p>Scroll across to compare the provisional SkillsQuest placement with Skills Builder, Melbourne New Metrics, SCSA General Capabilities, Core Skills for Work, Sattler’s research synthesis, the historical Australian Skills Classification and the WA Department of Education Work Capabilities material. Select a source heading to see its reference. Current Australian taxonomy developments are linked in Skills Frameworks.</p>
  <div class="capability-scroll" tabindex="0" role="region" aria-label="Scrollable capability comparison">
   <table class="capability-table">
    <thead><tr><th scope="col">Capability concept</th><th scope="col">Draft SkillsQuest placement</th>${columns}</tr></thead>
    <tbody>${body}</tbody>
   </table>
  </div>
  <h3>Questions to explore</h3>
  <ul><li>Can learners and educators distinguish the eight areas while recognising that one experience can provide evidence of multiple skills, with its hours counted only once?</li><li>Do tasks produce useful evidence of capability in a stated context, rather than broad claims of universal competence?</li><li>Do reflection and feedback help students recognise existing strengths, identify gaps and plan their next learning step?</li></ul>
  <p>This is a draft interpretation of the source labels and their scope. The Skills Builder column uses the version illustrated in the Harrisdale material. The Harrisdale and Rossmoyne school examples remain available in Research & Background rather than as separate comparison columns. The historical Australian Skills Classification and Sattler’s research synthesis are workforce references. Track the developing National Skills Taxonomy in the update below.</p>
 </section>`;
}

const careerEmpireStudentDemo='https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/dashboards/student.html?portfolioDemo=1';
const careerEmpireTeacherDemo='https://emmanuel-ict-support.github.io/GTCEM-Career-Empire/dashboards/teacher.html?demo=promo';
function skillsQuestDemo(id){
 const view={'portfolio-entry':'entry','portfolio-view':'student','teacher-view':'teacher'}[id];
 return `<section class="content-panel"><h2>Try the fictional SkillsQuest portfolio</h2><p>The Career Empire pattern, populated with coherent fictional learning records: an all-in-one STAR entry, capability and chronological views, and a teacher matrix with students down and skills across. Switch students to compare different stages of the proposed Years 10–12 journey.</p><p><strong>No real student data.</strong> Demo entries and review requests stay in memory in the open demonstration and reset on reload. Each embedded page opens a fresh example. There is no real assessment submission, certification or award.</p><p><a href="portfolio-demo.html?view=${view}" target="_blank" rel="noopener">Open this demonstration in a full window ↗</a></p><iframe src="portfolio-demo.html?view=${view}" title="Fictional SkillsQuest ${view} demonstration" style="width:100%;height:1050px;border:1px solid #bac8b7;border-radius:14px" loading="lazy"></iframe></section>`;
}
function careerEmpireReference(id){
 const image=(file,alt)=>`<figure style="margin:20px 0"><a href="assets/portfolio-reference/${file}.jpg" target="_blank" rel="noopener"><img src="assets/portfolio-reference/${file}.jpg" alt="${alt}" style="width:100%;height:auto;border:1px solid #bac8b7;border-radius:14px" loading="lazy"></a><figcaption>${alt}. Actual Career Empire demonstration capture, November 2026; click to enlarge.</figcaption></figure>`;
 const intro='<p><strong>Design direction: mirror the Career Empire portfolio closely, rather than inventing a different system.</strong> These are the actual reference screens, not new SkillsQuest mockups. The capability labels belong to Career Empire; SkillsQuest’s final skills framework and completion criteria remain open.</p>';
 if(id==='portfolio-entry')return `<section class="content-panel"><h2>One entry, several skills</h2>${intro}<p>Keep the all-in-one STAR form: date of experience, setting, capability tags, Situation, Task, Actions, Results and Goal + Review. Expandable prompts and examples support students without making every prompt compulsory.</p><p>Entries can describe a simulation, a school team activity or an experience outside school. Make the context visible and ask what the student actually did, not just what the scenario character did. Supported or spoken reflection can use the same structure where appropriate.</p>${image('entry','Portfolio entry: the all-in-one STAR reflection form')}<p><a href="${careerEmpireStudentDemo}" target="_blank" rel="noopener">Try the original anonymous entry form ↗</a>: expand a capability, then select School, Workplace, Community or Gameplay. Use fictional content only; this is not a SkillsQuest student-record service.</p></section>`;
 if(id==='portfolio-view')return `<section class="content-panel"><h2>The same evidence, two useful views</h2>${intro}<ul><li><strong>By capability:</strong> expand a skill and scroll through relevant entries.</li><li><strong>Chronological:</strong> see experiences by year and month, with all their capability tags together.</li><li>Keep one underlying reflection even when it demonstrates several skills. Count an activity’s hours once.</li></ul>${image('capability','Portfolio by capability: Teamwork expanded with dated evidence')}${image('chronological','Chronological portfolio: experiences organised by year and month')}<h3>Explore the original portfolio</h3><p>Fictional sample records only. Switch between By capability and Chronological below.</p><iframe src="${careerEmpireStudentDemo}" title="Career Empire fictional portfolio reference" style="width:100%;height:900px;border:1px solid #bac8b7;border-radius:14px" loading="lazy"></iframe><p><a href="${careerEmpireStudentDemo}" target="_blank" rel="noopener">Open the original portfolio in a full window ↗</a></p></section>`;
 return `<section class="content-panel"><h2>Students down, capabilities across</h2>${intro}<p>Keep Career Empire’s matrix layout: students down the left, capabilities across the top, and evidence within each cell. Scroll across capabilities and down students, retaining the headings and student column. Each cell can scroll through that student’s relevant reflections.</p><p>For SkillsQuest, teachers should see only their own school’s students, with lab learning, simulated practice and active application clearly distinguished. Secure accounts, school separation and assessment workflows still need implementation.</p>${image('teacher','Teacher portfolio matrix: students down the left and capabilities across the top')}<p><strong>Reference limitation:</strong> the public Career Empire teacher demo currently shows fictional students with empty STAR cells. It demonstrates the grid and two-way scrolling, not a populated SkillsQuest cohort.</p><p><a href="${careerEmpireTeacherDemo}" target="_blank" rel="noopener">Open the original fictional teacher demo ↗</a> and scroll to “Capability Evidence &amp; Portfolio View”.</p><video controls preload="none" poster="https://taniab1975.github.io/ceawa-ai-collaboration/assets/capabilities-teacher-poster.jpg" style="width:100%;border-radius:14px" aria-label="Existing Career Empire teacher capability evidence walkthrough"><source src="https://taniab1975.github.io/ceawa-ai-collaboration/assets/capabilities-teacher-walkthrough.mp4" type="video/mp4"></video></section>`;
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
// Readiness concerns the proposal on this page, not approval or production software.
const readinessReview = {
 'overview':['amber','The intended Years 10–12 pathway, learning approach and proposed 55-hour submission point are established. Completion criteria, delivery detail and SCSA approval remain open.', ['What learning outcomes, portfolio evidence and active application will demonstrate successful completion after submission?','How will eligible learning time, accessible participation and school support work in practice?','What scope and progression would support the aim of up to four unit equivalents, subject to SCSA approval?']],
 'who-will-host':['amber','Three credible options are described, but no accountable provider or operating model has been selected.', ['Which option will lead: Australian Career Breakthroughs, CEAWA or an external partner?','Who owns the materials, contracts with schools, assesses completion and carries responsibility for records?','What pricing, costs, scholarships and conflicts-of-interest arrangements would make the model sustainable and fair?']],
 'secure-records':['amber','The questions and official guidance are useful; student-data safeguards are not implemented or independently verified.', ['Who will be accountable for student data, and where will each kind of record be stored?','What evidence will schools need for access controls, retention, deletion, incidents and supplier assurance?','How will school separation, verifier access and recovery be tested before real student use?']],
 'how-it-will-work':['amber','The proposed roles and journey are coherent; workload, timing and exceptions need testing.', ['What does a typical school week look like, and who does each task?','What counts as active learning time, and how are idle game time and duplicate hours excluded?','How will lab learning and school-based activities provide an accessible route, including supported or spoken reflection where needed?']],
 'learning-design':['amber','The design ideas fit together, but need a small, teachable sequence.', ['What are the essential learning outcomes and the sequence for teaching them?','Which theory stays behind the scenes, and which everyday language will learners see?','How will we evaluate whether activities help students recognise, explain and apply their strengths?']],
 'skills-choice':['amber','Eight research-informed lab themes are recommended, not agreed or validated as the final framework.', ['Which observable behaviours define each lab, without double-counting the same skill?','Should any themes combine or split after testing with learners and teachers?','Where will digital capability, ethical judgement and cultural awareness be explicitly practised in every relevant lab?']],
 'efficacy-building':['amber','The rationale is articulated; specific activities and an evaluation approach remain to be designed.', ['How will feedback build confidence grounded in evidence rather than praise alone?','How will learners recognise small improvements and choose achievable next steps?','How will changes in self-efficacy be explored without labelling disadvantaged students as lacking confidence?']],
 'pedagogy':['amber','The simple student-facing principle is clear; lesson design and accessibility need testing.', ['What would one complete lesson look like, including practice, feedback and reflection?','Which spoken, visual, supported or non-game alternatives will be available?','How much teacher preparation and support does the approach require?']],
 'transferable-skills':['green','The working position is clear enough for colleague discussion: prior experience matters, and transfer needs context.', ['Which examples best help students distinguish what carries across, what needs adapting and what is new?','How will students test a connection in another setting rather than only describe it?','What evidence would demonstrate useful adaptation without dismissing existing experience?']],
 'main-ecosystem':['amber','The parts of the proposed experience are mapped; the joined-up student system is not built.', ['Which components are essential for a first pilot, and which can wait?','How will students move between a lab, reflection, evidence and feedback without repeated data entry?','Which prototype should be the primary demonstration so colleagues do not confuse older and current versions?']],
 'skills-labs':['amber','Communication has a playable example; the other seven labs are previews, not completed learning activities.', ['What learning outcome and evidence will each lab produce?','Does the Communication example teach the intended skill beyond learning how to win the game?','How will each lab support accessible instructions, feedback, retrying and a non-game alternative?']],
 'portfolio-entry':['amber','Useful entry prompts exist; evidence, accessibility and privacy decisions are still open.', ['Which fields are essential, and which can be optional?','Can students use audio, images or a supported conversation instead of written STAR?','What evidence can be uploaded safely, and how will other people’s private information be excluded?']],
 'portfolio-view':['amber','The portfolio concept and fictional mockup illustrate the idea; secure persistence and sharing are not implemented.', ['How will learners find growth across experiences without turning the portfolio into a ranking?','What can students export or keep when they leave a school?','What sharing choices and retention rules are needed before real portfolios are stored?']],
 'teacher-view':['amber','School oversight is described and illustrated, but access boundaries and workload are untested.', ['What must a coordinator see to support only their own school’s students?','Which alerts are useful, and how much review time would a cohort require?','Where does supportive teacher feedback end and provider assessment begin?']],
 'provider-view':['amber','The provider role is described; accountable staffing, assessment and secure cross-school access are not established.', ['Who is authorised and trained to make completion decisions?','How will consistent judgements, appeals, corrections and certificate records be managed?','What cross-school access is genuinely necessary, and who checks its use?']],
 'skillsville-world':['amber','This is an exploratory game prototype, not a complete curriculum or student-record system.', ['Does the Communication mission teach something learners can explain and use elsewhere?','Which accessibility and navigation issues should be fixed before learner use?','What should the other seven labs teach before more game content is built?']],
 'assessment':['amber','An assessment direction exists, but the completion standard and review process are not yet defined.', ['What must a learner know and demonstrate to complete the program?','How many labs and experiences are required, and what quality is sufficient?','How will reviewers agree on fair decisions, support revisions and handle appeals?']],
 'reflection-tool':['amber','The prompts are ready to try with learners; their clarity and accessibility still need testing.', ['Which three or four prompts are enough for a first attempt?','How can learners show reflection through speech, visuals or supported discussion?','What feedback improves reflection without an adult writing the student’s response?']],
 'evidence-of-learning':['amber','Possible evidence is described, but sufficiency, authenticity and moderation rules are unresolved.', ['What examples show sufficient learning, insufficient learning and improvement after feedback?','How will the learner’s own contribution be established without excluding informal or home experiences?','How will reviewers judge different evidence formats consistently and avoid treating hours or game scores as proof of competence?']],
 'scsa':['amber','The intended pathway is identified; this is preparation, not an endorsed program or a submission-ready application.', ['Who will be the applicant and accountable program provider?','Which design decisions and evidence must be settled before an application?','Who will confirm current requirements with SCSA and keep the application plan up to date?']],
 'scsa-requirements':['amber','Requirements are drawn from the supplied provider form; implementation evidence and final decisions remain open.', ['Which current provider-developed application criteria and documents apply?','How will each requirement map to a named piece of evidence and an owner?','What must be confirmed about learning time, duplication, certification and school reporting?']],
 'scsa-application':['amber','The official template is pre-filled as a discussion draft; provider, scope and completion evidence still need confirmation.', ['What cohort, scope and sequence will the application actually commit to?','Who will assemble and review sample activities, evidence, criteria and quality-assurance arrangements?','What supporting evidence is needed before submission, and what is a realistic timetable?']],
 'existing-prototype':['amber','The older prototype helps illustrate possibilities, but should not be mistaken for the final design.', ['Which parts still support the current proposal, and which are superseded by Skillsville?','Should this remain an archive or become the main portfolio demonstration?','Which labels, workflows and fictional examples need aligning with the current design?']],
 'research-background':['green','The research is grouped for exploration and discussion, not presented as proof that this program works.', ['Which sources directly inform a design decision, and which are background only?','Where are there gaps or conflicting findings that need independent educational review?','How will source dates and claims be kept current without overwhelming the main proposal?']],
 'research-origins':['green','The purpose and earlier thinking provide useful context; they are not commitments about pilot scope.', ['Which original aims must remain central as the program is simplified?','Which earlier assumptions, including year groups, should be updated once the pilot is chosen?','How will the program recognise learners’ existing strengths without deficit assumptions?']],
 'research-frameworks':['amber','The relevant comparisons are gathered; selecting and translating a framework remains open.', ['Which definitions are useful for observable student learning rather than just attractive labels?','Where do the sources agree or differ, and why does that matter for the eight proposed labs?','What can be referenced, and what needs permission or original development before inclusion in learning materials?']],
 'research-practice':['amber','Examples offer design ideas, not a ready-made model that can simply be adopted.', ['Which teaching practices suit the intended learners and school workload?','What needs adapting and testing rather than copying from another school?','Which examples belong in optional teacher guidance rather than the student experience?']],
 'research-pathways':['amber','The portfolio and pathways rationale is useful; its application to this program needs testing.', ['How can students use their portfolio in a real careers conversation or application?','What evidence would show clearer skill articulation or broader aspirations after the pilot?','How can pathways remain open without ranking students or making unsupported predictions?']]
};
const readinessLabels={green:'Clear working position',amber:'Develop and refine',red:'Key decisions to resolve'};
let readinessCurrent='overview',readinessPreviewSuppressed=false,readinessHideTimer;
function decisionsMarkup(id){const [status,reason,questions]=readinessReview[id];return `<div class="decision-summary readiness-${status}"><h2>What needs deciding</h2><p>${reason}</p><ul>${questions.map(q=>`<li>${q}</li>`).join('')}</ul></div>`;}
function syncReadinessDiscussion(){
 const launch=document.querySelector('.sq-comment-launch'),panel=document.querySelector('.sq-discussion');if(!launch||!panel)return;
 let wrapper=document.querySelector('.sq-discussion-tools');
 if(!wrapper){wrapper=document.createElement('div');wrapper.className='sq-discussion-tools';launch.before(wrapper);wrapper.append(launch);const preview=document.createElement('aside');preview.id='sq-decisions-preview';preview.className='readiness-preview';preview.hidden=true;preview.setAttribute('aria-label','Page decisions preview');wrapper.prepend(preview);
  const show=()=>{clearTimeout(readinessHideTimer);if(!readinessPreviewSuppressed&&panel.hidden)preview.hidden=false;};
  const hide=()=>{readinessHideTimer=setTimeout(()=>{if(!wrapper.matches(':hover')&&!wrapper.contains(document.activeElement))preview.hidden=true;},160);};
  wrapper.addEventListener('pointerenter',()=>{readinessPreviewSuppressed=false;show();});wrapper.addEventListener('pointerleave',hide);wrapper.addEventListener('focusin',show);wrapper.addEventListener('focusout',()=>{readinessPreviewSuppressed=false;hide();});
  launch.addEventListener('click',()=>{preview.hidden=true;readinessPreviewSuppressed=true;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){preview.hidden=true;readinessPreviewSuppressed=true;}});
 }
 const [status]=readinessReview[readinessCurrent];launch.dataset.readiness=status;launch.innerHTML='<span class="readiness-dot" aria-hidden="true"></span> Comments';launch.setAttribute('aria-label',`Comments and decisions: ${readinessLabels[status]}`);launch.setAttribute('aria-describedby','readiness-sidebar-key');
 const preview=wrapper.querySelector('.readiness-preview');preview.innerHTML=decisionsMarkup(readinessCurrent)+'<button type="button" class="readiness-discuss">Open comments &amp; discussion</button>';preview.hidden=true;
 panel.querySelector('.sq-page-decisions')?.remove();const decisions=document.createElement('details');decisions.className='sq-page-decisions';decisions.open=true;decisions.innerHTML='<summary>What needs deciding</summary>'+decisionsMarkup(readinessCurrent);decisions.querySelector('h2').remove();panel.querySelector('.sq-discussion-head').after(decisions);
}
const readinessStyle=document.createElement('style');readinessStyle.textContent=`
[data-readiness=green],.readiness-green{--readiness-color:#23724b;--readiness-bg:#e2f0e4;--readiness-ink:#185b36}[data-readiness=amber],.readiness-amber{--readiness-color:#a86b00;--readiness-bg:#fff0ca;--readiness-ink:#754800}[data-readiness=red],.readiness-red{--readiness-color:#ad3c36;--readiness-bg:#f9e2df;--readiness-ink:#852c28}
#navigation [data-readiness]{background:var(--readiness-bg);color:var(--readiness-ink);border-left:3px solid var(--readiness-color)}#navigation a[aria-current=page]{box-shadow:inset 0 0 0 2px var(--readiness-color);font-weight:750}#page-title{border-left:5px solid var(--readiness-color);padding-left:14px;color:var(--readiness-ink)}
.readiness-overview{margin-top:24px;padding:14px 0;border-top:1px solid #ccd5c7;font-size:12px}.readiness-overview h2{font-size:15px;margin:0 0 10px}.readiness-overview>details{margin:6px 0}.readiness-overview summary{cursor:pointer;padding:8px;border-radius:7px;background:var(--readiness-bg);color:var(--readiness-ink);border-left:4px solid var(--readiness-color);font-weight:650}.readiness-overview a{display:block;margin:6px 8px;font-size:12px}.readiness-overview .readiness-key summary{background:transparent;border:0;color:#52675b;font-weight:400;padding-left:0}.readiness-key p{font-size:11px;line-height:1.5}.readiness-dot{display:inline-block;width:11px;height:11px;border-radius:50%;background:var(--readiness-color);border:1px solid currentColor;margin-right:5px}.sq-discussion-tools{position:fixed;bottom:22px;right:22px;z-index:80}.sq-discussion-tools .sq-comment-launch{position:static;background:var(--readiness-bg);color:var(--readiness-ink);border:1px solid var(--readiness-color)}.readiness-preview{position:absolute;right:0;bottom:calc(100% + 10px);width:min(390px,calc(100vw - 28px));max-height:70vh;overflow:auto;background:#fffefa;border:1px solid #c8d1c1;border-radius:14px;padding:18px;box-shadow:0 12px 40px #233e3630;font-size:13px;line-height:1.5}.readiness-preview[hidden]{display:none}.readiness-preview h2{font-size:17px;margin:0 0 10px}.readiness-preview ul{padding-left:20px}.readiness-discuss{font:inherit;border:1px solid #43735c;border-radius:8px;padding:9px;background:#e8efe1;color:#233e36;cursor:pointer}.sq-page-decisions{border-bottom:1px solid #ccd5c8;padding:12px 0;font-size:13px}.sq-page-decisions>summary{font-weight:700;cursor:pointer}.sq-page-decisions ul{padding-left:20px}.sq-page-decisions .decision-summary{border-left:4px solid var(--readiness-color);padding-left:12px}.sq-discussion-tools button:focus-visible{outline:3px solid #8c5900;outline-offset:3px}@media(max-width:680px){.sq-discussion-tools{right:12px;bottom:12px}.readiness-preview{max-height:60vh}}`;
document.head.append(readinessStyle);
document.addEventListener('click',event=>{if(event.target.closest('.readiness-discuss')){const toggle=document.querySelector('.sq-comment-launch');if(toggle&&toggle.getAttribute('aria-expanded')!=='true')toggle.click();document.querySelector('.sq-discussion textarea')?.focus();}});
window.addEventListener('sq-comments-ready',syncReadinessDiscussion);
function addReadiness(main,id){
 readinessCurrent=id;document.body.dataset.readiness=readinessReview[id][0];
 nav.querySelectorAll('[data-page],[data-group]').forEach(node=>{const key=node.dataset.page||node.dataset.group;const status=readinessReview[key][0];node.dataset.readiness=status;node.title=readinessLabels[status];node.setAttribute('aria-label',`${byId[key].title}: ${readinessLabels[status]}`);});
 if(!document.querySelector('.readiness-overview')){const groups=['amber','green'].map(status=>{const matching=pages.filter(p=>readinessReview[p.id][0]===status);return `<details class="readiness-${status}"><summary>${readinessLabels[status]} · ${matching.length}</summary>${matching.map(p=>`<a href="#${p.id}">${p.title}</a>`).join('')}</details>`}).join('');const overview=document.createElement('section');overview.className='readiness-overview';overview.setAttribute('aria-label','Readiness across the proposal');overview.innerHTML=`<h2>Across the proposal</h2>${groups}<details class="readiness-key"><summary>About the colours</summary><p id="readiness-sidebar-key">Proposal readiness only. Green: clear working position. Amber: develop and refine. Red would indicate an actual problem; no page is currently marked red. Colour does not mean SCSA approval, proven impact, verified security or readiness for real student records.</p></details>`;document.querySelector('.sidebar').append(overview);}
 syncReadinessDiscussion();
}

function render(focus=false){let [id, sourceId]=location.hash.slice(1).split('/');id=id||'overview';if(id==='purpose')id='research-origins';if(id==='research-background'&&sourceId&&sourceTheme[sourceId])id=sourceTheme[sourceId];if(!byId[id])id='overview';const p=byId[id];
 document.title=`${p.title} · SkillsQuest`;
 document.querySelector('#breadcrumb').textContent=p.parent?`${byId[p.parent].title} / ${p.title}`:p.title;
 nav.querySelectorAll('a').forEach(a=>{if(a.dataset.page===id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
 const main=document.querySelector('main');
 const isWorld=id==='skillsville-world';
 document.body.classList.toggle('world-view',isWorld);
 if(isWorld){main.removeAttribute('aria-labelledby');main.setAttribute('aria-label','Skillsville prototype world')}else{main.removeAttribute('aria-label');main.setAttribute('aria-labelledby','page-title')}
 const header=`<h1 id="page-title">${id==='overview'?'SkillQuest':p.title}</h1><p class="lead">${p.intro}</p>`;
 if(id==='existing-prototype')main.innerHTML=`${header}<p><a href="skillsquest-prototype.html" target="_blank" rel="noopener">Open prototype and portfolio in a full window ↗</a></p><p><a href="#skillsville-world">Play the full SkillQuest game</a> · <a href="https://taniab1975.github.io/skillquest/proposal.html">Read the original SkillQuest design proposal</a></p><iframe title="SkillsQuest prototype and capabilities portfolio" src="skillsquest-prototype.html" style="width:100%;height:850px;border:1px solid #dce2d5;border-radius:18px" allowfullscreen></iframe>`;
 else if(p.href)main.innerHTML=`<iframe class="world-frame" title="Skillsville prototype world" src="${p.href}" allow="fullscreen" allowfullscreen></iframe>`;
 else if(id==='skills-choice')main.innerHTML=`${header}<section class="content-panel"><h2>The framework landscape</h2><p>Decades of work have sought a shared language for skills. The 2002 Employability Skills Framework and later Core Skills for Work framework are part of that history. Definitions, labels and priorities continue to evolve. <a href="https://www.dewr.gov.au/skills-information-training-providers/resources/bridging-document-core-skills-work">Australian Government framework history</a> · <a href="#research-frameworks">Skills Frameworks research and discussion papers</a>.</p><ul><li><strong>Updated SCSA General Capabilities:</strong> the WA curriculum reference was updated in 2026 and presents seven capabilities through learning continua. It is a valuable educational reference, not a separate SkillsQuest endorsed-program checklist. <a href="https://k10outline.scsa.wa.edu.au/home/wa-curriculum/general-capabilities">Current capabilities and continua</a> · <a href="https://www.scsa.wa.edu.au/kto6-circulars/edition-2-february-2026/1.-teaching-and-learning/updated-general-capabilities-now-available">SCSA update</a>.</li><li><strong>Core Skills for Work Developmental Framework:</strong> describes ten areas of non-technical work capability, with development understood in context. SCSA’s ADWPL Skills Journal Teacher’s Guide explicitly bases its journal questions on this framework. That makes it a useful reference for SkillsQuest’s reflection and evidence design, but does not make SkillsQuest ADWPL or automatically give it ADWPL’s completion rules or recognition. <a href="https://www.dewr.gov.au/skills-information-training-providers/core-skills-work-developmental-framework">Framework and resources</a> · <a href="https://senior-secondary.scsa.wa.edu.au/__data/assets/word_doc/0006/337056/EP-ADWPL-Skills-Journal-Teacher-s-Guide.docx">SCSA ADWPL Teacher’s Guide</a>.</li><li><strong>National Skills Taxonomy (NST):</strong> Jobs and Skills Australia is developing this common-language resource. Its October 2026 update plans an <strong>NST Design Paper for March 2027</strong>, not a confirmed completed-taxonomy release. <a href="https://www.jobsandskills.gov.au/data/national-skills-taxonomy">Project, discussion papers and consultation</a> · <a href="https://www.jobsandskills.gov.au/sites/default/files/2026-10/nst_newsletter_-_october_2026.pdf">October update</a>.</li></ul><p>The comparison below brings these references together with <strong>Skills Builder, Melbourne New Metrics, Sattler’s research synthesis, the historical Australian Skills Classification and the WA Department of Education Work Capabilities material</strong>. NST is discussed as an emerging resource, not mapped as though its completed skill definitions were already available. Each source serves a different purpose; SkillsQuest remains a provisional working proposal.</p></section><section class="content-panel"><h2>What employers value</h2><p><strong>Australian Jobs 2023 reports that 75% of employers rated personal qualities as equally or more important than technical skills.</strong> The breakdown was 38% placing personal qualities higher, 37% giving both equal weight and 25% placing technical skills higher. Page 10 attributes this finding to the <em>Survey of Employers’ Recruitment Experiences, 2019</em>. This is a dated survey finding, not a claim that the same priorities apply to every job or employer. <a href="https://content.yourcareer.gov.au/sites/default/files/2023-11/AusJobs_2023_ACC.pdf#page=10">Australian Jobs 2023, p. 10</a>.</p><p><em>Australian Jobs 2026</em> continues to highlight employers’ high regard for employability skills. It also encourages people without work experience to demonstrate skills through school projects, sport, creative activities and volunteering. That supports SkillsQuest’s focus on recognising and articulating capabilities developed in different parts of a young person’s life, alongside relevant technical learning and qualifications. <a href="https://www.jobsandskills.gov.au/download/19964/australian-jobs-2026/4069/australian-jobs-2026/pdf#page=9">Australian Jobs 2026, pp. 7–8</a>.</p><p>These capabilities can be developed. The Core Skills for Work framework is intended to support learning programs and help people recognise and develop their existing skills. SkillsQuest proposes structured learning, practice, reflection and feedback rather than treating capability as a fixed personal trait. <a href="https://www.dewr.gov.au/skills-information-training-providers/core-skills-work-developmental-framework">Core Skills for Work guidance</a>.</p></section><section class="content-panel"><h2>Recognising skills beyond framework labels</h2><p>Employers can describe similar capabilities using their own job titles, selection criteria and workplace language, regardless of which framework a learner has used. SkillsQuest should therefore help students interpret the actual opportunity, rather than simply match a standard label.</p><h2>The learning is in the process</h2><ol><li><strong>Analyse the requirements:</strong> what is this employer asking someone to do, in this particular setting?</li><li><strong>Assess existing skills and experience:</strong> what has the student already learned and demonstrated, and with what support?</li><li><strong>Map relevant evidence:</strong> which examples explain their contribution, actions and results in language that addresses those requirements?</li><li><strong>Identify gaps and next steps:</strong> what needs adapting, practising or learning before they can meet the requirements?</li></ol><p>The draft SkillsQuest labs provide a starting structure for this learning. The aim is not to force every experience or job into one taxonomy, but to build the habit of recognising strengths, explaining relevant evidence and planning further development.</p></section>`;
 else if(id==='transferable-skills')main.innerHTML=`${header}<section class="content-panel" id="transfer-foundation"><h2>A new context does not erase existing capability</h2><p><strong>Students are not starting from scratch.</strong> Their experiences at school, work, home, in sport and in the community can develop substantial knowledge, skills and judgement. These should not be discounted simply because the next setting is different.</p><p>Equally, a broad label such as “teamwork” does not prove readiness for every task. The useful question is not “Does this experience count?” but <strong>“What do I already bring, how can I use it here, and what else do I need?”</strong></p><p>This is the working position for discussion: recognise existing assets without assuming that transfer is automatic or complete.</p></section>
<section class="content-panel" id="transfer-netball"><h2>Netball grand final → Christmas retail rush</h2><p>A student may have communicated clearly under pressure, understood their role, adjusted to changing conditions and supported teammates during a final. Those are real achievements, not irrelevant just because they happened on a court.</p><ul><li><strong>Carry across:</strong> experience of coordinating with others, listening, staying focused and responding to a shared goal.</li><li><strong>Adapt:</strong> use those behaviours with customers and unfamiliar coworkers, different priorities and workplace expectations.</li><li><strong>Learn anew:</strong> the register, stock information, store procedures and when to seek help.</li></ul><p>A credible claim is: “I have demonstrated teamwork under pressure in netball. These are the behaviours I can bring to retail, and these are the parts I would need to learn.” The particular student's actions and evidence matter, not participation in a final alone.</p></section>
<section class="content-panel" id="transfer-driving"><h2>“I can drive.” Great. In what circumstances?</h2><p>An experienced automatic-car driver learning a manual does not have to relearn steering, braking, road awareness or judging gaps from zero. They bring a large foundation while learning clutch and gear coordination. A change of vehicle does not cancel that foundation.</p><p>But driving an automatic, manual, electric car, tractor or heavy vehicle, in daylight, storms or snow, introduces different demands. We can ask about:</p><ul><li><strong>Depth:</strong> how well someone performs and exercises judgement in a familiar situation.</li><li><strong>Breadth:</strong> how they adapt across vehicles, equipment, conditions and tasks.</li><li><strong>Domain:</strong> which knowledge is shared, and where a substantially different activity, such as train operation, requires new learning.</li></ul><p>Dreyfus's model describes development from rule-led performance towards experienced judgement. His driving example shows why recognising context matters. For SkillsQuest, it is a useful learning lens, not a universal rating of “expert at everything” or a ready-made validated employability assessment scale. <a href="https://resolutionresources.com.au/wp-content/uploads/2022/02/Dreyfus-2004.pdf">Dreyfus (2004)</a></p></section>
<section class="content-panel" id="transfer-dimensions"><h2>Look beyond performing one task</h2><p>The dimensions of competence help ask whether a learner can perform a task, coordinate several tasks, respond when things change, meet the expectations of the setting and adapt to other tasks or equipment. These are useful questions for the driving example and for employability learning.</p><p>WA Training Accreditation Council guidance describes these dimensions in VET assessment. We are drawing on the ideas, not claiming they automatically define the assessment requirements for this proposed endorsed program. <a href="https://www.wa.gov.au/government/publications/fact-sheet-assessment-and-assessment-judgement">WA assessment and assessment judgement guidance</a></p></section>
<section class="content-panel" id="transfer-process"><h2>A habit of recognising, adapting and building</h2><p>The proposed SkillsQuest process starts with strengths, then makes the next learning step visible:</p><ol><li><strong>Describe:</strong> What did I actually do, in what conditions and with what support?</li><li><strong>Recognise:</strong> What capabilities did I use? What result, feedback or evidence supports this?</li><li><strong>Connect:</strong> Where else could these capabilities help? What is similar?</li><li><strong>Compare:</strong> What needs adapting, and what is genuinely new?</li><li><strong>Plan:</strong> What knowledge, practice, tools or support would close the gap?</li><li><strong>Apply and review:</strong> Try it in another situation, seek feedback and refine the approach.</li></ol><p>This is not “just reflection”. Recognising relevant experience and planning how to adapt it are learning outcomes worth teaching. Research on transfer supports helping learners understand principles and make connections across contexts, rather than assuming learning will transfer unaided. <a href="https://www.nationalacademies.org/read/9853/chapter/6">National Research Council: Learning and Transfer</a></p></section>
<section class="content-panel" id="transfer-evidence"><h2>Confidence grounded in what students already bring</h2><p>A portfolio can distinguish <strong>demonstrated in this context</strong>, <strong>relevant to a new context</strong>, and <strong>adapted and demonstrated elsewhere</strong>. These describe the evidence, not a ranking of the worth of an experience. A thoughtful reflection can explain a connection; a later example can show the adaptation in action.</p><p><strong>SkillsQuest helps students recognise, explain and build on their capabilities, adapt them to new situations and identify what they still need to learn.</strong></p><p>Discussion question: how can we recognise a student's existing foundation while making the next step specific, achievable and encouraging?</p></section>
<section class="content-panel"><h2>Earlier thinking and examples</h2>${postFigure(p.post)}</section>`;
 else if(p.post)main.innerHTML=`${header}${postFigure(p.post)}`;
 else if(id==='research-background')main.innerHTML=`${header}<section class="content-panel"><h2>Find the thinking behind the design</h2><p>Choose a theme below or open a subpage in the menu. The source extracts remain available in the relevant learning and assessment pages, linked from each reference.</p></section>${cards(p.children)}`;
 else if(id==='research-origins')main.innerHTML=`${header}<section class="content-panel"><h2>What inspired SkillsQuest</h2>${postFigure(originPost)}</section><section class="content-panel"><h2>Earlier program design principles</h2><p>${drafts['program-foundations'].lead}</p><ul>${drafts['program-foundations'].items.map(item=>`<li>${item}</li>`).join('')}</ul></section>${researchLibrary(researchThemes[id])}`;
 else if(researchThemes[id])main.innerHTML=`${header}${id==='research-frameworks'?'<section class="content-panel"><h2>Compare before selecting</h2><p>See <a href="#skills-choice">Skills Choice</a> for the evolving comparison, research links and recommended pilot themes. The sources below provide background; none is presented as SCSA’s required list.</p></section>':''}${researchLibrary(researchThemes[id])}`;
 else if(id==='overview')main.innerHTML=`<div class="overview-art" role="img" aria-label="Illustrated Skillsville island with learning labs and discovery plaza"></div><h1 id="page-title">SkillsQuest</h1><p class="lead">${p.intro}</p><section class="content-panel"><h2>Three key ways learners develop</h2><p>SkillsQuest is a program of learning that enables learners to:</p><ol><li><strong>Build confidence, self-efficacy and a positive sense of identity.</strong> Recognise the value of their life experiences and articulate the highly valued employability skills they have developed.</li><li><strong>Connect their skills and experiences to opportunities.</strong> Learn to contextualise their skills and experiences to selection criteria, while identifying skills gaps and areas for improvement.</li><li><strong>Understand employability skills.</strong> Learn about the key components of employability skills and what they look like in practice.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Two ways students progress</h2><ol><li><strong>Skills learning and exercises.</strong> Develop knowledge and understanding of employability skills through accessible activities. The dimensions of competence and Dreyfus’s model inform the teaching design behind the scenes; students are not required to learn those formal labels.</li><li><strong>Self-evaluation, reflection and portfolio building.</strong> Map their own experiences against established employability skills, evaluate what they have learned and build a portfolio that makes their development visible. Experiences can come from school, work, home, volunteering and community life, helping learners recognise their interests and possible future pathways.</li></ol></section><section class="content-panel" style="margin-top:24px"><h2>Proposed pathway: Year 10 to Year 12</h2><p>Students would begin in Year 10 and could complete SkillsQuest at any point through Year 12. They learn through Skills Labs, questions and simulations, then actively apply skills through school team activities or other relevant experiences. An outside coach or employer is not a prerequisite.</p><p><strong>Proposed assessment submission point: 55 logged learning hours.</strong> Students could submit their portfolio for assessment once they reach this threshold. Hours alone do not establish successful completion: the portfolio must demonstrate the required learning and application.</p><p><strong>The aim is up to four endorsed-program unit equivalents</strong> that may contribute to the WACE C-grade requirement, subject to SCSA approval, the equivalence granted and applicable limits. This is not a claim that 55 hours earns four units. The learning scope and progression for any further unit equivalents still need to be developed.</p><p>See <a href="#scsa">SCSA</a> for the approval pathway and <a href="#assessment">Assessment</a> for the completion criteria still to resolve. </p></section><p class="endorsement-note"><strong>SkillsQuest is not yet SCSA endorsed.</strong></p>`;
 else if(id==='who-will-host')main.innerHTML=`${header}<section class="content-panel"><h2>A provider-developed program</h2><p>SkillsQuest is being developed independently, rather than by SCSA or a school. <a href="https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/endorsed-programs" target="_blank" rel="noopener">The intended pathway is a <strong>provider-developed endorsed program</strong>, subject to SCSA approval.</a> The organisation responsible for the program need not be the same organisation operating the software or funding student access.</p><p>Tania brings career development knowledge and learning-design experience. Her partner brings cybersecurity and records-management experience. These strengths would need to be supported by documented assessment, quality assurance, secure records, ongoing support and continuity arrangements.</p></section>
<section class="content-panel"><h2>Credibility, research and equitable access</h2><p>SkillsQuest recognises the whole student, alongside their academic learning. Young people develop and demonstrate capabilities in many different ways and settings. Their experiences, interests and strengths can reveal valuable skills that academic results alone may not capture. For instance, a student who finds written communication challenging may have developed strong verbal communication skills.</p><ul><li>Use research-informed learning design, independent educational review and pilot evidence to test the program’s value.</li><li>Evaluate confidence, skill articulation and career aspirations rather than promise lifelong impact.</li><li>Make commercial interests, pricing and scholarship decisions transparent. Financial sustainability and access need to be designed together.</li><li>Consider devices, connectivity, accessibility and school support as well as licence cost. Low ICSEA can guide school-level targeting, not assumptions about individual learners.</li></ul></section>
<section class="content-panel"><h2>Three options to explore</h2><h3>1. Australian Career Breakthroughs</h3><p>An independent provider model under the proposed Australian Career Breakthroughs business. Schools would purchase access and enrol students; the provider would manage the program and certify successful completion.</p><ul><li><strong>Opportunity:</strong> direct control of learning design, software development, pricing and the equity commitment.</li><li><strong>Access model:</strong> paid school subscriptions could help fund scholarships or subsidised access for low-ICSEA schools, alongside sponsorship.</li><li><strong>Intended business model and matters to resolve:</strong> Tania and Richard intend to establish a partnership business. The legal structure, registration details and ownership arrangements are still to be confirmed. Evaluate the hours required, fees, assessment capacity, independent review and long-term records arrangements.</li></ul>
<h3>2. CEAWA as the provider</h3><p>SkillsQuest could be a CEAWA product, with a contract covering software management and hosting, data administration and certification services. The precise responsibilities would need CEAWA’s agreement.</p><ul><li><strong>Opportunity:</strong> connection with a professional career-education community and shared expertise.</li><li><strong>To resolve:</strong> governance, program and software ownership, fees, operational responsibility and who is accountable for assessment, records and certificates.</li><li><strong>Transparency:</strong> any personal financial interests, decision-making roles and conflicts of interest would need to be declared and managed.</li></ul>
<h3>3. An organisation such as The Smith Family</h3><p>A potential purchase, commissioned development, operating contract or partnership could align SkillsQuest with an organisation focused on educational opportunity. A pilot or sponsored-access partnership is another option.</p><ul><li><strong>Opportunity:</strong> an equity-focused partner may help reach students who would otherwise miss out.</li><li><strong>To resolve:</strong> actual interest, fit with existing programs, ownership, funding, delivery and certification responsibilities.</li></ul><p><strong>These are options, not agreements.</strong> No CEAWA or Smith Family commitment, business-registration verification or SCSA endorsement is claimed here.</p></section>
<section class="content-panel"><h2>Decisions still to make</h2><p>Choose the applicant/provider, confirm ownership and operating responsibilities, agree the assessment and certification model, and decide how paid access and subsidies will work. Keep provider, software operator and equity sponsor as separate decisions until an arrangement is agreed.</p><p><strong>SCSA endorses the program; the provider certifies successful completion; the school reports achievement to SCSA.</strong> The final model must meet the requirements of the approved program.</p><p><a href="https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/endorsed-programs">SCSA endorsed-program guidance</a> · <a href="https://www.scsa.wa.edu.au/__data/assets/pdf_file/0018/1232028/_WACE-Manual-2026-April.pdf">2026 WACE Manual, section 5</a></p></section>`;
 else if(id==='secure-records')main.innerHTML=`${header}<p>Microsoft Entra is being considered for the future game’s identity and access management, but no decision or implementation is confirmed.</p><section class="content-panel"><h2>Trust needs evidence, not just reassurance</h2><p>Schools need to understand what information a service collects, why it needs it, who can access it and how it is protected throughout its life. Privacy, security and reliable records should be designed into SkillsQuest from the start, not added after students begin using it.</p><p><strong>Current status: design and evidence preparation.</strong> This discussion site and its fictional learning-record mockup do not establish that a production student-record system is secure, independently assessed, Department-approved or SCSA-endorsed.</p></section>
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

<section class="content-panel"><h2>Standards and official guidance</h2><ul>
<li><a href="https://st4s.edu.au/st4s-vendor-guide/">ST4S vendor guide and assessment criteria</a> and <a href="https://st4s.edu.au/readiness-check/">readiness check</a>. Use the current framework and gather supporting evidence; a self-check is not independent assessment or permission to display an approval badge.</li>
<li><a href="https://st4s.edu.au/docs/st4s-framework-v2026-1/">ST4S framework 2026.1</a>, the current framework checked on 16 November 2026. Recheck the official source as standards change.</li>
<li><a href="https://www.oaic.gov.au/privacy/australian-privacy-principles">Australian Privacy Principles (OAIC)</a>: use these to examine collection, use, disclosure, information quality, security, access and correction. Confirm the provider's applicable legal and contractual obligations.</li>
<li><a href="https://www.wa.gov.au/organisation/office-of-the-information-commissioner/what-are-the-information-privacy-principles-ipps">WA Information Privacy Principles</a> and <a href="https://www.wa.gov.au/organisation/state-records-office-of-western-australia/privacy-and-responsible-information-sharing-act-2024-and-record-keeping-obligations">PRIS and recordkeeping guidance</a>: relevant to public-sector requirements, including protection of de-identified information and retention obligations.</li>
</ul></section>

`;
 else if(id==='how-it-will-work')main.innerHTML=`${header}<section class="content-panel"><h2>One journey, two connected ways to learn</h2><p>Students develop knowledge through skills learning and exercises, and develop their portfolio through self-evaluation and reflection on their own experiences. Students learn to recognise and explain employability skills. The dimensions of competence and Dreyfus’s model inform teaching behind the scenes, rather than being mandatory student labels or grades. See the <a href="#pedagogy">simple learning design principle</a>.</p><ol><li><strong>School enrols and supports.</strong> Schools purchase access and sign up students. A school coordinator monitors only their own students’ progress, hours, evidence and outstanding verification.</li><li><strong>Student learns and practises.</strong> Skills Labs and game activities teach the skills and give students opportunities to practise, receive feedback and try again.</li><li><strong>Student proposes or records an experience.</strong> They identify relevant employability skills and record lab learning, simulations and active application in school or other settings. A coach or employer is not a prerequisite. Where an external activity needs confirmation, an appropriate person can verify the participation they observed.</li><li><strong>Participation is recorded electronically.</strong> Active lab learning supplies a time record linked to reading, questions and completed tasks, rather than merely being logged in. School activities can be supported by teacher observation and work produced; external participation can be confirmed where relevant. Planned hours remain separate from completed hours.</li><li><strong>Student reflects and builds evidence.</strong> They explain their own contribution, what they learned, how the experience connects to skills and where improvement or further learning is needed. They practise adapting examples to opportunities and selection criteria.</li><li><strong>Provider reviews completion.</strong> The provider assesses the evidence against the program’s defined criteria, requests clarification where needed, and issues a completion certificate when requirements are met. Following endorsement, the school retains evidence and reports achievement to SCSA.</li></ol></section>
<section class="content-panel"><h2>Who sees and does what?</h2><ul><li><strong>Student:</strong> sees their own learning record, proposes and logs experiences, nominates verifiers, self-evaluates and develops their portfolio.</li><li><strong>School coordinator:</strong> oversees their own enrolled students, monitors progress and pending tasks, and provides support and feedback.</li><li><strong>External verifier:</strong> confirms the relevant activity, dates and hours they can attest to. Verification of participation is not an assessment of the whole program.</li><li><strong>Program provider:</strong> has cross-school oversight, manages quality assurance and records, assesses completion and issues certificates.</li></ul><p>These are proposed access boundaries. The public mockup uses fictional data and does not implement real accounts, school separation or secure verification.</p></section>
<section class="content-panel"><h2>Hours and learning are related, but different</h2><p><strong>The activity record shows participation. The portfolio shows learning.</strong> Time in the game or externally verified hours does not automatically demonstrate a skill or guarantee WACE credit.</p><ul><li>Record each activity’s time once, even when the experience supports several employability skills.</li><li>Keep game-recorded time, externally verified time and planned time distinguishable.</li><li>Use reflection and evidence to judge what the student understands and can demonstrate, not just how many hours they have accumulated.</li><li>Define eligible learning time, completion standards and the treatment of external experiences in the program design and SCSA application.</li></ul><p>The <a href="#assessment">Assessment</a> section develops the learning outcomes, evidence and criteria in more detail. This page explains the practical journey, without adding a separate administration tab or unnecessary approval gates.</p></section>
<section class="content-panel"><h2>Designed for electronic, statewide participation</h2><p>The model draws on the digital record-and-verification principles of the Duke of Edinburgh Online Record Book and the ADWPL logbook, without copying their materials or assuming their rules apply to SkillsQuest. Students can link experiences from school, work, home, sport, volunteering and community life to skills.</p><p><strong>SkillsQuest is not yet SCSA endorsed.</strong> Eligible hours, final criteria, unit equivalence, recordkeeping and reporting arrangements remain subject to program design and approval. A provider certificate would record completion; it would not itself issue SCSA endorsement.</p></section>`;
 else if(['portfolio-entry','portfolio-view','teacher-view'].includes(id))main.innerHTML=`${header}${skillsQuestDemo(id)}<details class="content-panel"><summary>Original Career Empire reference screens</summary>${careerEmpireReference(id)}</details>`;
 else if(id==='scsa-requirements')main.innerHTML=header+"<section class=\"content-panel\"><h2>What the provider-developed form asks for</h2><p>The application form sets the requirements. The supplied Independent Research Project example helps illustrate the level of detail, not rules SkillsQuest must copy.</p><details class=\"requirement-row\"><summary>A distinct learning program</summary><p>Program title, 75\u2013150-word public description, rationale, participant profile, prerequisites and typically up to five learning outcomes. Explain senior-secondary learning and how it differs from existing WACE courses.</p></details><details class=\"requirement-row\"><summary>A teachable sequence and eligible hours</summary><p>Content, lesson structures, sequence, duration, delivery settings and learning time broken down by activity. The form excludes private study hours from unit-equivalent allocation. Confirm how structured online lab learning should be classified. 55 hours is average learning time for one unit, not an automatic pass or four units.</p></details><details class=\"requirement-row\"><summary>Assessment and successful completion</summary><p>Assessment outline, task descriptions, timing, criteria and minimum completion standard, consistent with WACE Principles of Assessment. Map lab tasks, application and portfolio evidence to outcomes. The proposed 55-hour submission gate does not itself demonstrate achievement.</p></details><details class=\"requirement-row\"><summary>Certification and quality assurance</summary><p>A sample certificate, award or achievement record; authenticity measures; assessor authority and quality-assurance arrangements. SCSA endorses the program; the provider certifies achievement and the school reports it.</p></details><details class=\"requirement-row\"><summary>Safe, feasible delivery</summary><p>Personnel, relevant qualifications and experience, induction and Working with Children Checks where required. Explain duty of care, liability, insurance, equipment, facilities and delivery/certification costs.</p></details><details class=\"requirement-row\"><summary>Records and maintenance</summary><p>What records are held, where, how and for how long; evaluation and quality assurance; program history and longevity. Collect WASN at registration and support reconciliation with school-reported achievement. The public discussion draft must not contain student records or WASNs.</p></details><details class=\"requirement-row\"><summary>Applicant and privacy details</summary><p>Confirm the provider and contact details. Read the privacy collection notice and obtain the stated consent for named facilitators. Do not fill unresolved organisational decisions as though they are agreed.</p></details></section><section class=\"content-panel\"><h2>What the supplied example helps us prepare</h2><p>The Independent Research Project syllabus, supplied as the Perth Modern example, demonstrates a detailed learning sequence, assessment-to-criteria mapping, task briefs, marking guidance and reflection beyond a recount. It also allows varied evidence such as oral discussion and multimedia.</p><p>For SkillsQuest, prepare a sample lab task, portfolio prompt, observation/checklist and an assessment outline linking each to learning outcomes. Its A\u2013E grades, 35-week schedule and 30/40/30 assessment weighting are example design choices, not universal requirements.</p></section><section class=\"content-panel\"><h2>Getting help</h2><p>The provider form encourages support from the Principal Consultant \u2013 VET and directs enquiries to the Programs and Vocational Studies team: <a href=\"mailto:endorsed@scsa.wa.edu.au\">endorsed@scsa.wa.edu.au</a>. Ask about eligible online learning time, proposed award structure and the next submission date. No enquiry or application has been sent.</p><p><a href=\"https://senior-secondary.scsa.wa.edu.au/__data/assets/word_doc/0003/1260597/Provider-developed-endorsed-program-application-template.docx\">Official provider-developed application form</a> \u00b7 <a href=\"https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/endorsed-programs\">SCSA endorsed programs</a> \u00b7 <a href=\"#scsa-application\">Our draft application</a></p></section>";
 else if(id==='scsa-application')main.innerHTML=header+"<section class=\"content-panel application-panel\"><h2>SkillsQuest draft application</h2><p>The supplied provider-developed template, pre-filled with the current proposal. Proposed answers and matters still to confirm are marked in the document. Provider, contact, consent and final assessment decisions remain open. Nothing has been submitted.</p><div class=\"document-actions\"><a href=\"assets/application/skillsquest-application-draft.pdf\" target=\"_blank\">Open PDF</a><a href=\"assets/application/skillsquest-application-draft.docx\" download>Download editable Word draft</a></div><iframe title=\"Pre-filled SkillsQuest provider-developed application draft\" src=\"assets/application/preview.html\" class=\"application-frame\"></iframe><p class=\"document-note\">If your browser does not display the document, use Open PDF above.</p></section>";
 else if(p.children)main.innerHTML=`${header}<div class="section-bar"><h2>Explore this part of the program</h2><span>${p.children.length} connected sections</span></div>${cards(p.children)}`;
 else {
  const draft = drafts[id];
  const sources = id === 'scsa-requirements' ? `<p><a href="https://senior-secondary.scsa.wa.edu.au/vet/endorsed-programs">SCSA endorsed program guidance and application forms</a></p>` : '';
  main.innerHTML = `${header}<section class="content-panel"><h2>${draft.heading}</h2><p>${draft.lead}</p><ul>${draft.items.map(item => `<li>${item}</li>`).join('')}</ul>${sources}</section>`;
 }
 if(['how-it-will-work','skills-labs','evidence-of-learning'].includes(id))main.insertAdjacentHTML('beforeend',`<section class="content-panel"><h2>Fair access through the learning itself</h2><p><strong>Students do not need a coach, employer or outside placement to have a way forward.</strong> Skills Labs provide structured learning time through reading, answering questions, feedback and simulations. For teamwork, these can explore building relationships, establishing work requirements and allocating tasks.</p><p>This is paired with <strong>active application</strong>, for example a team task at school where students agree roles, complete their contribution and reflect on the result. School-based activity, teacher observation and the work produced can provide evidence without relying on an external verifier.</p><p>Keep learning time, simulated practice and application distinguishable. A time log alone is not evidence of successful skill application, and simply leaving a game open does not count as active learning. The balance of activities and final completion standard still need to be designed and tested.</p><p>The <a href="#portfolio-entry">Career Empire entry form</a>, <a href="#portfolio-view">capability and chronological portfolio</a>, and <a href="#teacher-view">scrollable teacher matrix</a> are the reference pattern to mirror. Written, spoken or supported reflection can retain the same learning questions.</p></section>`);
 if(['how-it-will-work','assessment','scsa-requirements'].includes(id))main.insertAdjacentHTML('beforeend',`<section class="content-panel"><h2>Proposed timing and submission</h2><p>Start in Year 10 and complete at any point through Year 12. The proposed threshold to submit for assessment is <strong>55 logged learning hours</strong>. Successful completion still depends on sufficient evidence of the required learning, not the clock alone.</p><p>The aim is up to four unit equivalents that may contribute towards the WACE C-grade requirement, subject to endorsement and the allocation SCSA grants. <strong>55 hours does not automatically earn four units.</strong> SCSA uses average learning time and scope to determine a program’s equivalence; the scope and progression for additional units remain to be designed.</p><p><a href="https://www.scsa.wa.edu.au/__data/assets/pdf_file/0018/1232028/_WACE-Manual-2026-April.pdf" target="_blank" rel="noopener">SCSA WACE Manual 2026, §§5.8.6–5.8.7</a>: endorsed programs can be completed across Years 10–12; the endorsed-program contribution is capped at four unit equivalents, with no more than two allocated to Year 11 and two to Year 12. This is a cap, not a SkillsQuest allocation.</p></section>`);
 if(id==='pedagogy')main.insertAdjacentHTML('beforeend',`<section class="content-panel" id="keep-it-simple"><h2>Keep the student experience simple</h2><p><strong>The agreed design principle is to help students recognise and explain their strengths, without making the process unnecessarily complicated.</strong> Start with three everyday questions:</p><ol><li>What did you do?</li><li>What skills did you use?</li><li>Where else might those skills be useful, and what do you still need to learn?</li></ol><p>Previous experience is a valuable starting point, even when the next context is different. Help students identify what carries across, what needs adapting and what is new.</p><p><strong>The theory supports the teaching, not the other way around.</strong> Dreyfus’s model and the dimensions of competence can inform activity design, teacher prompts and feedback behind the scenes. Students do not need to use those labels or receive grades against those models as part of this design principle. Any formal completion criteria still need to be developed separately.</p><p>The eight lab themes are a proposal to test, not a compulsory or final framework. Keep, combine or change them according to how well they support learning.</p><p><strong>The practical test:</strong> does this help students recognise and explain their strengths, see where those strengths may be useful and identify a manageable next step?</p></section>`);
 if(id==='how-it-will-work')main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Secure records and school trust</h2><p>How records are protected and maintained is part of the design, not an assumption. See <a href="#secure-records">Secure Records &amp; Privacy</a> for the proposed controls, official guidance and evidence still to prepare.</p></section>');
 if(['how-it-will-work','provider-view'].includes(id))main.insertAdjacentHTML('beforeend',`<section class="content-panel"><h2>Learning record & verification mockup</h2><p>Explore an original SkillsQuest concept: employability skill sections, game-recorded time, external verification and a separate portfolio review. Fictional data only; no records are sent or saved.</p><p><a href="learning-record.html" target="_blank" rel="noopener">Open the interactive mockup in a full window ↗</a></p><iframe src="learning-record.html" title="SkillsQuest learning record and verification mockup" style="width:100%;height:950px;border:1px solid #dce2d5;border-radius:16px" loading="lazy"></iframe></section>`);
 if(id==='skills-choice'){main.insertAdjacentHTML('beforeend',capabilityComparison());main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Research behind these choices</h2><p>The Bill Lucas and Lucy Sattler papers, Rossmoyne research collation, Australian taxonomy and SCSA curriculum references, and comparison slides are grouped in <a href="#research-frameworks">Research &amp; Background → Skills Frameworks</a>.</p></section>');}
 if(id==='research-pathways'){main.insertAdjacentHTML('beforeend',renderTopicExtracts(topicExtracts['research-background']));main.insertAdjacentHTML('beforeend',renderSourceNotes(sourceNotes['research-background']));}
 if(topicExtracts[id]&&id!=='research-background'&&!id.startsWith('scsa'))main.insertAdjacentHTML('beforeend',renderTopicExtracts(topicExtracts[id]));
 if(slideGroups[id]&&!id.startsWith('scsa')) {
  main.insertAdjacentHTML('beforeend','<section class="content-panel"><h2>Extracts from the source slides</h2><div id="source-slides">Loading source slides…</div></section>');
  void loadSourceSlides(document.getElementById('source-slides'), slideGroups[id]);
 }
 if(sourceNotes[id]&&id!=='research-background'&&!id.startsWith('scsa'))main.insertAdjacentHTML('beforeend',renderSourceNotes(sourceNotes[id]));
 if(id==='overview'||id==='skills-choice')main.insertAdjacentHTML('beforeend',"<section class=\"skills-gallery\"><div class=\"section-bar\"><h2>Eight possible paths to explore</h2><span>Working skill choices</span></div><div class=\"skill-tiles\"><a class=\"skill-tile skill-0\" href=\"#skills-choice\"><img src=\"assets/skill-icons/0.svg\" alt=\"\"><span>Communication</span></a><a class=\"skill-tile skill-1\" href=\"#skills-choice\"><img src=\"assets/skill-icons/1.svg\" alt=\"\"><span>Teamwork & collaboration</span></a><a class=\"skill-tile skill-2\" href=\"#skills-choice\"><img src=\"assets/skill-icons/2.svg\" alt=\"\"><span>Critical thinking & problem-solving</span></a><a class=\"skill-tile skill-3\" href=\"#skills-choice\"><img src=\"assets/skill-icons/3.svg\" alt=\"\"><span>Creativity & innovation</span></a><a class=\"skill-tile skill-4\" href=\"#skills-choice\"><img src=\"assets/skill-icons/4.svg\" alt=\"\"><span>Initiative</span></a><a class=\"skill-tile skill-5\" href=\"#skills-choice\"><img src=\"assets/skill-icons/5.svg\" alt=\"\"><span>Self-management & organisation</span></a><a class=\"skill-tile skill-6\" href=\"#skills-choice\"><img src=\"assets/skill-icons/6.svg\" alt=\"\"><span>Adaptability</span></a><a class=\"skill-tile skill-7\" href=\"#skills-choice\"><img src=\"assets/skill-icons/7.svg\" alt=\"\"><span>Learning to learn</span></a></div></section>");
 addReadiness(main,id);
 const idx=pages.indexOf(p);if(!isWorld)main.insertAdjacentHTML('beforeend',`<div class="page-bottom">${idx?`<a href="#${pages[idx-1].id}">← ${pages[idx-1].title}</a>`:''}${idx<pages.length-1?`<a class="next" href="#${pages[idx+1].id}">${pages[idx+1].title} →</a>`:''}</div>`);
 if(focus){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}if(focus){main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'})}if((id==='research-background'||researchThemes[id]) && sourceId){document.getElementById(`source-${sourceId}`)?.scrollIntoView()}
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();document.querySelector('main').focus()});
window.addEventListener('hashchange',()=>{const focus=!groupNavigation;groupNavigation=false;render(focus)});render();



