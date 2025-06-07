const input = document.getElementById("inputTexto");
const boton = document.getElementById("botonAgregar");
const lista = document.getElementById("listaVacia");

boton.addEventListener("click", function () {
  const textoInput = input.value; // captura valor del input

  if (textoInput !== "") {
    const nuevaLista = document.createElement("li"); // crea una lista
    const texto = document.createTextNode(textoInput);
    nuevaLista.appendChild(texto); // le da el valor del input a la nueva lista

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      nuevaLista.remove();
    });

    nuevaLista.appendChild(botonEliminar); //agrega a la nueva lista el boton de eliminar

    lista.appendChild(nuevaLista); // lo agrega a la lista
  }

  input.value = ""; // limpiamos
});
