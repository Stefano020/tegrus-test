import React, { useContext, useEffect, useState } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeIcon from '../icons/icons8-home.svg';
import WhiteFavorite from '../icons/icons8-breaking-bad-white.svg';
import GreenFavorite from '../icons/icons8-breaking-bad-green.svg';

export default function CharacterDetail() {
  const { characters } = useContext(BrakingBadContext);
  const { id } = useParams();
  const characterDetail = characters.find((character) => character.char_id === Number(id));
  const favsFromStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));
  const [favoriteCharacters, setFavoriteCharacters] = useState(favsFromStorage);

  useEffect(() => {
    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
  }, [favoriteCharacters])
  
  function favoriteChar() {
    const favoriteCheckbox = document.getElementById('favorite_char');
    if (favoriteCheckbox.checked) {
      setFavoriteCharacters([...favoriteCharacters, characterDetail])
      document.getElementById("favorite-checkbox").src=`${ GreenFavorite }`;
    }
    if (!favoriteCheckbox.checked) {
      const newFavorites = favoriteCharacters.filter(chars => chars.char_id !== characterDetail.char_id);
      setFavoriteCharacters(newFavorites);
      document.getElementById("favorite-checkbox").src=`${ WhiteFavorite }`;
    }
  }

  function isFavorite () {
    if (characterDetail) {
      const favoriteExists = favoriteCharacters.find(character => character.char_id === characterDetail.char_id);
      if(favoriteExists){
        document.getElementById('favorite_char').setAttribute('checked', 'checked')
        document.getElementById("favorite-checkbox").src=`${ GreenFavorite }`;
      }
    }
  }

  window.onload = setTimeout(() => {
    isFavorite();
  }, 200);

return (
  <div className="background">
      {(!characters.length)
        ? <h1>Loading...</h1>
        : <div>
            <header className="header-container">
              <h1 className="title">Favorite Characters</h1>
              <Link
                className="title-button"
                to={'/'}
                >
                <img
                  src={ HomeIcon }
                  alt="Home Button"
                />
              </Link>
            </header>
            <main className="details-container">
              <section className="details-content">
                <img className="details-img" src={characterDetail.img} alt="Character" />
              </section>
              <section className="details-content">
                <h2>{characterDetail.name}</h2>
                <section >
                  {characterDetail.appearance.map((app => <p key={ app }>{app}</p>))}
                </section>
                <p>{characterDetail.category}</p>
                <p>{characterDetail.nickname}</p>
                <section>
                  {characterDetail.occupation.map((occ => <p key={ occ }>{occ}</p>))}
                </section>
                <p>{characterDetail.portrayed}</p>
                <p>{characterDetail.status}</p>
                <label className="checkbox-label" htmlFor="favorite_char">
                  Favorite Character
                  <img
                    id="favorite-checkbox"
                    src={ WhiteFavorite }
                    alt="Favorite Checkbox"
                  />
                  <input
                    type="checkbox"
                    name="favorite_char"
                    id="favorite_char"
                    className="favorite-check-box"
                    onClick={ favoriteChar }
                  />
                </label>
              </section>
            </main>
          </div>
      }
    </div>
  );
}
