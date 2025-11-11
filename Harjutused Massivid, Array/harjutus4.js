const temperatuurid = [5, 12, 18, 2, 7, 10];


let kasKülmetab = temperatuurid.some((temp) => temp < 0);
console.log(kasKülmetab);
let kasJääbAlla20 = temperatuurid.every((temp) => temp < 20);
console.log(kasJääbAlla20);

let kasOnPäevaneTemperatuur = temperatuurid.every((temp) => temp > 0);
console.log(kasOnPäevaneTemperatuur);
