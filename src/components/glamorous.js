import glamorous from 'glamorous';

export const Main = glamorous.div({
  width: '600px',
  margin: '0 auto',
  position: 'relative'
})

export const Title = glamorous.h1({
  textAlign: 'center'
})

export const MenuList = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
})

export const Body = glamorous.div({
  marginTop: '20px',
  border: '2px solid skyblue',
  borderRadius: '5px',
  width: '100%',
  height: '400px'
})

export const Move = glamorous.div({
  position: 'absolute',
  right: '0',
  top: '0',
  textDecoration: 'none'
})
