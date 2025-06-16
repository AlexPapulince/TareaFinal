import { useState } from 'react';
import Modal from './Modal';

function CourseCard({ nombre, desc, imagen, precio }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ display: 'flex', marginBottom: '1rem' }}>
      <img src={imagen} alt={nombre} style={{ width: '150px' }} />
      <div>
        <h3>{nombre}</h3>
        <p>{desc}</p>
        <button onClick={() => setShow(true)}>Ver precio</button>
        {show && <Modal precio={precio} onClose={() => setShow(false)} />}
      </div>
    </div>
  );
}

export default CourseCard;
