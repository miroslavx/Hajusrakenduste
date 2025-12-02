const päevasedMüügid = [250.50, 450.00, 199.99, 525.51, 380.00];
const tooteHinnad = [
    { toode: "A", hind: 10 },
    { toode: "B", hind: 5 },
    { toode: "C", hind: 12 }
];
const kogukäive = päevasedMüügid.reduce((summa, müük) => summa + müük, 0);
console.log("7. Kogukäive:", kogukäive);

const hindadeSumma = tooteHinnad.reduce((summa, ese) => summa + ese.hind, 0);
console.log("7. Hindade summa:", hindadeSumma);

const keskmineMüük = kogukäive / päevasedMüügid.length;
console.log("7. Keskmine müük:", keskmineMüük);