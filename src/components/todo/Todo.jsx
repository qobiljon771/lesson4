import { useState } from "react"
import { Tasks } from "./tasks/Tasks";

export const Todo = () => {

    const [list, setList] = useState("")
    const [data, setData] = useState([])

    const addTodo = (e) => {
        e.preventDefault();
        setData((prevData)=>[...prevData, {list, id:Date.now()}])
        
    };

    const deleteList = (id)=>{
        const newData = data.filter((value)=>value.id!==id)
        setData(newData)
    }
    
  return (
    <div>
        <div className=" flex justify-center items-center flex-col">
            <h3 className="text-2xl">Task List</h3>
            <form 
            onSubmit={addTodo} 
            className="w-[50%] flex gap-2  mt-3">
                <input 
                className="px-2 border w-full rounded-lg" 
                name="list" 
                value={list} 
                onChange={(e) => setList(e.target.value)}
                type="text" />
                <button className="bg-green-400 cursor-pointer text-white rounded-lg py-1 px-5">Add</button>
            </form>

            <div className="w-[50%] mx-auto mt-[15px]">
                {data.map((value)=>{
                    return(
                        
                        <Tasks key={value.id} {...value} deleteList={deleteList} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}
