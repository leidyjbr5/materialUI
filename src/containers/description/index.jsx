import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import LocationInformation from '../../components/locationInformation'
import PaperInformation from '../../components/paperInformation'

const Description = (props) => {
  const { data } = props
  const { bio } = data
  return (
    <Fragment>
      <Stack>
        {bio !== null
         ?<Typography> {bio} </Typography>
         :<Typography> Lorem ipsum </Typography>
        }

      </Stack>
      <PaperInformation data={data} />
      <LocationInformation data={data}/>
    </Fragment>
 )
}

export default Description
