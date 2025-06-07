const parrafo = document.querySelectorAll(".parrafo");
const btnResaltar = document.getElementById("resaltar");
const btnOcultar = document.getElementById("ocultar");

btnResaltar.addEventListener("click", function () {
  parrafo.forEach((p) => {
    p.classList.add("resaltado");
  });
});

btnOcultar.addEventListener("click", function () {
  parrafo.forEach((p) => {
    p.classList.toggle("oculto");
  });

  // verificamos si todos los parrafos están ocultos
  const todosOcultos = Array.from(parrafo).every((p) =>
    p.classList.contains("oculto")
  );

  // si estan ocultos, el boton debe decir "Mostrar", si no "Ocultar"
  btnOcultar.textContent = todosOcultos ? "Mostrar" : "Ocultar";
});
