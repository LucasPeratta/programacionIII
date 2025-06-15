import React from 'react';
import TarjetaPersona from './TarjetaPersona';

// En ete componente recibimos un array de personas por props (desde Traerpersonas)
// y mostramos una tarjeta para cada una

function ListaTarjetas({ personas }) {
  return (
    <div style={estilos.contenedor}>
      {personas.map((persona) => (
        // Usamos el id como key, y le pasamos la persona a cada TarjetaPersona
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

// Estilos 
const estilos = {
  contenedor: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    padding: '1rem',
  },
};

export default ListaTarjetas;
