import * as React from 'react';
import { TodoItemCompleteInterface } from '../interfaces';

// 已完成Item
const TodoCompleteItem = (props: TodoItemCompleteInterface) => {
  return (
    <div className='todo-item'>
      <div onClick={() => props.handleTodoCancel(props.completeTodo.id)}>
        {props.completeTodo.isCompleted ? (
          <span className="todo-item-checked">&#x2714;</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      <div className="todo-item-input-wrapper">
        {/* <input
          defaultValue={props.completeTodo.text}
        /> */}
        <p>{props.completeTodo.text}</p>
      </div>
      <div className="item-remove" onClick={() => props.handleTodoCompleteRemove(props.completeTodo.id)}>
        &#x02A2F;
      </div>
    </div>
  )
}

export default TodoCompleteItem;