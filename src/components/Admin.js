import React, { useEffect, useState } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';
import '../styles/style_partidas.css';
import '../styles/style_admin.css';
import '../styles/style_preloader.css';
import { Navigate } from 'react-router-dom';
import PartidaList from './ListPartida';
import useAuth from '../hooks/useAuth';
import Navbar from './Nabvar';
import jwtDecode from 'jwt-decode';
import UsuarioList from './ListUsuario';
const Admin = () => {
  const { currentUser } = useAuth();
  const [partidas, setPartida] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  let token = jwtDecode(currentUser?.access_token);
  useEffect(() => {
    setLoading(true);
    try {
      const data = JSON.stringify({
        vacio: '',
      });
      const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/panel`,
        headers: {
          Authorization: `Bearer ${currentUser?.access_token}`,
          data: data,
        },
      };
      axios(config).then((response) => {
        const resPartida = response.data.matches;
        const resUsario = response.data.players;
        setPartida(resPartida);
        setUsuarios(resUsario);
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
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/" />;
  }

  if (!token.admin) {
    swal.fire({
      title: 'Acceso no autorizado',
      text: 'No cuentas con permisos de admin',
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
            <div className="admin-container-1">
              <div className="text_admin">
                <div className="titulo_admin">Lista de Usuarios</div>
                <UsuarioList usuarios={usuarios} />
              </div>
              <div className="border_1">
                <div className="space"></div>
              </div>
              <div className="text_admin">
                <div className="titulo_admin">Lista de Partidas</div>
                <PartidaList partidas={partidas} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
