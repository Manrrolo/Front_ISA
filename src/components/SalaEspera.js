import Navbar from './Nabvar';
import '../styles/style_juego.css';
import Button from './Button';
import axios from 'axios';
import '../styles/style_preloader.css';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Sala() {
  const { salaId } = useParams();
  const { currentUser, isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);
  const [playerId, setPlayerId] = useState();
  const [player2, setPlayer2] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const data = JSON.stringify({
        vacio: '',
      });
      const config = {
        method: 'get',
        data: data,
        url: `${process.env.REACT_APP_API_URL}/matches/sala/${salaId}`,
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
        },
      };
      axios(config).then((response) => {
        setPlayerId(response.data.player1.id);
        setPlayer2(response.data.player2.id);
      });
      axios(config).catch((error) => {;
        swal.fire({
          title: 'Error al cargar la sala de espera',
          text: error.response.data,
          icon: 'error',
        });
        navigate('/partidas');
      })
    } catch (error) {
      swal.fire({
        title: 'Error al pedir las partidas',
        text: error.response.data,
        icon: 'error',
      });
      return <Navigate to="/" />;
    }
  }, [currentUser, player2, playerId, navigate, salaId]);
  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/" />;
  }
  if (loading) {
    <div className="loading">Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="border_1">
        <div className="space"></div>
      </div>
      <div className="form">
        <div className="titulo_admin">Sala de Espera</div>
        <textarea
          name="Message"
          cols="40"
          rows="10"
          class="textarea"
          placeholder="Password"
        ></textarea>
        <div className="boton">
          <Button
            id={'btn_2'}
            id_2={'btn-btn-2'}
            title="Unirse"
          />
        </div>
      </div>
    </>
  );
}

export default Sala;
