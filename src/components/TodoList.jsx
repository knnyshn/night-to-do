import { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

function TodoList() {
  const [todoValue, setTodo] = useState([]);

  const createTodo = todo => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  const deleteTodo = id => {
    setTodo(todoValue.filter(todo => todo.id !== id))
  };

  const editTodo = id => {
    setTodo(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing }: todo))
  }

  return (
    <div className="container bg-black mt-20 p-8 rounded-md">
          <Form createTodo={createTodo} />
          {
              todoValue.map((todo, idx) =>
              (<Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} />
              ))
            }
    </div>
  );
}

export default TodoList;
