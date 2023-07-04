import axios from 'axios';
import { Formik } from 'formik';
import Navbar from './Nabvar';
import '../styles/style_registro.css';
import logo_sin_letras from '../imgs/logo_sin_letras.png';
import swal from 'sweetalert2'
import { useState } from 'react';
import '../styles/style_preloader.css';

function validarForm(valores) {
  const errores = {};
  // Validar usuario
  if (valores.username.indexOf(' ') > -1) {
    errores.username = 'Tu nombre de usuario no puede contener espacio';
  } else if (!/(?=.{6,15})/.test(valores.username)) {
    errores.username =
      'Tu nombre de usuario debe tener entre 6 y 15 caracteres';
  }
  // Validar password
  let noError = true;
  const tests = {
    largoMinimo: /(?=.{8,})/,
    minuscula: /^(?=.*[a-z])/,
    mayuscula: /(?=.*[A-Z])/,
    numero: /(?=.*[0-9])/,
    caracterEspecial: /(?=.*[!@#$%^&*_-])/,
  };
  const mensajesPosibles = {
    largoMinimo: 'mínimo 8 caracteres \n',
    minuscula: 'al menos una letra minúscula \n',
    mayuscula: 'al menos una letra mayúscula \n',
    numero: 'al menos una número \n',
    caracterEspecial: 'al menos una caracter especial \n',
  };
  const evaluaciones = [
    'minuscula',
    'mayuscula',
    'numero',
    'caracterEspecial',
    'largoMinimo',
  ];
  // Comprobar espacio
  if (valores.password.indexOf(' ') > -1) {
    noError = false;
    errores.password = 'Tu contraseña no debe contener espacio';
  }
  evaluaciones.forEach((evaluacion) => {
    const cumpleEvaluacion = tests[evaluacion].test(valores.password);
    if (!cumpleEvaluacion) {
      if (noError) {
        noError = false;
        errores.password = `Tu contraseña debe tener ${mensajesPosibles[evaluacion]}`;
      }
    }
  });
  // Validar confirmación password
  if (valores.password !== valores.passwordConfirmation) {
    errores.passwordConfirmation = 'Las contraseñas deben ser iguales';
  }
  // Validar email
  if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]+$/.test(valores.email)) {
    errores.email = 'Debe ingresar un correo válido';
  }
  return errores;
}


function Registro() {
  const [loading, setLoading] = useState(false);
  function crearUsuario(valores, resetForm) {
    setLoading(true);
    resetForm();

    const datos = JSON.stringify({
      nombreUsuario: valores.username,
      correo: valores.email,
      password: valores.password,
    });
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/auth/signup`,
      headers: { 'Content-Type': 'application/json' },
      data: datos,
    };
    axios(config)
      .then((respuesta) => {
        swal.fire('Registro exitoso!', respuesta.data.message, 'success');
        setLoading(false);
      })
      .catch((error) => {
        swal.fire('Registro fallido!', error.response.data, 'error');
      });

  }
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="cuerpo-registro">
        <div className="border-registro">
          <img className="img_logo" src={logo_sin_letras} alt="" />
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: '',
            }}
            validate={(valores) => validarForm(valores)}
            onSubmit={(valores, { resetForm }) =>
              crearUsuario(valores, resetForm)
            }
          >
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
            }) => (
              <form className="sign_up" onSubmit={handleSubmit}>
                <p>¿No tienes cuenta? Regístrate</p>
                <label> Email</label>
                <div className="cantidad-tropas">
                  <input
                    type="text"
                    placeholder="Ingrese su email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                <p className="errorRed">{touched.email ? errors.email : ''}</p>

                <label>Nombre de usuario</label>
                <div className="cantidad-tropas">
                  <input
                    type="text"
                    placeholder="Ingresa su nombre de usuario"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                <p className="errorRed">
                  {touched.username ? errors.username : ''}
                </p>

                <label>Contraseña</label>
                <div className="cantidad-tropas">
                  <input
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                <p className="errorRed">
                  {touched.password ? errors.password : ''}
                </p>

                <label>Repita su contraseña</label>
                <div className="cantidad-tropas">
                  <input
                    type="password"
                    id="passwordConfirmation"
                    placeholder="Confirma tu contraseña"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <p className="errorRed">
                  {touched.passwordConfirmation
                    ? errors.passwordConfirmation
                    : ''}
                </p>
                <div>
                  <button id="btn-cuenta">Crear cuenta</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Registro;