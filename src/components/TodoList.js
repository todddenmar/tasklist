import TodoItem from "./TodoItem";

function TodoList({items,onItemClick}) {
    return (
      <ul className="p-5">
        {items.map((item) => <TodoItem todo={item} onItemClick={val =>onItemClick(val)} /> )}
      </ul>
    );
  }
  

  
  export default TodoList;
  