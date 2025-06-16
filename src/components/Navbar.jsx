import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/cursos">Oferta de cursos</Link></li>
    </nav>
  );
}

export default Navbar;
