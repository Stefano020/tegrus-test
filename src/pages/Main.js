import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrakingBadContext from '../context/BrakingBadContext';

export default function Main() {
  const { characters } = useContext(BrakingBadContext);


  return (
    <div className="background">
      {(!characters.length)
        ? <h1>Loading...</h1>
        : <div>
          <header>
            <h1>Braking Bad Characters</h1>
          </header>
          <main className="cards">
            {characters.map((character, _index) => (
              <section className="card" key={ character.char_id }>
                <Link to={`/character/detail/${character.char_id}`}>
                  <h2 className="char-name">{character.name}</h2>
                  <img className="card-image" src={character.img} alt="Character" width="200px"/>
                </Link>
              </section>
            ))}
          </main>
        </div>
      }
    </div>
  )
};
