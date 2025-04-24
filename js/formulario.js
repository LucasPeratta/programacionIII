document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario-contacto');
    let resetDesdeSubmit = false;
  
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Formulario enviado con exito');
  
      resetDesdeSubmit = true;
      formulario.reset();
      resetDesdeSubmit = false;
  
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 500);
    });
  
    formulario.addEventListener('reset', function () {
      if (!resetDesdeSubmit) {
        alert('El formulario ha sido reseteado');
      }
    });
});
  