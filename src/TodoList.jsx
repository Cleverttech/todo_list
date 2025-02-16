import { Box, List } from "@mui/material";
import { TodoItem } from "./TodoItem";
import PropTypes from "prop-types";
export const TodoList = (props) => {
  const { todos, toggleTodo, onDelete } = props;
  return (
    <Box>
      <h1>Todo List</h1>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {todos.length === 0 && <p>No Todos</p>}
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={()=> toggleTodo(todo.id)}
              onDelete={onDelete}
            />
          );
        })}
      </List>
    </Box>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ).isRequired,
  toggleTodo: PropTypes.func,
  onDelete: PropTypes.func,
};
