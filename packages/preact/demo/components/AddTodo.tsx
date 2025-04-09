/** @jsxImportSource preact */
import { selectNewTodoText, setNewTodoText, addTodo } from '../model'

export const AddTodo = () => {
  const newTodoText = selectNewTodoText()

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    addTodo()
  }

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setNewTodoText(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodoText}
        onInput={handleInput}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}
