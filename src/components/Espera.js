import '../styles/style_partidas.css';
import '../styles/style_sala_espera.css';
import Anchor from './Anchor';
import useAuth from '../hooks/useAuth';
import jwtDecode from 'jwt-decode';
function Espera(props) {
  const { sala } = props;
  const { currentUser } = useAuth();
  let clase = false;
  let token = jwtDecode(currentUser?.access_token);
  if (sala.estado === 'En Preparación') {
    clase = true;
  }
  if (token.id === sala.player1) {
    clase = true;
  }
  if (token.admin) {
    clase = true;
  }
  return (
    <>
      <div className="partida">
        <div className="partida-info">
          <div className="progress-container">
            <div className="progress"></div>
            <span className="progress-text">
              {sala.player2 != null ? 2 : 1}/2 Jugadores
            </span>
          </div>
          <div className="contenedor-match">
            <h6>Tipo: {sala.tipo}</h6>
            <h6>Estado: {sala.estado}</h6>
          </div>
          <h2 className="h2_partida">Sala: {sala.nombre}</h2>
          {clase ? (
            <Anchor
              title={'Unirse'}
              link={`/sala/${sala.id}`}
              class="btn"
            ></Anchor>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Espera;
