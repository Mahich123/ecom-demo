import { ShoppingBasket } from "lucide-react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "./context/UseAuth";

 
export default function Header() {
  const {totalItem} = useAuth()
 
  return (
    <div className="flex items-center justify-around mt-6">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="flex gap-x-8 barlow-medium ">
        <p>Home</p>
        <p>Products</p>
        <p>Categories</p>
        <p>Custom</p>
        <p>Blog</p>
      </div>
      <Link to="/cart">
        <div className="relative">
          <ShoppingBasket width={29} height={29} />
          <p className="absolute barlow-medium bottom-0 right-0 bg-black text-white text-center w-[1rem] h-[1rem] text-xs rounded-xl">
            {totalItem}
          </p>
        </div>
      </Link>
    </div>
  );
}
