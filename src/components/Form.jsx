import React,{useState} from "react";

function Form({setInputText ,setTodos ,todos ,inputText ,setStatus}){  

  //Using the States
  function inputTextHandler(event){
    console.log(event.target.value);

    setInputText(event.target.value);            
  }

  const submitTodoHandler =(event) => {         
    event.preventDefault();
    setTodos([
      ...todos,{text :inputText,completed:false ,id:Math.random()*1000}
    ]);
    setInputText("");                 
  };
  const statusHandler =(e) => {
    setStatus(e.target.value);
  }
return(
    // <form className="todo-list">
    //   <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    //   <button onClick={submitTodoHandler} className="todo-button" type="submit">
    //     <i className="fas fa-plus-square"></i>
    //   </button>
    //   <div className="select">
    //     <select onChange={statusHandler} name="todos" className="filter-todo">
    //       <option value="all">All</option>
    //       <option value="completed">Completed</option>
    //       <option value="uncompleted">Uncompleted</option>
    //     </select>
    //   </div>
    // </form>

        <div className="container">
          <div className="row custom--row">
            <div className="col-md-6 col--custom cc--1">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
             <button onClick={submitTodoHandler} className="todo-button" type="submit">
               <i className="fas fa-plus-square"></i>
             </button>
            </div>
            <div className="col-md-6 col--custom cc--2">
            <div className="select  select--custom">
             <select onChange={statusHandler} name="todos" className="filter-todo">
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
             </select>
           </div>
            </div>
         </div>
        </div>
);
};

export default Form;