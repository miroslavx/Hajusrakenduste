const projektiSeisund = {
    projektiNimi: "Fusion Core",
    versioon: 3.1,
    valmimiseAeg: () => "Q3 2026",
    onEelarvestÜle: () => false,
    arvutaKulu: () => 150000
};

function valmistaJSONiks(obj) {
    const uusObjekt = {};
    for (let key in obj) {
        const väärtus = obj[key];
        if (typeof väärtus === 'function') {
            uusObjekt[key] = väärtus();
        } else {
            uusObjekt[key] = väärtus;
        }
    }
    
    return uusObjekt;
}

console.log("2. Harjutus:", valmistaJSONiks(projektiSeisund));