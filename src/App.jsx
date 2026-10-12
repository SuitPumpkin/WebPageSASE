import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;