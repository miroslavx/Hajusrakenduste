const kasutajaProfiil = {
    nimi: "Jane Doe",   
    vanus: 28,            
    onLine: true,          
    tervitusmeetod: function() { 
        return "Tere!";
    }
};

console.log("1. Harjutus:", kasutajaProfiil);
console.log(kasutajaProfiil.tervitusmeetod());