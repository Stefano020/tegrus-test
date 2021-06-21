import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BreakingBadContext from '../context/BreakingBadContext';
import BreakingbadIconBlack from '../icons/icons8-breaking-bad-black.svg';
import Loading from '../components/Loading';

export default function Main() {
  const { characters } = useContext(BreakingBadContext);
  
  return (
    <div className="background">
      {(!characters.length)
        ? <Loading />
        : <div>
          <header>
            <h1 className="title">Characters</h1>
            <Link
              className="title-button"
              to={'/favorites'}
            >
              <img
                className="title-button-img"
                src={ BreakingbadIconBlack }
                alt="Home Button"
              />
            </Link>
          </header>
          <main className="cards">
            {characters.map((character, _index) => (
              <div className="card">
                <section key={ character.char_id }>
                  <div className="">
                    <Link to={`/character/detail/${character.char_id}`}>
                      <h2 className="char-name">{character.name}</h2>
                      <img className="card-image" src={character.img} alt="Character" />
                    </Link>
                  </div>
                </section>
              </div>
            ))}
          </main>
        </div>
      }
    </div>
  )
};
