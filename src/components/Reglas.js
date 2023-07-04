import Navbar from './Nabvar';
import '../styles/style_reglas.css';
import icon from '../imgs/icon.png';
import bosque from '../imgs/bosque2.png';
import colina from '../imgs/colina2.png';
import montaña from '../imgs/montaña2.png';
import campo from '../imgs/campo2.png';
import casa_azul from '../imgs/casa_azul.png';
import casa_rojo from '../imgs/casa.png';
import castillo_azul from '../imgs/castillo azul.png';
import castillo_rojo from '../imgs/castillo rojo.png';
import caballero_azul from '../imgs/caballero azul izq.png';
import caballero_rojo from '../imgs/Caballero_Rojo.png';
import mago_azul from '../imgs/mago azul izq.png';
import mago_rojo from '../imgs/mago rojo izq.png';
import troll_azul from '../imgs/Troll azul izq.png';
import troll_rojo from '../imgs/troll rojo izq.png';
import incendio from '../imgs/incendio.png';
import oro from '../imgs/oro.png';
import plaga from '../imgs/plaga.png';
import erupcion from '../imgs/erupcion.png';
import mejora from '../imgs/mejora.png';
import arcilla from '../imgs/arcilla.png';
import tronco from '../imgs/Tronco.png';
import trigo from '../imgs/Trigo.png';
import mineral from '../imgs/Mineral.png';
import Engranaje from './Engranaje';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Anchor from './Anchor';
import $ from 'jquery';
function Reglas() {
  function color_1(e) {
    e.target.style.color = 'red';
  }
  function color_2(e) {
    e.target.style.color = 'blue';
  }
  var body = $('html, body');
  function arriba() {
    body.stop().animate({ scrollTop: 0 }, 500, 'swing');
  }
  return (
    <>
      <Navbar />
      <Engranaje />
      <span className="ir_arriba" onClick={arriba}>
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
      <div className="cuerpo">
        <div className="border_1" id="section0">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Indice
              </span>
            </h2>
            <div className="idc-box">
              <ul className="idc-lista">
                <li>
                  <Anchor
                    link={'#section0'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Descripción
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section1'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Objetivo
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section2'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Mapa
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section3'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Estructuras
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section4'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Tropas
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section5'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Evento Aleatorio
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section6'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Recursos e Inventario
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section7'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Tienda
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section8'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Reglas
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section9'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Sobre el inicio de sesión
                      </>
                    }
                    class={'indice'}
                  />
                </li>
                <li>
                  <Anchor
                    link={'#section10'}
                    title={
                      <>
                        <img src={icon} alt="" className="icon" />
                        Reglas generales
                      </>
                    }
                    class={'indice'}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border_1" id="section1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Descripción
              </span>
            </h2>
            <p>
              WERLIN es un juego de 2 jugadores, donde deben de tomar el rol de
              monarca de su reino administrando los recursos mediante su ingenio
              y suerte para enfrentarse en una batalla de escuadrones para la
              dominación de los territorios enemigos.
            </p>
          </div>
        </div>
        <div className="border_1" id="section2">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Objetivo
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> El objetivo final del
              juego es destruir el castillo del enemigo, consiguiendo así la
              victoria.
            </p>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Mapa
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> El mapa está dividido
              en 20 casillas hexagonales que representan distintas regiones, las
              cuales otorgan recursos a los jugadores dependiendo de la región
              que cada reino disponga exceptuando el territorio correspondiente
              al castillo.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> El mapa es
              completamente visible para ambos jugadores en todo momento, así
              como la posición de las tropas propias y del oponente. Sin
              embargo, la cantidad y tipo de unidad del oponente no es visible.
              El jugador deberá ir moviendo sus tropas destruir el castillo del
              enemigo y ganar la partida.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> En el mapa se generan
              los castillos de forma automática en cada esquina de este,
              mientras que las demás casillas se implementa las casas
              correspondiente de forma automática y de manera aleatoria se
              definen a que habitat corresponde cada casa. Debe de haber como
              mínimo un hábitat de cada tipo en los territorios de ambos
              jugadores
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Para el posicionamiento
              en el mapa se utiliza como un tablero de ajedrez con una fila de
              letras y una columna de números para poder identificar cada
              casilla
            </p>
          </div>
          <div className="cards-grid">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={bosque} alt="" />
                  <h2>Bosque</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Bosque</h2>
                  Otorga una unidad de madera
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={colina} alt="" />
                  <h2>Colina</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Colina</h2>
                  Otorga una unidad de arcilla
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={montaña} alt="" />
                  <h2>Montaña</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Montaña</h2>
                  Otorga una unidad de minerales
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={campo} alt="" />
                  <h2>Campo</h2>
                </div>
                <div className="flip-card-back">
                  <h2 id="section3">Campo</h2>
                  Otorga una unidad de trigo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Estructuras
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> En cada casilla en la
              que no haya un castillo habrá una casa. En cada turno, a cada
              jugador se le asignan los recursos correspondientes al hábitat de
              cada casa. Mediante la tienda se puede mejorar ambas estructuras
              para poder obtener mayor punto de defensa en las casas y castillo.
              En el caso de las casas, al mejorararlas aumenta la cantidad de
              recurso extraído de aquella casa.
            </p>
          </div>
          <div className="cards-grid">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={castillo_azul} alt="" className="castillo_reglas" />
                  <h2>Castillo</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Castillo</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> 30 Puntos de
                    defensa
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={casa_azul} alt="" className="casa_reglas" />
                  <h2>Casa</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Casa</h2>
                  <p>
                    <img src={icon} alt="" className="icon" id="section4" /> 10
                    Puntos de defensa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Tropas
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> Cada jugador cuenta con
              3 tipos de unidades. Cada una tiene un valor de ataque,
              resistencia y defensa. Las unidades pueden atacar o moverse a las
              casillas que son colindantes para conquistar o aumentar la defensa
              respectivamente.
            </p>
          </div>
          <div className="cards-grid">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={caballero_azul} alt="" className="caballero" />
                  <h2>Caballero</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Caballero</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> 3 Puntos de
                    ataque
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" /> 3 Puntos de
                    defensa
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" /> 3 Puntos de
                    resistencia
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={mago_azul} alt="" className="mago" />
                  <h2>Mago</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Mago</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> 6 Puntos de
                    ataque
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" /> 2 Puntos de
                    defensa
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" /> 3 Puntos de
                    resistencia
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={troll_azul} alt="" className="troll" />
                  <h2>Troll</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Troll</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> 1 Puntos de
                    ataque
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" /> 8 Puntos de
                    defensa
                  </p>
                  <p>
                    <img src={icon} alt="" className="icon" id="section5" /> 3
                    Puntos de resistencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Evento aleatorio
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> En cada ronda,
              posterior a que ambos jugadores hayan realizado sus movimientos,
              existe una probabilidad de que ocurra un evento aleatorio. Si el
              servidor determina que sí ocurrirá, definirá aleatoriamente cuál
              de los eventos va a suceder. De acuerdo a ese resultado realizará
              las acciones que implican el evento sobre cada jugador en la
              próxima ronda. Este evento puede ser beneficioso o perjudicial. Si
              es que se determina que un evento sucederá, hay un 60% posibilidad
              de que éste sea de carácter perjudicial y 40% de posibilidad que
              sea de carácter beneficioso. A continuación, se describen los
              eventos que podrían suceder.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Dependiendo del tipo de evento afecta un tipo de hábitat
              específico, se disminuye en la mitad los recurso de estos
              hábitats. Si al realizar la disminución a la mitad se genera un
              valor decimal, este valor se trunca.
            </p>
          </div>
          <div className="cards-grid">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={incendio} alt="" />
                  <h2>Incendio</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Incendio</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> Las regiones de
                    tipo bosque sufren de una disminución correspondiente a la
                    mitad de la extracción de recursos.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={oro} alt="" />
                  <h2>Fiebre de oro</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Fiebre de oro</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> La economía de
                    las regiones se ve en aumento, lo que provoca que la
                    extracción de recursos aumente al doble.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={plaga} alt="" />
                  <h2>Plaga</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Plaga</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> Las regiones de
                    tipo trigo se ven afectadas en una disminución
                    correspondiente a la mitad en la extracción de su recurso.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={erupcion} alt="" />
                  <h2>Erupción</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Erupción</h2>
                  <p>
                    <img src={icon} alt="" className="icon" /> Las regiones de
                    tipo montaña se ven afectadas con una disminución
                    correspondiente a la mitad en la extracción de sus
                    minerales.
                  </p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={mejora} alt="" />
                  <h2>Mejora gratis</h2>
                </div>
                <div className="flip-card-back">
                  <h2>Mejora gratis</h2>
                  <p>
                    <img src={icon} alt="" className="icon" id="section6" /> A
                    ambos jugadores se les otorga una mejora a una casa. Los
                    jugadores deciden qué casa mejorar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Recursos e Inventario
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> En el transcurso del
              juego se recolectan recursos a partir de cada casa que posea el
              jugador y se agregan a su inventario. Estos recursos servirán para
              comprar distintos ítems/Unidades en la tienda.
            </p>
            <p>En el inventario un jugador puede, ver sus recursos</p>
            <p>Hay 4 tipos de materiales:</p>
          </div>
          <div className="cards-grid">
            <div className="flip-card2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={tronco} alt="" />
                  <h2>Madera</h2>
                </div>
              </div>
            </div>
            <div className="flip-card2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={arcilla} alt="" />
                  <h2>Arcilla</h2>
                </div>
              </div>
            </div>
            <div className="flip-card2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={mineral} alt="" />
                  <h2>Mineral</h2>
                </div>
              </div>
            </div>
            <div className="flip-card2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={trigo} alt="" />
                  <h2 id="section7">Trigo</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Tienda
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> En la partida, cada
              jugador podrá comprar ítems/Unidades en la tienda con los recursos
              que haya recolectado, las unidades compradas aparecen en el
              castillo. Los ítems constan de tropas, mejoras para las casas o
              mejoras para los castillos.
            </p>
            <p>
              <img src={icon} alt="" className="icon" id="section8" /> La compra
              de ítems se debe realizar antes del movimiento de tropas. Si el
              jugador decide no comprar, entonces la tienda se bloquea hasta el
              siguiente turno.
            </p>
          </div>
        </div>
        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Reglas
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" /> Al iniciar la partida
              se define aleatoriamente que jugador juega primero en cada ronda.
              En la primera ronda, el jugador que sale elegido debe escoger el
              territorio que desea. A su contrincante se le es asignado el
              territorio restante. Luego, se recolectan los recursos de acuerdo
              a las regiones y la cantidad que hay de estos en su reino.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> En la siguiente ronda,
              los jugadores pueden mover sus tropas y/o hacer uso de la tienda.
              El movimiento de soldados puede suceder de la siguiente manera y
              con las siguiente finalidades:
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Puede mover sus tropas
              a una casilla colindante. Si esta casilla no tiene tropas enemigas
              pueden suceder dos escenarios:
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Si los puntos de
              defensa del castillo o casa es mayor al puntaje de ataque de las
              tropas que van hacia esa casilla, el jugador no puede conquistar
              el territorio. Por esto permanece en la casilla en la que estaba
              antes de atacar.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Si los puntos de
              defensa del castillo o casa es menor al puntaje de ataque de las
              tropas que van hacia esa casilla, el territorio es conquistado.
              Pasando a formar parte del jugador.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Por otro lado, si mueve
              sus tropas a una casilla enemiga y en ésta casilla se encuentran
              tropas enemigas, se genera una batalla para determinar quién se
              queda con la región. Puede mover sus tropas a una casilla de su
              mismo territorio para aumentar la defensa.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              El jugador puede mover más de una unidad a la vez mientras estos
              estén en la misma casilla.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Como se dijo anteriormente, cuando un jugador se mueve a una
              casilla colindante enemiga que posee tropas enemigas, se
              desencadena una batalla.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Para determinar el ganador, el servidor realiza una ponderación
              entre los puntos de resistencia, ataque y defensa de las tropas
              que están luchando. El jugador que posea más puntaje es el que
              gana la batalla y se queda con la región. En caso de que ambos
              jugadores tengan el mismo puntaje, el servidor define de manera
              aleatoria el ganador.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> En el caso de que un
              jugador esté siendo atacado, a los puntos de defensa que poseen
              sus tropas se le suman los puntos de defensa de la casa o castillo
              presente en la casilla.
            </p>
            <p>
              <img src={icon} alt="" className="icon" /> Como resultado de la
              batalla, las tropas del jugador que pierde se mueren. Por otro
              lado, el jugador que gana pierde un porcentaje de las tropas que
              pelearon. Si es que tiene entre 2 y 3 unidades pierde 1 unidad. Si
              es que tiene 1 unidad, ésta no muere. Si es que posee más de 10
              unidades de soldados, el número de unidades que va perder equivale
              al 55% del número de tropas muertas del rival. Si el resultado no
              da un número entero, se redondea hacia arriba.
            </p>
            <p id="section9">
              <img src={icon} alt="" className="icon" />
              Finalmente, en caso de que un jugador logre conquistar alguna
              región perteneciente a su contrincante y esta región posee una
              casa mejorada, la mejora se mantiene.
            </p>
          </div>
        </div>

        <div className="border_1">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Sobre el inicio de sesión
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" />
              Para poder jugar, el usuario debe crear un perfil ingresando su
              usuario y contraseña. Luego, puede entrar a la plataforma usando
              sus credenciales. Una vez dentro tiene dos opciones:
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Crear una nueva partida: en este caso tiene el rol de
              administrador. Al crear una, se asigna un código al azar a esa
              sala de 8 dígitos alfanuméricos. Su contrincante solo podrá
              acceder a la partida ingresando este código. Es decir, solo se
              realizan partidas privadas. El administrador además puede eliminar
              la partida
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Unirse a una partida iniciada: en este caso tiene el rol de
              jugador. Debe ingresar el código que le piden para entrar.
            </p>
            <p id="section10">
              <img src={icon} alt="" className="icon" /> Un usuario no
              registrado puede navegar por las pestañas de “Sobre nosotros”,
              “Cómo jugar" y "Acerca de",
            </p>
          </div>
        </div>
        <div className="border_1" id="section11">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Reglas de negocio
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" />
              Al presionar el botón 'Agregar jugadores' la aplicación crea jugadores en la base de 
              datos para luego ser usados para ingresar a una partida.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Al presionar el botón 'Agregar match' la aplicación crea la partida y las casillas 
              correspondientes a esa partida. Debe ingresar un usuario que existe.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Si entra a una partida que ya posee todos los integrantes que van a participar en ella 
              y trata de realizar una jugada, la aplicación no lo permitirá y le notificará
              sobre la situación
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Si trata de realizar una jugada en un tablero que no existe, la aplicación no lo
              permitirá y le notificará que esta acción no se puede realizar.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Si trata de realizar su jugada cuando no sea su turno, la aplicación no le permitirá
              realizar ninguna acción y le notificará que esto no se puede hacer.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Cuando mueva sus tropas a una casilla, la aplicación revisará si esta es colindante a
              la casilla en la que se encuentra en ese momento. Si no es colindante la aplicación
              no permitirá el movimiento.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Si desea moverse a una casilla con coordenadas no existentes la aplicación le notificará
              que este movimiento no se puede hacer.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Para cargar los cambios realizados por el contricante durante su jugada, debe 
              presionar el botón 'Recargar tablero'. Al hacer esto la aplicación recibirá el id de 
              la partida y el id del jugador que realiza la jugada para verificar si el jugador es 
              participante de esa partida. Luego, moverá los tropas al lugar donde el jugador decidió.
            </p>
          </div>
        </div>
        <div className="border_1" id="section11">
          <div className="text_reglas">
            <h2>
              <span
                className="color"
                onMouseOver={color_2}
                onMouseOut={color_1}
              >
                Reglas generales
              </span>
            </h2>
            <p>
              <img src={icon} alt="" className="icon" />
              Una vez que un usuario crea una partida, tiene 24 horas para que
              se una un contrincante a ésta. De lo contrario, la partida se
              borrará y deberá iniciar otra.
            </p>
            <p>
              <img src={icon} alt="" className="icon" />
              Cada jugador dispone de 1 hora para realizar su jugada. En caso de
              que no cumpla con este requisito, su contrincante obtiene la
              victoria.
            </p>
          </div>
        </div>

        <div className="border_1">
          <div className="space"></div>
        </div>
      </div>
    </>
  );
}

$(function () {
  $('.color-panel').on('click', function (e) {
    e.preventDefault();
    $('.color-changer').toggleClass('color-changer-active');
  });
  $('.colors a').on('click', function (e) {
    e.preventDefault();
    var attr = $(this).attr('title');
    console.log(attr); //Probando archivo
    if (attr === 'color-red') {
      document.getElementsByClassName('castillo_reglas')[0].src = castillo_rojo;
      document.getElementsByClassName('casa_reglas')[0].src = casa_rojo;
      document.getElementsByClassName('caballero')[0].src = caballero_rojo;
      document.getElementsByClassName('mago')[0].src = mago_rojo;
      document.getElementsByClassName('troll')[0].src = troll_rojo;
    }
    if (attr === 'color-blue') {
      document.getElementsByClassName('castillo_reglas')[0].src = castillo_azul;
      document.getElementsByClassName('casa_reglas')[0].src = casa_azul;
      document.getElementsByClassName('caballero')[0].src = caballero_azul;
      document.getElementsByClassName('mago')[0].src = mago_azul;
      document.getElementsByClassName('troll')[0].src = troll_azul;
    }
  })
});
export default Reglas;
