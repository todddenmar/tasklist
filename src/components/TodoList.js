import TodoItem from "./TodoItem";

function TodoList({items,onItemClick}) {
    return (
      <ul className="p-5 grid gap-2 max-w-md mx-auto">
        {items.map((item) => <TodoItem todo={item} onItemClick={val =>onItemClick(val)} /> )}
      </ul>
    );
  }
  

  
  export default TodoList;
  