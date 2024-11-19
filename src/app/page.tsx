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
      <div className="flex w-full tbt:hidden max-w-sm items-center mb-4 space-x-1">
        <Input type="search" className="h-7" placeholder="Buscar..." />
        <Button type="submit" className="h-7" size={"icon"}><FaSearch /></Button>
      </div>
      {/* Tendencias */}
      <section>
        <h3 className="text-lg tbt:text-xl ltb:text-2xl">Tendencias</h3>
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
                      <span className="text-[#be3144] ltb:text-lg tbt:mt-28 hd:text-xl hd:mt-16">Blue Lock</span>
                      <span className="fhd:text-lg">Capítulo 1</span>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Top-sellers */}
      <section>
        <h3 className="text-lg tbt:text-xl ltb:text-2xl">Top-sellers</h3>
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

      {/* Top manwhua */}
      <section>
        <h3 className="text-lg tbt:text-xl ltb:text-2xl">Top manwhua</h3>
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

      {/* Capítulos recientes */}
      <section>
        <h3 className="text-lg">Capítulos recientes</h3>
        <Separator className="bg-[#be3144] h-[0.1px] hd:h-[2px]"></Separator>
        <div className="grid grid-cols-1 tbt:grid-cols-2 ltb:grid-cols-3 fhd:grid-cols-4">
          <div className="grid grid-cols-2">
            <img className="w-[100px] place-self-center mt-1" src="/blue-lock-z98soa.png" alt="Portada" />
            <div className="mt-2">
              <h5 className="text-[#be3144] ltb:text-lg fhd:text-lg">Nombre manga</h5>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img className="w-[100px] place-self-center mt-4" src="/blue-lock-z98soa.png" alt="Portada" />
            <div className="mt-6">
              <h5 className="text-[#be3144] ltb:text-lg fhd:text-lg">Nombre manga</h5>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img className="w-[100px] place-self-center mt-4" src="/blue-lock-z98soa.png" alt="Portada" />
            <div className="mt-6">
              <h5 className="text-[#be3144] ltb:text-lg fhd:text-lg">Nombre manga</h5>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <img className="w-[100px] place-self-center mt-4" src="/blue-lock-z98soa.png" alt="Portada" />
            <div className="mt-6">
              <h5 className="text-[#be3144] ltb:text-lg fhd:text-lg">Nombre manga</h5>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
              <span className="flex gap-3 text-xs ltb:text-sm fhd:text-base"> <span>Capitulo 100</span> <span className="text-muted-foreground">10 mins</span></span>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
