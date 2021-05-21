import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { ToDo, PropsToDo} from '../model/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

const ToDoItem = ( {todo, completedToDo, deleteToDo, handleEdit} : PropsToDo) => {

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

  return (
    <li className="list-group-item">
      <div className="d-flex align-items-center m-2 w-100 justify-content-around">
        <span className="w-25">Task: {todo.task}</span>
        <div className="d-flex align-items-center justify-content-between ms-4 w-25 me-2">
            <input
                className="ms-2"
                type="checkbox"
                name=""
                id=""
                onChange={markToDo}
            />
            <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
                Delete
            </button>

            <button className="btn btn-warning" onClick={editToDo}>
              Edit
            </button>
            
        </div>
      
        
      </div>
      
    </li>
  );

}

export default ToDoItem;