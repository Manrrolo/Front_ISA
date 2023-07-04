import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style_partidas.css';
import Partida from './Partida';

const PartidaList = (props) => {
  const { partidas } = props;
  return (
    <div className="partidas-container">
      {partidas.map((partida) => (
        <Partida key={partida.id} partida={partida} />
      ))}
    </div>
  );
};

PartidaList.propTypes = {
  partidas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PartidaList;
