import * as React from 'react'
import { TPageLayoutPropsType } from './types'
import { makeStyles, Theme } from '@material-ui/core/styles'

const usePageLayoutStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: 'cover',
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column'
  }
}))

export default function PageLayout(props: TPageLayoutPropsType) {
  const classes = usePageLayoutStyles()

  return (
    <div data-testid='pageLayout' className={classes.root}>
      {props.children}
    </div>
  )
}
