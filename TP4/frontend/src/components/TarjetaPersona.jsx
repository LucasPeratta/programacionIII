import React from 'react';

function TarjetaPersona({ persona }) {
  const { nombre, apellido, edad, email } = persona;

  return (
    <div style={estilos.tarjeta}>
      <h2 style={estilos.nombre}>
        {nombre} {apellido}
      </h2>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

const estilos = {
  tarjeta: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '1rem',
    width: '220px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    backgroundColor: '#fdfdfd',
    transition: 'transform 0.2s',
  },
  nombre: {
    marginBottom: '0.5rem',
    color: '#333',
  },
};

export default TarjetaPersona;
