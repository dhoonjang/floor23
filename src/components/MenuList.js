import React, {Component} from 'react';
import {MainMenuList} from 'style/styleComponents';
import Menu from './Menu';

class MenuList extends Component {
  state = {
    film: false,
    fashion: false,
    items: false
  }

  film = () => {
    let film;
    if (this.state.film) {
      film = false
    } else {
      film = true
    }
    this.setState({
      film,
      fashion: false,
      items: false
    })
  }
  fashion = () => {
    let fashion;
    if (this.state.fashion) {
      fashion = false
    } else {
      fashion = true
    }
    this.setState({
      film: false,
      fashion,
      items: false
    })
  }
  items = () => {
    let items;
    if (this.state.items) {
      items = false
    } else {
      items = true
    }
    this.setState({
      film: false,
      fashion: false,
      items
    })
  }


  render() {
    return(
      <MainMenuList>
        <Menu
          name="film"
          children={["photo", "video"]}
          onShow={this.film}
          show={this.state.film}
        />
        <Menu
          name="fashion"
          children={["Top", "bottom", "Acc"]}
          onShow={this.fashion}
          show={this.state.fashion}
        />
        <Menu
          name="items"
          children={["design item", "book"]}
          onShow={this.items}
          show={this.state.items}
        />
      </MainMenuList>
    )
  }
}

export default MenuList;
