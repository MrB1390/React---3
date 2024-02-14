import React,{useState} from "react";

const Add = ({addTodo}) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 
        addTodo(title,description);
        setTitle('')
        setDescription('')
    }

  return (
    <div>
      <h1 className="text-center">Todo-List</h1>
      <div className="container ">
      <form class="row g-3 d-flex justify-content-center" onSubmit={handleSubmit}>
        <div class="col-auto">
            <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        </div>
        <div class="col-auto">
        <input type="text" className="form-control" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        </div>
        <div class="col-auto">
          <button type="submit" onClick={handleSubmit} class="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Add;
