import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { ToDo, PropsToDo} from '../model/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';
import styles from '../styles/ToDo.module.css'

const ToDoItem = ( {todo, completedToDo, deleteToDo, handleEdit, active, completed} : PropsToDo) => {

    const { id } = todo;

  const markToDo = () => {
    completedToDo(id);
  };

  const dropToDo = () => {
    deleteToDo(id);
  };

  const editToDo = () => {
    handleEdit(id);
  };

  const renderToDo = () => {
    if(active && !completed){
      if(todo.completed){
        return (
          <li className="list-group-item mt-3 d-none">
              <div className="d-flex align-items-center m-2 w-100 justify-content-between">
                <div className="d-flex align-items-center ms-4 w-75">
                    <input
                      className="me-4"
                      type="checkbox"
                      name=""
                      id=""
                      onChange={markToDo}
                    />
                    <span className={styles.todoItemButton}>{todo.task}</span>
                    <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                      Delete
                    </button>

                    <button className="btn btn-warning" onClick={editToDo}>
                      Edit
                    </button>
            
                  </div>

               </div>
      
            </li>

        )
      } else {
        return (<li className="list-group-item mt-3">
              <div className="d-flex align-items-center m-2 w-100 justify-content-between">
                <div className="d-flex align-items-center ms-4 w-75">
                    <input
                      className="me-4"
                      type="checkbox"
                      name=""
                      id=""
                      onChange={markToDo}
                    />
                    <span className={styles.todoItemButton}>{todo.task}</span>
                    <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                      Delete
                    </button>

                    <button className="btn btn-warning" onClick={editToDo}>
                      Edit
                    </button>
            
                  </div>

               </div>
      
            </li>)
      }

    } else if(completed && !active){
      if(!todo.completed){
        return (
          <li className="list-group-item mt-3 d-none">
              <div className="d-flex align-items-center m-2 w-100 justify-content-between">
                <div className="d-flex align-items-center ms-4 w-75">
                    <input
                      className="me-4"
                      type="checkbox"
                      name=""
                      id=""
                      onChange={markToDo}
                    />
                    <span className={styles.todoItemButton}>{todo.task}</span>
                    <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                      Delete
                    </button>

                    <button className="btn btn-warning" onClick={editToDo}>
                      Edit
                    </button>
            
                  </div>

               </div>
      
            </li>

        )
      } else {
        return (<li className="list-group-item mt-3">
              <div className="d-flex align-items-center m-2 w-100 justify-content-between">
                <div className="d-flex align-items-center ms-4 w-75">
                    <input
                      className="me-4"
                      type="checkbox"
                      name=""
                      id=""
                      onChange={markToDo}
                    />
                    <span className={styles.todoItemButton}>{todo.task}</span>
                    <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                      Delete
                    </button>

                    <button className="btn btn-warning" onClick={editToDo}>
                      Edit
                    </button>
            
                  </div>

               </div>
      
            </li>)
      }


    } else {
      {console.log(active)}
      return(<li className="list-group-item mt-3">
              <div className="d-flex align-items-center m-2 w-100 justify-content-between">
                <div className="d-flex align-items-center ms-4 w-75">
                    <input
                      className="me-4"
                      type="checkbox"
                      name=""
                      id=""
                      onChange={markToDo}
                    />
                    <span className={styles.todoItemButton}>{todo.task}</span>
                    <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                      Delete
                    </button>

                    <button className="btn btn-warning" onClick={editToDo}>
                      Edit
                    </button>
            
                  </div>

               </div>
      
            </li>)
    }

    return <></>
  }

  return (
    renderToDo()
  );

}

export default ToDoItem;