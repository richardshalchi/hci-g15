const eventTags = {
  "ASE Career Fair": ["career", "networking", "science"],
  "CSA Halloween Social": ["social", "culture"],
  "The Goosies": ["social", "science", "culture"],
  "OPUS Study Night": ["science"],
  "Welcome Day": ["social", "culture"],
  "Aurora Walk": ["science", "culture"],
  "UM Sustainability Annual Nature Walk": ["Nature", "culture"],
  "UM Budget Meeting": ["culture", "finance"],
  "SSA Winter General Meeting": ["science", "social", "food"]
};

const catTags = ["social", "science", "research", "food", "culture", "arts" ,"finance"];


const tagIcons = {
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


const monthMap = {
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

const eventKeywords = {
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


//elements
const search = document.getElementById("search_input");
const filterBtn = document.querySelectorAll(".filter_list li");
const resetBtn = document.getElementById("btn-reset");
const pageTitle = document.querySelector(".section_title");
const eventItems = document.querySelectorAll(".event_item");

//active tag
let activeTags = new Set();

function matchesSearch(item, searchText) {
  const q = searchText.trim().toLowerCase();
  if (!q)  
    return true;

  const title= item.querySelector("h2")?.textContent.toLowerCase() || "";
  const description= item.querySelector(".event_description")?.textContent.toLowerCase() || "";
  const org= item.querySelector(".organization")?.textContent.toLowerCase() || "";
  const time=item.querySelector(".event_time")?.textContent.toLowerCase() || "";

  const possible = `${title} ${description} ${org} ${time}`;
  return possible.includes(q);
}


function matchesTags(item) {
  if (activeTags.size===0) 
    return true;

  const title= item.querySelector("h2").textContent.trim();
  const tagsForEvent= eventTags[title] || [];

  for (const t of activeTags) {
    if (tagsForEvent.includes(t)) return true;
  }
  return false;
}


function filterEvents(searchText = "") {
  eventItems.forEach(item => {
    const okSearch = matchesSearch(item, searchText);
    const okTags = matchesTags(item);

    if (okSearch && okTags) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}


function updateTrendingTitle() {
if (activeTags.size === 0) {
    pageTitle.innerHTML = `
        <span class="tag-title-icon">${tagIcons.popular}</span>
        Popular
    `;
    return;
}
    const htmlChunks= [...activeTags].map(tag => {
    const icon= tagIcons[tag] || "";
    const capialLetter= tag.charAt(0).toUpperCase();
    const label= capialLetter + tag.slice(1);
    return `<span class="tag-title-icon">${icon}</span> ${label}`;
  });

  pageTitle.innerHTML = htmlChunks.join(" "); 
}


function filterClick(btn) {
  const tag = btn.dataset.tag;
  if (!tag) return;

  if (activeTags.has(tag)) {
    activeTags.delete(tag);
    btn.classList.remove("active-filter");
  } else {
    activeTags.add(tag);
    btn.classList.add("active-filter");
  }

  updateTrendingTitle();
  const query = search.value.trim().toLowerCase();
  filterEvents(query);
}



// filter chip clicks
filterBtn.forEach(btn => {
  btn.addEventListener("click", () => filterClick(btn));
});

// search bar input
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  filterEvents(query);
});

// reset button
resetBtn.addEventListener("click", () => {
  search.value = "";
  activeTags.clear();
  updateTrendingTitle();
  filterEvents("");

  filterBtn.forEach(b => b.classList.remove("active-filter"));
});



// event modals
document.querySelectorAll(".Register").forEach(button => {
  button.addEventListener("click", function(e) {
    const modal = button.closest(".modal");
    const countSpan = modal.querySelector(".participants");
    let text = countSpan.textContent.trim();

    if(this.classList.contains("unregister")){ //if unregister button
      this.classList.remove("unregister");
      this.textContent = "Register"; // change it back to register if clicked
      e.preventDefault(); // dont go to the ics file linked
      if (!text.includes("No participants yet")) { // if there are no participants
        let current = parseInt(text);
        current = Math.max(0, current - 1); // subtract 1 from current number. dont allow negative num
        countSpan.textContent = current === 0  // if 0 participants
          ? "No participants yet"  // change text to no participants
          : current === 1 
            ? "1 participant" // if only 1 participant left
            : `${current} participants`; // multiple participants left
      }
    } else { // if register button
      this.classList.add("unregister");
      this.textContent = "Unregister"; // make it an unregister button
      if (text.includes("No participants yet")) {
        countSpan.textContent = "1 participant"; // if there were no participants and u registered change it to 1
        return;
      }
      let current = parseInt(text);
      let updated = current + 1; // if there are participants increment
      countSpan.textContent = updated === 1 
        ? "1 participant"  // if only 1 participant
        : `${updated} participants`; // if multiple
    }
  });
});

// exit out of modal if outside is clicked
document.addEventListener('click', (e) => {
  const modal = e.target.closest('.modal');
  if (!modal) return;

  const inside = e.target.closest('.modal-inner');
  if (inside) return;

  modal.classList.remove('open');
  document.body.style.overflow = 'auto';
});


document.querySelectorAll(".interests").forEach(button => {
  button.addEventListener("click", function () {
    this.classList.add("disabled");
    this.textContent = "Added to Interests";
  });
});

document.addEventListener('click', (e) => {
  const closeButton = e.target.closest('#close-event'); // check if the clicked event is a close button
  if (!closeButton) return; // if not get out

  e.stopPropagation(); // prevent affecting parent elements (bubble)
  e.preventDefault();

  const modal = closeButton.closest('.modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
});

// Both arrows under Trending page and in friends pop-up will open the same event description card START
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.arrow[data-target]');
  if (!btn) return;

  const sel = (btn.dataset.target || '').trim();
  if (!sel) return;
  const modal = document.querySelector(sel);
  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

// Make entire event cards open the same modal as their arrow
document.querySelectorAll('.event_item').forEach(item => {
  item.addEventListener('click', (e) => {
    // if they actually clicked the arrow, let the arrow handler deal with it
    if (e.target.closest('.arrow')) return;

    const arrow = item.querySelector('.arrow[data-target]');
    if (!arrow) return;

    const sel = (arrow.dataset.target || '').trim();
    if (!sel) return;

    const modal = document.querySelector(sel);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Fresh reload will show no of friends as well
document.addEventListener("DOMContentLoaded", () => {
  filter("");
  updateTrendingTitle();
});

// friends code START

const btn = document.getElementById('friends_button');
const panel = document.getElementById('friends_panel');
const close = document.getElementById('friends_close')

// open/close via button
btn.addEventListener('click', () => {
  panel.classList.toggle('open');
  document.body.classList.toggle('drawer-open', panel.classList.contains('open'));

  if (panel.classList.contains('open')) {
    const searchField = document.getElementById('friend_search');
    if (searchField) searchField.focus();
  }
});

// close via X
close.addEventListener('click', () => {
  panel.classList.remove('open');
  document.body.classList.remove('drawer-open');
});

// click outside to close (but not if an event modal is open)
document.addEventListener('click', (e) => {
  if (e.target.closest(`.modal`)) return;

  const clickedInsidePanel = panel.contains(e.target);
  const clickedButton = btn.contains(e.target);

  if (panel.classList.contains('open') && !clickedInsidePanel && !clickedButton) {
    panel.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const openModal = document.querySelector('.modal.open');

  if (openModal)
    openModal.classList.remove('open');

  if (panel.classList.contains('open')) {
    panel.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }
})

// help button on Popular page
const helpBtn = document.getElementById('help_button');
const helpPanel = document.getElementById('help_panel');

if (helpBtn && helpPanel) {
  helpBtn.addEventListener('click', () => {
    const isHidden = helpPanel.hasAttribute('hidden');

    if (isHidden) {
      helpPanel.removeAttribute('hidden');
    } else {
      helpPanel.setAttribute('hidden', '');
    }

    helpBtn.setAttribute('aria-expanded', String(isHidden));
  });
}

// friends search START
const friendsSearch = document.getElementById('friend_search');
const friendsCards = document.querySelectorAll('.friends-feed .friend-card');

// Make each friend-event row open its event modal when clicked
document.querySelectorAll('.friend-event').forEach(row => {
  row.addEventListener('click', (e) => {
    // don't double-handle the arrow itself
    if (e.target.closest('.arrow')) return;

    const arrow = row.querySelector('.arrow[data-target]');
    if (!arrow) return;

    const sel = (arrow.dataset.target || '').trim();
    if (!sel) return;

    const modal = document.querySelector(sel);
    if (modal) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });
});


function norm(s) {
  return (s || '').toLowerCase().trim();
}

function matchesAllTerms(haystack, query) {
  const q = norm(query);
  if (!q) return true; // empty query = match everything

  const terms = q.split(/\s+/).filter(Boolean);
  if (!terms.length) return true;

  return terms.every(t => haystack.includes(t));
}

// build the searchable text for ONE card
function getCardSearchText(card) {
  const dateRaw = card.querySelector('.friend-meta .date')?.textContent || '';
  const friend = card.querySelector('.friend-meta .user')?.textContent || '';

  // get all events
  const eventNodes = card.querySelectorAll('.friend-event .event-title');
  const events = Array.from(eventNodes).map(n => n.textContent.trim());
  const eventsText = events.join(' ');

  // Expland dates eg. "Oct 30" -> "October 30"
  let dateExpanded = dateRaw;
  const monthAbbr = dateRaw.split(/\s+/)[0]?.toLowerCase();
  const monthFull = monthMap[monthAbbr];
  if (monthFull) {
    dateExpanded += ' ' + monthFull;
  }

  // Add keyword aliases for each event
  const keywordBag = [];
  events.forEach(title => {
    const extras = eventKeywords[title] || [];
    keywordBag.push(...extras);
  });

  return norm(
    `${dateExpanded} ${friend} ${eventsText} ${keywordBag.join(' ')}`
  );
}

function filterFriends(q) {
  const emptyState = document.getElementById('friends_empty');
  let visibleCount = 0;

  friendsCards.forEach(card => {
    const haystack = getCardSearchText(card);
    const matches = matchesAllTerms(haystack, q);

    card.style.display = matches ? '' : 'none';
    if (matches) visibleCount++;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
}

// live filter
if (friendsSearch) {
  friendsSearch.addEventListener('input', (e) => filterFriends(e.target.value));
}

// This is make the scroll bar fix within the My Friends window
(function setScrollbarVar() {
  function calc() {
    const t = document.createElement('div');
    t.style.cssText = 'width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;';
    document.body.appendChild(t);
    const sbw = t.offsetWidth - t.clientWidth;     // scrollbar width in px
    document.documentElement.style.setProperty('--sbw', sbw + 'px');
    document.body.removeChild(t);
  }
  calc();
  window.addEventListener('resize', calc);
})();

// friends search END

// add friends START

document.addEventListener("DOMContentLoaded", () => {
  const addFriendSearchInput = document.getElementById("add_friend_search");
  const suggestionItems = document.querySelectorAll(".add-friends-list li");
  const emptyState = document.getElementById("add_friends_empty");

  if (!addFriendSearchInput) return;

  addFriendSearchInput.addEventListener("input", () => {
    const query = addFriendSearchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    suggestionItems.forEach((li) => {
      // Grab the visible name text inside the suggestion card
      const name = li
        .querySelector(".friend-meta .user")
        .textContent.toLowerCase();

      const match = !query || name.includes(query);
      li.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    if (emptyState) {
      // Show only when user typed something AND no suggestions match
      emptyState.hidden = !(query && visibleCount === 0);
    }
  });
});

// add friends END

// friends code END

window.addEventListener("DOMContentLoaded", () => {
    updateTrendingTitle();
});