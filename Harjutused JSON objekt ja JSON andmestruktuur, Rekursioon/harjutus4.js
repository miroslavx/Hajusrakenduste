const investeeringuAndmed = {
    tähis: "GOOGL",
    aktsiaid: 100,
    hind: 150.50,
    arvutaVäärtus: function() {
        return this.aktsiaid * this.hind;
    },
    pesastatud: {
        maksuMäär: 0.10,
        saaMaks: function() {
            return this.maksuMäär;
        }
    }
};
function sügavPuhastusKontekstiga(element) {
    if (typeof element !== 'object' || element === null) {
        return element;
    }
    if (Array.isArray(element)) {
        return element.map(item => sügavPuhastusKontekstiga(item));
    }
    const uusObjekt = {};
    for (let key in element) {
        if (typeof element[key] === 'function') {
            uusObjekt[key] = element[key].call(element); 
        } else {
            uusObjekt[key] = sügavPuhastusKontekstiga(element[key]);
        }
    }
    return uusObjekt;
}
console.log("4. Harjutus:", sügavPuhastusKontekstiga(investeeringuAndmed));