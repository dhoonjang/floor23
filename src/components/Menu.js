import React, {Component} from 'react';
import {MenuTitle, SLink, Lang} from 'style/styleComponents';
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
    const smenu = this.props.children.map(
      (child, info) => (<SMenu name={child} key={info}/>)
    );

    return(
      <div onMouseEnter={this.change} onMouseLeave={this.change}>
        <MenuTitle>{this.props.name} <Lang>{this.props.lang}</Lang></MenuTitle>
        { this.state.show && smenu }
      </div>
    )
  }
}

export default Menu;
