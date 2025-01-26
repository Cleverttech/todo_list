import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Box,
  FormGroup,
  List,
  ListItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeAddItem = (event) => {
    const todo = event.target.value;
    setTodo(todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() === "") return;
    const newTodoItem = {
      id: crypto.randomUUID(),
      newTodo: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodoItem]);
    setTodo("");
  };
  const handleDeleteItem = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const updateCheckedItem = (id, isCompleted) => {
    const newTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo;
    });

    setTodos(newTodos);
  };
  console.log("todos", todos);
  return (
    <>
      <Box sx={{ width: 400 }}>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="column"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
        >
          <label>New Item</label>
          <FormGroup>
            <TextField
              onChange={handleChangeAddItem}
              value={todo}
              id="item"
              variant="outlined"
            />
            <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
              Add Item
            </Button>
          </FormGroup>
        </Stack>
      </Box>
      <Box>
        <h1>Todo List</h1>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {todos.length === 0 && <p>No Todos</p>}
          {todos.map((todo) => {
            return (
              <ListItem alignItems="flex-start" key={todo.id}>
                <FormControlLabel
                  label={todo.newTodo}
                  control={
                    <Checkbox
                      checked={todo.isCompleted}
                      onChange={() =>
                        updateCheckedItem(todo.id, todo.isCompleted)
                      }
                    />
                  }
                />
                <Button
                  sx={{ mt: 2 }}
                  variant="contained"
                  onClick={() => handleDeleteItem(todo.id)}
                  color="error"
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}

export default App;
