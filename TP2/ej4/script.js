const formulario = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTarea = document.getElementById("listaTareas");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputTexto = inputTarea.value;
  // verifico que el campo no este vacio
  if (inputTexto !== "") {
    // creo un nuevo elemento <li> para la nueva tarea y le asignamos el texto del user
    const nuevaListaTarea = document.createElement("li");
    nuevaListaTarea.textContent = inputTexto;

    // al hacer clic en la tarea, alterno la clase completado para marcarla/desmarcarla. Para eso el toggle
    nuevaListaTarea.addEventListener("click", function () {
      nuevaListaTarea.classList.toggle("completado");
    });

    listaTarea.appendChild(nuevaListaTarea);
    inputTarea.value = "";
  }
});
