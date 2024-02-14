import React, { useState } from "react";

const DisplayTodo = ({ item, index, setTodo, updateList }) => {
  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editDes, setEditDes] = useState(item.description);
  const[value,setValue] = useState(item.Completed);
  const deleteList = (id) => {
    setTodo((pval) => pval.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div key={index}>
        <div class="col">
          <div class="card h-100 bg-info bg-gradient">
            <div class="card-body text-start">
              <h4 className="card-title text-center"> Task no : {item.id}</h4>
              <h5 class="card-title">
                {edit ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <h5> Title: {item.title} </h5>
                )}
              </h5>
              <p class="card-text">
                {edit ? (
                  <input
                    type="text"
                    className="form-control"
                    value={editDes}
                    onChange={(e) => setEditDes(e.target.value)}
                  />
                ) : (
                  <p>Description : {item.description} </p>
                )}
              </p>
              <p class="card-text">{edit ? <select value={value} onChange={e => setValue(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>:<p>Completed : {item.Completed}</p>}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {edit ? (
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      updateList(item.id, editTitle, editDes,value);
                      setEdit(false);
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit{" "}
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteList(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayTodo;
