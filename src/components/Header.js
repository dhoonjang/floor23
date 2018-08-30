import React, { Component } from 'react';
import MenuList from './MenuList';
import { MainHeader, Title, IconList } from 'style/styleComponents'

class Header extends Component {
    state = {
      update: false
    }

    render() {
    return (
      <MainHeader>
        <Title to={process.env.PUBLIC_URL}>floor 23</Title>
        <IconList>
          <a href="https://www.instagram.com/23iii_film">instagram</a><br/>
          <a href="http://www.youtube.com">youtube</a>
        </IconList>
        <MenuList />
      </MainHeader>
    );
  }
}

export default Header
