
function popup() {
    document.getElementById("eventCard").classList.toggle("show");
}

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