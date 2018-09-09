import glamorous from 'glamorous';
import {css} from 'glamor';
import {Link} from 'react-router-dom';

css.global('@font-face',
  {
    fontFamily: 'Helvetica',
    src: 'fonts/Helvetica Light.ttf'
  },
  {
    fontFamily: 'ipaexm',
    src: 'fonts/ipaexm.ttf'
  },
  {
    fontFamily: 'HelveticaB',
    src: 'fonts/Helvetica Condensed Light.ttf'
  }
);

export const MainApp = glamorous.div({
  width: '720px',
  margin: '0 auto',
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
})

export const MainBody = glamorous.div({
  margin: '0 auto',
  marginTop: '130px',
  color: '#7F7570',
  width: '600px',
  zIndex: '0',
  fontFamily: 'Helvetica',
  '@media only screen and (max-width: 600px)': {
    width: '95%'
  }
})

export const MainHeader = glamorous.div({
  position: 'fixed',
  zIndex: '1',
  textAlign: 'center',
  width: '720px',
  fontFamily: 'Helvetica',
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
})

const TitleFactory = glamorous(Link)
export const Title = TitleFactory({
  margin: '0 auto',
  zIndex: '2',
  display: 'block',
  userSelect: 'none'
})

export const IconBox = glamorous.div({
  position: 'fixed',
  top: '0.5em',
  textDecoration: 'none',
  zIndex: '3'
},({id}) => ({
  left: id === 'right' && '5%',
  right: id === 'left' && '5%',
  '@media only screen and (max-width: 720px)': {
    left: id === 'right' && '0.1em',
    right: id === 'left' && '0.1em',
  }
}))

export const Icon = glamorous.a({
  marginLeft: '0.5em',
  userSelect: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  width: '35px',
  '@media only screen and (max-width: 720px)': {
    width: '30px'
  }
})

export const LIcon = glamorous.a({
  color: '#7F6153',
  marginLeft: '0.8em',
  userSelect: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  fontSize: '1em',
  fontFamily: 'ipaexm',
  '@media only screen and (max-width: 720px)': {
    fontSize: '0.7em'
  }
})

export const MainMenuList = glamorous.div({
  position: 'fixed',
  top: '5',
  width: '720px',
  display: 'table',
  zIndex: '2',
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
})
export const MainMenu = glamorous.div({
  textAlign: 'left',
  display: 'table-cell',
  width: '20%'
})
export const MenuTitle = glamorous.div({
  fontSize: '1em',
  fontFamily: 'Helvetica',
  color: '#7F6153',
  userSelect: 'none',
  cursor: 'pointer',
  marginBottom: '0.5em',
  marginLeft: '15%',
  '@media only screen and (max-width: 720px)': {
    fontSize: '0.95em'
  }
})

const SLinkFactory = glamorous(Link);
export const SLink = SLinkFactory({
  color: '#7F6153',
  userSelect: 'none',
  display: 'block',
  cursor: 'pointer',
  fontSize: '0.8em',
  fontFamily: 'Helvetica',
  marginTop: '0.01em',
  marginLeft: '15%',
  textDecoration: 'none',
  textAlign: 'left',
  ':hover': {
    color: 'darkorange',
  }
})

export const MLink = SLinkFactory({
  color: '#7F6153',
  userSelect: 'none',
  display: 'block',
  cursor: 'pointer',
  textDecoration: 'none',
})

export const HeaderBox = glamorous.div({
  position: 'fixed',
  top: '0',
  width: '720px',
  margin: '0 auto',
  height: '80px',
  backgroundColor: 'white',
  borderBottom: '2px solid #7F7570',
  zIndex: '1',
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
})

export const Lang = glamorous.span({
  fontSize: '0.7em',
  fontFamily: 'ipaexm',
  '@media only screen and (max-width: 720px)': {
    display: 'none'
  }
})

export const MainFooter = glamorous.div({
  width: '720px',
  borderTop: '2px solid #7F7570',
  marginTop: '50px',
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
})
