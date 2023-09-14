let listDeEstudiantes = [{
    nombre : "Alex",
    apellido : "Miller",
    edad : 25
},
{
    nombre : "Martha",
    apellido : "Gomez",
    edad : 21
},
{
    nombre : "Alan",
    apellido : "Morales",
    edad : 23
},
{
    nombre : "Roger",
    apellido : "Infante",
    edad : 19
}];

console.log(listDeEstudiantes[2].apellido);

// Obteniendo el promedio de edades
let suma = 0;

for(let i = 0; i < listDeEstudiantes.length; i ++){
    suma += listDeEstudiantes[i].edad;
    delete listDeEstudiantes[i].apellido;
}

let promedio = suma /listDeEstudiantes.length;
console.log(promedio);
console.log(listDeEstudiantes);