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
        //scroll to the id with smooth behavior
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
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
                classNames={{
                    base: cn("z-50 fixed top-0 h-[78px] border-b-1 border-primary", isScrolled ? "bg-white backdrop-blur-lg" : "bg-white"),
                    wrapper: cn("h-[78px]  flex items-center p-4 gap-6 container px-0"),
                    content: "w-full flex items-center",
                    brand: "flex items-center gap-2",
                    item: "text-primary text-lg font-bold cursor-pointer hover:opacity-70",
                }}
            >
                {/* <div className="max-w-[1371px]"> */}
                <NavbarBrand className={isScrolled ? "flex" : "hidden"}>
                    <Link href="/">
                        <NextImage src="/logo/studio-l-logo-side.png" alt="Pilates studio L logo" width={120} height={60} />
                    </Link>
                </NavbarBrand>
                <NavbarContent justify="end" className="flex gap-6 justify-end">
                    {menuItems.map((item) => (
                        <NavbarItem key={item.label} onClick={() => scrollToId(item.id)}
                            className="text-primary text-base font-medium cursor-pointer hover:opacity-70"
                        // className={pathname === item.id ? "text-orange" : "text-secondary"}
                        >{item.label}</NavbarItem>
                    ))}
                </NavbarContent>
                {/* </div> */}
            </Navbar>
            {/* <div className="md:hidden">
            <MobileHeader />
        </div> */}
        </>
    )
}