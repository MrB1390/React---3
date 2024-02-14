import React, { useEffect, useState } from "react";
import Add from "./component/Add";
import DisplayTodo from "./component/DisplayTodo";


const App = () => {
  const [todo, setTodo] = useState([]);
  const [val,setVal] = useState('all')
  const[filteredTodo,setFilteredTodo] = useState([]);
  const addTodo = (title, description) => {
    const newData = {
      id: todo.length + 1,
      title: title,
      description: description,
      Completed: "pending" || "Completed",
    };
    setTodo([...todo, newData]);
  };
  const updateList = (id, editTitle, editDes, value) => {
    setTodo(todo.map((item) => 
      item.id === id 
      ? { ...item, title: editTitle, description: editDes, Completed: value } 
      : item
    ));
  };
  
  const changeValue = (e) =>{
    setVal(e.target.value)
  }
  useEffect(() => {
    if (val === 'all') {
      setFilteredTodo(todo);
    }
    if (val === 'Completed') {
      setFilteredTodo(todo.filter((pval) => pval.Completed === 'Completed'))
    }
    if (val === 'Pending') {
      setFilteredTodo(todo.filter((pval) => pval.Completed === 'pending'))
    }
  },[val,todo])
  return (
    <div>
      <Add addTodo={addTodo} />
      <div className="d-flex justify-content-end mx-5">
      <select onChange={changeValue}>
        <option value="all">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
       </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-4">
        {filteredTodo.map((item, index) => {
          return (
            <>
              <DisplayTodo item={item} index={index} setTodo={setTodo} updateList={updateList}/>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
