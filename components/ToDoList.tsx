import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from 'react'
import ToDoItem from './ToDoItem'
import { ToDo, PropsList } from '../model/types'



const ToDoList = ({todos, completedToDo, deleteToDo, handleEdit} : PropsList ) =>  {


    return (
    <ul className="list-group mt-2 text-center w-25">
      {todos.length !== 0 ? <h1>ToDo</h1> : <span></span>}
      {todos.map((todo) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            completedToDo={completedToDo}
            deleteToDo={deleteToDo}
            handleEdit={handleEdit}
          />
        );
      })}
    </ul>
  );

}

export default ToDoList;