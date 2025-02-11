import Link from "next/link";
import { MapComponent } from "./Map";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SectionWrapper, SubHeading } from "@/app/constants/commonStyle";

export const Access = () => {
    return (
        <div className={SectionWrapper} id="access">
            <h2 className={SubHeading}>
                アクセス
            </h2>

            <div className="py-6 md:py-[60px] flex md:flex-row gap-6 md:gap-10 items-start md:items-center flex-col-reverse">
                <div className="w-full md:w-[600px] h-full md:h-[450px]">
                    <MapComponent />
                </div>
                <div className="flex flex-col gap-5 ">
                    <h3 className="text-xl md:text-3xl font-bold">Studio L</h3>
                    <p className="text-lg">
                        〒390-0821
                        長野県松本市筑摩２丁目１４−３ 2F</p>
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
    )
};