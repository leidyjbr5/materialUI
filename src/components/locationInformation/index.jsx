import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'
import BusinessIcon from '@mui/icons-material/Business'

const LocationInformation = (props) => {
  const { data } = props
  const {
    location,
    twitter_username,
    blog,
    company
  } = data

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOnIcon />
          <Typography>
            {location}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <TwitterIcon />
          <Typography>
            {twitter_username}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <LanguageIcon />
          <Typography>
            {blog}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <BusinessIcon />
          <Typography>
            {company}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default LocationInformation
