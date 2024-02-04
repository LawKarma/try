import Logoeqo from './Logoeqo.png'
import Camion from './Camion.png'
import './CSS/theme.css';
import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Accueil } from './views/Accueil/Accueil';
import { NavBar } from './views/Navbar';
import { About } from './views/About/About';

function App() {
  const location = useLocation();
    return (
      <div>
        <header>
            <img className='Eqopic' src={Logoeqo} />
          <NavBar/>
        </header>
        {location.pathname !== '/about' && <img className='Truck' src={Camion} />}
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <footer>
        </footer>
      </div>
    );
  }
export default App;
