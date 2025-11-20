import { eventTags, catTags, tagIcons, monthMap, eventKeywords } from "./search_event_details.js";

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