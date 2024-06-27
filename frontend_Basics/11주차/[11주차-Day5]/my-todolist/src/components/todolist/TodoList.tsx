import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = {
  id : number;
  text : string;
  isChecked : boolean;
};

const TodoList : React.FC = () => {
  const title : string = "오늘 할 일";

  // 구조 분해 할당 → (객체, 함수 모두 가능)
  const [todos, setTodos] = useState<Todo[]>([]);

  const [newTodo, setNewTodo] = useState<string>('');

  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {id : Date.now(), text: newTodo, isChecked: false}]);
    }
    setNewTodo('');
  };

  const handleCheckedChange = (id : number) => {
    setTodos((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, isChecked : !item.isChecked } : item
      )
    )
  };

  const removeTodo = (id : number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleTodoClick = (todo : Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);  
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="container">
        <h1>{title}</h1>
        <br />

      <div>
        <input type="text" 
        placeholder = "할일 입력"
        style = {{writingMode : 'horizontal-tb', marginRight: "10px"}}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button 
        variant="warning"
        onClick={addTodo}>추가</Button>
      </div>

      <br />
      <ul className="board">
        
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span>
                <Form.Check
                  type="checkbox"
                  id={`default-checkbox`}
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                />
                {!todo.isChecked ?
                  <span onClick={() => handleTodoClick(todo)}>{todo.text}</span> 
                  : <del onClick={() => handleTodoClick(todo)}>{todo.text}</del>
                }
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="del"
                >삭제</button>
              </span>
            </li> 
          ))
        }
      </ul>
      <TodoModal show={showDetail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
    </div>
  )
}

export default TodoList;