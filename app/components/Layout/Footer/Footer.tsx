import { menuItems } from "@/app/constants/menuItems";
import { Icon } from "@iconify/react/dist/iconify.js";
import NextImage from "next/image";
import Link from "next/link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col gap-6 flex-wrap items-center justify-between pt-10">
            <div className="container grid grid-cols-3 items-baseline">
                <div className="col-span-1 flex flex-col gap-2 items-start">
                    <NextImage src="/logo/studio-l-logo-side.png" alt="Studio L logo" width={180} height={68} />
                    <p className="text-sm text-lightGrey">松本市筑摩2-14-3 2F</p>
                </div>
                <div className="col-span-2 flex gap-4 justify-end">
                    {menuItems.map((item) => (
                        <Link key={item.label} href={item.id}>
                            <div className="text-sm text-lightGrey">{item.label}</div>
                        </Link>
                    ))
                    }
                </div>
            </div>
            <div className="w-full bg-grey py-10">
                <div className="container flex items-center justify-between">
                    <p className="text-xs text-white">©{currentYear} Studio L</p>
                    <Link href="https://www.instagram.com/lie_pilates/" target="_blank" className="flex justify-end">
                        <Icon icon="mdi:instagram" width="18" height="18" className="text-white" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}