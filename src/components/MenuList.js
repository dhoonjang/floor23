import React, {Component} from 'react';
import { MainMenuList, MainMenu , Title} from 'style/styleComponents';
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
    name: "title"
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
          if(menu.name === "title"){
            return(
              <MainMenu key ={info}>
                <Title to={process.env.PUBLIC_URL}>
                  <img src={require('img/floor23.png')} width='65px' alt='title'/>
                </Title>
              </MainMenu>
            )
          }
          else {
            return(
              <Menu
                name={menu.name}
                children={menu.children}
                lang={menu.lang}
                key={info}
              />
            )
          }
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
