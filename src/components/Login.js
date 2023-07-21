import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert2';
import Navbar from './Nabvar';
import logo from '../imgs/logo_2.png';
import '../styles/style_iniciosesion.css';
import '../styles/style_preloader.css';
function Login() {
  const [email, setEmail] = useState('');
  const [hash_contrasena, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser, handleUserLogin } = useAuth();

  async function iniciarSesion(event) {
    event.preventDefault();
    setLoading(true);
    const datos = JSON.stringify({
      email: email,
      hash_contrasena,
    });

    const config = {
      url: `${process.env.REACT_APP_SERVER_URL}/auth/login`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: datos,
    };
    axios(config)
      .then((response) => {
        const user = response.data;
        handleUserLogin(user);
        setEmail('');
        setPassword('');
        swal.fire({
          title: 'inicio de sesión exitoso',
          icon: 'success',
        });
      })
      .catch((error) => {
        setPassword('');
        swal.fire({
          title: 'Error al iniciar sesión',
          text: error.response.data,
          icon: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (currentUser) return <Navigate to="/chatbot" />;
  return (
    <>
      <Navbar />
      <div className="cuerpo-inicio-sesion">
        <div className="border-inicio-sesion">
          <img className="img_logo" src={logo} alt="" />
          <form className="login">
            <p>Iniciar sesión</p>
            <label> Email</label>
            <div className="cantidad-tropas">
              <input
                type="text"
                placeholder="Ingrese su email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <label>Contraseña</label>
            <div className="cantidad-tropas">
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div>
              <button id="btn-login" onClick={(event) => iniciarSesion(event)}>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
