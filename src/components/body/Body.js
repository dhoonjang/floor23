import React, { Component } from 'react';
import { Main, Body } from './../glamorous.js';
import { Route } from 'react-router-dom';
import { Acc, Book, Bottom, DesignItem, Photo, Top, Video} from './pages';

class Header extends Component {
  state = {
    checkFilm: false
  }

  render() {
    return (
      <Main>
        <Body>
          <Route exact path="/photo" component={Photo}/>
          <Route path="/video" component={Video}/>
          <Route path="/Top" component={Top}/>
          <Route path="/bottom" component={Bottom}/>
          <Route path="/Acc" component={Acc}/>
          <Route path="/design item" component={DesignItem}/>
          <Route path="/book" component={Book}/>
        </Body>
      </Main>
    );
  }
}

export default Header
