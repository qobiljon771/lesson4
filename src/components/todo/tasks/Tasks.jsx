import { useState } from "react"

export const Tasks = ({list, deleteList, id}) => {
    
    const [isLine, setIsLine] = useState(true)
    const handleDel = ()=>{
        setIsLine(!isLine)
    }


  return (
    <div className="w-[100%] mx-auto bg-red-400 p-2 rounded-md">
        <div className="flex justify-between items-center  w-full ">
            <button onClick={handleDel} className="w-[30px] h-[30px] border rounded flex justify-center  items-center cursor-pointer" >{isLine&&<p>✅</p>}</button>
            <div>
            <p className={`w-full ${isLine ? "line-through" : ""}`}>
                {list}
            </p>

            </div>
            <button onClick={()=>deleteList(id)} className="w-[30px] h-[30px] border rounded flex justify-center items-center cursor-pointer">X</button>
        </div>
    </div>
  )
}
