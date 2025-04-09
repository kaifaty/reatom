/** @jsxImportSource preact */
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

export const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}
