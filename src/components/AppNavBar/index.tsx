import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      backgroundColor: theme.palette.primary.dark,
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.primary.contrastText
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: theme.palette.secondary.main
    },
    button: {
      color: theme.palette.secondary.main
    }
  })
)

const AppNavBar = () => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        DevResources
      </Typography>
      <div>
        <Button
          className={classes.button}
          size='large'
          variant='outlined'
          color='secondary'
        >
          Login
        </Button>
      </div>
    </AppBar>
  )
}

export default AppNavBar
