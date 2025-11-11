const ostukorv = ["piim", "leib", "juust", "munad"];
const toodeteKoodidStr = "A10-B25-C30-D45";

let ostunimekiri = ostukorv.join(", ");
console.log(ostunimekiri);
let koodideMassiiv = toodeteKoodidStr.split("-");
console.log(koodideMassiiv);

let csvFormat = ostukorv.join(",");
console.log(csvFormat);