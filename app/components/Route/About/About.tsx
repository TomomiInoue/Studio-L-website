import { SubHeading } from '@/app/constants/commonStyle';
import NextImage from 'next/image';

const text = [
    [
        "人はストレスがある状態だと、",
        "うまく将来を想像することができません。",
        "体と心が元気になった時、",
        "人はどんな自分を想像するでしょうか。",
    ],
    [
        "もっと自由で楽しい環境で、",
        "もっとユーモアに溢れたアイデアで、",
        "もっと自分の可能性を広げて、",
        "もっともっと大きなチャレンジを！元気になった体と心で、",
        "新しいチャレンジをしたくなる。"
    ],
    [
        "8810（ハヤト）では、そんなマインドを作り出す場所の提供を目指します。",
    ]
];
export const About = () => {
    return (
        <div className="container py-12 md:py-[120px] min-h-screen" id="about">
            <h3 className={SubHeading}>Pilates Studio <span className="inline text-pink">L</span> について</h3>
            <div className="flex flex-col md:flex-row gap-10 lg:gap-[122px]">
                <div className='relative block'>
                    <NextImage src="/images/studio-l-about.jpeg" alt="Studio L about image, students practicing pilates"
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