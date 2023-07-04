import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style_partidas.css';
import Usuario from './Usuario';

const UsuarioList = (props) => {
  const { usuarios } = props;
  return (
    <div className="partidas-container">
      {usuarios.map((usuario) => (
        <Usuario key={usuario.id} usuario={usuario} />
      ))}
    </div>
  );
};

UsuarioList.propTypes = {
  usuarios: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsuarioList;
