import React, { Component } from 'react';
import { MainBody } from 'style/styleComponents'
import { Route } from 'react-router-dom';
import Pages from 'pages';

class Header extends Component {
  render() {
    const pages = Pages.map(
      (page, info) => (
        <Route key={info} exact={true} path={process.env.PUBLIC_URL+page.path} component={page.component}/>
      )
    )

    return (
      <MainBody>
        {pages}
      </MainBody>
    )
  }
}

export default Header
