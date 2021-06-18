import React, { useContext, useEffect } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const { characters, favoriteCharacters, setFavoriteCharacters } = useContext(BrakingBadContext);
  const { id } = useParams();
  const characterDetail = characters.find((character) => character.char_id === Number(id));
  
  useEffect(() => {
    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
  }, [favoriteCharacters])
  
  function favorite_char() {
    const favoriteCheckbox = document.getElementById('favorite_char');
    if (favoriteCheckbox.checked) {
    setFavoriteCharacters([...favoriteCharacters, characterDetail])
  }
  if (!favoriteCheckbox.checked) {
    const newFavorites = favoriteCharacters.filter(chars => chars.char_id !== characterDetail.char_id);
    setFavoriteCharacters(newFavorites);
  }
}

function isFavorite() {
  const myFavorites = JSON.parse(localStorage.getItem('favoriteCharacters'));
  console.log('favorites local', myFavorites);
  // const favoriteExists = myFavorites.find((character) => character.char_id === characterDetail.char_id);
  // if(favoriteExists) {
    //   document.getElementById('favorite_char').setAttribute('checked', 'checked');      
    // }
  }

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
          <label htmlFor="favorite_char">
            <input
              type="checkbox"
              name="favorite_char"
              id="favorite_char"
              onClick={ favorite_char }
            />
          </label>
        </div>
      }
    </div>
  )
}
