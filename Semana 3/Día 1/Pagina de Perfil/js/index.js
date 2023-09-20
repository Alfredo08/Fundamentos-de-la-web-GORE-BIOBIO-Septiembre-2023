
let contador = 1;
let contadorIntervalo = setInterval(function(){
    console.log(contador);
    contador ++;
} ,2000);

function mensajeBienvenida(){
    console.log("Hola, bienvenidos.");
}

setTimeout(mensajeBienvenida, 5000);

function logout(elemento, mensaje){
    console.log(elemento);
    console.log(mensaje);
    clearInterval(contadorIntervalo);

    setTimeout(function(){
        alert("¡Esperaste 3 segundos y ahora estás a punto de hacer logout!");
        console.log(contador);
        contador ++;
    }, 3000);
}

function removerConexion(elemento){
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('#connectionRequestNumber');
    let contadorDeConexiones = elementoNumeroDeConexiones.innerText;
    contadorDeConexiones --;
    elementoNumeroDeConexiones.innerText = contadorDeConexiones;
}

function agregarConexion(elemento){
    let imagenDeAvatar = elemento.closest('.card-list-item').querySelector('.avatar-s');
    let nombreDeConexion = elemento.closest('.card-list-item').querySelector('span').innerText;
    let misConexiones = document.querySelector('#myConnections');
    misConexiones.innerHTML += `
                                <li class="card-list-item start">
                                    <img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">
                                    ${nombreDeConexion}
                                </li>`;
    let elementoTotalConexiones = document.querySelector('#totalConnections');
    let contadorTotalConexiones = elementoTotalConexiones.innerText;
    contadorTotalConexiones ++;
    elementoTotalConexiones.innerText = contadorTotalConexiones;

    removerConexion(elemento);
}

function cambiarFondo(elemento){
    elemento.classList.add('extra');
}

function removerFondo(elemento){
    elemento.classList.remove('extra');
}
/*
let navegacion = document.querySelector('.nav-links');
console.log(navegacion);

let nombreUsuario = document.querySelector('#userName');
console.log(nombreUsuario);
console.log(nombreUsuario.innerText);
nombreUsuario.innerText = 'Martha Gómez';

let todosLosLI = navegacion.querySelectorAll('li');
console.log(todosLosLI);

for(let i = 0; i < todosLosLI.length; i ++){
    console.log(todosLosLI[i].innerHTML);
}

navegacion.innerHTML += `<li> Nuevo elemento </li>`;

let viewMore = document.querySelector('.card-footer');
viewMore.remove();

let busqueda = document.querySelector('#busqueda');

let encabezadoUsuario = document.querySelector('.card-header');
encabezadoUsuario.classList.add('extra');
encabezadoUsuario.classList.remove('extra');

let imagenDePerfil = document.querySelector('.avatar-m');
imagenDePerfil.src = 'https://shorturl.at/lrwAY';

let signOut = document.querySelector('.btn');
signOut.closest('.nav');
*/