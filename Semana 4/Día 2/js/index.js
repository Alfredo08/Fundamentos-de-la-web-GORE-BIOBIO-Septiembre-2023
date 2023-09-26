
async function obtenerImagenes(event){
    event.preventDefault();

    let numeroImagenes = document.querySelector('#numeroImagenes').value;
    let URL = `https://dog.ceo/api/breeds/image/random/${numeroImagenes}`;
    let configuracion = {
        method : 'GET'
    };

    let respuesta = await fetch(URL, configuracion);
    let datos = await respuesta.json();

    let resultado = document.querySelector('.lista-imagenes');
    resultado.innerHTML = "";
    for(let i = 0; i < datos.message.length; i ++){
        resultado.innerHTML += `<img class="imagen-perro" src="${datos.message[i]}" alt="Imagen de un perro">`;
    }
}