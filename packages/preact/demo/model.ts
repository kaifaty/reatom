import { atom, action } from '@reatom/core'

export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
  newTodoText: string
}

export const todoAtom = atom<TodoState>({
  todos: [],
  newTodoText: '',
})

export const setNewTodoText = action((text: string) => {
  todoAtom((prev: TodoState) => ({ ...prev, newTodoText: text }))
})

export const addTodo = action(() => {
  const state = todoAtom()
  if (!state.newTodoText.trim()) return

  const newTodo: Todo = {
    id: Date.now(),
    text: state.newTodoText.trim(),
    completed: false,
  }

  todoAtom((prev: TodoState) => ({
    ...prev,
    todos: [...prev.todos, newTodo],
    newTodoText: '',
  }))
})

export const toggleTodo = action((id: number) => {
  todoAtom((prev: TodoState) => ({
    ...prev,
    todos: prev.todos.map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  }))
})

export const deleteTodo = action((id: number) => {
  todoAtom((prev: TodoState) => ({
    ...prev,
    todos: prev.todos.filter((todo: Todo) => todo.id !== id),
  }))
})

// Селекторы
export const selectTodos = (): Todo[] => todoAtom().todos
export const selectNewTodoText = (): string => todoAtom().newTodoText
