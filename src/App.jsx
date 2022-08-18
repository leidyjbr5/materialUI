import React, { useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/searcher'

const containerStyles = {
  backgroundColor: 'whitesmoke',
  width: '80vw',
  height: '500px',
  borderRadius: '16px',
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const App = () => {

  const [inputUser, setInputUser] = useState('userState')
  const [userState, setUserState] = useState('inputUser')

  return(
    <Container sx={containerStyles}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}

export default App