import React, { useState } from 'react'
import { Stack, IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const stackStyles = {
  marginTop: '30px',
  width: '80%'
};

const textFieldStyles = {
  width: '90%'
};

const iconButtonStyles = {
  left: '-45px'
};


const Searcher = (props) => {

  const {
    inputUser,
    setInputUser
  } = props

  const [valueInput, setValueInput] = useState('')

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value
    setValueInput(inputValue)
  }
  const handleSubmit = () => {
    setInputUser(valueInput)
  }

  return (
    <Stack direction= 'row'sx={stackStyles}>
      <TextField 
      id="outlined-basic" 
      label="Github User"
      placeholder="Octocat"
      variant="outlined"
      size="small"
      value = {valueInput}
      onChange={onSearchValueChange}
      sx={textFieldStyles}/>
      <IconButton 
      onClick={handleSubmit}
      sx={iconButtonStyles}>
        <SearchIcon />
      </IconButton>
    </Stack>
  )
}

export default Searcher