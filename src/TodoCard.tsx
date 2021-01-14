import React from 'react';
import './TodoCard.css'


interface TodoCardProps {
  text: string;
  key: string;
}

const TodoCard: React.FC<TodoCardProps> = ({
  text
}) => {
  return (
    <div className='nice-button'>
      <div className='after-state'> {text} </div>
      <div className='initial-state'> xóa </div>
    </div>
  );
}

export default TodoCard;

