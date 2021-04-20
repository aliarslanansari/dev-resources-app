import { Grid } from '@material-ui/core'
import PageWrapper from '../../components/PageWrapper'
import ResourceCard from '../../components/ResourceCard'

const HomeContainer = () => {
  return (
    <PageWrapper>
      <Grid container>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={4}>
          <ResourceCard />
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default HomeContainer
