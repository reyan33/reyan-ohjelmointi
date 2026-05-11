console.log("Taulukot loaded");

// TAULUKOT
var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = [
  "skibidi",
  "rizz",
  "gyat",
  "sigma",
  "sus",
  "cap",
  "yeet",
  "lit",
  "simp",
  "cringe",
];

// 1. Poimi elementti
function poimiElementti() {
  let index = Number(document.getElementById("index").value);

  document.getElementById("tulos1").innerText = sanat[index - 1];
}

// 2. Löydä indeksi
function loydaIndeksi() {
  let sana = document.getElementById("sana").value;

  document.getElementById("tulos2").innerText = sanat.indexOf(sana);
}

// 3. Leikkaa taulukko
function leikkaaTaulukko() {
  let alku = Number(document.getElementById("alku").value);
  let loppu = Number(document.getElementById("loppu").value);

  let osa = sanat.slice(alku, loppu);

  let ul = document.getElementById("tulos3");
  ul.innerHTML = "";

  for (let item of osa) {
    ul.innerHTML += `<li>${item}</li>`;
  }
}

// 4. Järjestä

function tulostaSanat() {
  let ul = document.getElementById("tulos4");
  ul.innerHTML = "";

  for (let sana of sanat) {
    ul.innerHTML += `<li>${sana}</li>`;
  }
}

function jarjestaSanat() {
  sanat.sort();
}

function kaannaSanat() {
  sanat.reverse();
}

function tulostaNumerot() {
  let ul = document.getElementById("tulos4");
  ul.innerHTML = "";

  for (let n of numerot) {
    ul.innerHTML += `<li>${n}</li>`;
  }
}

function jarjestaNumerot() {
  numerot.sort((a, b) => a - b);
}

function kaannaNumerot() {
  numerot.reverse();
}

// 5. Suodata

function tulostaSuodatetut() {
  let ul = document.getElementById("tulos5");
  ul.innerHTML = "";

  for (let n of numerot) {
    ul.innerHTML += `<li>${n}</li>`;
  }
}

function suuremmat() {
  let luku = Number(document.getElementById("luku").value);

  numerot = numerot.filter((n) => n > luku);
}

function pienemmat() {
  let luku = Number(document.getElementById("luku").value);

  numerot = numerot.filter((n) => n < luku);
}
