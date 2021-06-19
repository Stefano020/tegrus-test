import React from 'react';

export default function Favorites() {
  const favsFromStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));

  return (
    <main>
      { favsFromStorage.map((character, _index) => (
        <div>
          <h1>{character.name}</h1>
          <img src={character.img} alt="Character" width="200px"/>
        </div>
      ))}
    </main>
  )
}
