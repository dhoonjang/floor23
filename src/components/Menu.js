import React, {Component} from 'react';
import {MenuTitle, SLink, MLink, Lang, MainMenu} from 'style/styleComponents';

class Menu extends Component {
  state = {
    show: false
  }

  static defaultProps = {
    name: "NULL",
    children: []
  };

  change = () => {
    const show = !this.state.show

    this.setState({  show  })
  }

  render() {
    const menu = this.props.children.map(
      (child, info) => (
        <SLink to={process.env.PUBLIC_URL +'/'+ child} key={info}>{child}</SLink>
      )
    );

    if(this.props.name === "Contact") {
      return(
        <MainMenu>
          <MLink to={process.env.PUBLIC_URL + '/contact'}>
            <MenuTitle>{this.props.name} <Lang>{this.props.lang}</Lang></MenuTitle>
          </MLink>
        </MainMenu>
      )
    }
    else {
      return(
        <MainMenu onMouseEnter={this.change} onMouseLeave={this.change}>
          <MenuTitle>{this.props.name} <Lang>{this.props.lang}</Lang></MenuTitle>
          { this.state.show && menu }
        </MainMenu>
      )
    }
  }
}

export default Menu;
