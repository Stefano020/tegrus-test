import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import CharacterDetail from './pages/CharacterDetail';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route path="/character/detail/:id" component={ CharacterDetail } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </BrowserRouter>
  );
}