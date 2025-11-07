
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
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.closest('.modal')?.classList.remove('open');
});
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