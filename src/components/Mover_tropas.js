import Button from './Button';
import '../styles/style-mover-tropas.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Tablero from './Tablero';
import casa_caballero_azul from '../imgs/casa_caballero_azul.png';
import casa_caballero_rojo from '../imgs/casa_caballero_rojo.png';
import castillo_caballero_rojo from '../imgs/castillo_caballero_rojo.png'; 
import castillo_caballero_azul from '../imgs/castillo_caballero_azul.png';
import castillo_rojo from '../imgs/castillo rojo.png';
import casa_roja from '../imgs/casa.png';
import casa_azul from '../imgs/casa_azul.png';
import castillo_azul from '../imgs/castillo azul.png';

function MoverTropas({viewModal, show, match, count}){
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const { currentUser } = useAuth();
  const [tropas, setTropas] = useState(1);
  const [casilla1, setCasilla1] = useState('');
  const [casilla2, setCasilla2] = useState('');
  const [playerId, setPlayerId] = useState();
  const [player2, setPlayer2] = useState();
  const lista_casillas = ['Seleccione una casilla', 'A1', 'A2','A3','A4','B1', 'B2','B3','B4','C1', 'C2','C3','C4','D1', 'D2','D3','D4',
  'E1', 'E2','E3','E4'];
  useEffect(() => {
    try {
      const data = JSON.stringify({
        vacio: '',
      });
      const config = {
        method: 'get',
        data: data,
        url: `${process.env.REACT_APP_API_URL}/matches/${match}`,
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
        },
      };
      axios(config).then((response) => {
        setPlayerId(response.data.player1.id);
        setPlayer2(response.data.player2.id);
        response.data.casilla.forEach(element => {
        if (element.tipo === "castillo" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_caballero_azul
        } else if (element.tipo === "castillo" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_caballero_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_roja
        } else if (element.tipo === "castillo" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_azul
        }  else if (element.tipo === "castillo" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_rojo
        }
      });
      response.data.casilla_2.forEach(element => {
        if (element.tipo === "castillo" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_caballero_azul
        } else if (element.tipo === "castillo" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_caballero_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas > 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_caballero_rojo
        } else if (element.tipo === "casa" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_azul
        } else if (element.tipo === "casa" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = casa_roja
        } else if (element.tipo === "castillo" && element.player === playerId && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_azul
        }  else if (element.tipo === "castillo" && element.player === player2 && element.tropas === 0) {
          document.getElementsByClassName(element.coordenada)[1].src = castillo_rojo
        }
      });
    })
    } catch (error) {
      if (error.response.data === "No tienes permiso para acceder al tablero") {
        swal.fire({
        title: 'Error al pedir las partidas',
        text: error.response.data,
        icon: 'error',
        });
        return <Navigate to="/" />;
      }
    }
  }, [currentUser, match, player2, playerId, count]);
  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/"/>;

  }

  async function movimiento(event) {
    
    event.preventDefault();
    const casillas = {
      match_id: match,
      casillaOrigen: casilla1,
      casillaDestino: casilla2,
      numeroTropas: tropas,
    };
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/plays`,
      headers: {
        Authorization: `Bearer ${currentUser?.access_token}`,
      },
      data: casillas,
    };
    axios(config)
      .then((respuesta) => {
        viewModal();
        if (respuesta.data.mensaje === 'Has perdido la batalla') {
          swal.fire('Resultado de la batalla:', respuesta.data.mensaje, 'error');
        } else{
        swal.fire('Movimiento concretado!', respuesta.data.mensaje, 'success');
        }
      })
      .catch((error) => {
        swal.fire('El movimiento fallido!', error.response.data, 'error');
      });

  };

  return (
    <section id="MoverTropas" className={showHideClassName}>
      <div className="modal-content">
        <h3>Mover tropas</h3>
        <div className="tablero-casillas">
          <div className="casilla-origen">
            <p>Casilla de origen</p>
            <div className="select">
              <select onChange={(event) => setCasilla1(event.target.value)}>
                {lista_casillas.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="tablero-mover-tropas">
            <Tablero> </Tablero>
          </div>
          <div className="casilla-destino">
            <p>Casilla de destino</p>
            <div className="select">
              <select onChange={(event) => setCasilla2(event.target.value)}>
                {lista_casillas.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="cantidad-tropas">
          <p>Seleccione la cantidad de tropas que desea mover</p>
          <input
            onChange={(event) => setTropas(event.target.value)}
            type="number"
            min={1}
            placeholder="Número de tropas"
          />
        </div>
      </div>

      <div className="boton">
        <Button
          id={'btn_2'}
          id_2={'btn-btn-2'}
          onClick={(event) => movimiento(event)}
          title="Realizar movimiento"
        />
      </div>
      <div className="boton">
        <button
          type="button"
          id="CloseMoverTropas"
          className="pretty-button"
          onClick={viewModal}
        >
          Volver
        </button>
      </div>
    </section>
  );
}

export default MoverTropas;