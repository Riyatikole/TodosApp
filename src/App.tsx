import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {VStack} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/login';
import SignUp from './components/signup'


function App() {
  return (
    <VStack>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element ={<SignUp />} />
      </Routes>
    </Router>
      
      

    </VStack>
    
    
  );
}

export default App;
