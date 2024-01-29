import { CartCounter } from "@/app/shopping-cart/components"


export const metadata = {
  title: "Shopping Cart",
  description: "A simple Counter",
}



export default function CounterPage() {



    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <span className="" >Cart</span>
        <CartCounter value={20} />  
        Product Counter
      </div>
    )
}
