import { homes } from "./utils.js";

const main = document.querySelector(".main-content");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const selectedHome = homes.find((h) => h.id === id) || homes[0];

const descriptionHtml = selectedHome.description
  .map((text) => `<p>${text}</p>`)
  .join("");

const galleryHtml = selectedHome.gallery
  .map(
    (item) => `
      <div class="gallery-item">
        <a href="${item.src}" target="_blank">
          <img src="${item.src}" alt="${item.alt}" />
        </a>
        <div class="caption">${item.caption}</div>
      </div>
    `,
  )
  .join("");

main.innerHTML += `
  <section class="springfield-hero">
    <h1>${selectedHome.name}</h1>
    ${descriptionHtml}
  </section>

  <section class="gallery-grid">
    ${galleryHtml}
  </section>

  <footer>
    <p>&copy; 2026 - Web-palvelin Nayttotehtava</p>
  </footer>
`;
