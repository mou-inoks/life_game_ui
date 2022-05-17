import React from 'react';
import './App.css';
import Formulaire from './Components/Formulaire';
import  Tableau from './Components/Tableau';
import {Box} from "@mui/material"
function App() {
  return (
    <Box className="App">
      <Formulaire />
      <Tableau />
    </Box>
  );
}

export default App;
