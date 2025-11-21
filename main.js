// Config data for tags, keywords & icons
const eventTags = {
  "ASE Career Fair": ["social","career", "trending", "science"],
  "CSA Halloween Social": ["social", "culture", "Food"],
  "The Goosies": ["social", "science", "culture"],
  "OPUS Study Night": ["science", "trending", "food"],
  "Welcome Day": ["social", "trending","food"],
  "Aurora Walk": ["nature", "trending"],
  "UM Sustainability Annual Nature Walk": ["nature"],
  "UM Budget Meeting": ["finance"],
  "SSA Winter General Meeting": ["science", "social", "food"],
};

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
  popular: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
    stroke-linecap="round" stroke-linejoin="round" class="lucide">
    <path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/>
    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/>
    <path d="M4 18v3"/><path d="M8 14v7"/>
    </svg>
  `,
  new: `
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper-icon lucide-newspaper">
    <path d="M15 18h-5"/>
    <path d="M18 14h-8"/>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"/>
    <rect width="8" height="4" x="10" y="6" rx="1"/></svg>  `,
  nature:`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`,
  trending:`
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up">
    <path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>
    </svg>
  `


};

const monthMap = {
  jan: "january",
  feb: "february",
  mar: "march",
  apr: "april",
  may: "may",
  jun: "june",
  jul: "july",
  aug: "august",
  sep: "september",
  oct: "october",
  nov: "november",
  dec: "december",
};

// Keywords used ONLY for friend search → they expand
// event names into lots of aliases like “Goosies”, “CSSA”, etc.
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
    "fort garry campus",
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
    "vw social club",
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
    "e2 265",
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
    "allen building",
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
    "fort garry campus",
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
    "wallace building",
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
    "st pauls college",
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
    "st pauls college",
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
    "armes building",
  ],
};

// DOM lookups & shared DOM
const search = document.getElementById("search_input");
const filterBtn = document.querySelectorAll(".filter_list li");
const resetBtn = document.getElementById("btn-reset");
const pageTitle = document.querySelector(".section_title");
const eventItems = document.querySelectorAll(".event_item");
const resultsMeta = document.getElementById("events_count");
const eventsEmpty = document.getElementById("events_empty");

// Current active filter chips ("social", "science", etc.)
let activeTags = new Set();

// Helper methods
function lockScroll() {
  document.body.classList.add('modal-open');
  document.documentElement.classList.add('modal-open');
}

function unlockScroll() {
  document.body.classList.remove('modal-open');
  document.documentElement.classList.remove('modal-open');
}

/**
 * Returns true if an event card matches the text query.
 * We search title + description + org + time as one big string.
 */
function matchesSearch(item, searchText) {
  const q = searchText.trim().toLowerCase();
  if (!q) return true;

  const title = item.querySelector("h2")?.textContent.toLowerCase() || "";
  const description =item.querySelector(".event_description")?.textContent.toLowerCase() || "";
  const org =item.querySelector(".organization")?.textContent.toLowerCase() || "";
  const time =item.querySelector(".event_time")?.textContent.toLowerCase() || "";

  const possible = `${title} ${description} ${org} ${time}`;
  return possible.includes(q);
}

/**
 * Returns true if an event card matches at least one
 * of the active tag chips (social/science/etc.).
 */
function matchesTags(item) {
  if (activeTags.size === 0) return true;

  const title = item.querySelector("h2").textContent.trim();
  const tagsForEvent = eventTags[title] || [];

  for (const t of activeTags) {
    if (tagsForEvent.includes(t)) return true;
  }
  return false;
}

function moveSearchBar() {
  const searchBox = document.getElementById("search_container");
  const searchBoxWrapper = document.querySelector("#search_area .search_box");
  const mobileTarget = document.getElementById("search_mobile_target");

  if (!searchBox || !searchBoxWrapper || !mobileTarget) return;

  if (window.innerWidth < 900) {
    if (!mobileTarget.contains(searchBox)) {
      mobileTarget.appendChild(searchBox);
    }
  } else {
    if (!searchBoxWrapper.contains(searchBox)) {
      searchBoxWrapper.appendChild(searchBox);
    }
  }
}

window.addEventListener("resize", moveSearchBar);
window.addEventListener("DOMContentLoaded", moveSearchBar);


// Helper function for filterEvents. Updates the state when there is not event to display
function updateEmptyState(visibleCount, hasSearch, hasTags) {
  if (!eventsEmpty) return;

  if (visibleCount === 0) {
    let message = "";

    if (hasSearch && hasTags) {
      message =
        "No events match your search and filters. Try a different term or clear filters.";
    } else if (hasSearch) {
      message =
        "No events match your search. Try a different term or clear filters.";
    } else if (hasTags) {
      // only filters, no text search
      if (activeTags.size === 1) {
        const tag = [...activeTags][0];
        const label = tag.charAt(0).toUpperCase() + tag.slice(1);
        message = `No ${label} events are currently listed. Try another filter or check back later.`;
      } else {
        message =
          "No events match your selected filters. Try removing one or more filters.";
      }
    } else {
      // no search, no filters, but zero events in the system
      message =
        "No upcoming events are currently listed. Please check back later.";
    }

    eventsEmpty.textContent = message;
    eventsEmpty.hidden = false;
  } else {
    eventsEmpty.hidden = true;
  }
}

/**
 * Core filter function: applies text search + tag filters,
 * then updates the "X events match" and empty state.
 */
function filterEvents(searchText = "") {
  const q = searchText.trim().toLowerCase();
  const hasSearch = q.length > 0;
  const hasTags = activeTags.size > 0;

  let visibleCount = 0;

  eventItems.forEach((item) => {
    const okSearch = matchesSearch(item, q);
    const okTags = matchesTags(item);

    const show = okSearch && okTags;
    item.style.display = show ? "flex" : "none";
    if (show) visibleCount++;
  });

  if (resultsMeta) {
    const word = visibleCount === 1 ? "event" : "events";
    const label =
      hasSearch || hasTags
        ? `${word} match your search & filters`
        : `${word} available`;

    resultsMeta.innerHTML = `
      <span class="results-meta-dot" aria-hidden="true"></span>
      <span class="results-meta-count">${visibleCount}</span>
      <span class="results-meta-label">${label}</span>
    `;
  }

  // empty state handled below…
  updateEmptyState(visibleCount, hasSearch, hasTags);
}

function newEvents(){
  const now= new Date();
  const currentMonth= now.toLocaleString("defualt", {month: "long"}).toLowerCase();

  eventItems.forEach(item =>{
      const timeText = item.querySelector(".event_time")?.textContent.toLowerCase() || "";
      const title = item.querySelector("h2")?.textContent.trim();

      if(!title)
        return;

      if(!eventTags[title])
        eventTags[title]= [];

      const shortMonth= Object.keys(monthMap).find(short =>
        timeText.includes(short)
      );

      if(!shortMonth)
        return;

      const eventMonth = monthMap[shortMonth];

      if(eventMonth == currentMonth){
        if(!eventTags[title].includes("new")){
          eventTags[title].push("new");
        }
      }


  });

}

/**
 * Updates the big page heading based on active tags.
 * - No tags selected → "Popular" with a generic icon.
 * - One or more tags → Show each tag label + its icon.
 */
function updateTrendingTitle() {
  if (activeTags.size === 0) {
    pageTitle.innerHTML = `
        <span class="tag-title-icon">${tagIcons.popular}</span>
        Popular
    `;
    return;
  }

  // Build one chunk of HTML for each active tag
  const htmlChunks = [...activeTags].map((tag) => {
    const icon = tagIcons[tag] || "";
    const capialLetter = tag.charAt(0).toUpperCase();
    const label = capialLetter + tag.slice(1);
    return `<span class="tag-title-icon">${icon}</span> ${label}`;
  });

  // If multiple tags are active, just join them with spaces
  pageTitle.innerHTML = htmlChunks.join(" ");
}

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {
  newEvents();
  updateTrendingTitle(); // sets "Popular" by default
  filterEvents(""); // ensures all events are visible on first load
});

/**
 * Handles clicking a filter chip (Social, Science, Food, etc).
 * - Toggles the tag in `activeTags`
 * - Updates chip styling
 * - Re-runs filtering based on current search text
 */
function filterClick(btn) {
  const tag = btn.dataset.tag;
  if (!tag) return;

  if (activeTags.has(tag)) {
    // Tag is already active → turn it off
    activeTags.delete(tag);
    btn.classList.remove("active-filter");
  } else {
    // Tag is not active → turn it on
    activeTags.add(tag);
    btn.classList.add("active-filter");
  }

  // Update heading and re-filter with current search text
  updateTrendingTitle();
  const query = search.value.trim().toLowerCase();
  filterEvents(query);
}

// Attach click handler to each filter chip
filterBtn.forEach((btn) => {
  btn.addEventListener("click", () => filterClick(btn));
});

// Live search: filter as the user types in the search bar
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  filterEvents(query);
});

// Reset button: clear search + clear all filters
resetBtn.addEventListener("click", () => {
  search.value = "";
  activeTags.clear();
  updateTrendingTitle();
  filterEvents("");

  // Remove the visual active state from all chips
  filterBtn.forEach((b) => b.classList.remove("active-filter"));
});

// -----------------
// Event modal logic
// -----------------

// Handle "Register / Unregister" button inside each event modal
document.querySelectorAll(".Register").forEach((button) => {
  button.addEventListener("click", function (e) {
    const modal = button.closest(".modal");
    const countSpan = modal.querySelector(".participants");
    let text = countSpan.textContent.trim();

    if (this.classList.contains("unregister")) {
      //if unregister button
      this.classList.remove("unregister");
      this.textContent = "Register"; // change it back to register if clicked
      e.preventDefault(); // dont go to the ics file linked
      if (!text.includes("No participants yet")) {
        // if there are no participants
        let current = parseInt(text);
        current = Math.max(0, current - 1); // subtract 1 from current number. dont allow negative num
        countSpan.textContent =
          current === 0 // if 0 participants
            ? "No participants yet" // change text to no participants
            : current === 1
            ? "1 participant" // if only 1 participant left
            : `${current} participants`; // multiple participants left
      }
    } else {
      // if register button
      this.classList.add("unregister");
      this.textContent = "Unregister"; // make it an unregister button
      if (text.includes("No participants yet")) {
        countSpan.textContent = "1 participant"; // if there were no participants and u registered change it to 1
        return;
      }
      let current = parseInt(text);
      let updated = current + 1; // if there are participants increment
      countSpan.textContent =
        updated === 1
          ? "1 participant" // if only 1 participant
          : `${updated} participants`; // if multiple
    }
  });
});

/* Allow the user to flip through the images */
const carousels = document.querySelectorAll(".carousel-images");

carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll("img"); // list of images
  let currentIndex = 0; // first image

  const showImage = (index) => {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index); // loop until we find ith msg, toggles the ith image to be active
    });
  };

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // if previous button is clicked the index subtracts 1 and mod length so it loops back
    showImage(currentIndex); // make that image active
  });

  document.querySelector(".next").addEventListener("click", () => {
    // if next buttom is clicked the index adds 1
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});

document.addEventListener('click', (e) => {
  const modal = e.target.closest('.modal');
  if (!modal) return; // if anything else is clicked other than the modal do nothing

  const inside = e.target.closest('.modal-inner'); // if the pop up is clicked do nothing
  if (inside) return;

  modal.classList.remove('open'); // exit out
  unlockScroll(); // turn the scrolling back on for the home page
});

/* Check if the user clicked X. If they did, close the modal and allow scrolling for the home page.*/
document.addEventListener('click', (e) => {
  const closeButton = e.target.closest('#close-event'); // check if the clicked event is a close button
  if (!closeButton) return; // if not get out

  e.stopPropagation(); // prevent affecting parent elements (bubble)
  e.preventDefault();

  const modal = closeButton.closest('.modal');
  if (modal) {
    modal.classList.remove('open');
    unlockScroll();
  }
});

// Both arrows under Trending page and in friends pop-up will open the same event description card START
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.arrow[data-target]');
    if (!btn) return;

    const sel = (btn.dataset.target || '').trim();
    if (!sel) return;
    const modal = document.querySelector(sel);
    if (modal) {
        modal.classList.add('open');
        lockScroll();
    }
});

// Make entire event cards open the same modal as their arrow
document.querySelectorAll('.event_item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.closest('.arrow')) return;

        const arrow = item.querySelector('.arrow[data-target]');
        if (!arrow) return;

        const sel = (arrow.dataset.target || '').trim();
        if (!sel) return;

        const modal = document.querySelector(sel);
        if (modal) {
            modal.classList.add('open');
            lockScroll();
        }
    });
});

// --------------
// Friends drawer
// --------------

const btn = document.getElementById("friends_button");
const panel = document.getElementById("friends_panel");
const close = document.getElementById("friends_close");

// Toggle drawer open/close via button in top-right
btn.addEventListener("click", () => {
  panel.classList.toggle("open");
  document.body.classList.toggle(
    "drawer-open",
    panel.classList.contains("open")
  );

  // Autofocus the "friend search" field when opening
  if (panel.classList.contains("open")) {
    const searchField = document.getElementById("friend_search");
    if (searchField) searchField.focus();
  }
});

// Close drawer via the X button
close.addEventListener("click", () => {
  panel.classList.remove("open");
  document.body.classList.remove("drawer-open");
});

// Click outside the drawer (but not on a modal) → close drawer)
document.addEventListener("click", (e) => {
  if (e.target.closest(`.modal`)) return; // don't close drawer if a modal is open/on top

  const clickedInsidePanel = panel.contains(e.target);
  const clickedButton = btn.contains(e.target);

  if (
    panel.classList.contains("open") &&
    !clickedInsidePanel &&
    !clickedButton
  ) {
    panel.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }
});

// Escape key closes either an open modal or the drawer (or both)
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const openModal = document.querySelector(".modal.open");

  if (openModal) openModal.classList.remove("open");

  if (panel.classList.contains("open")) {
    panel.classList.remove("open");
    document.body.classList.remove("drawer-open");
  }
});

// -------------------------
// Help button on Popular page
// -------------------------
const helpBtn = document.getElementById("help_button");
const helpPanel = document.getElementById("help_panel");

if (helpBtn && helpPanel) {
  helpBtn.addEventListener("click", () => {
    const isHidden = helpPanel.hasAttribute("hidden");

    // toggle [hidden] attribute on the help panel
    if (isHidden) {
      helpPanel.removeAttribute("hidden");
    } else {
      helpPanel.setAttribute("hidden", "");
    }

    // keep aria-expanded in sync for accessibility
    helpBtn.setAttribute("aria-expanded", String(isHidden));
  });
}

// ---------------
// Friends search
// ---------------
const friendsSearch = document.getElementById("friend_search");
const friendsCards = document.querySelectorAll(".friends-feed .friend-card");

// Clicking a friend-event row also opens the related event modal
document.querySelectorAll(".friend-event").forEach((row) => {
  row.addEventListener("click", (e) => {
    // if they clicked the arrow explicitly, arrow handler will handle it
    if (e.target.closest(".arrow")) return;

    const arrow = row.querySelector(".arrow[data-target]");
    if (!arrow) return;

    const sel = (arrow.dataset.target || "").trim();
    if (!sel) return;

    const modal = document.querySelector(sel);
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  });
});

// Small normalizer for strings: lowercase, trimmed, handles null/undefined
function norm(s) {
  return (s || "").toLowerCase().trim();
}

/**
 * Checks whether a haystack string contains ALL individual terms
 * from the query (space-separated).
 */
function matchesAllTerms(haystack, query) {
  const q = norm(query);
  if (!q) return true; // empty query = match everything

  const terms = q.split(/\s+/).filter(Boolean);
  if (!terms.length) return true;

  return terms.every((t) => haystack.includes(t));
}

/**
 * Builds a big searchable text blob for a friend card:
 *   - date (both "Oct 30" and "October 30")
 *   - friend name
 *   - event titles
 *   - keyword aliases for the events (from eventKeywords)
 */
function getCardSearchText(card) {
  const dateRaw = card.querySelector(".friend-meta .date")?.textContent || "";
  const friend = card.querySelector(".friend-meta .user")?.textContent || "";

  // Collect all event titles on this card
  const eventNodes = card.querySelectorAll(".friend-event .event-title");
  const events = Array.from(eventNodes).map((n) => n.textContent.trim());
  const eventsText = events.join(" ");

  // Expland dates eg. "Oct 30" -> "October 30"
  let dateExpanded = dateRaw;
  const monthAbbr = dateRaw.split(/\s+/)[0]?.toLowerCase();
  const monthFull = monthMap[monthAbbr];
  if (monthFull) {
    dateExpanded += " " + monthFull;
  }

  // Add keyword aliases for each event
  const keywordBag = [];
  events.forEach((title) => {
    const extras = eventKeywords[title] || [];
    keywordBag.push(...extras);
  });

  return norm(
    `${dateExpanded} ${friend} ${eventsText} ${keywordBag.join(" ")}`
  );
}

/**
 * Filter the friend cards based on the search box in the drawer.
 * Supports name, date text, event names, and keyword aliases.
 */
function filterFriends(q) {
  const emptyState = document.getElementById("friends_empty");
  let visibleCount = 0;

  friendsCards.forEach((card) => {
    const haystack = getCardSearchText(card);
    const matches = matchesAllTerms(haystack, q);

    card.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  if (emptyState) {
    // Show empty state only when there are no visible cards
    emptyState.hidden = visibleCount !== 0;
  }
}

// live filter
if (friendsSearch) {
  friendsSearch.addEventListener("input", (e) => filterFriends(e.target.value));
}

// This computes the scrollbar width and stores it in a CSS variable (--sbw)
// so the drawer's content doesn't "jump" when the scrollbar appears.
(function setScrollbarVar() {
  function calc() {
    const t = document.createElement("div");
    t.style.cssText =
      "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild(t);
    const sbw = t.offsetWidth - t.clientWidth; // scrollbar width in px
    document.documentElement.style.setProperty("--sbw", sbw + "px");
    document.body.removeChild(t);
  }
  calc();
  window.addEventListener("resize", calc);
})();

// friends search END

// ---------------
// Add friends
// ---------------

document.addEventListener("DOMContentLoaded", () => {
  const addFriendSearchInput = document.getElementById("add_friend_search");
  const suggestionItems = document.querySelectorAll(".add-friends-list li");
  const emptyState = document.getElementById("add_friends_empty");

  if (!addFriendSearchInput) return;

  // Simple name-based filter for the "Add Friends" suggestion list
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
