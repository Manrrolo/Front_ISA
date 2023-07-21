import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Reglas from './components/Reglas';
import Login from './components/Login';
import Registro from './components/Registro';
import Nosotros from './components/Nosotros';
import Partidas from './components/AllPartida';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Game from './components/Game';
import Error404 from './components/Error404';
import AuthContextProvider from './contexts/AuthContext';
import NewPartida from './components/NewPartida';
import Sala from './components/SalaEspera';
import Admin from './components/Admin';

function Routing() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/reglas'} element={<Reglas />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/registro'} element={<Registro />} />
          <Route path={'/nosotros'} element={<Nosotros />} />
          <Route path={'/partidas'} element={<Partidas />} />
          <Route path={'/chatbot'} element={<Chatbot />} />
          <Route path={'/newpartida'} element={<NewPartida />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/admin'} element={<Admin />} />
          <Route path={'/game/:matchId'} element={<Game />} />
          <Route path={'/sala/:salaId'} element={<Sala />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Routing;
