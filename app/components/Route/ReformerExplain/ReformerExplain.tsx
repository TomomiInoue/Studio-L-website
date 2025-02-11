import { SectionWrapper, SubHeading } from "@/app/constants/commonStyle"
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
        title: "03. Personal lessons",
        subTitle: "パーソナルレッスン",
        text: "個別指導のパーソナルレッスンも行っております。",
        image: {
            src: "/images/reformer1.jpeg",
            alt: "reformer1"
        }
    }
]
export const ReformerExplain = () => {
    return (
        <div className={SectionWrapper} id="reformer">
            {/* <div className="mx-auto py-10"> */}
            <h2 className={SubHeading}>
                Pilates Studio Lはここが違う！
            </h2>
            {benefits.map((benefit, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-center py-6 md:py-10">
                    <div className="relative block">
                        <NextImage src={benefit.image.src} alt={benefit.image.alt} objectFit="cover"
                            width={435} height={435}
                            sizes="100vw" />
                    </div>
                    <h3 className="hidden md:block absolute top-10 right-[20%] text-[56px] font-bold text-pink">{benefit.title}</h3>
                    <h3 className="w-full md:hidden text-[20px] font-bold text-pink items-start flex mt-6">{benefit.title}</h3>
                    <div className="w-full md:w-1/2 md:pl-10 flex flex-col gap-6 items-start md:items-center">
                        <h4 className="text-[24px] md:text-[32px] font-medium">{benefit.subTitle}</h4>
                        <p className="lg:w-1/2 text-sm font-normal">{benefit.text}</p>
                    </div>
                </div>
            ))}
            {/* </div> */}
        </div>
    )
}