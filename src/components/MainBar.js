import React, {Component} from 'react';
import { MainMenuList, Title} from 'style/styleComponents';
import Menu from './Menu';

let MenuDB = [
  {
    name: "Film",
    english: "フィルム",
    china: "影片",
    children: [
      "photo",
      "video"
    ]
  },
  {
    name: "Fahion",
    english:  "ファッション",
    china: "時尚",
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
    name: "Art",
    english: "アート",
    china: "藝術",
    children: [
      "goods",
      "book"
    ]
  },
  {
    name: "Contact",
    english: "コンタクト",
    china: "與我聯絡",
    children: []
  }
]

class MainBar extends Component {

  static defaultProps = {
    lang: "english"
  };

  render() {
    const ManyMenu = MenuDB.map(
        (menu, info) => {
          if(menu.name === "title"){
            return(
                <Title to={process.env.PUBLIC_URL}>
                  <img src={require('img/floor23.png')} width='65px' alt='title'/>
                </Title>
            )
          }
          else {
            return(
              <Menu
                name={menu.name}
                children={menu.children}
                lang={this.props.lang === "english" ? menu.english : menu.china}
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

export default MainBar;
