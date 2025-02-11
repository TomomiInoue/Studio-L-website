import NextImage from 'next/image';

const features = [
    "ここが良い",
    "ここが良い",
    "ここが良い",
]

export const Landing = () => {
    return (
        <div className="container py-12 md:py-[120px] min-h-screen" id="home">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[100px]">
                {/* Left half section */}
                <div className="flex flex-col gap-6">
                    <NextImage src="/logo/studio-l-logo-square.png" alt="Studio L logo" width={105} height={158} className='hidden md:flex' />
                    <div className='flex flex-col md:gap-4'>
                        {features.map((feature, index) => (
                            <h3 key={index} className="text-[42px] md:text-[76px] font-bold">{feature}</h3>
                        ))}
                    </div>
                </div>
                {/* Right half section */}
                <div className='relative block justify-end m-auto md:ml-auto'>
                    <NextImage src="/images/studio-l-home.jpeg" alt="Studio L home image, a teacher adjusting student's posture"
                        priority
                        width={600}
                        height={730}
                        objectFit='cover'
                        sizes='100vw'
                        className="rounded-lg md:rounded-tl-[250px]"
                    />
                </div>
            </div>
        </div>
    )
}