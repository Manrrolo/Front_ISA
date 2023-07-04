import React from 'react';
import caballero from '../imgs/Caballero_Azul.png';
import casa from '../imgs/casa.png'; 
import castillo from '../imgs/castillo azul.png';
import '../styles/style_tienda.css';
import trigo from '../imgs/Trigo.png'; 
import mineral from '../imgs/Mineral.png'; 
import arcilla from '../imgs/arcilla.png'; 
import madera from '../imgs/Tronco.png'; 
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

const tiendaList = [
  {
    id: 1, // Asegurarse que coincida id con backend
    nombre: 'Caballero',
    costoTrigo: 2,
    costoArcilla: 0,
    costoMadera: 0, 
    costoMineral: 1,
    descripcion:
      'Ataque:3',
    png: caballero,
  },
  {
    id: 2,
    nombre: 'Mejora de casa',
    costoTrigo: 0,
    costoArcilla: 2,
    costoMadera: 3,
    costoMineral: 1,
    descripcion:
      'Al mejorar otorga una unidad adicional de recursos por turno y se mejora su defensa',
    png: casa,
  },
  {
    id: 3,
    nombre: 'Mejora de castillo',
    costoTrigo: 0,
    costoArcilla: 2,
    costoMadera: 2,
    costoMineral: 5,
    descripcion:
      'Mejora la defensa del castillo',
    png: castillo,
  },
];



function CostosTienda({ item }) {
  return (
    <>
      <h1>Costo</h1>
      <div className="Costo">
        <div className="costo">
          <img src={trigo} className="menu_icon" alt={item.nombre} />
          <p>
            Trigo <span>x{item.costoTrigo}</span>
          </p>
        </div>
        <div className="costo">
          <img src={mineral} className="menu_icon" alt={item.nombre} />
          <p>
            Mineral <span>x{item.costoMineral}</span>
          </p>
        </div>
        <div className="costo">
          <img src={arcilla} className="menu_icon" alt={item.nombre} />
          <p>
            Arcilla <span>x{item.costoArcilla}</span>
          </p>
        </div>
        <div className="costo">
          <img src={madera} className="menu_icon" alt={item.nombre} />
          <p>
            Madera <span>x{item.costoMadera}</span>
          </p>
        </div>
      </div>
    </>
  );
}

function ItemTienda({ item, viewModal, match }) {
  const { currentUser } = useAuth();
  function solicitudCompra(idItem, match) {
    const datos = {
      match_id: match,
      item_id: idItem,
    };
    console.log(match);
    const config = {
      url: `${process.env.REACT_APP_SERVER_URL}/matches/compra`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser?.access_token}`,
      },
      data: datos,
    };
    axios(config)
      .then((response) => {
        viewModal();
        swal.fire('Compra exitosa!', response.data, 'success')
      })
      .catch((error) => {
        swal.fire('Error al comprar', error.response.data, 'error');
      });
  }
  return (
    <div className="ItemTienda">
      <div className="column">
        <h2>{item.nombre}</h2>
        <img src={item.png} className="menu_icon Item" alt={item.nombre} />
      </div>
      <div className='column'>
        <p>{item.descripcion}</p>
      </div>
      <div>
        <CostosTienda item={item} />
        <button type="button" key={item.id} className="BotonCompra pretty-button" onClick={() => {
          solicitudCompra(item.id, match);}}>
          Comprar
        </button>
      </div>
    </div>
  );
}

function Tienda({ viewModal, show, match }) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const { currentUser } = useAuth();
  if (currentUser == null) {
    swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Debes primero de iniciar sesión para poder jugar',
      icon: 'warning',
    });
    return <Navigate to="/"/>;

  }
  return (
    <section id="Tienda" className={showHideClassName}>
      <div className="modal-content">
        <header>
          <h1>Tienda</h1>
        </header>
        <main id="ItemsTienda">
          {tiendaList.map((item) => (
            <ItemTienda
              match ={match}
              key={item.nombre}
              item={item}
              viewModal={viewModal}
            />
          ))}
        </main>
        <button
          type="button"
          id="CloseShop"
          className="pretty-button"
          onClick={viewModal}
        >
          Volver
        </button>
      </div>
    </section>
  );
}

export default Tienda;