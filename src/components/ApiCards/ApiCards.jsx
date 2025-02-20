import { useEffect, useState } from "react"
import { ApiCard } from "./card/ApiCard"

export const ApiCards = () => {

    const [cards, setCards] = useState([])


    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then((data)=>setCards(data))
        .catch((err)=>console.log(err, "error"))
    })

  return (
    <div className="bg-yellow-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[30px] py-5  w-[95%] max-w-[1440px] mx-auto">
            {
                cards.map((value)=>(
                    <ApiCard key={value.id} value={value} />
                ))
            }
        </div>
    </div>
  )
}
