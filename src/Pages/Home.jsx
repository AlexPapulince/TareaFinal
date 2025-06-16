import Accordion from '../components/Accordion';

function Home() {
  const danzas = [
    { region: 'Altiplano', danza: 'Tinku :v' },
    { region: 'Valles', danza: 'Cuecaaaa' },
    { region: 'Oriente', danza: 'Chovena' },
    { region: 'Chaco', danza: 'Zapateado Chaqueño' },
    { region: 'Amazonía', danza: 'Taquirari' },
  ];

  return (
    <div>
      <h2>Bienvenido</h2>
      <Accordion items={danzas} />
    </div>
  );
}

export default Home;
