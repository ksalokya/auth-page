import * as React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Signup from './signup/Signup';

function App() {
  return (
    <div className='main'>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className='box'>
          <Signup />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
