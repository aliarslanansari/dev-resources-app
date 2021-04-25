import { Typography } from '@material-ui/core'
import PageWrapper from '../PageWrapper'

const PageNotFound = () => {
  return (
    <PageWrapper>
      <Typography variant='h3' color='secondary'>
        You've Lost
      </Typography>
      <Typography variant='h6' color='secondary'>
        please navigate to other page from the Navigation Menu
      </Typography>
    </PageWrapper>
  )
}

export default PageNotFound
