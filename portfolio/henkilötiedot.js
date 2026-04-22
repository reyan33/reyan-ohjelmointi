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
        ika.innerHTML = henkilo.age;

        let tyo = document.createElement("td");
        tyo.innerHTML = henkilo.job;

        let ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";

        rivi.append(nimi);
        rivi.append(ika);
        rivi.append(tyo);
        rivi.append(ajokortti);

        rivit.append(rivi);
    });
}

luoRivit();