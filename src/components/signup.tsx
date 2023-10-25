import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VStack, Text, Heading, Input, FormLabel, FormControl, Box, Button } from '@chakra-ui/react';

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    
    console.log('Full Name:', fullName);
    console.log('Password:', password);

    
    setFullName('');
    setPassword('');

    navigate('/');
  };

  return (
    <div>
      <Box boxShadow="md" p="6">
        <VStack>
          <VStack>
            <Heading>SignUp</Heading>
            <Text>Enter your name and password to sign up</Text>
          </VStack>

          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input rounded="none" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
        </VStack>

        <FormControl>
          <Button colorScheme="pink" px="8" type="submit" size="sm" m="4" onClick={handleFormSubmit}>
            Submit
          </Button>
        </FormControl>
      </Box>
    </div>
  );
}

export default Signup;