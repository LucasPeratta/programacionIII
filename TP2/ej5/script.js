const form = document.getElementById("formRegistro");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorEdad = document.getElementById("errorEdad");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true; // lo usamos de bandera

  // limpiar mensajes previos
  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorEdad.textContent = "";

  // validar nombre
  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es obligatorio";
    valido = false;
  }

  // validar email (solo que no este vacio el campo)
  if (email.value.trim() === "") {
    errorEmail.textContent = "El email es obligatorio";
    valido = false;
  }

  // validar edad
  const edadNum = parseInt(edad.value, 10);
  if (edad.value.trim() === "") {
    errorEdad.textContent = "La edad es obligatoria";
    valido = false;
  } else if (edadNum <= 18) {
    errorEdad.textContent = "La edad debe ser un numero mayor a 18";
    valido = false;
  }

  if (valido) {
    alert("Formulario enviado correctamente !!");
    form.reset(); // Opcional: limpia el formulario
  }
});
