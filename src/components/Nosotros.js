import Navbar from './Nabvar';
import '../styles/style_nosotros.css';
import icon from '../imgs/icon.png';
import mago_azul from '../imgs/mago azul izq.png';
import caballero_azul from '../imgs/caballero azul izq.png';
import troll_azul from '../imgs/Troll azul izq.png';
function Nosotros() {
  return (
    <>
      <Navbar />
      <div className="cuerpo">
        <div className="text_nosotros">
          Somos el grupo Asado familiar
          <p>Conformado por los siguientes integrantes:</p>
        </div>
        <div className="contenedor-nosotros">
          <div className="card_nos">
            <div className="circle"></div>
            <div className="content">
              <h2>Franco Briceño</h2>
              <p>
                <img src={icon} alt="" className="icon" /> Estudiante de 5to año
                de Ingeniería.
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> Major en ingeniería
                de software y minor industrial
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> Fanático del fútbol y
                del FIFA.
              </p>
            </div>
            <img src={caballero_azul} alt="" className="perfil" />
          </div>
          <div className="card_nos">
            <div className="circle"></div>
            <div className="content">
              <h2>Francisca Sazo</h2>
              <p>
                <img src={icon} alt="" className="icon" /> Estudiante de 3er año
                de Ingeniería.
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> Major en ingeniería
                de software y minor industrial
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> Me gusta hacer
                deporte y leer
              </p>
            </div>
            <img src={mago_azul} alt="" className="perfil" />
          </div>
          <div className="card_nos">
            <div className="circle"></div>
            <div className="content">
              <h2>Manrrolo</h2>
              <p>
                <img src={icon} alt="" className="icon" /> Estudiante de 5to año
                de Ingeniería.
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> Me gustaría conocer
                otros países.
              </p>
              <p>
                <img src={icon} alt="" className="icon" /> En progreso del 100%
                en Jedi Fallen Order
              </p>
            </div>
            <img src={troll_azul} id="troll" alt="" className="perfil" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;
