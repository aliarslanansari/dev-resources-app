import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Theme,
  Typography
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: any) => ({
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    ...(props.skeleton
      ? {
          height: 300
        }
      : {}),
    borderRadius: theme.spacing(1),
    // transition: 'margin 0.05s',
    '&:hover': {
      marginTop: 12
    }
  }),
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  cta: {
    marginBottom: 12
  }
}))

interface ResourceCardPropsTypes {
  title: string
  description: string
  skeleton?: boolean
}

const ResourceCard = (props: ResourceCardPropsTypes) => {
  const classes = useStyles(props)

  return (
    <Card className={classes.root}>
      {!props.skeleton ? (
        <>
          <CardContent>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              ALI ARSALAN
            </Typography>
            <Typography variant='h6'>{props.title}</Typography>
            <CardMedia
              className={classes.media}
              image='https://www.javascript.com/content/pluralsight/en/jscom/resources/jcr:content/main/generic_block_237304881/parsys/column_control/column-parsys-1/image/image-res.img.245946ba-3e2a-430c-bdaf-a30c510c963a.jpg'
              title='Paella dish'
            />
          </CardContent>
          <CardActions>
            <Button className={classes.title} size='small' variant='outlined'>
              View
            </Button>
          </CardActions>
        </>
      ) : (
        <>
          <Skeleton height={50} />
          <Skeleton width='100%' height={300} />
        </>
      )}
    </Card>
  )
}

export default ResourceCard
