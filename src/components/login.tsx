
import { HStack, VStack, Text, Heading, Input, FormLabel, FormControl, Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function LogIn() {

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate('/');
  };
  return (
    <div>
      <Box boxShadow='md' p='6'>

<VStack>
<VStack>
    <Heading>LogIn</Heading>
    <Text>Enter your name and password to login</Text>
</VStack>

<FormControl>
    <FormLabel>Full Name</FormLabel>
    <Input rounded = 'none'/>
</FormControl>
<FormControl>
    <FormLabel>Password</FormLabel>
    <Input />
</FormControl>
</VStack>
<FormControl>
<Button colorScheme ="pink" px ="8" type ="submit" size = 'sm' m = '4' onClick={handleFormSubmit}>Submit</Button>
</FormControl>



</Box >
    </div>
  );
}

export default LogIn;