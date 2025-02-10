import Link from "next/link";
import { MapComponent } from "./Map";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SubHeading } from "@/app/constants/commonStyle";

export const Access = () => {
    return (
        <div className="relative py-[80px]" id="access">
            <div className="container mx-auto">
                <h2 className={SubHeading}>
                    アクセス
                </h2>

                <div className="py-[60px] flex gap-10 items-center">
                    <MapComponent />
                    <div className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold">Studio L</h3>
                        <p className="text-lg">
                            〒390-0821
                            長野県松本市筑摩２丁目１４−３</p>
                        <p className="text-lg">TEL: 03-1234-5678</p>
                        <p className="text-lg">駐車場４台完備</p>
                        <div className="flex gap-2 items-center">
                            <p className="text-lg">お問い合わせはInstagramへおねがいします。</p>
                            <Link href="https://www.instagram.com/lie_pilates/" target="_blank">
                                <Icon icon="mdi:instagram" width="24" height="24" className="text-lightGrey" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};