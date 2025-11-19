//event stuff

//elements
const search = document.getElementById("search_input");
const filterBtn = document.querySelectorAll(".filter_list li");
const resetBtn = document.getElementById("btn-reset");
const pageTitle = document.querySelector(".section_title");
const eventItems = document.querySelectorAll(".event_item");

//FOR NOW PLEASE PUT THE NAMES AND TAGS OF EVENTS HERE
const eventTags = {
  "ASE Career Fair": ["career", "networking", "science"],
  "CSA Halloween Social": ["social", "culture", "food"],
  "The Goosies": ["social", "science", "culture"],
  "OPUS Study Night": ["science", "food"],
  "Welcome Day": ["social", "trending", "food"],
  "Aurora Walk": ["nature", "trending"],
  "UM Sustainability Annual Nature Walk": ["nature"],
  "UM Budget Meeting": ["finance"],
  "SSA Winter General Meeting": ["science", "social", "food"]

};

//ADD NEW TAGS AND EMOJIS HERE (CAN CHANGE IT TO ACTUAL PHOTOS LATER)
const catTags = ["social", "science", "research", "food", "culture", "arts"];
const emojiMap = {
  social: "🎉",
  science: "🔬",
  research: "📚",
  food: "🍔",
  culture: "🏛️",
  arts: "🎭"
};

//for multie select of tags
let activeTags = new Set();

// Build a searchable string for an event card (title + desc + org + time + keyword aliases)
function getEventSearchText(item) {
  const title = item.querySelector('h2')?.textContent.trim() || '';
  const description = item.querySelector('.event_description')?.textContent || '';
  const org = item.querySelector('.organization')?.textContent || '';
  const time = item.querySelector('.event_time')?.textContent || '';

  // category tags like ["science", "food", ...]
  const catTagsForEvent = eventTags[title] || [];

  // extra keyword aliases from the same eventKeywords object used by My Friends
  const extraKeywords = eventKeywords[title] || [];

  // norm() is the same helper you already use in the friends search
  return norm(
    `${title} ${description} ${org} ${time} ${catTagsForEvent.join(' ')} ${extraKeywords.join(' ')}`
  );
}

//actaul filter logic for tags still need to work on search
function filter(searchText = "") {
  let visibleCount = 0;

  eventItems.forEach(item => {
    const title = item.querySelector('h2').textContent.trim();
    const tags = eventTags[title] || [];

    // --- TAG FILTER (unchanged) ---
    let matchT = false;
    if (activeTags.size === 0) {
      matchT = true;
    } else {
      for (const t of activeTags) {
        if (tags.includes(t)) {
          matchT = true;
          break;
        }
      }
    }

    // --- SEARCH FILTER (shared logic) ---
    const haystack = getEventSearchText(item);
    const matchS = matchesAllTerms(haystack, searchText);

    if (matchS && matchT) {
      item.style.display = "flex";
      visibleCount++;
    } else {
      item.style.display = "none";
    }
  });

  // show/hide the "no events" message
  const emptyState = document.getElementById('events_empty');
  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }

  const countEl = document.getElementById('events_count');
  if (countEl) {
    if (visibleCount === 0) {
      countEl.textContent = "";
    } else if (visibleCount === 1) {
      countEl.textContent = "Showing 1 event";
    } else {
      countEl.textContent = `Showing ${visibleCount} events`;
    }
  }
}

//updates the title, for now just adds if multiple are selected
function updateTrendingTitle(tag) {
  if (activeTags.size === 0) {
    pageTitle.textContent = "📈 Popular";
    return;
  }


  const titles = [];

  for (const tag of activeTags) {
    const emoji = emojiMap[tag] || "";
    const captialized = tag.charAt(0).toUpperCase() + tag.slice(1);
    const title = `${emoji} ${captialized}`;
    titles.push(title);
  }

  pageTitle.textContent = titles.join(" ");
}

//logic for pressing the filter buttons
function filterClick(btn) {
  const tag = btn.dataset.tag;

  if (activeTags.has(tag)) {
    activeTags.delete(tag);
    btn.classList.remove("active-filter")
  } else {
    activeTags.add(tag);
    btn.classList.add("active-filter");
  }


  updateTrendingTitle();
  const query = search.value.trim().toLowerCase();
  filter(query);
}

//btn press 
filterBtn.forEach(btn => {
  btn.addEventListener("click", () => filterClick(btn));
});
//search bar
search.addEventListener('input', function () {
  filter(this.value);
})
//wipe on reset
resetBtn.addEventListener('click',
  function () {
    search.value = "";
    activeTags.clear();
    updateTrendingTitle(null);
    filter("");
    filterBtn.forEach(b => b.classList.remove("active-filter"));
  });


// event modals
document.querySelectorAll(".Register").forEach(button => {
  button.addEventListener("click", function () {
    this.classList.add("disabled");
    this.textContent = "Registered";
  });
});

document.querySelectorAll(".modal").forEach(modal => { // participant count + 1 if register is pressed
    const btn = modal.querySelector(".Register");
    const countSpan = modal.querySelector("span[id$='count']");

    btn.addEventListener("click", () => {
        let current = parseInt(countSpan.textContent);
        countSpan.textContent = current + 1;
    });
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

// map short month → long month
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