function Modal({ precio, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Precio: Bs{precio}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
