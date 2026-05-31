const texts = ["Open image for full gallery", "Avaa kuva nähdäksesi gallerian"];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const title = document.getElementById("title");

function typeEffect() {
  const currentText = texts[textIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  title.innerHTML =
    currentText.substring(0, charIndex) + '<span class="cursor"></span>';

  if (!deleting && charIndex === currentText.length) {
    deleting = true;
    setTimeout(typeEffect, 1500);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
