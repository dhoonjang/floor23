import React, {Component} from 'react';
import { MainMenuList } from 'style/styleComponents';
import Menu from './Menu';

let MenuDB = [
  {
    name: "FILM",
    lang: "フィルム",
    children: [
      "photo",
      "video"
    ]
  },
  {
    name: "FASHION",
    lang:  "ファッション",
    children: [
      "top",
      "bottom",
      "acc"
    ]
  },
  {
    name: ""
  },
  {
    name: "ART",
    lang: "アイテム",
    children: [
      "goods",
      "book"
    ]
  },
  {
    name: "CONTACT",
    children: []
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
              lang={menu.lang}
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
