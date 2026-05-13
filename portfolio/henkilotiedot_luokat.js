console.log("Luokat loaded");

// 1. CLASS
class Person {
  constructor(name, age, job, driversLicense) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.driversLicense = driversLicense;
  }

  isUnderage() {
    return this.age < 18;
  }

  isStudent() {
    return this.job === "Opiskelija" || this.job === "student";
  }
}

// 2. INITIAL DATA
let persons = [
  new Person("Merja Meikäläinen", 17, "Opiskelija", true),
  new Person("Teppo Teikäläinen", 25, "Sähköteknikko", true),
  new Person("Helena Heikäläinen", 30, "Ohjelmistosuunnittelija", false),
  new Person("Semir Sikäläinen", 20, "Opiskelija", true),
  new Person("Tomas Täkäläinen", 22, "Linja-autonkuljettaja", true),
];

// 3. TABLE BODY
let rivit = document.getElementById("rivit");

// 4. DRAW TABLE
function luoRivit() {
  rivit.innerHTML = "";

  for (let p of persons) {
    let rivi = document.createElement("tr");

    let nimi = document.createElement("td");
    nimi.innerText = p.name;

    let ika = document.createElement("td");
    ika.innerText = p.age;

    if (!p.isUnderage()) {
      ika.innerText += " 🍺";
    }

    let tyo = document.createElement("td");
    tyo.innerText = p.job;

    if (p.isStudent()) {
      tyo.innerText += " 🎓";
    }

    let ajokortti = document.createElement("td");
    ajokortti.innerText = p.driversLicense ? "Kyllä" : "Ei";

    rivi.append(nimi, ika, tyo, ajokortti);
    rivit.append(rivi);
  }
}

// 5. ADD NEW PERSON
function lisaaHenkilo() {
  let nimi = document.getElementById("nimi").value;
  let ika = Number(document.getElementById("ika").value);
  let tyo = document.getElementById("tyo").value;
  let ajokortti = document.getElementById("ajokortti").checked;

  let uusiHenkilo = new Person(nimi, ika, tyo, ajokortti);

  persons.push(uusiHenkilo);

  luoRivit();
}

// 6. INITIAL LOAD
luoRivit();
