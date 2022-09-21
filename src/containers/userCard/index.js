import React from 'react'
import PrincipalInformation from '../../components/principalInformation'
import Description from '../description'
import { CardMedia, Grid } from '@mui/material'

const UserCard = (props) => {
  const {data} = props
  const {avatar_url} = data

  return(
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia 
        component='img'
        alt='Github User'
        image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation data={data} />
        <Description data = {data} />
      </Grid>
    </Grid>
  )
}

export default UserCard
