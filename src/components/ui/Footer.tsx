
//Next imports
import Image from "next/image";
import Link from "next/link";

//Icons imports
import { FaDiscord, FaSquareXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="bg-[#394045] text-[#d3d6db] text-center w-full p-4 mt-2">
            <div className="flex flex-row justify-around">
                <div className="flex flex-col text-xl text-center gap-0 ">
                    <span className="text-[#d3d6db]">MANGA</span>
                    <span className="text-[#be3144]">DELIVER</span>
                </div>
                <div className="flex flex-col text-xl text-center gap-0 ">
                    <span className="text-[#d3d6db]">Siguenos en:</span>
                    <span className="text-[#be3144] flex gap-2 items-center"><Link href="#"><FaDiscord /></Link> <Link href="#"><FaSquareXTwitter /></Link> <Link href="#">< FaInstagram /></Link> <Link href="#">< FaFacebook /></Link></span>
                </div>
            </div>
            <span className="text-sm">©Manga Deliver - All rights reserved.</span>
        </footer>
    )
}
