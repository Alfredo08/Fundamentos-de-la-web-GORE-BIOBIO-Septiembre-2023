let estudiante = {
    nombre : "Alex",
    apellido : "Miller",
    edad : 25,
    lenguagesDeProgramacion : ["HTML", "CSS", "JavaScript"],
    padres : {
        madre : "Susana",
        padre : "Alejandro"
    },
    imprimeHola : function(nombre){
        console.log("Hola", nombre, ",desde el objeto.");
    }
};

console.log(estudiante);
console.log(estudiante.edad);
console.log(estudiante["edad"]);
let prop = "edad";
console.log(estudiante[prop]);

estudiante.nombre = "Alexander";
//estudiante.lenguagesDeProgramacion = ["HTML", "CSS", "JavaScript"];
//console.log(estudiante);
console.log(estudiante.lenguagesDeProgramacion.push("Python"));
console.log(estudiante);

delete estudiante.apellido;
console.log(estudiante.apellido);

console.log(estudiante.padres.padre);
console.log(estudiante.padres.madre);

estudiante.imprimeHola('Mariana');