import glamorous from 'glamorous';

export const MainBox = glamorous.div({
  border: '0.01em solid #7f6153',
})

export const Box = glamorous.div({
  border: '0.01em solid #7f6153',
  width: '18em',
  margin: '0 auto',
  height: '18em',
  marginBottom: '2em',
  position: 'relative',
}, ({id}) => ({
  marginLeft: id%2 === 0 && '0em',
  marginRight: id%2 === 1 && '0em',
  marginTop: id%2 === 1 && '-20.02em',
  '@media only screen and (max-width: 720px)': {
    width: '95%',
    height: '0px',
    paddingTop: '95%',
    margin: '0 auto',
    marginBottom: '2%'
  }
}))

export const Inside = glamorous.img({
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  width: '100%',
  height: '100%',
})

export const MainPhoto = glamorous.div({
  width: '100%'
})

export const PageBox = glamorous.div({
  fontSize: '1.1em',
  fontFamily: 'Helvetica',
  textAlign: 'center'
})

export const MLink = glamorous.a({
  color: '#7F7570',
  userSelect: 'none',
  cursor: 'pointer',
  fontSize: '1em',
  fontFamily: 'Helvetica',
  textDecoration: 'none',
  ':hover': {
    color: 'black',
  }
})

export const VideoBox = glamorous.div({
  width: '100%',
  paddingTop: '56.25%',
  position: 'relative',
})

export const Youtube = glamorous.iframe({
  border: '0px solid black',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  rigth: '0'
})
