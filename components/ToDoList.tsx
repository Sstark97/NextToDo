import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from 'react'
import ToDoItem from './ToDoItem'
import { ToDo, PropsList } from '../model/types'
import styles from '../styles/ToDo.module.css'



const ToDoList = ({todos, addToDo, completedToDo, deleteToDo, handleEdit, handleShowActivesInParent, handleShowAll, active} : PropsList ) =>  {
    
    const todoRef = useRef<HTMLInputElement>(null);

    const handleAddToDo = () => {
      if(todoRef === undefined || todoRef.current === undefined || todoRef.current === null){
        return;
      }
      const task:string = todoRef.current?.value;

      if (task === "") {
        return;
      }

      if(typeof task !== 'undefined'){
        addToDo(task);
        todoRef.current.value = '';
      }

    }

    const handleShowActivesToDo = () => {
      handleShowActivesInParent();
    }

    const handleShowAllInParent = () => {
      handleShowAll();
    }

    return (
    <ul className="list-group mt-2 text-center w-25">
      {console.log('render')}
      {todos.length !== 0 ? <h1>#ToDo</h1> : <span></span>}
      <div className="d-flex w-100 justify-content-center">
        <button className={styles.todoButtons} onClick={handleShowAllInParent}>All</button>
        <button className={styles.todoButtons} onClick={handleShowActivesToDo}>Active</button>
        <button className={styles.todoButtons}>Completed</button>
      </div>
      <hr className="w-100" />
      <div className="container d-flex mt-4 justify-content-center w-100">
        <input ref={todoRef} className="me-2 border border-secondary w-75" type="text" placeholder= "add details..." />
        <button className="btn btn-primary me-1" onClick={handleAddToDo}>
          Add
        </button>
      </div>
      {todos.map((todo) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            completedToDo={completedToDo}
            deleteToDo={deleteToDo}
            handleEdit={handleEdit}
            active = {active}
          />
        );
      })}
    </ul>
  );

}

export default ToDoList;