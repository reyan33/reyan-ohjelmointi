// muuttujat
let a = 3;
let b = 5;
let c = 7;
let d = 15;

// functions

function summa(x,  y) {
    alert(x + y);
}

function vahennys(x, y) {
    alert(x - y);
}

function kerto(x, y) {
    alert(x * y);
}

function jako(x, y) {
    alert(x / y);
}

 // input
function laskin_summa() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);

    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);

    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);

    kerto(eka, toka);
}

function laskin_jako() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);

    jako(eka, toka);
}

function naytaPaivamaara() {
    const nyt = new Date();

    const paivamaara = nyt.toLocaleDateString('fi-FI');
    const aika = nyt.toLocaleTimeString('fi-FI');
    const paivaJaAika = paivamaara + " klo " + aika;

    const viikonpaivat = [
        "sunnuntai", "maanantai", "tiistai",
        "keskiviikko", "torstai", "perjantai", "lauantai"
    ];
    const viikonpaiva = viikonpaivat[nyt.getDay()];

    const kuukaudet = [
        "tammikuu", "helmikuu", "maaliskuu", "huhtikuu",
        "toukokuu", "kesäkuu", "heinäkuu", "elokuu",
        "syyskuu", "lokakuu", "marraskuu", "joulukuu"
    ];
    const kuukausi = kuukaudet[nyt.getMonth()];

    document.getElementById("paivamaara").innerText = paivamaara;
    document.getElementById("aika").innerText = aika;
    document.getElementById("paivaJaAika").innerText = paivaJaAika;
    document.getElementById("viikonpaiva").innerText = viikonpaiva;
    document.getElementById("kuukausi").innerText = kuukausi;
}