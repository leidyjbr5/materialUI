import { Typography, Stack } from '@mui/material'
import React, { Fragment } from 'react'

const PrincipalInformation = (props) => {
  const { data } = props
  const { 
    name,
    login,
    created_at,
  } = data

  return (
    <Fragment>
      <Stack>
        <Typography> {name} </Typography>
        <Typography> {created_at} </Typography>
      </Stack>
      <Typography> {login} </Typography>
    </Fragment>
  )
}

export default PrincipalInformation