

import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "./context/UseAuth";

type CardProps = {
  id:number
  image: string;
  name: string;
  discounted: string;
  price: string;
  percent: string;
};



export default function Cards({
  id,
  image,
  name,
  discounted,
  price,
  percent
}: CardProps) {
    const {addProduct} = useAuth()

    const handleClick = () => {
        return addProduct(id)
    }

  return (
    <div className="border border-[#F1F1F1] mb-4 ml-4 p-4 rounded-lg ">
      <div className="bg-[#F2F2F2] rounded-md w-64 h-64 flex items-center justify-center">
        <img src={image} alt={name} className="w-56 h-56" />
      </div>
      <h2 className="mt-4 barlow-semibold">{name}</h2>
      <div className="mt-4 flex  gap-x-4 items-center">
        <p className="barlow-bold">${discounted || "N/A"}</p>
        <p className="barlow-medium text-[#ABABAB] line-through">${price}</p>
        <p className="barlow-semibold text-red-600">{percent}</p>
      </div>

      <p
        className="break-words text-xs mt-2 text-[#838383]"
      >
        It has a backrest that can be tilted <br /> back, and often a footrest
        extended
      </p>
      <Button onClick={handleClick} type="submit" className="flex items-center justify-center  w-full mt-4 barlow-semibold">
      <ShoppingBasket  className="mr-2" width={20} height={20}/>
        Add to cart
      </Button>
    </div>
  );
}
