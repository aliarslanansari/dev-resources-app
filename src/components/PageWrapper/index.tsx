import { makeStyles } from '@material-ui/core/styles'
import { TPageWrapperPropsType } from './types'
import Grid from '@material-ui/core/Grid'

const usePageLayoutStyles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
    overflow: 'auto'
  }
}))

export default function PageWrapper(props: TPageWrapperPropsType) {
  const classes = usePageLayoutStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item sm={1} xs={1} md={2}></Grid>
      <Grid item sm={10} xs={10} md={8}>
        {props.children}
      </Grid>
      <Grid item sm={1} xs={1} md={2}></Grid>
    </Grid>
  )
}
