import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Extracurricular from './pages/Extracurricular';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Extracurricular />
      <Contact />
    </>
  );
}

export default App;
