let calificacion = 9.6;
let tiempoHoras = 3;

if(calificacion >= 8){
    console.log("Felicidades. ¡Has aprobado el examen!");
    if(calificacion >= 9.5){
        console.log("¡Obtuviste un cinturón negro!");
    }
    else{
        if(tiempoHoras <= 5){
            console.log("¡Obtuviste un cinturón rojo!");
        }
        else{
            console.log("¡Obtuviste un cinturón naranja!");
        }
    }
}
else{
    console.log("Esta vez te falto un poco. Buena suerte en el siguiente intento.");
}


