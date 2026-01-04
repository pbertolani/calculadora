// Calculadora de Nivel
// Dev: Pedro Bertolani
// Data: 04/01/2026

rank (15,1);
var level = "";

function rank(victories, defeat){
    total = victories-defeat;
    return total;
}

if (total < 10){
    level = "Ferro";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}

else if (10 < total && total < 21){
    level = "Bronze";
    console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`);
}