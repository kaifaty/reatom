/** @jsxImportSource preact */
import { selectTodos, type Todo, toggleTodo, deleteTodo } from '../model'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => (
  <li>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(todo.id)}
    />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
)

export const TodoList = () => {
  const todos = selectTodos()

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  )
}
