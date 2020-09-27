
import * as React from 'react'
import shortid from 'shortid'

import {TodoInterface, TodoFormInterface} from './../interfaces'

const TodoForm = (props: TodoFormInterface) => {
  // 创建input的Ref对象
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [formState, setFormState] = React.useState('')

  // input值改变时设置新值
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value)
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter' && formState !== '') {
      const newTodo: TodoInterface = {
        id: shortid.generate(), // 生成唯一id
        text: formState,
        isCompleted: false
      }

      props.handleTodoCreate(newTodo)
      setFormState(''); // 重置表单的value值
      // 处理空值状态
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='输入新的代办'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  )
}

export default TodoForm
