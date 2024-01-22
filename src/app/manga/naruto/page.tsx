//Icon imports
import { FaStar, FaHeart, FaShare } from "react-icons/fa";
import { FaDiscord, FaSquareXTwitter, FaInstagram, FaFacebook, FaPaypal } from "react-icons/fa6";

//Shadcn imports
import { Button } from "@/components/ui/button";

export default function Naruto() {
    return (
        <main className="px-10 ltb:px-16 hd:px-36 py-3">
            <div className="grid grid-cols-1 ltb:grid-cols-2 gap-4">
                <div className="">
                    <section className="grid grid-cols-2 gap-2 h-auto">
                        <div>
                            <img src="/blue-lock-z98soa.png" alt="" />
                        </div>
                        <div className="grid auto-rows-min  items-start">
                            <span className="flex justify-between items-center text-[#be3144] mt-2">
                                <h4 className="text-xl font-semibold">
                                    Naruto
                                </h4>

                                <span className="flex">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </span>
                            </span>

                            <span className="text-sm"><span className="text-[#be3144]">Autor: </span>Masashi Kishimoto</span>
                            <span className="text-sm"><span className="text-[#be3144]">Géneros: </span>Acción, Lucha, Superpoderes, Comedia</span>
                            <span className="text-sm"><span className="text-[#be3144]">Demografía: </span>Shounen</span>
                            <span className="text-sm"><span className="text-[#be3144]">Tipo: </span>Manga</span>
                            <span className="text-sm"><span className="text-[#be3144]">Estado: </span>Completado</span>

                            <span className="flex justify-end gap-1 text-[#be3144]">
                                <span className="flex flex-col text-xs items-center hover:cursor-pointer">
                                    <FaHeart></FaHeart>
                                    <span>Guardar</span>
                                </span>
                                <span className="flex flex-col text-xs items-center hover:cursor-pointer">
                                    <FaShare></FaShare>
                                    <span>Compartir</span>
                                </span>
                            </span>

                        </div>
                    </section>

                </div>

                <div className="bg-[#899abb] p-2 mt-2 rounded-md">
                    <h4 className="text-lg text-[#be3144] font-semibold">
                        Síguenos
                    </h4>
                    <span className="flex flex-row gap-1">
                        <Button className="bg-cyan-950 w-[90px] text-[15px] flex gap-1 rounded-lg items-center"><FaFacebook ></FaFacebook>  </Button>
                        <Button className="bg-gray-900 w-[90px] text-[15px] flex gap-1 rounded-lg items-center"><FaSquareXTwitter ></FaSquareXTwitter> </Button>
                        <Button className="bg-rose-500 w-[90px] text-[15px] flex gap-1 rounded-lg items-center"><FaInstagram ></FaInstagram>  </Button>
                    </span>

                    <div className="grid grid-cols-2 p-3 justify-items-center">
                        <div className="flex flex-col gap-6">
                            <div className="w-[100px] h-[100px] bg-red-500"></div>
                            <div className="w-[100px] h-[100px] bg-red-500"></div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="w-[100px] h-[100px] bg-red-500"></div>
                            <div className="w-[100px] h-[100px] bg-red-500"></div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <span><span><FaPaypal></FaPaypal></span><span>También puedes donarnos</span></span>
                        <span><span><FaDiscord></FaDiscord></span><span>Únete a nuestro Discrod</span></span>
                    </div>
                </div>
            </div>
        </main>
    )
}
