import { Button, ListItem, Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";
export const TodoItem = (props) => {
  const { newTodo, isCompleted, id, toggleTodo, onDelete } = props;
  return (
    <ListItem alignItems="flex-start">
      <FormControlLabel
        label={newTodo}
        control={
          <Checkbox
            checked={isCompleted}
            onChange={()=>toggleTodo(id)}
          />
        }
      />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        onClick={() => onDelete(id)}
        color="error"
      >
        Delete
      </Button>
    </ListItem>
  );
};

TodoItem.propTypes = {
  newTodo: PropTypes.string,
  isCompleted: PropTypes.bool,
  id: PropTypes.string,
  toggleTodo: PropTypes.func,
  onDelete: PropTypes.func,
};
