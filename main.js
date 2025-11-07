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


// const openBtns = document.querySelectorAll(".arrow"); // for all buttons
// const asebutton = document.getElementById("ase-button");
// const hallobutton = document.getElementById("halloween-button")
// const goosiesbutton = document.getElementById("goosies-button")
// const closeBtn = document.getElementById("close-event");
// const asemodal = document.getElementById("career-fair");

// this is for all buttons that has class .arrow pop up
// not sure how to make it work yet since each button should go to a different pop up 
// since this is sharing the same pop up for all events
// openBtns.forEach(btn => { 
//     btn.addEventListener("click", () => {
//         modal.classList.add("open");
//     });
// });

// not maintainable -> next goal: make it less repetitive in case we have n events
// hard to create a js function for each event button
// asebutton.addEventListener("click", () => {
//     asemodal.classList.add("open"); // opens ase career fair modal
// })

// closeBtn.addEventListener("click", () => {
//     asemodal.classList.remove("open"); // closes ase career fair modal when X is clicked
// })

// goosiesbutton.addEventListener("click", () => {
//     modal.classList.add("open");
// })

// hallobutton.addEventListener("click", () => {
//     modal.classList.add("open");
// })

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

// Changed so that if event card is already opened, closing
// it wont close the friends drawer
// closeBtn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     e.currentTarget.closest('.modal')?.classList.remove('open');
// });
// END

// friends code START

const btn = document.getElementById('friends_button');
const panel = document.getElementById('friends_panel');
const close = document.getElementById('friends_close')

btn.addEventListener('click', () => panel.classList.toggle('open'));
close.addEventListener('click', () => panel.classList.remove('open'));

document.addEventListener('click', (e) => {
    // if any event card is open, don't auto-close the friends panel
    if (e.target.closest(`.modal`)) return;

    const clickedInsidePanel = panel.contains(e.target);
    const clickedButton = btn.contains(e.target);

    if (panel.classList.contains('open') && !clickedInsidePanel && !clickedButton)
    {
        panel.classList.remove('open');
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const openModal = document.querySelector('.modal.open');
    
    if (openModal)
        openModal.classList.remove('open');
})

// friends code END