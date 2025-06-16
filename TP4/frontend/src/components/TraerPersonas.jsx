import React, { useEffect, useState } from 'react';
import ListaTarjetas from './ListaTarjetas';

function TraerPersonas() {
  const [personas, setPersonas] = useState([]);
  
  const [cargando, setCargando] = useState(true);
  
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:3000/personas') 
      .then((res) => {
        if (!res.ok) throw new Error('Error al traer los datos');
        return res.json(); 
      })
      .then((data) => {
        setPersonas(data);
        setCargando(false); 
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []); 

  if (cargando) return <p>Cargando personas...</p>;

  if (error) return <p>Error: {error}</p>;

  return <ListaTarjetas personas={personas} />;
}

export default TraerPersonas;
