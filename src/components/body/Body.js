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
          <Route path={process.env.PUBLIC_URL + "/photo"} component={Photo}/>
          <Route path={process.env.PUBLIC_URL + "/video"} component={Video}/>
          <Route path={process.env.PUBLIC_URL + "/Top"} component={Top}/>
          <Route path={process.env.PUBLIC_URL + "/bottom"} component={Bottom}/>
          <Route path={process.env.PUBLIC_URL + "/Acc"} component={Acc}/>
          <Route path={process.env.PUBLIC_URL + "/design item"} component={DesignItem}/>
          <Route path={process.env.PUBLIC_URL + "/book"} component={Book}/>
        </Body>
      </Main>
    );
  }
}

export default Header
