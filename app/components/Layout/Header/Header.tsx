"use client"

import React, { useEffect, useState } from "react"
import NextImage from "next/image"
import { menuItems } from "@/app/constants/menuItems"
import { cn } from "@/app/lib/utils"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [currentId, setCurrentId] = useState("top")

    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust this value based on your header height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                isBlurred
                maxWidth="full"
                classNames={{
                    base: cn("z-50 fixed top-0 h-[78px] border-b-1 border-primary ", isScrolled ? "bg-white backdrop-blur-lg" : "bg-white"),
                    wrapper: cn("h-[78px]  flex items-center p-4 gap-6 px-0 container"),
                    content: "w-full flex items-center",
                    brand: "flex items-center gap-2",
                    item: "text-primary text-lg font-bold cursor-pointer hover:opacity-70",
                }}
            >
                <div className="container flex items-center justify-center">
                    <NavbarBrand className={isScrolled ? "block" : "hidden"}>
                        <Link href="/">
                            <NextImage src="/logo/studio-l-logo-side.png" alt="Pilates studio L logo" width={120} height={60} />
                        </Link>
                    </NavbarBrand>
                    <NavbarContent justify="end" className="flex gap-6 justify-end">
                        {menuItems.map((item) => (
                            <NavbarItem key={item.label} onClick={() => scrollToId(item.id)}
                                className="text-primary text-sm font-medium cursor-pointer hover:opacity-70"
                            // className={pathname === item.id ? "text-orange" : "text-secondary"}
                            >{item.label}</NavbarItem>
                        ))}
                    </NavbarContent>
                    {/* </div> */}
                </div>
            </Navbar>
            {/* <div className="md:hidden">
            <MobileHeader />
        </div> */}
        </>
    )
}