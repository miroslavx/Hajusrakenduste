
const juurviljad = ["porgand", "kartul"];
const puuviljad = ["õun", "pirn", "banaan"];
const marjad = ["maasikas", "mustikas"];

const koikTooted_concat = juurviljad.concat(puuviljad);
const koikTooted_spread = [...juurviljad, ...puuviljad, ...marjad];

const segatud = [
  "Sega-Sega",
  ...juurviljad,
  100,
  ...puuviljad
];

console.log("1. Concat:", koikTooted_concat);

console.log("2. Spread:", koikTooted_spread);

console.log("3. Segatud:", segatud);
console.log("--- Kas algsed muutusid? ---");
console.log("Juurviljad:", juurviljad);
console.log("Puuviljad:", puuviljad); 