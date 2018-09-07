import glamorous from 'glamorous';
import {Link} from 'react-router-dom';

export const MainApp = glamorous.div({
  width: '720px',
  margin: '0 auto'
})

export const MainBody = glamorous.div({
  margin: '0 auto',
  marginTop: '130px',
  width: '600px',
  zIndex: '0'
})

export const MainHeader = glamorous.div({
  position: 'fixed',
  zIndex: '1',
  textAlign: 'center',
  width: '720px',
  fontFamily: 'roboto'
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
  left: id === 'right' && '0.1em',
  right: id === 'left' && '0.1em'
}))

export const Icon = glamorous.a({
  marginLeft: '0.5em',
  userSelect: 'none',
  cursor: 'pointer'
})

export const MainMenuList = glamorous.div({
  position: 'fixed',
  top: '5',
  width: '720px',
  display: 'table',
  zIndex: '2'
})
export const MainMenu = glamorous.div({
  textAlign: 'center',
  display: 'table-cell',
  width: '20%',
  minWidth: '50px'
})
export const MenuTitle = glamorous.div({
  margin: '0 auto',
  fontSize: '1em',
  userSelect: 'none',
  cursor: 'pointer',
  marginBottom: '0.5em',
})

const SLinkFactory = glamorous(Link);
export const SLink = SLinkFactory({
  color: 'black',
  userSelect: 'none',
  display: 'block',
  cursor: 'pointer',
  fontSize: '0.8em',
  marginTop: '0.01em',
  textDecoration: 'none',
  ':hover': {
    color: 'darkorange',
  }
})

export const MLink = SLinkFactory({
  color: 'black',
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
  borderBottom: '2px solid #7F6153',
  zIndex: '1'
})

export const Lang = glamorous.span({
  fontSize: '0.7em',
  fontFamily: 'IPAex'
})

export const MainFooter = glamorous.div({
  width: '720px',
  borderTop: '2px solid #7F6153',
  marginTop: '50px'
})
