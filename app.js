let amigos = [];

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim(); 

    if (amigoNombre === "") {
        alert("Ingresa el nombre de un amigo");
        return;
    }
    if (amigos.includes(amigoNombre)) {
        alert(`Tu amigo ${amigoNombre} ya fue ingresado`);
        return;
    }

    amigos.push(amigoNombre);
    amigoInput.value = ""; 

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const amigosLista = document.getElementById('listaAmigos'); 
    amigosLista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        amigosLista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Ningún amigo ha sido ingresado");
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[amigoAleatorio];
    const resultadoSorteado = document.getElementById('resultado'); 
    resultadoSorteado.innerHTML = `Tu amigo: ${amigoSorteado} es el sorteado`;
}
