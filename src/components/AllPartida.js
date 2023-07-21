import React, { useEffect, useState } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';
import '../styles/style_partidas.css';
import '../styles/style_preloader.css';
import { Navigate } from 'react-router-dom';
import PartidaList from './ListPartida';
import useAuth from '../hooks/useAuth';
import Navbar from './Nabvar';
import NewPartidaForm from './NewPartida';
import EsperaList from './ListEspera';
const Partidas = () => {
  const { currentUser } = useAuth();
  const [partidas, setPartida] = useState([]);
  const [salaEspera, setsalaEspera] = useState([]);
  const [salaMatch, setsalaMatch] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      const data = JSON.stringify({
        vacio: '',
      });
      const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/matches`,
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
          data: data,
        },
      };
      axios(config).then((response) => {
        const resPartida = response.data.matches;
        setPartida(resPartida);
        setsalaEspera(response.data.sala1);
        setsalaMatch(response.data.sala2);
      });
      setLoading(false);
    } catch (error) {
      swal.fire({
        title: 'Error al pedir las partidas',
        text: error.response.data,
        icon: 'error',
      });
    }
  }, [currentUser]);

  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder acceder al chatbot',
      icon: 'warning',
    });
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div>
            <Navbar />
            <div className="partidas-container-1">
              <div className="text_admin">
                <div className="titulo_admin">Nueva Partida</div>
                <NewPartidaForm />
              </div>
              <div className="border_1">
                <div className="space"></div>
              </div>
              <div className="text_admin">
                <div className="titulo_admin">Listas de salas de espera</div>
                <EsperaList salas={salaEspera} />
              </div>
              <div className="border_1">
                <div className="space"></div>
              </div>
              <div className="text_admin">
                <div className="titulo_admin">Listas de partidas</div>
                <PartidaList partidas={partidas} />
              </div>
              <div className="border_1">
                <div className="space"></div>
              </div>
              <div className="text_admin">
                <div className="titulo_admin">Salas de espera del usuario</div>
                <EsperaList salas={salaMatch} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Partidas;
