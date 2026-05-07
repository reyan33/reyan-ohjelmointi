console.log("Kasino loaded");

// NOPPA

function heitanoppa() {
  let numero = Math.floor(Math.random() * 6) + 1;

  document.getElementById("noppa").innerText = numero;
}

// LOTTO

function arvolotto() {
  let arvotut = [];

  // generate 7 random numbers
  for (let i = 0; i < 7; i++) {
    let numero = Math.floor(Math.random() * 40) + 1;
    arvotut.push(numero);
  }

  // show lotto numbers
  document.getElementById("lotto").innerText = arvotut.join(" ");

  // user guesses
  let arvaus = [
    Number(document.getElementById("a").value),
    Number(document.getElementById("b").value),
    Number(document.getElementById("c").value),
    Number(document.getElementById("d").value),
    Number(document.getElementById("e").value),
    Number(document.getElementById("f").value),
    Number(document.getElementById("g").value),
  ];

  // check matches
  let oikein = 0;

  for (let i = 0; i < arvaus.length; i++) {
    if (arvotut.includes(arvaus[i])) {
      oikein++;
    }
  }

  // show result
  document.getElementById("tulos").innerText =
    "Oikein arvattuja numeroita: " + oikein;
}
