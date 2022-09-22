import LargeButton from "./LargeButton";

function TodoItem({todo,onItemClick}){
    return <li  key={todo.id} >
        <LargeButton onClick={()=>onItemClick(todo.id)}  isActive={todo.isDone} text={todo.text}/></li>
}
export default TodoItem;
