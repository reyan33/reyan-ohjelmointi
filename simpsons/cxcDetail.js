import { cxcs } from "./utils.js";
const main = document.querySelector(".main-content");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const selectedCxc = cxcs.find((C) => C.id == id);

const audio =
  selectedCxc.audio.length > 0
    ? selectedCxc.audio
        .map(
          (a) =>
            `
                <audio controls>
                  <source src=${a} type="audio/mpeg" />
                </audio>
  `,
        )
        .join("")
    : "<p>audio not available</p>";

const memes = selectedCxc.memes
  .map(
    (m) =>
      `
   <img src=${m} onclick="openMeme(this)" />
  `,
  )
  .join("");

main.innerHTML += `    
     <h1>${selectedCxc.name}</h1>
      <!-- CHARACTER IMAGE -->
      <div class="character-detail-layout">
        <div class="character-photo-wrap">
          <img
            src=${selectedCxc.detailImage}
            alt=${selectedCxc.name}
            class="character-photo"
          />
        </div>
        <div class="character-detail-right">
          <!-- TABS -->
          <div class="tabs">
            <button onclick="showTab('info')">Info</button>
            <button onclick="showTab('memes')">Memes</button>
          </div>

          <!-- INFO -->
          <section id="info" class="tab active">
            <div class="info-top">
              <div>
                <h2>${selectedCxc.fullName}</h2>
                <p>.
                  ${selectedCxc.description}
                </p>
              </div>
              <div class="voice-actor-card">
                <div class="actor-photo">
                  <img src=${selectedCxc.actorImage} alt=${selectedCxc.voiceActor}/>
                </div>
                <div>
                  <h3>Voice Actor</h3>
                  <p>Harry Shearer</p>
                  <a
                    href=${selectedCxc.imdb}
                    target="_blank"
                  >
                    IMDb Profile
                  </a>
                </div>
              </div>
            </div>

            <div class="audio-grid">
              <h3>Audio clips</h3>
              <div class="audio-row">
                ${audio}
              </div>
            </div>
          </section>

          <!-- MEMES -->
          <section id="memes" class="tab">
            <div class="meme-grid">
             ${memes}
            </div>

            <div id="meme-viewer" onclick="closeMeme(event)"></div>
          </section>
        </div>
      </div>`;

console.log(main);
