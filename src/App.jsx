import { useState } from "react"
import { ApiCards } from "./components/ApiCards/ApiCards"
import { Todo } from "./components/todo/Todo"




function App() {

  const [cards, setCards] = useState(<Todo />)
  return (
    <div className="py-4">
      <div className="w-[90%] mx-auto ">
      <button onClick={()=>(setCards(<ApiCards />))} className="bg-blue-500  text-white py-1 px-4 rounded-lg" >
        Cards
      </button>
      {cards }
    </div>
    </div>

  )
}

export default App
