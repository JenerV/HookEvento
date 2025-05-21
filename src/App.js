import React, { useEffect, useState } from 'react';

function App() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    // Puedes usar esta línea si tienes el arreglo en línea en lugar de fetch:
    // setMascotas([...]); 
    fetch('https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json')
      .then((res) => res.json())
      .then((data) => setMascotas(data))
      .catch((err) => console.error('Error cargando los datos', err));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Galería de Mascotas</h1>
      <div className="row">
        {mascotas.map((mascota) => (
          <div key={mascota.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={mascota.foto} className="card-img-top" alt={mascota.nombre} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{mascota.nombre}</h5>
                <p className="card-text"><strong>Especie:</strong> {mascota.especie}</p>
                <p className="card-text"><strong>Raza:</strong> {mascota.raza}</p>
                <p className="card-text">{mascota.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
