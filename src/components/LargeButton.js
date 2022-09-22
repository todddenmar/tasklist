
export default function LargeButton({isActive,text}) {
    const getBtnStyle = () =>{
        if(isActive){
            return "bg-unselectedBtn hover:bg-selectedBtn";
           }
           else{
          return "bg-inactiveBtn hover:bg-selectedBtn"
           }
    }
  return (
   <button className={`${getBtnStyle()} px-4 py-2 rounded-md text-white border-primaryBtn drop-shadow-[0_35px_35px_rgba(2, 67, 235, 1)]`} >
  {text}
   </button>
  )
}
