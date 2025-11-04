
const modalTriggers = document.querySelectorAll(".modal-trigger");
const closeBtns = document.querySelectorAll("[id^='close-event']");
const modals = document.querySelectorAll(".modal");

// Open modal when trigger button is clicked
modalTriggers.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add("open");
    });
});

// Close modal when close button is clicked
closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        const modal = closeBtn.closest(".modal");
        if (modal) modal.classList.remove("open");
    });
});


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