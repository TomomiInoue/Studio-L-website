import NextImage from 'next/image';

const features = [
    "松本市初！",
    "グループレッスン可能",
    "マシン専門の",
    "ピラティススタジオ!",
]

export const Landing = () => {
    return (
        <div className="container md:py-[120px] min-h-screen" id="home">
            <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-[60px]">
                {/* Left half section */}
                <div className="flex flex-col gap-4 h-full justify-center">
                    <NextImage src="/logo/studio-l-logo-square.png" alt="Studio L logo" width={105} height={158} className='hidden md:flex' />
                    <div className='flex flex-col md:gap-2 xl:mt-[60px]'>
                        {features.map((feature, index) => (
                            <h3 key={index} className="text-[42px] font-bold">{feature}</h3>
                        ))}
                    </div>
                </div>
                {/* Right half section */}
                <div className='relative block justify-end m-auto md:ml-auto'>
                    <NextImage src="/images/studio-l-home.jpeg" alt="Studio L home image, a teacher adjusting student's posture"
                        priority
                        width={660}
                        height={600}
                        objectFit='cover'
                        sizes='100vw'
                        className="rounded-lg md:rounded-tl-[250px]"
                    />
                </div>
            </div>
        </div>
    )
}