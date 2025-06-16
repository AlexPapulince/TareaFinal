import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Heather';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Courses from './Pages/Courses';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Courses />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
