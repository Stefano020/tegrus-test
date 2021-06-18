import React, { useContext } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const { characters } = useContext(BrakingBadContext);
  const { id } = useParams();
  const characterDetail = characters.find((character) => character.char_id === Number(id))

  return (
    <div>
      {(!characters.length)
        ? <h1>Loading...</h1>
        : <div>
          <h1>{characterDetail.name}</h1>
          <img src={characterDetail.img} alt="Character" width="200px"/>
          {characterDetail.appearance.map((app => <h5 key={ app }>{app}</h5>))}
          <p>{characterDetail.category}</p>
          <p>{characterDetail.nickname}</p>
          {characterDetail.occupation.map((occ => <h5 key={ occ }>{occ}</h5>))}
          <p>{characterDetail.portrayed}</p>
          <p>{characterDetail.status}</p>
        </div>
      }
    </div>
  )
}
