// Add Event To Window On Load
window.addEventListener('load', function () {
    // Get All Sounds I Have
    const sounds = document.querySelectorAll('.sound');
    const taps = document.querySelectorAll('.taps div');
    const visual = document.querySelector('.visuals');
    const colors = [
        "#090",
        "#f00",
        "#00f",
        "#f0f",
        "#ff0",
        "#0ff"
    ];
    

    // Play Sounds By Click On Taps
    taps.forEach((tap,index) => {
        tap.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubs(index);
        });

        // Function To Craete Bubbles By Clicking On Taps With Music
        function createBubs(index) {
            const bubbles = document.createElement('div');
            visual.appendChild(bubbles);
            bubbles.style.backgroundColor = colors[index];
            bubbles.style.animation = 'jump 1s ease-in-out';
            bubbles.addEventListener('animationend', function (){
                visual.removeChild(this);
            });
        }
    });
});