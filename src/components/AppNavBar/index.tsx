import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '4rem',
      justifyContent: 'center',
      justifyItems: 'center'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

const AppNavBar = () => {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        News
      </Typography>
    </AppBar>
  )
}

export default AppNavBar
