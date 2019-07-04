import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Sales from './sales'

function App() {

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/cl" render={({match: {url}}) => <Route path={`${url}/sales`} component={Sales} />} />
              <Route path="/bo" render={({match: {url}}) => <Route path={`${url}/sales`} component={Sales} />} />

          </Switch>

      </header>
    </div>
  );
}

export default App;
