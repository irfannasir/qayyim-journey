let currentSection = 0;
const sections = document.querySelectorAll('section');

function showNext() {
    sections[currentSection].classList.add('visible');
    currentSection++;
}

function showVision() {
    document.getElementById('vision').classList.add('visible');
}

function revealChallenge() {
    document.getElementById('challenge').classList.add('visible');
}

function showFinal() {
    document.getElementById('final').classList.add('visible');
}

function celebrate() {
    alert("The Savior's Journey continues... Let's change the world!");
}
