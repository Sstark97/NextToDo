import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { ToDo, PropsToDo} from '../model/types'

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
    <li className="">
      <div className="d-flex align-items-center justify-content-around m-2 p-3">
        {todo.task}
        <input
          className="ms-2"
          type="checkbox"
          name=""
          id=""
          onChange={markToDo}
        />
        <button className="btn btn-danger ms-2 me-2" onClick={dropToDo}>
          {" "}
          Delete{" "}
        </button>

        <button className="btn btn-warning" onClick={editToDo}>
          Edit
        </button>
      </div>
    </li>
  );

}

export default ToDoItem;