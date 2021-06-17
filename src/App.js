import React, { useEffect } from 'react';
import brakingBadApi from './services/BrakingBadAPI';
import Provider from './context/Provider';
import Routes from './Routes';

function App() {
  useEffect(() => {
    brakingBadApi();
  }, [])

  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
