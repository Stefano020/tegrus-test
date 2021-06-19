import React, { useContext, useEffect, useState } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const { characters } = useContext(BrakingBadContext);
  const { id } = useParams();
  const characterDetail = characters.find((character) => character.char_id === Number(id));
  const favsFromStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));
  const [favoriteCharacters, setFavoriteCharacters] = useState(favsFromStorage);

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

  function isFavorite () {
    if (characterDetail) {
      const favoriteExists = favoriteCharacters.find(character => character.char_id === characterDetail.char_id);
      if(favoriteExists){
        document.getElementById('favorite_char').setAttribute('checked', 'checked')
      }
    }
  }

  window.onload = setTimeout(() => {
    isFavorite();
  }, 50);

return (
  <div>
      {(!characters.length)
        ? <h1>Loading...</h1>
        : <main>
            <h1>{characterDetail.name}</h1>
            <img src={characterDetail.img} alt="Character" width="200px"/>
            <section>
              {characterDetail.appearance.map((app => <h5 key={ app }>{app}</h5>))}
            </section>
            <p>{characterDetail.category}</p>
            <p>{characterDetail.nickname}</p>
            <section>
              {characterDetail.occupation.map((occ => <h5 key={ occ }>{occ}</h5>))}
            </section>
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
        </main>
      }
    </div>
  );
}
