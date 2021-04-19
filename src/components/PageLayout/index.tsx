import * as React from 'react'
import { TPageLayoutPropsType } from './types'
import { makeStyles } from '@material-ui/core/styles'

const usePageLayoutStyles = makeStyles(() => ({
  root: {
    // paddingLeft: '2rem',
    // paddingRight: '2rem',
    height: '100vh',
    // backgroundImage: `url(${Image})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundColor: '#A7C7E7',
    backgroundSize: 'cover',
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column'
  }
}))

export default function PageLayout(props: TPageLayoutPropsType) {
  const classes = usePageLayoutStyles()

  return <div className={classes.root}>{props.children}</div>
}
