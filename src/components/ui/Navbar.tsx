"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="bg-[#394045] py-1 flex justify-between px-4 ">
      <div className="flex flex-row">
        <Image width={50} height={10} src="/logo.png" alt="logo" />
        <div className="flex flex-col gap-0 text-center">
          <span className="text-[#d3d6db]">MANGA</span>
          <span className="text-[#be3144]">DELIVER</span>
        </div>
      </div>
    </nav>
  );
}
