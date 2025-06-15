import React, { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

// EN este componente:
// - Hacemos una peticion a la API (GET /personas)
// - Manejamos el estado de carga y errores
// - Pasamos el array de personas a ListaTarjetas

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);
  
  // Estado para saber si todavia esta cargando la info
  const [cargando, setCargando] = useState(true);
  
  // Estado para guardar si hubo un error al traer los datos
  const [error, setError] = useState(null);

  
  useEffect(() => {
    // Hacemos la peticion al backend
    fetch('http://localhost:3000/personas') 
      .then((res) => {
        // Si la respuesta no es OK lanzamos error
        if (!res.ok) throw new Error('Error al traer los datos');
        return res.json(); // convertimos la respuesta a JSON
      })
      .then((data) => {
        // Guardamos los datos en el estado
        setPersonas(data);
        setCargando(false); // Ya no estamos cargando
      })
      .catch((err) => {
        // Si hubo un error (por ejemplo, el backend está apagado), lo guardamos
        setError(err.message);
        setCargando(false);
      });
  }, []); 

  // Mientras carga, mostramos un mensaje
  if (cargando) return <p>Cargando personas...</p>;

  // Si hubo error, mostramos un mensaje
  if (error) return <p>Error: {error}</p>;

  // Sino, renderizamos el componente ListaTarjetas, y le pasamos los datos recibidos
  return <ListaTarjetas personas={personas} />;
}

export default TraerPersonas;
