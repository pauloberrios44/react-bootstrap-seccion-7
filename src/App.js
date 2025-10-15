import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneracion from './components/calculo';
import FooterPrincipal from './components/Footer';

function App() {
  


  return (
    <div className="">
      <Titulo/>
      <div className='container'>
        <Banner/>
        <CalculoRemuneracion/>
      </div>
      <FooterPrincipal/>
    </div>
  );
}

export default App;
