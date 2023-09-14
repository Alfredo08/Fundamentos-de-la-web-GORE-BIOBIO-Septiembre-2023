
let nombres = ["Alex", "Ana", "Alan", "Maria", "Roger"];
let edades = [25, 20, 21, 24, 22];

console.log(nombres);
console.log(nombres[3]);

nombres[1] = "Julieta";
console.log(nombres);
console.log(nombres.length);

nombres.push("Miguel", "Karina");
nombres.unshift("Emiliano", "Abraham");
console.log(nombres);

// splice -- agrega, elimina o hace ambos en una posición dada del arreglo
let nombreRemovido = nombres.pop(); // Estos dos métodos
let nombreRemovidoDelFrente = nombres.shift(); // tienen valor de retorno
console.log(nombres);
console.log(nombreRemovido, nombreRemovidoDelFrente);
