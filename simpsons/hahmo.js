import { cxcs } from "./utils.js";
const characters_grid = document.querySelector(".characters-grid");
cxcs.forEach((c) => {
  characters_grid.innerHTML += `
   <a href="cxcDetail.html?id=${c.id}">
          <div class="character-img-wrap">
            <img src=${c.selectionImage} alt=${c.fullName} />
          </div>
          <div class="character-name">${c.name}</div>
        </a>
  `;
});
