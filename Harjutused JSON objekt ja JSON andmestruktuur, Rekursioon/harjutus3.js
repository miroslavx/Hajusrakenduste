const kasutajaAndmed = {
    kasutajaNimi: "dinanath50",
    saaRoll: () => "Administraator",
    seaded: {
        teema: "tume",
        eelistused: [
            { id: 1, väärtus: () => true },
            { id: 2, väärtus: "teavitused_sees" }
        ]
    },
    saaSisselogimiseAjalugu: () => [{ aeg: "10:00" }, { aeg: "14:00" }]
};

function sügavPuhastus(element) {
    if (typeof element === 'function') {
        return element();
    }

    if (Array.isArray(element)) {
        return element.map(item => sügavPuhastus(item));
    }
    if (typeof element === 'object' && element !== null) {
        const uusObjekt = {};
        for (let key in element) {
            uusObjekt[key] = sügavPuhastus(element[key]);
        }
        return uusObjekt;
    }
    return element;
}
console.log("3. Harjutus:", JSON.stringify(sügavPuhastus(kasutajaAndmed), null, 2));