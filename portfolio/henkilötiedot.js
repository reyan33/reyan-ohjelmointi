// 1. Taulukko objekteista
let henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

// 2. Haetaan tbody
let rivit = document.getElementById("rivit");

// 3. Funktio rivien luomiseen
function luoRivit() {
    rivit.innerHTML = "";

    henkilot.forEach(henkilo => {
        let rivi = document.createElement("tr");

        let nimi = document.createElement("td");
        nimi.innerHTML = henkilo.name;

        let ika = document.createElement("td");
        if (henkilo.age >= 18) {
            ika.innerHTML = henkilo.age + " 🍺 ";
        } else {
            ika.innerHTML = henkilo.age;
        }

        let tyo = document.createElement("td");
        if (henkilo.job === "Opiskelija") {
            tyo.innerHTML = henkilo.job + " 🎓 ";
        } else {
            tyo.innerHTML = henkilo.job;
        }

        let ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

        rivi.append(nimi);
        rivi.append(ika);
        rivi.append(tyo);
        rivi.append(ajokortti);

        rivit.append(rivi);
    });
}
function lisaaHenkilo() {
    const nimi = document.getElementById("nimi").value;
    const ika = Number(document.getElementById("ika").value);
    const tyo = document.getElementById("tyo").value;
    const ajokortti = document.getElementById("ajokortti").checked;

    if (ika < 0) {
        alert("Iän pitää olla positiivinen luku");
    } else {
        const henkilo = {
            name: nimi,
            age: ika,
            job: tyo,
            driversLicense: ajokortti
        };

        henkilot.push(henkilo);
        luoRivit();
    }
}


luoRivit();