/*
    1. ()
    2. !
    3. * / %
    4. + -
    5. > < >= <= === !==
    6. || &&
    7. ++ --
    8. += *= /= %= -=
    9. =
*/

let num = 4 * 3 + 5 / (2 * 3 + 4);

console.log(num);

// num = num + 1;
num ++;
console.log(num);

//num = num + 7.5;
num += 7.5;
console.log(num);

// num = num * 3;
num *= 3;
console.log(num);

let resultado = !(15 > 20 || 30 / 10 >= 10);
             // !(15 > 20 || 3 >= 10)
             //   !(false ||  false)
                    // !false
console.log(resultado);

let expresion1 = 20 === '20';
console.log("Expresion 1:", expresion1);

let expresion2 = 20 !== 20;
console.log("Expresion 2:", expresion2);

let expresion3 = !123;
console.log("Expresion 3:", expresion3);

let expresion4 = !null;
console.log("Expresion 4:", expresion4);