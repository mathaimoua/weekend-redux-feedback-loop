import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';

import './App.css';

function App() {

  return (
    <Router>
    <div className='App'>
      <Header />
      <Route path='/' exact>
        <Feeling />
      </Route>
      <Route path='/understanding' exact>
        <Understanding />
      </Route>
    </div>
    </Router>
  );
}

export default App;
