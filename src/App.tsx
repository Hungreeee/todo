import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css'
import TodoCard from './TodoCard';

interface TodoList {
  text: string;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todolist, setTodoList] = useState<Array<TodoList>>([]);

  const handleDelete = (index: number): void => {
    todolist.splice(index, 1);
    setTodoList([...todolist]);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodoList([...todolist, { text: todo }]);
    setTodo("");
  }

  return (
    <div className='App'>
      <header>Siêu đỉnh To do lít </header>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={handleChange} required placeholder='Nhập vào đây' />
          <button type='submit'> Sắp mít </button>
        </form>
      </div>
      <ul>
        {todolist.map((todoelement, index) => (
          <button onClick={() => handleDelete(index)} key={todoelement.text}>
            <TodoCard
              key={todoelement.text}
              text={todoelement.text}
            />
          </button>
        ))}
      </ul>
    </div>
  );
}

export default App;
