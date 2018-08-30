import React, { Component } from 'react';
import Menu from './Menu';
import { MainHeader, Title, MenuList, IconList } from 'style/styleComponents'

class Header extends Component {
    render() {
    return (
      <MainHeader>
        <Title to='/'>floor 23</Title>
        <IconList>
          <a href="https://www.instagram.com/23iii_film">instagram</a><br/>
          <a href="http://www.youtube.com">youtube</a>
        </IconList>
        <MenuList>
          <Menu name="film" children={["photo", "video"]} />
          <Menu name="fashion" children={["Top", "bottom", "Acc"]} />
          <Menu name="items" children={["design item", "book"]} />
        </MenuList>
      </MainHeader>
    );
  }
}

export default Header
