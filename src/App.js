import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneraciones from './components/calculo';
import TituloDemo from './components/tituloDemo';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-light">
      <div className='container'>
        <Titulo />
        <Banner />
        <TituloDemo/>
        <CalculoRemuneraciones/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
