import React, {Component} from 'react';
import { MainMenuList } from 'style/styleComponents';
import Menu from './Menu';

let MenuDB = [
  {
    name: "flim",
    children: [
      "photo",
      "video"
    ]
  },
  {
    name: "fashion",
    children: [
      "Top",
      "bottom",
      "Acc"
    ]
  },
  {
    name: "items",
    children: [
      "design item",
      "book"
    ]
  }
]

class MenuList extends Component {
  render() {
    const ManyMenu = MenuDB.map(
        (menu, info) => {
          return(
            <Menu
              name={menu.name}
              children={menu.children}
              key={info}
            />
          )
        }
    )

    return(
      <MainMenuList>
        { ManyMenu }
      </MainMenuList>
    )
  }
}

export default MenuList;
