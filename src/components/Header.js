import React, { Component } from 'react';
import { Main, Title, MenuList, Menu } from './styleComponent.js';
import Film from './menu/Film';


class Header extends Component {
  state = {
    checkFilm: false
  }

  showFilm = () => {
    const { checkFilm } = this.state;

    if(checkFilm === true){
      this.setState({
        checkFilm: false
      })
    }
    else {
      this.setState({
        checkFilm: true
      })
    }
  }

  render() {
    const { checkFilm } = this.state;

    return (
      <Main>
        <Title>floor 23</Title>
        <MenuList>
          <Menu onClick={this.showFilm}>
            film
            { checkFilm ? <Film /> : null}
          </Menu>
          <Menu>fashion</Menu>
          <Menu>items</Menu>
        </MenuList>
      </Main>
    );
  }
}

export default Header
