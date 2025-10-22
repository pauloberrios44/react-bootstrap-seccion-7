import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneracion from './components/calculo';
import PresentacionPrincipal from './components/presentacion';
import FooterPrincipal from './components/footer';

function App() {



  return (
    <div className="">
      <Titulo />
      <div className='container'>
        <Banner />
        <PresentacionPrincipal />
        <CalculoRemuneracion />
      </div>
      <FooterPrincipal />
    </div>
  );
}

export default App;
