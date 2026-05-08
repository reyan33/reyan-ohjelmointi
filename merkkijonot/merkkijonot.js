console.log("Merkkijonot loaded");

// 1. Poimi kirjain

function poimiKirjain() {
  let teksti = document.getElementById("teksti1").value;
  let numero = Number(document.getElementById("numero1").value);

  let kirjain = teksti.charAt(numero);

  document.getElementById("tulos1").innerText = kirjain;
}

// 2. Löydä indeksi

function loydaIndeksi() {
  let teksti = document.getElementById("teksti2").value;
  let haku = document.getElementById("hakusana").value;

  let indeksi = teksti.indexOf(haku);

  document.getElementById("tulos2").innerText = indeksi;
}

// 3. Leikkaa merkkijono

function leikkaaMerkkijono() {
  let teksti = document.getElementById("teksti3").value;

  let alku = Number(document.getElementById("alku").value);

  let loppu = Number(document.getElementById("loppu").value);

  let tulos = teksti.slice(alku, loppu);

  document.getElementById("tulos3").innerText = tulos;
}

// 4. Etsi ja korvaa

function etsiJaKorvaa() {
  let teksti = document.getElementById("teksti4").value;

  let etsi = document.getElementById("etsi").value;

  let korvaa = document.getElementById("korvaa").value;

  let uusiTeksti = teksti.replaceAll(etsi, korvaa);

  document.getElementById("tulos4").innerText = uusiTeksti;
}

// 5. Poikki ja pinoon

function poikkiJaPinoon() {
  let teksti = document.getElementById("teksti5").value;

  let jakaja = document.getElementById("jakaja").value;

  let osat = teksti.split(jakaja);

  let ul = document.getElementById("tulos5");

  ul.innerHTML = "";

  for (let osa of osat) {
    ul.innerHTML += `<li>${osa}</li>`;
  }
}
