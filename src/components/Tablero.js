import Casilla from './Casilla';
import castillo_rojo from '../imgs/castillo rojo.png';
import casa from '../imgs/casa.png';
import casa_azul from '../imgs/casa_azul.png';
import castillo_azul from '../imgs/castillo azul.png';

function Tablero() {
  return (
    <div className="contenedor-juego">
      <div className="row">
        <Casilla class={"hexagon"} title={'soldados'} img={castillo_rojo} id={"castillo"} coordenada={'E4'}/>
        </div>
      <div className="row">
        <Casilla class={"hexagon"} title={'casa_2'} img={casa} id={"casa"} coordenada={"D4"}/>
        <Casilla class={"hexagon"} title={'casa_1'} img={casa} id={"casa"} coordenada={"E3"}/>
      </div>
      <div className="row">
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"C4"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"D3"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"E2"}/>
      </div>
      <div className="row">
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"B4"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"C3"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"D2"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa} id={"casa"} coordenada={"E1"}/>
      </div>
      <div className="row2">
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"A4"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"B3"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"C2"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"D1"}/>
      </div>
      <div className="row2">
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"A3"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"B2"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"C1"}/>
      </div>
      <div className="row2">
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"A2"}/>
        <Casilla class={"hexagon"} title={'casa'} img={casa_azul} id={"casa"} coordenada={"B1"}/>
      </div>
      <div className="row2">
        <Casilla class={"hexagon"} title={'soldados'} img={castillo_azul} id={"castillo"} coordenada={"A1"}/>
        </div>

    
    </div>
  );
}

export default Tablero;
