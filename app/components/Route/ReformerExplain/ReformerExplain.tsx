import { ReformerBenefitsType } from "@/app/types/type"
import NextImage from "next/image"

const benefits: ReformerBenefitsType[] = [
    {
        title: "01. Group lessons",
        subTitle: "マシンを使ったグループレッスン",
        text: "静岡市内では数少ないグループレッスン(最大 8 名)が行えるマシンピラティス専用スタジオです。",
        image: {
            src: "/images/reformer1.jpeg",
            alt: "reformer1"
        }
    },
    {
        title: "02. Beginner friendly",
        subTitle: "初心者も安心",
        text: "初めての方でも安心して参加できるよう、基本的な動きから丁寧に指導します。",
        image: {
            src: "/images/reformer1.jpeg",
            alt: "reformer1"
        }
    },
    {
        title: "03. Private lessons",
        subTitle: "プライベートレッスン",
        text: "個別指導のプライベートレッスンも行っております。",
        image: {
            src: "/images/reformer1.jpeg",
            alt: "reformer1"
        }
    }
]
export const ReformerExplain = () => {
    return (
        <div className="relative min-h-screen" id="reformer">
            {/* Banner Section */}
            <div className="relative bg-cover bg-center h-96 w-screen" style={{ backgroundImage: "url('/images/reformer.jpg')" }}>
                {/* Absolute container for the text */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                    <div className="container mx-auto">
                        <h2 className="text-5xl font-bold text-left bg-white py-2 px-3 rounded-md bg-opacity-80 max-w-[512px]">
                            Studio Lの特徴、効果
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10">
                {benefits.map((benefit, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-center justify-center py-10">
                        <div className="relative w-[435px] h-[435px]">
                            <NextImage src={benefit.image.src} alt={benefit.image.alt} className="w-full 
                           h-full object-cover" fill />
                        </div>
                        <h3 className="absolute top-10 right-[20%] text-[56px] font-bold text-pink">{benefit.title}</h3>
                        <div className="md:w-1/2 md:pl-10 flex flex-col gap-6 items-center">
                            <h4 className="text-3xl font-medium">{benefit.subTitle}</h4>
                            <p className="lg:w-1/2 text-sm font-normal">{benefit.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}