import React, { Component } from 'react';
import Header from './components/header/Header'
import Body from './components/body/Body';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
