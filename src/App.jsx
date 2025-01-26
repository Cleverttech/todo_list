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
  const [checked, setChecked] = useState(false);

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
  const handleChangeCheckedItem = (event) => {
    setChecked(event.target.checked);
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
          {todos.map((todo) => {
            <ListItem alignItems="flex-start">
              <FormControlLabel
                label={todo}
                control={
                  <Checkbox
                    checked={!checked}
                    onChange={handleChangeCheckedItem}
                  />
                }
              />
            </ListItem>;
          })}
        </List>
      </Box>
    </>
  );
}

export default App;
