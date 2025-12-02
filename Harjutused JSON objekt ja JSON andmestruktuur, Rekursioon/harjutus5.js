const toode = {
    kood: "PRD-2025",
    nimi: "Ergonoomiline Tool",
    hind: 299.99,
    laoseis: 15
};
const tooteOmadused = Object.keys(toode);
console.log("5. Võtmed:", tooteOmadused);
const tooteVäärtused = Object.values(toode);
console.log("5. Väärtused:", tooteVäärtused);
const tooteKirjed = Object.entries(toode);
console.log("5. Kirjed:", tooteKirjed);
Object.keys(toode).forEach(key => {
    console.log(`Omadus: ${key}`);
});