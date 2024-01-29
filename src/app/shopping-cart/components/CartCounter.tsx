'use client'
import { useState } from "react"

interface Props{
    value?: number
}

export const CartCounter = ( {value=0 }:Props ) => {

    const [count, setCount] = useState( value )
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
  return (
    <>
      <span className="text-9xl">{count} </span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-slate-700 text-white hover:bg-gray-400 transition-all w-[100px] mr-2"
          onClick={increase}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-slate-700 text-white hover:bg-gray-400 transition-all w-[100px] mr-2"
          onClick={decrease}
        >
          -1
        </button>
      </div>
    </>
  );
}
