
import * as React from 'react'
import { render } from 'react-dom'


import TodoForm from './components/todo-form'
import TodoList from './components/todo-list'
import TodoListComplete from './components/completeTodo-list'
import ReactUse from './components/react-use';


import { TodoInterface } from './interfaces'

// 组件所有样式
import './styles/styles.css'

// TodoListApp component
const TodoListApp = () => {
  // 代办列表
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  // 完成的列表
  const [completeTodos, setCompleteTodos] = React.useState<TodoInterface[]>([]);

  // 增加todo
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]

    newTodosState.push(todo)

    setTodos(newTodosState)
  }

  // 更新todo的文字
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    // console.log(newTodosState, '小城..');
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value

    setTodos(newTodosState)
  }

  // Remove existing todo item 删除todo
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)

    setTodos(newTodosState)
  }

  // 代办事项完成
  function handleTodoComplete(id: string) {
    // Copy current todos state
    const newTodosState: TodoInterface[] = [...todos]
    const newCompleteTodoState: TodoInterface[] = [...completeTodos];

    // 切换是否完成
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    newTodosState.forEach((item: TodoInterface, index) => {
      if (item.isCompleted) {
        newTodosState.splice(index, 1)
        newCompleteTodoState.push(item);
      }
    })
    // 更新代办和完成
    setTodos(newTodosState);
    setCompleteTodos(newCompleteTodoState);
  }

  // 检查代办todo是否有值
  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.classList);
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error')
    } else {
      event.target.classList.remove('todo-input-error')
    }
  }
  // 删除已完成代办
  function handleTodoCompleteRemove (id: string) {
    const newCompleteTodoState: TodoInterface[] = completeTodos.filter((completeTodo: TodoInterface) => completeTodo.id !== id);
    setCompleteTodos(newCompleteTodoState)
  }
  // 取消完成代办
  function handleTodoCancel (id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    const newCompleteTodoState: TodoInterface[] = [...completeTodos];

    // 切换是否完成
    newCompleteTodoState.find((completeTodo: TodoInterface) => completeTodo.id === id)!.isCompleted = !newCompleteTodoState.find((completeTodo: TodoInterface) => completeTodo.id === id)!.isCompleted
    newCompleteTodoState.forEach((item: TodoInterface, index) => {
      if (!item.isCompleted) {
        newCompleteTodoState.splice(index, 1)
        newTodosState.push(item);
      }
    })
    // 更新代办和完成
    setTodos(newTodosState);
    setCompleteTodos(newCompleteTodoState);
  }
  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />
      <h3>正在进行（{todos.length}）</h3>
      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
      />
      <h3>已经完成（{completeTodos.length}）</h3>
      <TodoListComplete 
        completeTodos={completeTodos}
        handleTodoCompleteRemove={handleTodoCompleteRemove}
        handleTodoCancel={handleTodoCancel}
      />
      <ReactUse />
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<TodoListApp />, rootElement)
