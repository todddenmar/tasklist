function TodoItem({todo,onItemClick}){
    return <li  key={todo.id} ><button onClick={()=>onItemClick(todo.id)}><span className={`${todo.isDone ? "line-through":""} " p-2"`}>{todo.text}</span></button></li>
}
export default TodoItem;
