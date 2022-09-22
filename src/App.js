import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([{id:1,text:"buy food",isDone:false},{id:2,text:"buy shoes",isDone:true},{id:3,text:"buy clothes",isDone:true}]);
  const [newTodo,setNewTodo] = useState("")
  const onItemClick = (id)=>{
    console.log(id)
    const newTodos = todos.map((todo) => todo.id === id ? ({...todo,isDone:!todo.isDone}):todo);
    setTodos(newTodos)
  }
  const onAddTodo = () =>{
    setTodos(prev => [...prev,({id:todos.length+1,text:newTodo,isDone:false})]);
    setNewTodo("")
  }

  return (
    <div className="App max-w-md mx-auto">
      <h1 className="text-3xl font-bold py-5 text-center">
        Task List
      </h1>
      <div className="p-5 flex items-center gap-5">
      <input className="p-5 w-full border-b-2" placeholder="New Item Here..." type={"text"} value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
      <button onClick={onAddTodo} className="p-5 rounded-md bg-selectedBtn text-white">Add</button>
      </div>
    <TodoList items={todos} onItemClick={val =>onItemClick(val)}/>
  

 
    </div>
  );
}

export default App;
