import '../App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneracion from './components/calculo';
import FooterPrincipal from './components/footer';
import PresentacionPrincipal from './components/presentacion';

function App() {

  return (
    <div className="">
      <Titulo />
      <div className='container'>
        <Banner />
        <PresentacionPrincipal/>
      </div>
      <FooterPrincipal/>
    </div>
  );
}

export default App;
