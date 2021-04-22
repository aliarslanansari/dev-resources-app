import { Button, ButtonProps, CircularProgress } from '@material-ui/core'
import { ReactChild, ReactChildren } from 'react'

interface DRButtonPropsTypes extends ButtonProps {
  onClick: Function
  loading: boolean
}

function DRButton(props: DRButtonPropsTypes) {
  const { onClick, loading } = props
  return (
    <Button
      variant='outlined'
      color='secondary'
      onClick={onClick}
      disabled={loading}
    >
      {loading && <CircularProgress size={14} />}
      {!loading && 'Click Me'}
    </Button>
  )
}

export default DRButton
