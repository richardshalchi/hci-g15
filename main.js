
// const openBtns = document.querySelectorAll(".arrow"); // for all buttons
const asebutton = document.getElementById("ase-button");
const hallobutton = document.getElementById("halloween-button")
const goosiesbutton = document.getElementById("goosies-button")
const closeBtn = document.getElementById("close-event");
const asemodal = document.getElementById("career-fair");

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
asebutton.addEventListener("click", () => {
    asemodal.classList.add("open"); // opens ase career fair modal
})

closeBtn.addEventListener("click", () => {
    asemodal.classList.remove("open"); // closes ase career fair modal when X is clicked
})

goosiesbutton.addEventListener("click", () => {
    modal.classList.add("open");
})

hallobutton.addEventListener("click", () => {
    modal.classList.add("open");
})


// friends code START

const btn = document.getElementById('friends_button');
const panel = document.getElementById('friends_panel');

btn.addEventListener('click', () => panel.classList.toggle('open'));

document.addEventListener('click', (e) => {
    const clickedInsidePanel = panel.contains(e.target);
    const clickedButton = btn.contains(e.target);

    if (panel.classList.contains('open') && !clickedInsidePanel && !clickedButton)
    {
        panel.classList.remove('open');
    }
})

// friends code END