
console.log("---Ciclo for---");
for(let vueltas = 1; vueltas <= 8; vueltas ++){
    console.log("Llevas ", vueltas, "vueltas.");
}

console.log("---Ciclo while---");
let vueltas = 1;
while(vueltas <= 8){
    console.log("Llevas ", vueltas, "vueltas.");
    vueltas ++;
}

/*
    vueltas = 9
    1 <= 8 ? true
    2 <= 8 ? true
    3 <= 8 ? true
        .
        .
        .
    8 <= 8 ? true
    9 <= 8 ? false
*/
console.log("------");
for(let vueltas = 10; vueltas > 0; vueltas --){
    console.log("Te faltan", vueltas, "vueltas.");
}
console.log("¡Terminaste!");