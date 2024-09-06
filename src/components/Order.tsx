
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth } from "./context/UseAuth"

export default function Order() {
  const {totalAmount} = useAuth()
  return (
    <div className=" text-foreground p-6 md:p-8 rounded-lg  max-w-sm">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Order Details</h1>
      </div>
      <div className="bg-[#FAFAFA] grid gap-4 p-4 rounded-md border border-[#DEDEDE]">
        <div className="grid grid-cols-2 items-center">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-right font-medium">${totalAmount}</span>
        </div>
        <div className="grid grid-cols-2 items-center">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-right font-medium">Free</span>
        </div>
        <div className="grid grid-cols-2 items-center">
          <span className="text-muted-foreground">Estimated Tax</span>
          <span className="text-right font-medium">€ -</span>
        </div>
        <div className="grid grid-cols-2 items-center border-t pt-4">
          <span className="text-muted-foreground font-medium">Total</span>
          <span className="text-right font-bold text-2xl">${totalAmount}</span>
        </div>
      </div>
      <div className="mt-6">
        <Button className="w-full">Go to Checkout</Button>
        <Link to="/">
        <Button className="w-full mt-2" variant={"outline"}>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  )
}