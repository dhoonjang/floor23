import glamorous from 'glamorous';
import {Link} from 'react-router-dom';

export const MainApp = glamorous.div({
  width: '600px',
  margin: '0 auto',
})

export const MainBody = glamorous.div({
  marginTop: '20px',
  border: '2px solid skyblue',
  borderRadius: '5px',
  width: '596px',
  height: '400px',
  position: 'absolute',
  top: '100',
  zIndex: '0'
})

export const MainHeader = glamorous.div({
  position: 'relative',
  zIndex: '1'
})

const TitleFactory = glamorous(Link)
export const Title = TitleFactory({
  display: 'block',
  fontSize: '40px',
  color: 'black',
  textAlign: 'center',
  textDecoration: 'none',
  marginBottom: '20px',
  userSelect: 'none'
})

export const IconList = glamorous.div({
  position: 'absolute',
  right: '0',
  top: '0',
  textDecoration: 'none'
})

export const MenuList = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
})

export const MenuTitle = glamorous.div({
  textAlign: 'center',
  fontSize: '19px',
  userSelect: 'none',
  cursor: 'pointer',
  marginBottom: '0',
  ':hover': {
    color: 'pink',
    borderBottom: '1px solid pink'
  }
})

export const SMenuList = glamorous.div({
  backgroundColor: 'papayawhip',
  marginTop: '0'
})

const SLinkFactory = glamorous(Link);
export const SLink = SLinkFactory({
  color: 'black',
  display: 'block',
  userSelect: 'none',
  cursor: 'pointer',
  fintSize: '15px',
  marginLeft: '80px',
  marginTop: '10px',
  textDecoration: 'none',
  ':hover': {
    color: 'darkorange',
  }
})
