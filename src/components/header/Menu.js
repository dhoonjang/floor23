import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {css} from 'glamor';

let style = css({
  textAlign: 'center',
  fontSize: '19px',
  userSelect: 'none',
  cursor: 'pointer',
  ':hover': {
    color: 'pink',
    borderBottom: '1px solid pink'
  }
});

let Schildren = css({
  color: 'black',
  display: 'block',
  userSelect: 'none',
  cursor: 'pointer',
  fintSize: '15px',
  marginLeft: '80px',
  marginTop: '20px',
  textDecoration: 'none',
  ':hover': {
    color: 'darkorange',
  }
});

let SMenu = ({name}) => {
  return(
    <Link {...Schildren} to={name}>{name}</Link>
  )
};

SMenu.defaultProps = {
  name: "NULL",
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
    if(this.state.showChildren === false) {
      this.setState({
        showChildren: true
      })
    }
    else {
      this.setState({
        showChildren: false
      })
    }
  }

  render() {
    const smenu = this.props.children.map(
      (child, info) => (<SMenu name={child} key={info}/>)
    );

    return(
      <div>
        <div {...style} onClick={this.show} >{this.props.name}</div>
        { this.state.showChildren && smenu }
      </div>
    )
  }
}

export default Menu;
