import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BrakingBadContext from './BrakingBadContext';
import brakingBadApi from '../services/BrakingBadAPI';

export default function ProductsProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    brakingBadApi().then((response) => {
      setCharacters(response);
    })
  }, []);

  const context = {
    characters,
    setCharacters,
  };

  return (
    <BrakingBadContext.Provider value={ context }>
      {children}
    </BrakingBadContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};