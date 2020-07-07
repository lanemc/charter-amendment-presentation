import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import NavBar from '../nav/NavBar'

const Slide = ({ children, slideTitle, previousSlide, nextSlide, home }) => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid className={classes.slideContainer}>
        <Typography variant="h2">{slideTitle}</Typography>
        {children}
      </Grid>
      <Grid container className={classes.navBar}>
        <NavBar previousSlide={previousSlide} nextSlide={nextSlide} home={home} />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  slideContainer: {
    padding: '2.5rem'
  },
}))

export default Slide
