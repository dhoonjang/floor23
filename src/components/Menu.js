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
    showChildren: null
  }

  static defaultProps = {
    name: "NULL",
    children: []
  };

  componentDidUpdate() {
    console.log("ss")
  }

  render() {
    const smenu = this.props.children.map(
      (child, info) => (<SMenu name={child} key={info}/>)
    );

    return(
      <div>
        <MenuTitle onClick={this.props.onShow}>{this.props.name}</MenuTitle>
        <SMenuList>{ this.props.show && smenu }</SMenuList>
      </div>
    )
  }
}

export default Menu;
