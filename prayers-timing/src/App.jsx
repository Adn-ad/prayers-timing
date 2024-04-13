import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import MainComponent from './components/MainComponent';
import Container from '@mui/material/Container';


function App() {


  return (
    <>
    <div style={{
     
      display: "flex",
      justifyContent: "center",
      width:"100vw"
      }} >
    <Container maxWidth="xl" >
    <MainComponent />
    </Container>

    </div>



    </>
  )
}

export default App
