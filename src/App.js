import Logoeqo from './Logoeqo.png'
import './App.css';
import { Form, Route, Routes } from 'react-router-dom';
import { Accueil } from './views/Accueil/Accueil';
import { NavBar } from './views/Navbar';
function App() {
  return (
    <div>
      <header>
          <img className='Eqopic' src={Logoeqo} />
        <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
      <footer>
      </footer>
    </div>
  );
}
export default App;
