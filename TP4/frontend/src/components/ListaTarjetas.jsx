import React from 'react';
import TarjetaPersona from './TarjetaPersona';


function ListaTarjetas({ personas }) {
  return (
    <div style={estilos.contenedor}>
      {personas.map((persona) => (
        <TarjetaPersona key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

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
