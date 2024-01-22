"use client";

//Next imports
import Image from "next/image";
import Link from "next/link";

//React imports
import { useState } from "react";

//Shadcn imports
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


//Icons imports
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="bg-[#394045] py-1 flex justify-between px-10 ltb:px-16 hd:px-36 ">
      {/* Left content */}
      <div className="flex text-center items-center">
        <img className="w-[50px] ltb:w-[75px]" src="/logo.png" alt="logo" />
        <span className="flex flex-col ">
          <span className="text-[#d3d6db]">MANGA</span>
          <span className="text-[#be3144]">DELIVER</span>
        </span>
        <span className="hidden ltb:flex items-center gap-3 ml-8 text-[#d3d6db]">
          <Link className="hover:text-[#be3144]" href="#">Inicio</Link>
          <Link className="hover:text-[#be3144]" href="/explorar">Explorar</Link>
          <Link className="hover:text-[#be3144]" href="#">Mi biblioteca</Link>
        </span>
      </div>

      {/* Right content */}
      <div className="hidden ltb:flex flex-row text-center items-center">
        <div>
          <div className="flex flex-row px-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Popover>
              <PopoverTrigger className="flex items-end  text-[#d3d6db]"><IoMdArrowDropdownCircle /></PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
          </div>
          <span className="text-[#d3d6db] ">Usuario 1</span>
        </div>

        <div className="flex w-full max-w-sm items-center space-x-1">
          <Input type="search" className="h-7 w-64" placeholder="Buscar..." />
          <Button type="submit" className="h-7" size={"icon"}><FaSearch /></Button>
        </div>
      </div>

      {/* Sidebar */}
      <Sheet>
        <SheetTrigger className="px-2 ltb:hidden"><RxHamburgerMenu className="text-[#d3d6db]" /></SheetTrigger>
        <SheetContent className="bg-[#394045] text-[#d3d6db] border-none">
          <SheetHeader>
            <SheetTitle className="text-[#d3d6db]">
              <span className="flex gap-3 items-end">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>
                  John Doe
                </span>
              </span>
            </SheetTitle>
            <SheetDescription className="text-[#d3d6db]">
              <div>
                <Button variant="ghost" className="w-full border-b-[1px] rounded-none bg-[#394045] inline-block align-bottom text-start">Inicio</Button>
                <Button variant="ghost" className="w-full border-b-[1px] rounded-none bg-[#394045] inline-block align-bottom text-start">Explorar</Button>
                <Button variant="ghost" className="w-full border-b-[1px] rounded-none bg-[#394045] inline-block align-bottom text-start">Mi biblioteca</Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </nav>
  );
}
