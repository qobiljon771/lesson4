import star from '../../../assets/svgs/star.svg'

export const ApiCard = ({value}) => {
  return (
    <div className="flex bg-white shadow-xl p-3 rounded-xl justify-between flex-col gap-2">
        <img className= " max-w-[300px] w-full max-h-[300px] border-gray-400 border-2 p-1 rounded-lg h-full" src={value.image} alt="img" />
        <div className="px-2 flex flex-col gap-2">
            <h3 className="font-bold">{`${value.title.slice(0,25)}...`}</h3>
            <p className="text-[14px]">{`${value.description.slice(0,65)}...`}</p>
            <div className='flex justify-between'>
            <p className='flex items-center gap-1'>{value.rating.rate} <img src={star} alt="" /> </p>
              <h3 className='font-bold text-[20px] text-[#ff500b]'>{`${Math.round(value.price)}$`}</h3>
            </div>
              <button className='bg-blue-500 text-white py-2 px-4 font-bold rounded-md mt-2 cursor-pointer'>Add to Cart</button>
        </div>
        
    </div>
  )
}
