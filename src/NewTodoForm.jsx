import { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Stack, Box, FormGroup } from "@mui/material";

const NewTodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const { onSubmit } = props;

  const handleChangeAddItem = (event) => {
    const todo = event.target.value;
    setTodo(todo);
  };

  const handleSubmit = () => {
    if (todo.trim() === "") return;
    onSubmit(todo);
    setTodo("");
  };

  return (
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
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={handleSubmit}
          >
            Add Item
          </Button>
        </FormGroup>
      </Stack>
    </Box>
  );
};
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
