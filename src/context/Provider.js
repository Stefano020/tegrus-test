import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BreakingBadContext from './BreakingBadContext';
import brakingBadApi from '../services/BrakingBadAPI';

export default function ProductsProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    brakingBadApi().then((response) => {
      setCharacters(response);
    });
  }, []);

  const context = {
    characters,
    setCharacters,
  };

  return (
    <BreakingBadContext.Provider value={ context }>
      {children}
    </BreakingBadContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};