import React, { SyntheticEvent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import {ToDo, PropsModal} from "../model/types";

export function EditModal( {todo, handleSubmitEdited, handleCloseModalInParent} : PropsModal) {
  const [edit, setEditing] = useState({ value: todo.task });

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    todo.task = event.target.value;
    setEditing({ value: event.target.value });
  };

  const handleSubmitEdit = () => {
    handleSubmitEdited(todo);
  };

  const handleCloseModal = () => {
    handleCloseModalInParent();
  };

  const handleShowModal = () => {
    console.log(todo);
    if (todo) {
      return (
        <div
          className=""
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Tarea a Editar
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <input
                onChange={handleChange}
                type="text"
                className="modal-body"
                value={edit.value}
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmitEdit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return handleShowModal();
}
