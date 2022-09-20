import React, { useState } from 'react'
import { Container } from '@mui/material'
import Searcher from './components/searcher'
import { getGithubUser } from './services/users'
import { useEffect } from 'react';

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

  const [inputUser, setInputUser] = useState('octocat')
  const [data, setData] = useState([])

  const getUser = async (user) => {
    const userResponse = await getGithubUser(user)
    if(inputUser === 'octocat'){
      localStorage.setItem('octocat', JSON.stringify(userResponse))
    }

    if(userResponse.message === 'Not Found'){
      const octocat = JSON.parse(localStorage.getItem('octocat'))
      return setData(octocat)
    }

    setData(userResponse)
  }

  useEffect(() => {
    getUser(inputUser)
  }, [inputUser])

  return(
    <Container sx={containerStyles}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}
export default App