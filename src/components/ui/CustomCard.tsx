import Image from "next/image"

export default function CustomCard() {
    return (
        <div className="flex flex-col">
            <div className="h-[350px] w-full" style={{position:"unset"}}>
                <Image className="object-contain w-full relative h-[unset]" fill={true} src="/blue-lock-z98soa.png" alt="logo" />
            </div>
            <div>
                <span>gola</span>
            </div>
        </div>
    )
}