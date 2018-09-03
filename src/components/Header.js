import React, { Component } from 'react';
import MenuList from './MenuList';
import { MainHeader, Title, IconBox, Icon, HeaderBox } from 'style/styleComponents'

class Header extends Component {
    state = {
      update: false
    }

    render() {
    return (
      <MainHeader>
        <Title to={process.env.PUBLIC_URL}>
          <img src={require('img/floor23.png')} width='65px' />
        </Title>
        <IconBox>
          <Icon href="https://www.instagram.com/23iii_film">
            <img src={require('img/insta.png')} width='35px' />
          </Icon>
          <Icon href="http://www.youtube.com">
            <img src={require('img/youtube.png')} width='35px'/>
          </Icon>
        </IconBox>
        <MenuList />
        <HeaderBox />
      </MainHeader>
    );
  }
}

export default Header
