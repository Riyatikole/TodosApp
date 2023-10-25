
import React, { useState } from 'react';
import { Heading, VStack, HStack, IconButton, useColorMode, Button } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {Todo} from './AddTodo';
import { useNavigate } from 'react-router-dom';






function Home() {
    const initialTodos: Todo[] = [];
  
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
  
    function deleteTodo(id: string) {
      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    }
  
    function addTodo(todo: Todo) {
      setTodos([...todos, todo]);
    }
  
    const { colorMode, toggleColorMode } = useColorMode();

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

    const handleSignUp = () => {
      navigate('/signup');
    };

    

    
  
    return (
      <VStack p={4}>
        <HStack alignSelf="flex-end">

          
          <Button colorScheme='pink' variant='ghost' onClick={handleLoginClick} >LogIn</Button>
          <Button colorScheme='pink' variant='ghost' onClick={handleSignUp} >SignUp</Button>
          
  
          <IconButton
            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
            isRound
            size="lg"
            onClick={toggleColorMode}
            aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}

          />
        </HStack>
        <Heading
          mb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, pink.700, blue.800)"
          bgClip="text"
        >
          TODO APPLICATION
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    );
  }
  
  export default Home;