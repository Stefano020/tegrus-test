import React, { useContext, useEffect, useState } from 'react';
import BrakingBadContext from '../context/BrakingBadContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeIcon from '../icons/icons8-home.svg';
import WhiteFavorite from '../icons/icons8-breaking-bad-white.svg';
import GreenFavorite from '../icons/icons8-breaking-bad-green.svg';
import Loading from '../components/Loading';

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
      ? <Loading />
      : <div>
          <header className="header-container">
            <h1 className="title">Favorite Characters</h1>
            <Link
              className="title-button"
              to={'/'}
              >
              <img
                className="title-button-img"
                src={ HomeIcon }
                alt="Home Button"
              />
            </Link>
          </header>
          <main className="details-container">
            <section>
              <img className="details-img" src={characterDetail.img} alt="Character" />
            </section>
            <section className="details-content">
              <h2 className="details-name">{characterDetail.name}</h2>
              <section className="details-item">
                <h4>Seasons:</h4>
                {characterDetail.appearance.map(
                  (app => <p key={ app }>{ app }</p>)
                )}
              </section>
              <section className="details-item">
                <h4>Series:</h4>
                <p>{characterDetail.category}</p>
              </section>
              <section className="details-item">
                <h4>Nickname:</h4>
                <p>{characterDetail.nickname}</p>
              </section>
                <section className="details-item">
                  <h4>Occupation:</h4>
              <div className="details-item-occupation">
                  {characterDetail.occupation.map(
                    (occ => <p key={ occ }>{`${ occ }`}</p>)
                  )}
              </div>
                </section>
              <section className="details-item">
                <h4>Actor/ Actress:</h4>  
                <p>{characterDetail.portrayed}</p>
              </section>
              <section className="details-item">
                <h4>Character Status:</h4>
                <p>{characterDetail.status}</p>
              </section>
              <section className="checkbox-container">
                <label className="checkbox-label" htmlFor="favorite_char">
                  <img
                    className="checkbox-img"
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
            </section>
          </main>
        </div>
    }
    </div>
  );
}
