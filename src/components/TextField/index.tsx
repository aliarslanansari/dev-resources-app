import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme: Theme) => ({
  root: {
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },
  disabled: {
    borderColor: theme.palette.secondary.main
  },
  focused: {
    borderColor: theme.palette.secondary.main
  },
  error: {
    borderColor: theme.palette.secondary.main
  },
  notchedOutline: {
    borderColor: theme.palette.secondary.main
  }
}))
function CustomizedInputs(props: TextFieldProps) {
  const classes = styles()
  return (
    <TextField
      InputProps={{ classes: classes }}
      label='Custom CSS'
      variant='outlined'
      {...props}
    />
  )
}

export default CustomizedInputs
