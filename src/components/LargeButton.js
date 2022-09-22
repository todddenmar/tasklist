
export default function LargeButton({isActive,text,onClick}) {
    const getBtnStyle = () =>{
        if(isActive){
            return "bg-unselectedBtn hover:bg-selectedBtn text-white";
           }
           else{
          return "bg-inactiveBtn hover:bg-selectedBtn text-black"
           }
    }
  return (
   <button onClick={onClick} className={`${getBtnStyle()} w-full text-start p-4 rounded-md hover:text-white  border-primaryBtn drop-shadow-[0_35px_35px_rgba(2, 67, 235, 1)]`} >
  {text}
   </button>
  )
}
