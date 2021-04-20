import { Typography } from '@material-ui/core'
import PageWrapper from '../PageWrapper'

const PageNotFound = () => {
  return (
    <PageWrapper>
      <Typography variant='h1'>You've Lost</Typography>
      <Typography variant='h4'>
        please navigate to other page from the Navigation Menu
      </Typography>
    </PageWrapper>
  )
}

export default PageNotFound
