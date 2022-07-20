import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Box>
      <Routes>
          <Route path="/" element={<Homepage />}  />
          <Route path="/login" element={<Login />} />
      </Routes>
       </Box>
    </div>
  );
}

export default App;
