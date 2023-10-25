import React from 'react';
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface Todo{
    id:string;
    body:string;
}

interface TodoListProps{
    todos: Todo[];
    deleteTodo: (id: string) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps) {
    if (!todos.length) {
      return (
        <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
          No Todos, yay!!!
        </Badge>
      );
    }
  
    return (
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        borderRadius="lg"
        p="4"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        alignItems="stretch"
      >
        {todos.map((todo) => (
          <HStack key={todo.id}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete"
            />
          </HStack>
        ))}
      </VStack>
    );
  }
  
  export default TodoList;