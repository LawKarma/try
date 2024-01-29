import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Accueil } from './views/Accueil/Accueil';
function App() {
  return (
    <div>
      <h1>Mon main</h1>
      <Routes>
        <Route path='/' element={<Accueil />} />
      </Routes>
    </div>
  );
}
export default App;
