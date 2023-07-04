import '../styles/style_partidas.css';
import Anchor from './Anchor';
import useAuth from '../hooks/useAuth';
import jwtDecode from 'jwt-decode';
import swal from 'sweetalert2'
import axios from 'axios';

function Usuario(props) {
  const { usuario } = props;
  const { currentUser } = useAuth();
  function eliminarUsuario(id_usuario) {
    const datos = {
      data: '',
    };
    const config = {
      url: `${process.env.REACT_APP_SERVER_URL}/admin/delete_player/${id_usuario}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser?.access_token}`,
      },
      data: datos,
    };
    axios(config)
      .then((response) => {
        swal.fire('Usuario eliminado', response.data.data, 'success');
      })
      .catch((error) => {
        swal.fire('Error al Eliminar usuario', error.response.data, 'error');
      });
  }
  let clase = false;
  let token = jwtDecode(currentUser?.access_token);
  if (token.id === usuario.player_1 || token.id === usuario.player_2) {
    clase = true;
  }
  if (token.admin) {
    clase = true;
  }
  return (
    <>
      <div className="partida">
        <div className="partida-info">
          <div className="progress-container"></div>
          <h2 className="h2_partida">Nombre: {usuario.nickname}</h2>
          <h2 className="h2_partida">Email: {usuario.email}</h2>
          {clase ? (
            <>
              <Anchor
                title={'Eliminar usuario'}
                click={() => {
                  eliminarUsuario(usuario.id);
                }}
                class={"btn"}
              ></Anchor>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Usuario;
