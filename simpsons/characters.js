function showTab(tabId) {
  document.querySelectorAll(".tabs button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.textContent.toLowerCase() === tabId,
    );
  });

  document.querySelectorAll(".tab").forEach((section) => {
    section.classList.toggle("active", section.id === tabId);
  });

  closeMeme();
}

function openMeme(image) {
  const viewer = document.getElementById("meme-viewer");
  if (!viewer) return;

  viewer.innerHTML =
    '<div class="meme-viewer-inner" onclick="event.stopPropagation()">' +
    '<button class="meme-back" onclick="closeMeme(event)">← Back</button>' +
    '<img src="' +
    image.src +
    '" alt="Meme" />' +
    "</div>";

  viewer.classList.add("active");
}

function closeMeme(event) {
  if (event) {
    event.stopPropagation();
  }

  const viewer = document.getElementById("meme-viewer");
  if (!viewer) return;

  viewer.classList.remove("active");
}

window.addEventListener("DOMContentLoaded", () => {
  showTab("info");
});
