// Todo interface
export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

// 定义完成数组
export interface TodoCompleteInterface {
  completeTodos: TodoInterface[];
  // handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
}

/* List 完成事项取消， 删除 */
export interface TodoListCompleteInterface {
  // handleCompleteTodoUpdate: (id: string) => void;
  handleTodoCompleteRemove: (id: string) => void;
  handleTodoCancel: (id: string) => void;
  completeTodos: TodoInterface[];
}
/* Item完成事项取消， 删除 */
export interface TodoItemCompleteInterface {
  handleTodoCompleteRemove: (id: string) => void;
  handleTodoCancel: (id: string) => void;
  completeTodo: TodoInterface;
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}
