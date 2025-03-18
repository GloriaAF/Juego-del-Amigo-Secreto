let amigos = []; // Crear un array para almacenar los amigos
const maxAmigos = 10;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Capturar el valor del campo de entrada
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre."); // Validar que el campo no esté vacío
        return;
    }
    if (amigos.length >= maxAmigos) {
        alert("No puedes ingresar más amigos");
        return;
    }
    
    amigos.push(nombre); // Actualizar el array de amigos
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente
    amigos.forEach(amigo => { // Iterar sobre el arreglo
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo;
        lista.appendChild(li); // Agregar elementos a la lista
    });
}

function sortearAmigo () {
    if (amigos.length === 0) {  // Validar que haya amigos disponibles
        alert("Debe haber al menos un amigo en la lista antes de sortear");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    let nombreSorteado = amigos[indice]; // Obtener el nombre sorteado
    
    // Limpiar la lista antes de mostrar el resultado
    amigos = [];
    actualizarLista();
    
    let resultado = document.getElementById("resultado"); // Mostrar el resultado
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${nombreSorteado}</strong></li>`;
    resultado.style.color = "purple";
}
