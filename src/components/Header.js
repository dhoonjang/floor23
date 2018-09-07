import React, { Component } from 'react';
import MainBar from './MainBar';
import { MainHeader, IconBox, Icon, HeaderBox } from 'style/styleComponents'

class Header extends Component {
    state = {
      update: false,
      lang: "english"
    }

    setEnglish = () => {
      this.setState({
        lang: "english"
      })
    }
    setChina = () => {
      this.setState({
        lang: "china"
      })
    }

    render() {
    return (
      <MainHeader>
        <MainBar lang = {this.state.lang}/>
        <IconBox id = "left">
          <Icon href="https://www.instagram.com/23iii_film">
            <img src={require('img/insta.png')} width='35px' alt='instagram' />
          </Icon>
          <Icon href="http://www.youtube.com">
            <img src={require('img/youtube.png')} width='35px' alt='youtube'/>
          </Icon>
        </IconBox>
        <IconBox id = "right">
          <Icon onClick = {this.setEnglish}>ENGLISH</Icon>
          <Icon onClick = {this.setChina}>中文</Icon>
        </IconBox>
        <HeaderBox />
      </MainHeader>
    );
  }
}

export default Header
