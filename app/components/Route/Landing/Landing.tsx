import NextImage from 'next/image';

const features = [
    "ここが良い",
    "ここが良い",
    "ここが良い",
]

export const Landing = () => {
    return (
        <div className="container py-12 md:py-[120px] min-h-screen" id="home">
            <div className="flex flex-col md:flex-row gap-[100px]">
                {/* Left half section */}
                <div className="flex flex-col gap-6">
                    <NextImage src="/logo/studio-l-logo-square.png" alt="Studio L logo" width={105} height={158} className='hidden md:flex' />
                    <div className='flex flex-col gap-4'>
                        {features.map((feature, index) => (
                            <h3 key={index} className="text-[48px] md:text-[76px] font-bold">{feature}</h3>
                        ))}
                    </div>
                </div>
                {/* Right half section */}
                <div className='flex relative w-[653px] h-[733px] justify-end ml-auto'>
                    <NextImage src="/images/studio-l-home.jpeg" alt="Studio L home image, a teacher adjusting student's posture"
                        priority
                        fill
                        className="rounded-lg md:rounded-tl-[250px] object-cover"
                    />
                </div>
            </div>
        </div>
    )
}