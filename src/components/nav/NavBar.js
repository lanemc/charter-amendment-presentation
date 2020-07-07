import React from 'react'
import { makeStyles, Grid, Typography, List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = ({ previousSlide, nextSlide, home }) => {
  const classes = useStyles()
  return (
    <Grid
      className={classes.navBar}
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
    >
      <List className={classes.navList}>
        {previousSlide ?
          <ListItem>
            <Link
              to={{ 
                pathname: `/${previousSlide}`
              }}
              alt="previous slide"
            >
              <Typography className={classes.link}>Previous</Typography>
            </Link>
          </ListItem> :
          null
        }
        {nextSlide ?
          <ListItem>
            <Link
              to={{ 
                pathname: `/${nextSlide}`
              }}
              alt="next slide"
            >
              <Typography className={classes.link}>Next</Typography>
            </Link>
          </ListItem> :
          null
        }
        {home ?
          <ListItem>
            <Link
              to={{ 
                pathname: `/${home}`
              }}
              alt="title slide"
            >
              <Typography className={classes.link}>Title</Typography>
            </Link>
          </ListItem> :
          null
        }
      </List>
    </Grid>
  )
}

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.componentColors.link,
    textDecoration: 'underline',
    fontSize: '2rem',
    '&:visited': {
      color: theme.palette.componentColors.link,
    },
    '&:active': {
      color: `${theme.palette.componentColors.linkHover} !important`,
      textShadow: 'none !important',
    },
    '&:hover': {
      color: theme.palette.componentColors.linkHover,
      textShadow: '2px 1px #bbb',
    },
  },
  navList: {
    display: 'flex',
  },
  navBar: {
    position: 'absolute',
    bottom: '10%',
    zIndex: 10,
  },
}))

export default NavBar