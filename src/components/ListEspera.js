import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style_partidas.css';
import Espera from './Espera';

const EsperaList = (props) => {
  const { salas } = props;
  return (
    <div className="partidas-container">
      {salas.map((sala) => (
        <Espera key={sala.id} sala={sala} />
      ))}
    </div>
  );
};

EsperaList.propTypes = {
  salas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EsperaList;
