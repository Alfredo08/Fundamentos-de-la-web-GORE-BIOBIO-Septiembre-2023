function mostrarMensaje(elemento){
    alert("Cargando el pronóstico del clima.");
}

function removerCookie(elemento){
    // elemento.closest('.cookies').remove();
    elemento.closest('.cookies').classList.add('ocultarCookie')
}

function cambiarTemperaturas(elemento){
    let opcion = elemento.value;
    let temperaturas = document.querySelectorAll('.temp');

    if(opcion === 'f'){
        for(let i = 0; i < temperaturas.length; i ++){
            let temperaturaCelcius = temperaturas[i].innerText;
            let temperaturaFinal = (temperaturaCelcius * 1.8) + 32;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
    else{
        for(let i = 0; i < temperaturas.length; i ++){
            let temperaturaFarenheit = temperaturas[i].innerText;
            let temperaturaFinal = (temperaturaFarenheit - 32) / 1.8;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
    }
}