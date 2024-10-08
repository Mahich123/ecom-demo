import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import BrandImg from "../assets/chris-lee-70l1tDAI6rM-unsplash 1.jpg";
import BrandTag from "../assets/Frame 1000002880.png";
import { useAuth } from "./context/UseAuth";
import { useState } from "react";


export default function SignUp() {

    const {signUp} = useAuth()

    const [userData, setUserData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: ""
    })

    const [message, setMessage] = useState("")

    const handleForm =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")

        try {
          signUp(userData)
        } catch (error) {
          if(error) {
            setMessage("already registered")
          }
        }
      
    }

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUserData((prev) => ({ ...prev, [id]: value }));
      };

  return (

    
    <div className="flex h-screen">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10 shadow-lg space-y-8">
        <div className="bg-[#F5F5F5] p-8 rounded">
          <div className="space-y-2 text-center">
            <h1 className="text-xl barlow-semibold">Welcome To</h1>
            <h1 className="text-4xl barlow-bold">
              Furni
              <span className="text-sky-500">Flex</span>
            </h1>
            <p className="barlow-medium pb-4">
              Signup to purchase your desired products
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleForm}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="bg-white"
                  placeholder="John"
                  value={userData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  className="bg-white"
                  placeholder="Doe"
                  value={userData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                className="bg-white"
                placeholder="john@example.com"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                className="bg-white"
                placeholder="******"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </div>

            {
              message && (
                <p className="text-red-500">{message}</p>
              )
            }
            <Button type="submit" className="w-full barlow-semibold">
              Sign Up
            </Button>
            
            <p className="text-center barlow-medium">
              Have an account?
              <span className="text-[#0F3DDE] cursor-pointer">Sign In</span>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex relative w-1/2 items-center justify-center">
        <img
          src={BrandImg}
          alt="Brand"
          className="w-full h-full object-cover"
        />
        <div className="absolute">
          <img src={BrandTag} alt="BrandTag" />
        </div>
      </div>
    </div>
  );
}
