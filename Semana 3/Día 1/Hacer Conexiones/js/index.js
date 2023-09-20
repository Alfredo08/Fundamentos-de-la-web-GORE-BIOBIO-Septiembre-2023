function removerConexion(elemento, opcion){
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('#connectionRequestNumber');
    let numeroDeConexiones = elementoNumeroDeConexiones.innerText;
    numeroDeConexiones --;
    elementoNumeroDeConexiones.innerText = numeroDeConexiones;
    if(opcion === 'aceptar'){
        let elementoTotalDeConexiones = document.querySelector('#totalConnections');
        let numeroTotalDeConexiones = elementoTotalDeConexiones.innerText;
        numeroTotalDeConexiones ++;
        elementoTotalDeConexiones.innerText = numeroTotalDeConexiones;
    }
}

function mostrarModal(elemento){
    let modal = document.querySelector('.modal');
    modal.classList.add('showModal');
    let main = document.querySelector('.main');
    main.classList.add('addOpacity');
}

function cambiarNombre(evento){
    evento.preventDefault();
    let nuevoNombre = document.querySelector('#newProfileName').value;
    let elementoNombreUsuario = document.querySelector('#userName');
    elementoNombreUsuario.innerText = nuevoNombre;
    let modal = document.querySelector('.modal');
    modal.classList.remove('showModal');
    document.querySelector('#newProfileName').value = "";
    let main = document.querySelector('.main');
    main.classList.remove('addOpacity');
}
