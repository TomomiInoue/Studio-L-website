import { MapComponent } from "./Map";

export const Access = () => {
    return (
        <div className="relative min-h-screen" id="access">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-left bg-white py-2 px-3 rounded-md bg-opacity-80 max-w-[512px]">
                    アクセス
                </h2>

                <div className="py-[60px] flex gap-10">
                    <MapComponent />
                    <div className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold">Studio L</h3>
                        <p className="text-lg">
                            〒390-0821
                            長野県松本市筑摩２丁目１４−３</p>
                        <p className="text-lg">TEL: 03-1234-5678</p>
                        <p className="text-lg">駐車場４台完備</p>
                    </div>
                </div>
            </div>
        </div>
    )
};