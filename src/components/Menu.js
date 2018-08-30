import React, {Component} from 'react';
import {MenuTitle, SMenuList, SLink} from 'style/styleComponents';

let SMenu = ({name}) => {
  return(
    <SLink to={name}>{name}</SLink>
  )
};

SMenu.defaultProps = {
  name: "NULL"
};

class Menu extends Component {
  state = {
    showChildren: false
  }

  static defaultProps = {
    name: "NULL",
    children: []
  };

  show = () => {
    let showChildren;

    if(this.state.showChildren)
      showChildren = false;
    else
      showChildren = true;

    this.setState({ showChildren })
  }

  render() {
    const smenu = this.props.children.map(
      (child, info) => (<SMenu name={child} key={info}/>)
    );

    return(
      <div>
        <MenuTitle onClick={this.show}>{this.props.name}</MenuTitle>
        <SMenuList>{ this.state.showChildren && smenu }</SMenuList>
      </div>
    )
  }
}

export default Menu;
