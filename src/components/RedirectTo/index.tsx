import React from 'react'
import { Redirect } from 'react-router-dom'

export const RedirectTo = (to: any) => () => <Redirect to={to} />
