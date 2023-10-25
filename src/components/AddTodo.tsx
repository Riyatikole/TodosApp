import { useState, ChangeEvent, FormEvent } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
}

export interface Todo {
  id: string;
  body: string;
}

function AddTodo({ addTodo }: AddTodoProps) {
  const toast = useToast();
  const [content, setContent] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo: Todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent('');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add Task Todo"
          value={content}
          onChange={handleChange}
        />
        <Button colorScheme="pink" px="8" type="submit" boxShadow="2xl">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;