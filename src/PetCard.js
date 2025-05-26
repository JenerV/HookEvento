import React from 'react';

function PetCard({ mascota }) {
  return (
    <div className="pet-card" style={{
      border: '1px solid #ccc', padding: '10px', borderRadius: '10px', width: '300px', margin: '10px'
    }}>
      <img src={mascota.foto} alt={mascota.nombre} style={{ width: '100%', borderRadius: '10px' }} />
      <h2>{mascota.nombre}</h2>
      <p><strong>Especie:</strong> {mascota.especie}</p>
      <p><strong>Raza:</strong> {mascota.raza}</p>
      <p>{mascota.descripcion}</p>
    </div>
  );
}

export default PetCard;
