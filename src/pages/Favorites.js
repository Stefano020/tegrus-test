import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../icons/icons8-home.svg';

export default function Favorites() {
  const favsFromStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));

  return (
    <div className="background">
      <header>
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
        <main className="cards">
          { favsFromStorage.map((character, _index) => (
            <Link to={`/character/detail/${character.char_id}`}>
              <div className="card">
                <h2>{character.name}</h2>
                <img className="card-image" src={character.img} alt="Character"/>
              </div>
            </Link>
          ))}
        </main>
    </div>
  )
}
