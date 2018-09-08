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
}, ({id}) => ({
  marginLeft: id%2 === 0 && '0em',
  marginRight: id%2 === 1 && '0em',
  '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
    marginLeft: id%2 === 0 && '0em',
    marginRight: id%2 === 1 && '0em',
    marginTop: id%2 !== 0 && '-20.02em'
  },
  '@media only screen and (max-width: 720px)': {
    width: '100%'
  }
}))

export const MainPhoto = glamorous.div({
  width: '600px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  '@media only screen and (max-width: 720px)': {
    gridTemplateColumns: '1fr',
    width: '100%'
  }
})
