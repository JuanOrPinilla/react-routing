import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL = "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const pet = data.find(m => m.id === parseInt(mascotaId));
        setMascota(pet);
      });
  }, [mascotaId]);

  if (!mascota) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Body>
          <Card.Title>{mascota.nombre}</Card.Title>
          </Card.Body>
        <Card.Img 
          variant="top" 
          src={mascota.foto} 
          alt={mascota.descripcion} 
          className="d-block mx-auto"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} // Ajusta el tamaño y centra la imagen
        />
        <Card.Body>
          <Card.Text>{mascota.raza}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
