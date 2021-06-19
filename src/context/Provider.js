import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BrakingBadContext from './BrakingBadContext';
import brakingBadApi from '../services/BrakingBadAPI';

export default function ProductsProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  useEffect(() => {
    brakingBadApi().then((response) => {
      setCharacters(response);
    });
  }, []);

  const context = {
    characters,
    setCharacters,
    favoriteCharacters,
    setFavoriteCharacters,
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