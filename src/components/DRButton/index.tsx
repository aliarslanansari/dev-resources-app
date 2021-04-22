import { Button, ButtonProps, CircularProgress } from '@material-ui/core'

interface DRButtonPropsTypes extends ButtonProps {
  onClick: () => void
  loading: boolean
  label: string
}

function DRButton(props: DRButtonPropsTypes) {
  const { onClick, loading, label } = props
  return (
    <Button
      variant='outlined'
      color='secondary'
      onClick={onClick}
      disabled={loading}
    >
      {loading && <CircularProgress color='secondary' size={'2rem'} />}
      {!loading && label}
    </Button>
  )
}

export default DRButton
