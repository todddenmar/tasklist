import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([{id:1,text:"buy food",isDone:false},{id:2,text:"buy shoes",isDone:true},{id:3,text:"buy clothes",isDone:true}]);

  const onItemClick = (id)=>{
    console.log(id)
    const newTodos = todos.map((todo) => todo.id === id ? ({...todo,isDone:!todo.isDone}):todo);
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1 className="text-3xl font-bold py-5 text-center">
        Task List
      </h1>
    <TodoList items={todos} onItemClick={val =>onItemClick(val)}/>
    </div>
  );
}

export default App;
