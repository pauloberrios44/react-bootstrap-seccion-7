import '../App.css';
import Titulo from './components/titulo';
import CalculoRemuneracion from './components/calculo';
import FooterPrincipal from './components/footer';

function App() {

  return (
    <div className="">
      <Titulo />
      <div className='container'>
        <CalculoRemuneracion/>
      </div>
      <FooterPrincipal/>
    </div>
  );
}

export default App;
