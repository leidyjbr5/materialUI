import React from 'react'
import PrincipalInformation from '../../components/principalInformation'
import Description from '../description'
import { CardMedia, Grid, Stack } from '@mui/material'

const UserCard = (props) => {
  const {data} = props
  const {avatar_url} = data

  return(
    <Grid 
      container 
      spacing={2}
      sx={{marginTop: '15px'}}
      >
      <Grid item xs={3}>
        <CardMedia 
        component='img'
        alt='Github User'
        image={avatar_url}
        sx={{
          borderRadius: '50%',
          marginLeft: '5px'
        }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{margin: '30px'}}
        >
          <PrincipalInformation data={data} />
          <Description data = {data} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard
