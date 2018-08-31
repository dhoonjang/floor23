import React, {Component} from 'react';
import {MenuTitle, SMenuList, SLink} from 'style/styleComponents';
import {ThemeProvider} from 'glamorous';

let SMenu = ({name}) => {
  return(
    <SLink to={process.env.PUBLIC_URL +'/'+ name}>{name}</SLink>
  )
};

SMenu.defaultProps = {
  name: "NULL"
};

class Menu extends Component {
  state = {
    show: false,
    theme: {
      display: 'none'
    }
  }

  static defaultProps = {
    name: "NULL",
    children: []
  };

  change = () => {
    const show = !this.state.show

    this.setState({
      show,
      theme: {
        display: show ? 'block' : 'none'
      }
    })
  }

  render() {
    const smenu = this.props.children.map(
      (child, info) => (<SMenu name={child} key={info}/>)
    );

    return(
      <ThemeProvider theme={this.state.theme}>
        <div>
          <MenuTitle onClick={this.change}>{this.props.name}</MenuTitle>
          <SMenuList onClick={this.change}>{ smenu }</SMenuList>
        </div>
      </ThemeProvider>
    )
  }
}

export default Menu;
