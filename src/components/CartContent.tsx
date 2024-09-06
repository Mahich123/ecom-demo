import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "./context/UseAuth";
// import { useAuth } from "./context/UseAuth";


type CartProps = {
  id:number,
  image: string,
  name: string,
  discounted:string,
  quantity: number,
}

export default function CartContent({id,image,name,discounted, quantity}: CartProps) {
  const {addProduct, removeProduct} = useAuth()
    
  return (
    <div className="grid grid-cols-[auto_100px_1fr_auto] max-w-3xl items-center gap-4 border-b py-4">
    
      <div className="flex items-center gap-2">
        <Button onClick={() => removeProduct(id)} variant="ghost" size="icon">
          <MinusIcon className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <span>{quantity}</span>
        <Button onClick={() =>  addProduct(id)} variant="ghost" size="icon">
          <PlusIcon className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>

      
      <div className="relative overflow-hidden rounded-md">
        <img
          src={image}
          alt="Product Image"
          width={100}
          height={100}
          className="h-full w-full object-cover"
          style={{ aspectRatio: "100/100", objectFit: "cover" }}
        />
      </div>

     
      <div className="">
        <h3 className="font-medium">{name}</h3>
      </div>

    
      <div className="flex flex-col items-center gap-4">
        
        <Button onClick={() => removeProduct(id)} variant="ghost" size="icon" className="text-muted-foreground">
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Remove from cart</span>
        </Button>
        <span className="font-medium">${discounted}</span>
      </div>
    </div>
  );
}
