import React, { useContext } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';

export default function Main() {
  const { characters } = useContext(BrakingBadContext);
  
  console.log(characters)

  return (
    <p>My app</p>
  )
};
