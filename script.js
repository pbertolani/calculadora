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
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (10 < total && total < 21){
    level = "Bronze";
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (20 < total && total < 51){
    level = "Prata"
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (50 < total && total < 81) {
    level = "Ouro";
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (80 < total && total < 91){
    level = "Diamante";
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (90 < total && total < 101){
    level = "Lendário";
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}

else if (total >= 101){
    level = "Imortal"
    console.log(`O Herói tem de saldo de ${total} e está no nível de ${level}`);
}