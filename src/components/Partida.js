import '../styles/style_partidas.css';
import Anchor from './Anchor';
import useAuth from '../hooks/useAuth';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert2'
import axios from 'axios';
function Partida(props) {
  const { partida } = props;
  const { currentUser } = useAuth();
  let clase = false;
  let admin = false;
  let token = jwtDecode(currentUser?.access_token);
  if (token.id === partida.player_1 ||token.id === partida.player_2) {
    clase = true;
  }
  if (token.admin) {
    admin = true;
  }
  function eliminarPartida(id_partida) {
    const datos = {
      data: '',
    };
    const config = {
      url: `${process.env.REACT_APP_SERVER_URL}/admin/delete_match/${partida.id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser?.access_token}`,
      },
      data: datos,
    };
    axios(config)
      .then((response) => {
        swal.fire('Partida eliminada', response.data.data, 'success');
      })
      .catch((error) => {
        swal.fire('Error al Eliminar partida', error.response.data, 'error');
      });
  }
  return (
    <>
      <div className="partida">
        <div className="partida-info">
          <div className="progress-container">
            <div className="progress"></div>
            <span className="progress-text">
              {partida.player_2 != null ? 2 : 1}/2 Jugadores
            </span>
          </div>
          <div className="contenedor-match">
            <h6>Tipo: {partida.tipo}</h6>
            <h6>Estado: {partida.estado}</h6>
          </div>
          <h2 className="h2_partida">Sala: {partida.nombre}</h2>
            {clase ? (
              <Anchor
              title={'Unirse'}
              link={`/game/${partida.id}`}
              class="btn"
            ></Anchor>
            ) : null}
            {admin ? (
              <>
              <Anchor
                title={'Eliminar partida'}
                click={() => {
                  eliminarPartida(partida.id);
                }}
                class={"btn"}
              ></Anchor>
                            <Anchor
              title={'Unirse'}
              link={`/game/${partida.id}`}
              class="btn"
            ></Anchor>
            </>
            ) : null}
        </div>
      </div>
    </>
  );
}

export default Partida;
