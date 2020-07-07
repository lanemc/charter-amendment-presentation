import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import { Slide } from './components/slides'

const App = () => {
  const classes = useStyles()
  return (
    <Slide
      slideTitle="Title Slide"
      nextSlide="Slide1"
    >
      Title
    </Slide>
  )
}

const useStyles = makeStyles(theme => ({

}))

export default App
