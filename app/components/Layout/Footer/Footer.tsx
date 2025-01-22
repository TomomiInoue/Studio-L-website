import { menuItems } from "@/app/constants/menuItems";
import NextImage from "next/image";
import Link from "next/link";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col gap-6 flex-wrap items-center justify-between pt-10">
            <div className="container grid grid-cols-2 items-baseline">
                <div className="flex flex-col gap-2 items-start">
                    <NextImage src="/logo/studio-l-logo-side.png" alt="Studio L logo" width={180} height={68} />
                    <p className="text-sm text-lightGrey">松本市筑摩2-14-3 2F</p>
                </div>
                <div className="flex gap-4">
                    {menuItems.map((item) => (
                        <Link key={item.label} href={item.id}>
                            <div className="text-sm text-lightGrey">{item.label}</div>
                        </Link>
                    ))
                    }
                </div>
            </div>
            <div className="w-full flex items-center gap-2 bg-grey justify-center py-10">
                <p className="text-xs text-white">©{currentYear} Studio L</p>
            </div>
        </footer>
    );
}