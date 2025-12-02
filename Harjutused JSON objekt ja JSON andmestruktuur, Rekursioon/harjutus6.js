const töötajad = [
    { nimi: "Anna", amet: "Disainer", palk: 2500 },
    { nimi: "Karl", amet: "Arendaja", palk: 4200 },
    { nimi: "Liisa", amet: "Projektijuht", palk: 3500 },
    { nimi: "Marko", amet: "Arendaja", palk: 3800 }
];

// 1Filter
const arendajad = töötajad.filter(töötaja => töötaja.amet === "Arendaja");
console.log("6. Arendajad:", arendajad);

// 2 Map
const palgaMassiiv = töötajad.map(töötaja => töötaja.palk);
console.log("6. Palgad:", palgaMassiiv);

const arendajatePalgaTõus = töötajad
    .filter(töötaja => töötaja.amet === "Arendaja")
    .map(töötaja => töötaja.palk * 1.10); 

console.log("6. Tõstetud palgad:", arendajatePalgaTõus);