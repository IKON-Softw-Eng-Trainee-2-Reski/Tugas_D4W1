import React, {useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';
import TodoTables from './components/TodoTables';

function App() {
  const [showAddTodoForm, setshowAddTodoForm] = useState(false);

  const  [todos, setTodos]  = useState(
    [
      {RowsNumber : 1, RowsItems: "Feed Cat"}, 
      {RowsNumber : 2, RowsItems: "Get Haircut"}, 
      {RowsNumber : 3, RowsItems: "Water Plants"}, 
      {RowsNumber : 4, RowsItems: "Charge Phone Battery"}, 
      {RowsNumber : 5, RowsItems: "Order Food"}, 
    ]
  
  )
  const addTodo = (description) =>{
    let RowsNumber = 0 ;

    if (todos.length>0){
      RowsNumber = todos[todos.length -1].RowsNumber+1;
    }else{
      RowsNumber = 1;
    }
      const newTodo = {
        RowsNumber : RowsNumber, 
        RowsItems: description, 
      };
      setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber)=>{
    let filtered = todos.filter(function (value){
      return value.RowsNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);

  }
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
        <button className='btn btn-warning' onClick={ () => setshowAddTodoForm(!showAddTodoForm)}>
            {showAddTodoForm ? "Close New Todo":"New Todo"}</button>
          {/* conditional rendering */}
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo} />
          }
        </div>
        <div className='card-body'>
          <TodoTables todos={todos} deleteTodo={deleteTodo}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;