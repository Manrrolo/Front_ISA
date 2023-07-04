import Navbar from './Nabvar';
import '../styles/style_juego.css';
import Tablero from './Tablero';
import { Howl } from 'howler';
import sound1 from '../music/fail.mp3'
import sound2 from '../music/victory.mp3'
import Button from './Button';
import casa_caballero_azul from '../imgs/casa_caballero_azul.png';
import casa_caballero_rojo from '../imgs/casa_caballero_rojo.png';
import castillo_caballero_rojo from '../imgs/castillo_caballero_rojo.png'; 
import castillo_caballero_azul from '../imgs/castillo_caballero_azul.png';
import castillo_rojo from '../imgs/castillo rojo.png';
import casa_roja from '../imgs/casa.png';
import casa_azul from '../imgs/casa_azul.png';
import castillo_azul from '../imgs/castillo azul.png';
import axios from 'axios';
import '../styles/style_preloader.css';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Tienda from './Tienda';
import MoverTropas from './Mover_tropas';
import montaña from '../imgs/montaña.png';
import campo from '../imgs/campo.png';
import bosque from '../imgs/bosque.png';
import colina from '../imgs/colina.png';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Game() {
  const { matchId } = useParams();
  const { currentUser, usuario, isAdmin } = useAuth();
  const [loading, setLoading] = useState(true);
  const [playerId, setPlayerId] = useState();
  const [player2, setPlayer2] = useState();
  const [count, setCount] = useState(0);
  const [verTienda, setVerTienda] = useState(false);
  const [moverTropas, setMoverTropas] = useState(false);
  const [arcilla, setArcilla] = useState(0);
  const [mineral, setMineral] = useState(0);
  const [trigo, setTrigo] = useState(0);
  const [madera, setMadera] = useState(0);
  const [arcilla2, setArcilla2] = useState(0);
  const [mineral2, setMineral2] = useState(0);
  const [trigo2, setTrigo2] = useState(0);
  const [madera2, setMadera2] = useState(0);
  const [jugador, setJugador] = useState("prueba");
  const functViewModal = viewModal;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  })
  useEffect(() => {
    try {
      const data = JSON.stringify({
        vacio: '',
      });
      const config = {
        method: 'get',
        data: data,
        url: `${process.env.REACT_APP_API_URL}/matches/${matchId}`,
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
        },
      };
      axios(config).then((response) => {
        setPlayerId(response.data.player1.id);
        setPlayer2(response.data.player2.id);
        response.data.casilla.forEach(element => {
        if (element.tipo === "castillo" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_caballero_azul
        } else if (element.tipo === "castillo" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_caballero_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_roja
        } else if (element.tipo === "castillo" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_azul
        }  else if (element.tipo === "castillo" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_rojo
        }
        if (element.region === 'campo'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${campo})`;
        }
        if (element.region === 'montaña'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${montaña})`;
        }
        if (element.region === 'bosque'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${bosque})`;
        }
        if (element.region === 'colina'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${colina})`;
        }
      });
      response.data.casilla_2.forEach(element => {
        if (element.tipo === "castillo" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_caballero_azul
        } else if (element.tipo === "castillo" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_caballero_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = casa_roja
        } else if (element.tipo === "castillo" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_azul
        }  else if (element.tipo === "castillo" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[0].src = castillo_rojo
        }
        if (element.region === 'campo'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${campo})`;
        }
        if (element.region === 'montaña'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${montaña})`;
        }
        if (element.region === 'bosque'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${bosque})`;
        }
        if (element.region === 'colina'){
          document.getElementsByClassName(element.coordenada)[0].style.backgroundImage = `url(${colina})`;
        }
      });
      if (response.data.current === response.data.player2.id) {
        setJugador(response.data.player2.nickname);
        document.getElementsByClassName('color')[0].style.color = 'blue';
      } else {
        document.getElementsByClassName('color')[0].style.color = 'red';
      }
      if (response.data.current === response.data.player1.id) {
        setJugador(response.data.player1.nickname);
        document.getElementsByClassName('color')[0].style.color = 'blue';
      } else {
        document.getElementsByClassName('color')[0].style.color = 'red';
      }
      if (isAdmin) {
        setArcilla(response.data.matches.arcilla_1)
        setMadera(response.data.matches.madera_1)
        setTrigo(response.data.matches.trigo_1)
        setMineral(response.data.matches.mineral_1)
        setArcilla2(response.data.matches.arcilla_2)
        setMadera2(response.data.matches.madera_2)
        setTrigo2(response.data.matches.trigo_2)
        setMineral2(response.data.matches.mineral_2)       
      } else {
        if (response.data.matches.player_1 === usuario) {
          setArcilla(response.data.matches.arcilla_1)
          setMadera(response.data.matches.madera_1)
          setTrigo(response.data.matches.trigo_1)
          setMineral(response.data.matches.mineral_1)
        }
        if (response.data.matches.player_2 === usuario) {
          setArcilla(response.data.matches.arcilla_2)
          setMadera(response.data.matches.madera_2)
          setTrigo(response.data.matches.trigo_2)
          setMineral(response.data.matches.mineral_2)
        }}
      });
      axios(config).catch((error) => {;
        swal.fire({
          title: 'Error al cargar partida',
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
  }, [currentUser, matchId, player2, playerId, count, usuario, isAdmin, navigate]);
  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/" />;
  }
  if (loading) {
    <div className="loading">Loading...</div>
  }
  const sound_1 = new Howl({
    src : [sound1],
    html5: true 
  });
  const sound_2 = new Howl({
    src: [sound2],
    html5: true,
  });
  function play_2() {
    sound_2.play();
  } 
  function play(e) {
    e.preventDefault();
    sound_1.play();
    setTimeout(play_2, 4000)
  }

  function viewModal() {
    if (verTienda) {
      setVerTienda(false);
    } else {
      setVerTienda(true);
    }
  }
  function viewModalTropas() {
    if (moverTropas) {
      setMoverTropas(false);
    } else {
      setMoverTropas(true);
    }
  }
  return (
    <>
      <Navbar />
      <Tablero />
      {isAdmin ? (
        <>
          <div className="inventario">
            <h3 className="color">Turno de {jugador}</h3>
          </div>
          <div className="inventario">
            <h3>Inventario</h3>
            <p>Se muestran las unidades de cada recurso que posees</p>
            <p>Trigo: {trigo}</p>
            <p>Arcilla: {arcilla}</p>
            <p>Mineral: {mineral}</p>
            <p>Madera: {madera}</p>
          </div>
          <div className="inventario">
            <h3>Inventario</h3>
            <p>Se muestran las unidades de cada recurso que posees</p>
            <p>Trigo: {trigo2}</p>
            <p>Arcilla: {arcilla2}</p>
            <p>Mineral: {mineral2}</p>
            <p>Madera: {madera2}</p>
          </div>
        </>
      ) : (
        <>
          <div className="inventario">
            <h3 className="color">Turno de {jugador}</h3>
          </div>
          <div className="inventario">
            <h3>Inventario</h3>
            <p>Se muestran las unidades de cada recurso que posees</p>
            <p>Trigo: {trigo}</p>
            <p>Arcilla: {arcilla}</p>
            <p>Mineral: {mineral}</p>
            <p>Madera: {madera}</p>
          </div>
        </>
      )}

      <div className="border_1">
        <div className="space"></div>
      </div>
      <div className="botones">
        <Button
          title={'efecto sonido'}
          onClick={play}
          id={'btn_2'}
          id_2={'btn-btn-2'}
        />
        <Tienda
          show={verTienda}
          viewModal={functViewModal}
          className="inventario"
          match={matchId}
        />
        <Button
          title={'Tienda'}
          className="pretty-button"
          onClick={viewModal}
          id={'btn_2'}
          id_2={'btn-btn-2'}
        />
        <MoverTropas
          show={moverTropas}
          viewModal={viewModalTropas}
          match={matchId}
          count={count}
          className="movertropas"
        />
        <Button
          id={'btn_2'}
          id_2={'btn-btn-2'}
          title={'Mover Tropas'}
          className="pretty-button"
          onClick={viewModalTropas}
        />
        <Button
          onClick={() => setCount(count + 1)}
          id={'btn_2'}
          id_2={'btn-btn-2'}
          title={'Refresh'}
        />
      </div>
    </>
  );
}

export default Game;
