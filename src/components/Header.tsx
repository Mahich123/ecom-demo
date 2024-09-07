import { LogOut, ShoppingBasket } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "./context/UseAuth";

 
export default function Header() {
  const {totalItem, signOut} = useAuth()
 
  return (
    <div className="flex items-center justify-between px-4 md:justify-around mt-6">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="hidden md:flex md:gap-x-8 md:barlow-medium ">
        <p>Home</p>
        <p>Products</p>
        <p>Categories</p>
        <p>Custom</p>
        <p>Blog</p>
      </div>

        <div className="relative flex gap-x-4 items-center">
         <LogOut onClick={signOut} className="cursor-pointer" width={25} height={25}/>
          <Link to="/cart">
          <ShoppingBasket width={29} height={29} />
          <p className="absolute barlow-medium bottom-0 right-0 bg-black text-white text-center w-[1rem] h-[1rem] text-xs rounded-xl">
            {totalItem}
          </p>
          </Link>
        </div>
      
    </div>
  );
}
