
const värvid = ["punane", "roheline", "sinine", "kollane", "roheline"];

let kasMustOn = värvid.includes("must");
console.log(kasMustOn);
let roheliseAsukoht = värvid.indexOf("roheline");
console.log(roheliseAsukoht);
let valgeAsukoht = värvid.indexOf("valge");
console.log(valgeAsukoht);
let viimaneRoheline = värvid.lastIndexOf("roheline");
console.log(viimaneRoheline);
