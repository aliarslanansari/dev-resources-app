import { Button, ButtonProps, CircularProgress } from '@material-ui/core'
import { memo } from 'react'

interface DRButtonPropsTypes extends ButtonProps {
  onClick?: () => void
  loading?: boolean
  label: string
}

function DRButton(props: DRButtonPropsTypes) {
  const { onClick, loading, label } = props
  return (
    <Button
      data-testid='button'
      variant='outlined'
      color='secondary'
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {loading && <CircularProgress color='secondary' size={'2rem'} />}
      {!loading && label}
    </Button>
  )
}

export default memo(DRButton)
