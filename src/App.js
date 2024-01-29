import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Accueil } from './views/Accueil/Accueil';
import { NavBar } from './views/Navbar';
function App() {
  return (
    <div>
      <h1>Mon main</h1>
      <header>
      <NavBar/>
      </header>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
    </div>
  );
}
export default App;
