import * as React from 'react';

import TodoCompleteItem from './completeTodo-Item';

import { TodoListCompleteInterface } from '../interfaces';

const TodoListComplete = (props: TodoListCompleteInterface) => {
  return (
    <div className="todo-list">
      <ul>
      {props.completeTodos.map((completeTodo) => (
          <li key={completeTodo.id}>
            <TodoCompleteItem
              completeTodo={completeTodo}
              handleTodoCompleteRemove={props.handleTodoCompleteRemove}
              handleTodoCancel={props.handleTodoCancel}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoListComplete;