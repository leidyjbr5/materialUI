import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperInformation = (props) => {
  const {data} = props
  const {
    public_repos,
    followers,
    following
  } = data

  return (
    <Paper elevation={3}>
      <Stack>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography>Seguidores</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography>Siguiendo</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>

  )
}

export default PaperInformation
