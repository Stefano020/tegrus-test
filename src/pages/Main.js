import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BrakingBadContext from '../context/BrakingBadContext';

export default function Main() {
  const { characters } = useContext(BrakingBadContext);


  return (
    <main>
      {(!characters.length)
        ? <h1>Loading...</h1>
        : <div>
          <h1>Braking Bad Characters</h1>
          <div>
            {characters.map((character, _index) => (
              <div key={ character.char_id }>
                <Link to={`/character/detail/${character.char_id}`}>
                  <h4>{character.name}</h4>
                  <img src={character.img} alt="Character" width="200px"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
    </main>
  )
};
