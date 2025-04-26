"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <header className=" flex justify-between items-center px-4 py-4 border-b">
      <div className="flex items-center cursor-pointer gap-2 justify-center  font-bold text-black">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
          C
        </div>
        CamBot
      </div>
    <div className=" flex md:space-x-4 space-x-2 items-center">
          <Avatar>
            <AvatarFallback className=" uppercase">{session?.user.name?.at(0)}</AvatarFallback>
            <AvatarImage src={session?.user.image}/>
          </Avatar>
          <Button className=" cursor-pointer" onClick={()=>{
            signOut({callbackUrl:"/"});
          }}>Sign out</Button>
    </div>
    </header>
  );
};

export default Navbar;
