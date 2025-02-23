import { SectionWrapper, SubHeading } from '@/app/constants/commonStyle';
import NextImage from 'next/image';

const text = [
    [
        "当スタジオでは、リフォーマーというマシンを導入しています。",
        "その名の通り、本来の體（カラダ）の機能を取り戻すという意味が込められています。",
        "元々はリハビリであったピラティスですが、",
        "アンチエイジングや安眠にもうれしい効果が！",
    ],
    [
        "内側から自分でアプローチするため、",
        "良い状態を日常でも維持しやすく、生活の質の向上にも繋がります。",
        "負荷の調整が可能な為、",
        "運動習慣のない方や自重を支えるのが困難な方でもエクササイズしていただけます！",
    ],
    [
        "ぜひ一度ピラティスを体験してみてはいかがですか？",
    ]
];
export const About = () => {
    return (
        <div className={SectionWrapper} id="about">
            <h3 className={SubHeading}>Pilates Studio <span className="inline text-pink">L</span> について</h3>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-[122px]">
                <div className='relative block'>
                    <NextImage src="/images/studio-l-about.jpeg" alt="Pilates about image, students practicing pilates"
                        width={480}
                        height={480}
                        sizes='100vw'
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex flex-col gap-6 max-w-[600px] justify-center">
                    {text.map((paragraph, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            {paragraph.map((line, index) => (
                                <p key={index} className="text-[14px]">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};