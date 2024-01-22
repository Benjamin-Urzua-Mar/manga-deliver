//Next imports
import Link from "next/link";

//Shadcn imports
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

//Icon imports
import { RxHamburgerMenu } from "react-icons/rx";

export default function Explorar() {
    return (
        <main className="px-10 ltb:px-16 hd:px-36 py-3">
            {/* Aqui puedo agregar un filtro (A-Z) y un buscador */}
            <h3 className="text-lg tbt:text-xl ltb:text-2xl">Categorías</h3>
            <Separator className="bg-[#be3144] h-[0.1px] hd:h-[2px]"></Separator>
            <section className="grid grid-cols-3 ltb:grid-cols-4 fhd:grid-cols-6 gap-3 mt-2">
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="/explorar/shounen">
                    <Card className="bg-[#be3144] text-[#d3d6db] ">
                        <CardContent className="flex flex-col ltb:flex-row ltb:justify-around items-center "> {/*ver forma de centrar en mobile */}
                            <RxHamburgerMenu className="text-[40px] ltb:text-[80px]"></RxHamburgerMenu> {/* reemplzar por iconos correctos */}
                            <h5 className="text-lg">Shounen</h5>
                        </CardContent>
                    </Card>
                </Link>
            </section>
        </main>
    )
}
