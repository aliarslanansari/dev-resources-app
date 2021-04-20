import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    },
    '& .MuiOutlinedInput-input': {
      color: theme.palette.secondary.main
    },
    '&:hover .MuiOutlinedInput-input': {
      color: theme.palette.secondary.main
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: theme.palette.secondary.main
    },
    '& .MuiInputLabel-outlined': {
      color: theme.palette.secondary.main
    },
    '&:hover .MuiInputLabel-outlined': {
      color: theme.palette.secondary.main
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: theme.palette.secondary.main
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
      // InputProps={{ classes: classes.root }}
      label='Custom CSS'
      className={classes.root}
      variant='outlined'
      {...props}
    />
  )
}

export default CustomizedInputs
