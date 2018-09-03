import glamorous from 'glamorous';
import {Link} from 'react-router-dom';

export const MainApp = glamorous.div({
  width: '720px',
  margin: '0 auto'
})

export const MainBody = glamorous.div({
  margin: '0 auto',
  marginTop: '120px',
  width: '600px',
  zIndex: '0'
})

export const MainHeader = glamorous.div({
  position: 'fixed',
  zIndex: '1',
  textAlign: 'center',
  width: '720px',
})

const TitleFactory = glamorous(Link)
export const Title = TitleFactory({
  position: 'fixed',
  top: '5',
  margin: '0 auto',
  width: '720px',
  zIndex: '2',
  display: 'block',
  userSelect: 'none'
})

export const IconBox = glamorous.div({
  position: 'fixed',
  top: '20',
  right: '10',
  textDecoration: 'none',
  zIndex: '3'
})
export const Icon = glamorous.a({
  marginLeft: '5px'
})
export const MainMenuList = glamorous.div({
  position: 'fixed',
  top: '50',
  width: '720px',
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr 0.8fr 1fr 1.2fr',
  zIndex: '2'
})

export const MenuTitle = glamorous.div({
  margin: '0 auto',
  fontSize: '17px',
  userSelect: 'none',
  cursor: 'pointer',
  marginBottom: '15px',
})

const SLinkFactory = glamorous(Link);
export const SLink = SLinkFactory({
  color: 'black',
  userSelect: 'none',
  display: 'block',
  cursor: 'pointer',
  marginTop: '3px',
  textDecoration: 'none',
  ':hover': {
    color: 'darkorange',
  }
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

export const MainBox = glamorous.div({
  border: '1px solid #7f6153',
  minHeight: '300px'
})

export const Box = glamorous.div({
  border: '1px solid #7f6153',
  height: '250px',
  margin: '0 auto',
  marginBottom: '20px',
  width: '250px'
})

export const MainPhoto = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})
export const Lang = glamorous.span({
  fontSize: '10px'
})
