import React, { Component } from 'react';
import MenuList from './MenuList';
import { MainHeader, IconBox, Icon, HeaderBox } from 'style/styleComponents'

class Header extends Component {
    state = {
      update: false
    }

    render() {
    return (
      <MainHeader>
        <IconBox>
          <Icon href="https://www.instagram.com/23iii_film">
            <img src={require('img/insta.png')} width='35px' alt='instagram' />
          </Icon>
          <Icon href="http://www.youtube.com">
            <img src={require('img/youtube.png')} width='35px' alt='youtube'/>
          </Icon>
        </IconBox>
        <MenuList />
        <HeaderBox />
      </MainHeader>
    );
  }
}

export default Header
