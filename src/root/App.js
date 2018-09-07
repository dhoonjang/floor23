import React, { Component } from 'react';
import Header from 'components/Header'
import Body from 'components/Body';
import {MainApp} from 'style/styleComponents'
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MainApp>
          <Header />
          <Body />
        </MainApp>
      </Router>
    );
  }
}

export default App;
