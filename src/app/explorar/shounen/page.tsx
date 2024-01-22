//Next imports
import Image from "next/image";

//Shadcn imports
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

//Icon imports
import { FaSearch } from "react-icons/fa";

export default function Home() {
    return (
        <main className="px-10 ltb:px-16 hd:px-36 py-3">

            <h1 className="justify-center text-[#be3144] text-2xl flex gap-2 items-center"><span><FaSearch /></span><span>Shounen</span></h1>

            {/* Populares */}
            <section>
                <h3 className="text-lg tbt:text-xl ltb:text-2xl">Populares</h3>
                <Separator className="bg-[#be3144] h-[0.1px] hd:h-[2px]"></Separator>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex justify-center"
                >
                    <CarouselContent className="tbt:p-2">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full tbt:basis-1/3 ltb:basis-1/5 hd:basis-1/5 uhd:basis-1/6">
                                <div className="p-1">
                                    <Card className="border-none shadow-none">
                                        <CardContent className="bg-[url(/blue-lock-z98soa.png)] tbt:h-[400px] h-[300px] bg-contain bg-no-repeat bg-top">
                                        </CardContent>
                                        <CardFooter className="flex flex-col text-center tbt:-mt-44 ltb:-mt-40 hd:-mt-28 fhd:mt-1">
                                            <span className="text-[#be3144] ltb:text-lg hd:text-xl">Blue Lock</span>
                                            <span className="fhd:text-lg">Capítulo 1</span>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>

            {/* Nuevos */}
            <section>
                <h3 className="text-lg tbt:text-xl ltb:text-2xl">Nuevos</h3>
                <Separator className="bg-[#be3144] h-[0.1px] hd:h-[2px]"></Separator>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full flex justify-center"
                >
                    <CarouselContent className="tbt:p-2">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full tbt:basis-1/3 ltb:basis-1/5 hd:basis-1/5 uhd:basis-1/6">
                                <div className="p-1">
                                    <Card className="border-none shadow-none">
                                        <CardContent className="bg-[url(/blue-lock-z98soa.png)] tbt:h-[400px] h-[300px] bg-contain bg-no-repeat bg-top">
                                        </CardContent>
                                        <CardFooter className="flex flex-col text-center tbt:-mt-44 ltb:-mt-40 hd:-mt-28 fhd:mt-1">
                                            <span className="text-[#be3144] ltb:text-lg hd:text-xl">Blue Lock</span>
                                            <span className="fhd:text-lg">Capítulo 1</span>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
        </main>
    )
}
