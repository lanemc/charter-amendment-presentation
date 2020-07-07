import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core'
import NavBar from './components/nav/NavBar'

const App = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid>
        <Typography variant="h2">Title Slide</Typography>
      </Grid>
      <Grid container className={classes.navBar}>
        <NavBar nextSlide="Slide1" />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({

}))

export default App
