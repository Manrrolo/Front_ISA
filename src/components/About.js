import Navbar from './Nabvar';
import '../styles/style_about.css';
import logo_2 from '../imgs/logo 2.png';
import grill from '../imgs/grill.png';
import js_logo from '../imgs/js-logo.png';
import version from '../imgs/version.png';
import icon from '../imgs/icon.png';

function About() {
  return (
    <>
      <Navbar />
      <div className="cuerpo-about">
        <div className="container">
          <div className="box">
            <img src={logo_2} alt="" className="img-move" />
            <h2 className="h2">Acerca del Juego</h2>
            <br />
            <p>
              WERLIN es un juego de 2 jugadores, donde deben de tomar el rol de
              monarca de su reino administrando los recursos mediante su ingenio
              y suerte para enfrentarse en una batalla de escuadrones para la
              dominación de los territorios enemigos.
            </p>
          </div>
          <div className="box">
            <img src={grill} alt="" className="img-move" />
            <h2 className="h2">Contexto del proyecto</h2>
            <br />
            <p>
              Este juego corresponde a un proyecto del curso IIC2513,
              desarrollado por el grupo "Asado Familiar", compuesto por Franco
              Briceño, Manuel Sepúlveda y Francisca Sazo.
            </p>
          </div>
          <div className="box">
            <img src={js_logo} alt="" className="img-move" />
            <h2 className="h2">Entorno de desarrollo</h2>
            <br />
            <p>El proyecto utiliza JavaScript, HTML y css.</p>
          </div>
          <div className="box">
            <img src={version} alt="" className="img-move" />
            <h2 className="h2">Versión Actual</h2>
            <br />
            <p>
              Actualmente se muestran solo páginas estáticas y pronto se
              continuará con el desarrollo del juego, permitiendo su
              funcionamiento.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Versión 1.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
