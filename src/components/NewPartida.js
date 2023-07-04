import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2'
import useAuth from '../hooks/useAuth';
import Button from './Button';
import { Navigate } from 'react-router-dom';

const NewPartidaForm = () => {
  const { currentUser } = useAuth();
  const [tipo_partida, setPartidaTipo] = useState('');
  const [Nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const lista_partida = ['Seleccione una opción', 'Publica', 'Privada'];
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (tipo_partida === 'Privada') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [tipo_partida]);
  async function newpartida(event) {
    event.preventDefault();
    const sala = {
      nombre: Nombre,
      tipo: tipo_partida,
      password: password,
    };
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/matches/sala`,
      headers: {
        Authorization: `Bearer ${currentUser?.access_token}`,
      },
      data: sala,
    };
    axios(config)
      .then((response) => {
        swal.fire(
          'Creación de la sala de espera',
          response.data.mensaje,
          'success',
        );
        })
      .catch((error) => {
        swal.fire('Error en la creación de la partida', error.response.data, 'error');
      });
  }
  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/" />;
  }
  if (show) {
    return (
      <div className="boton">
        <Button
          id={'btn_2'}
          id_2={'btn-btn-2'}
          onClick={() => setShow(false)}
          title="Crear Partida"
        />
      </div>
    )
  }

  return (
    <div className="cuerpo-registro">
      <div className="border-partida">
        <div className="modal-content">
          <div className="casilla-origen">
            <p>Tipo de partida</p>
            <div className="select">
              <select
                required
                onChange={(event) => setPartidaTipo(event.target.value)}
              >
                {lista_partida.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="cantidad-tropas">
          <p>Seleccione un nombre para la sala</p>
          <input
            onChange={(event) => setNombre(event.target.value)}
            type="textarea"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="cantidad-tropas">
          <p>Seleccione una contraseña para la sala</p>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="textarea"
            placeholder="Password"
            disabled={disabled}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
            title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres"
          />
        </div>
        <div className="boton-partida">
          <Button
            id={'btn_2'}
            id_2={'btn-btn-2'}
            onClick={(event) => newpartida(event)}
            title="Crear"
          />
          <div className="boton">
            <Button
              id={'btn_2'}
              id_2={'btn-btn-2'}
              onClick={() => setShow(true)}
              title="Volver"
            />
          </div>
        </div>
      </div>
    </div>
  );
};;

export default NewPartidaForm;
