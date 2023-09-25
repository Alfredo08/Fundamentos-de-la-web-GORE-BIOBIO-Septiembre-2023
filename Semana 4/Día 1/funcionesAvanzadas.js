let estudiantes = [{
    nombre: 'Alex',
    apellido: 'Miller',
    edad: 25,
    id: 123
},
{
    nombre: 'Martha',
    apellido: 'Gómez',
    edad: 22,
    id: 456
},
{
    nombre: 'Roger',
    apellido: 'Anderson',
    edad: 23,
    id: 789
},
{
    nombre: 'Julieta',
    apellido: 'Venegas',
    edad: 22,
    id: 555
}];

/*
estudiantes.forEach(function(elemento, indice){
    console.log(elemento.nombre, indice);
});*/

const imprimeNombre = (elemento) => {
    console.log(elemento.nombre)
}

//estudiantes.forEach(imprimeNombre);

//estudiantes.forEach((elemento, indice) => console.log(elemento.nombre, indice));

/*
let indiceEncontrado = estudiantes.findIndex((elemento) => elemento.id === 444);
console.log(indiceEncontrado);

let objetoEncontrado = estudiantes.find((elemento) =>  elemento.id === 444);
console.log(objetoEncontrado);

let alumnosCon22Anios = estudiantes.filter((elemento) => elemento.edad === 22);
console.log(alumnosCon22Anios);
console.log(estudiantes);
*/

/*
let listaNombres = estudiantes.map((elemento) => {
    let resultado = elemento.nombre + " " + elemento.apellido
    return resultado;
});
*/

let listaNombres = estudiantes.map((elemento) => elemento.nombre + " " + elemento.apellido);

console.log(listaNombres);
//console.log(estudiantes);

