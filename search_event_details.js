export const eventTags = {
  "ASE Career Fair": ["career", "networking", "science"],
  "CSA Halloween Social": ["social", "culture"],
  "The Goosies": ["social", "science", "culture"],
  "OPUS Study Night": ["science"],
  "Welcome Day": ["social", "culture"],
  "Aurora Walk": ["science", "culture"],
  "UM Sustainability Annual Nature Walk": ["science", "culture"],
  "UM Budget Meeting": ["culture"],
  "SSA Winter General Meeting": ["science", "social"]
};

export const catTags = ["social", "science", "research", "food", "culture", "arts"];


export const tagIcons = {
  social: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M5.8 11.3 2 22l10.7-3.79"/>
      <path d="M4 3h.01"/><path d="M22 8h.01"/>
      <path d="M15 2h.01"/><path d="M22 20h.01"/>
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/>
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/>
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/>
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>
    </svg>
  `,
  science: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M6 18h8"/><path d="M3 22h18"/>
      <path d="M14 22a7 7 0 1 0 0-14h-1"/>
      <path d="M9 14h2"/>
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/>
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
    </svg>
  `,
  research: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M12 7v14"/><path d="M16 12h2"/><path d="M16 8h2"/>
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
      <path d="M6 12h2"/><path d="M6 8h2"/>
    </svg>
  `,
  food: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25"/>
      <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2"/>
      <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0"/>
      <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"/>
    </svg>
  `,
  culture: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M10 18v-7"/>
      <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/>
      <path d="M14 18v-7"/>
      <path d="M18 18v-7"/>
      <path d="M3 22h18"/>
      <path d="M6 18v-7"/>
    </svg>
  `,
  arts: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
      <path d="M10 11h.01"/><path d="M14 6h.01"/>
      <path d="M18 6h.01"/><path d="M6.5 13.1h.01"/>
      <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"/>
      <path d="M17.4 9.9c-.8.8-2 .8-2.8 0"/>
      <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"/>
      <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"/>
    </svg>
  `,
  popular:`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
  stroke-linecap="round" stroke-linejoin="round" class="lucide">
  <path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/>
  <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/>
  <path d="M4 18v3"/><path d="M8 14v7"/>
  </svg>
  `,
  new:`
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper">
  <path d="M15 18h-5"/>
  <path d="M18 14h-8"/>
  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/>
  <rect width="8" height="4" x="10" y="6" rx="1"/></svg>  `
    
};


export const monthMap = {
  jan: 'january',
  feb: 'february',
  mar: 'march',
  apr: 'april',
  may: 'may',
  jun: 'june',
  jul: 'july',
  aug: 'august',
  sep: 'september',
  oct: 'october',
  nov: 'november',
  dec: 'december',
};

export const eventKeywords = {
  "ASE Career Fair": [
    "ase",
    "ase career fair",
    "career fair",
    "career",
    "jobs",
    "job fair",
    "recruiters",
    "networking",
    "fair",
    "science",
    "career services",
    "university of manitoba",
    "u of m",
    "um",
    "115 university centre",
    "university centre",
    "university center",
    "fort garry campus"
  ],

  "CSA Halloween Social": [
    "csa",
    "csa halloween social",
    "halloween social",
    "halloween",
    "social",
    "party",
    "costume",
    "nightlife",
    "commerce students association",
    "commerce students' association",
    "csa commerce",
    "business",
    "vws social club",
    "vws",
    "vw social club"
  ],

  "The Goosies": [
    "the goosies",
    "goosies",
    "goose awards",
    "award show",
    "awards",
    "teaching awards",
    "faculty awards",
    "computer science students association",
    "computer science students' association",
    "cssa",
    "computer science",
    "cs",
    "department of computer science",
    "eitc",
    "eitc e2",
    "eitc e2-265",
    "e2-265",
    "e2 265"
  ],

  "OPUS Study Night": [
    "opus",
    "opus study night",
    "study night",
    "physics",
    "astronomy",
    "phys",
    "astr",
    "organization of physics undergraduate students",
    "opus um",
    "211 allen",
    "allen",
    "allen building"
  ],

  "Welcome Day": [
    "welcome day",
    "welcome",
    "orientation",
    "frosh",
    "new student orientation",
    "first year",
    "winter intake",
    "winter 2026 intake",
    "bisons",
    "horns up",
    "university of manitoba",
    "u of m",
    "um",
    "fort garry",
    "fort garry campus"
  ],

  "Aurora Walk": [
    "aurora walk",
    "aurora",
    "northern lights",
    "night walk",
    "outdoor event",
    "earth sciences",
    "environmental",
    "environment",
    "geology",
    "riddell faculty",
    "clayton h riddell",
    "clayton h. riddell faculty",
    "society of earth sciences and environmental students",
    "sees",
    "212 wallace",
    "wallace",
    "wallace building"
  ],

  "UM Sustainability Annual Nature Walk": [
    "um sustainability annual nature walk",
    "annual nature walk",
    "nature walk",
    "campus walk",
    "guided walk",
    "outdoor event",
    "sustainability",
    "um sustainability",
    "office of sustainability",
    "environment",
    "climate",
    "green",
    "flora",
    "fauna",
    "wildlife",
    "university of manitoba office of sustainability",
    "university of manitoba",
    "u of m",
    "um",
    "100 st. paul's college",
    "100 st pauls college",
    "st. paul's college",
    "st pauls college"
  ],

  "UM Budget Meeting": [
    "um budget meeting",
    "budget meeting",
    "budget town hall",
    "town hall",
    "budget",
    "finance",
    "financial",
    "university budget",
    "planning",
    "university of manitoba",
    "u of m",
    "um",
    "100 st. paul's college",
    "100 st pauls college",
    "st. paul's college",
    "st pauls college"
  ],

  "SSA Winter General Meeting": [
    "ssa winter general meeting",
    "winter general meeting",
    "general meeting",
    "annual general meeting",
    "science",
    "science students",
    "free food",
    "science students association",
    "science students' association",
    "ssa",
    "science lounge in armes",
    "science lounge",
    "armes",
    "armes building"
  ]
};
