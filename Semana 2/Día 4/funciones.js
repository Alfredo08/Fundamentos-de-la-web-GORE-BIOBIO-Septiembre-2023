
function sumaDosNumeros(num1, num2){
    let total = num1 + num2;
    return total;
}

function restaDosNumeros(num1, num2){
    let total = num1 - num2;
    console.log("El total de la resta es:", total);
}

let resultado1 = sumaDosNumeros(10, 20);
console.log(resultado1);
let resultado2 = sumaDosNumeros(50, 100);
console.log(resultado2);
let final = sumaDosNumeros(resultado1, resultado2);
console.log(final);

restaDosNumeros(100);

