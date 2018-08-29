import React, { Component } from 'react';
import Menu from './Menu';
import { Main, Title, MenuList, Move } from './../glamorous.js'

class Header extends Component {
  state = {
    checkFilm: false
  }

  render() {
    return (
      <Main>
        <Title>floor 23</Title>
        <Move>
          <a href="https://www.instagram.com/23iii_film">intagram</a><br/>
          <a href="http://www.youtube.com">youtube</a>
        </Move>
        <MenuList>
          <Menu name="film" children={["photo", "video"]} />
          <Menu name="fashion" children={["Top", "bottom", "Acc"]} />
          <Menu name="items" children={["design item", "book"]} />
        </MenuList>
      </Main>
    );
  }
}

export default Header
