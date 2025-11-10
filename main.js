//event stuff

//elements
const search= document.getElementById("search_input");
const filterBtn= document.querySelectorAll(".filter_list li");
const resetBtn=document.getElementById("btn-reset");
const pageTitle= document.querySelector(".section_title");
const eventItems=document.querySelectorAll(".event_item");

//FOR NOW PLEASE PUT THE NAMES AND TAGS OF EVENTS HERE
const eventTags = {
  "ASE Career Fair": ["career", "networking", "science"],
  "CSA Halloween Social": ["social", "culture"],
  "The Goosies": ["social", "science", "culture"]
};

//ADD NEW TAGS AND EMOJIS HERE (CAN CHANGE IT TO ACTUAL PHOTOS LATER)
const catTags= ["social","science","research","food","culture","arts"];
const emojiMap = {
    social:"🎉",
    science:"🔬",
    research:"📚",
    food:"🍔",
    culture:"🏛️",
    arts:"🎭"
};

//for multie select of tags
let activeTags= new Set();

//actaul filter logic for tags still need to work on search
function filter(search= ""){
    eventItems.forEach(item => {
        const title= item.querySelector('h2').textContent.trim();
        const tags= eventTags[title] || []

        let matchT = false;

        if(activeTags.size==0){
          matchT=true;
        }
        else{
          for(const i of activeTags){
            if(tags.includes(i)){
              matchT=true;
              break;
            }
          }
        }   
        let matchS= false;

        if(!search){
          matchS=true;
        }
        else if(title.toLowerCase().includes(search)) {
          matchS= true;
        }

        if (matchS && matchT) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }


    });
}

//updates the title, for now just adds if multiple are selected
function updateTrendingTitle(tag) {
  if (activeTags.size===0) {
    pageTitle.textContent= "📈 Trending";
    return;
  }
  

  const titles = [];

  for(const tag of activeTags){
    const emoji =emojiMap[tag] || "";
    const captialized= tag.charAt(0).toUpperCase() + tag.slice(1);
    const title =`${emoji} ${captialized}`;
    titles.push(title);
  }

  pageTitle.textContent= titles.join(" ");
}

//logic for pressing the filter buttons
function filterClick(btn){
    const tag= btn.dataset.tag;

    if(activeTags.has(tag)){
        activeTags.delete(tag);
        btn.classList.remove("active-filter")
    }else{
        activeTags.add(tag);
        btn.classList.add("active-filter");
    }


    updateTrendingTitle();
    const query= search.value.trim().toLowerCase();
    filter(query);
}

//btn press 
filterBtn.forEach(btn => {
    btn.addEventListener("click", ()=> filterClick(btn));
});
//search bar
search.addEventListener('input', function() {
    const query= search.value.trim().toLowerCase();
    filter(query);
})
//wipe on reset
resetBtn.addEventListener('click', 
  function() {
    search.value = "";
    activeTags.clear();
    updateTrendingTitle(null);
    filter("");
    filterBtn.forEach(b => b.classList.remove("active-filter"));
});

document.querySelectorAll(".Register").forEach(button => {
  button.addEventListener("click", function() {
    this.classList.add("disabled");
    this.textContent = "Registered";
  });
});

document.querySelectorAll(".interests").forEach(button => {
  button.addEventListener("click", function() {
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
    }
});

// Both arrows under Trending page and in friends pop-up will open the same event description card START
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.arrow[data-target]');
  if (!btn) return;

  const sel = btn.dataset.target;
  const modal = document.querySelector(sel);
  if (modal) modal.classList.add('open');
});

// friends code START

const btn = document.getElementById('friends_button');
const panel = document.getElementById('friends_panel');
const close = document.getElementById('friends_close')

// open/close via button
btn.addEventListener('click', () => {
  panel.classList.toggle('open');
  document.body.classList.toggle('drawer-open', panel.classList.contains('open'));
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

    if (panel.classList.contains('open') && !clickedInsidePanel && !clickedButton)
    {
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

// friends code END