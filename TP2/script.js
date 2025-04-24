// EJERCICIO 1
const titulo = document.getElementById("tituloPrincipal");
titulo.textContent ="Texto Modificado desde js"

const parrafos = document.getElementsByClassName("parrafos");
parrafos[0].style.color = "blue";
parrafos[1].style.color = "blue";

const listas = document.querySelectorAll("#contenedor li")
listas.forEach((lista, index) => {
    lista.textContent = lista.textContent + " (Modificada desde js)"
})


// EJERCICIO 2
const input = document.getElementById("inputTexto");
const boton = document.getElementById("botonAgregar");
const lista = document.getElementById("listaVacia");

boton.addEventListener("click", function() {
    const textoInput = input.value; // captura valor del input

    if(textoInput !== ""){
        const nuevaLista = document.createElement("li"); // crea una lñista
        const texto = document.createTextNode(textoInput);
        nuevaLista.appendChild(texto); // le da el valor del input a la nueva lista

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar"

        botonEliminar.addEventListener("click", function(){
            nuevaLista.remove();
        })

        nuevaLista.appendChild(botonEliminar) //afrega a la nueva lista el boton de eliminar

        lista.appendChild(nuevaLista); // lo agrega a la lista
    }

    input.value = "";
})


// EJERCICIO 3
const parrafo = document.querySelectorAll(".parrafo");
const btnResaltar = document.getElementById("resaltar");
const btnOcultar = document.getElementById("ocultar");

btnResaltar.addEventListener("click", function(){
    parrafo.forEach(p => {
        p.classList.add("resaltado")
    })
})

btnOcultar.addEventListener("click", function(){
    parrafo.forEach(p => {
        p.classList.toggle("oculto")
    })
})


// EJERCICIO 4
const formulario = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTarea = document.getElementById("listaTareas");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const inputTexto = inputTarea.value;
    if(inputTexto !== ""){
        const nuevaListaTarea = document.createElement("li");
        nuevaListaTarea.textContent = inputTexto

        nuevaListaTarea.addEventListener("click", function(){
            nuevaListaTarea.classList.toggle("completado");
        })

        listaTarea.appendChild(nuevaListaTarea);
        inputTarea.value = "";
    }
})


// EJERCICIO 5
const formularioEj5 = document.getElementById("formularioEj5");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorEdad = document.getElementById("errorEdad");

formularioEj5.addEventListener("submit", function(e) {
    e.preventDefault();

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorEdad.textContent = "";

    const esValido = true;

    if(nombre.value === ""){
        errorNombre.textContent = "El nombre es Obligatorio";
        esValido = false;
    }

    if(email.value === ""){
        errorEmail.textContent = "El email es Obligatorio";
        esValido = false;
    } 

    const edadValida = parseInt(edad.value);
    if(isNaN(edadValida)){
        errorEdad.textContent = "La edad es Obligatoria";
        esValido = false;
    } else if(edadValida <= 18) {
        errorEdad.textContent = "Debes tener mas de 18 años";
        esValido = false;
    }

    if(esValido){
        alert("Formulario enviado correctamente!");
        formularioEj5.reset();
    }
})