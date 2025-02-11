import { menuItems } from "@/app/constants/menuItems";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import React, { useEffect } from "react";
import NextImage from "next/image";
import { cn } from "@/app/lib/utils";

export const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [currentId, setCurrentId] = React.useState("top");
    const scrollToId = (id: string) => {
        // setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Adjust based on header height
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
            // Detect which section is in view
            let currentSection = "top";
            menuItems.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        currentSection = item.id;
                    }
                }
            });

            setCurrentId(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="md:hidden">
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/">
                        <NextImage src="/logo/studio-l-logo-side.png" alt="Pilates studio L logo" width={120} height={60} />
                    </Link>
                </NavbarBrand>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="justify-self-end"
                />
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarMenuItem
                        key={item.label}
                        onClick={() => { scrollToId(item.id); setIsMenuOpen(false); }}
                        className={cn(
                            "text-primary text-base font-medium cursor-pointer hover:opacity-70",
                            currentId === item.id ? "text-pink font-bold" : ""
                        )}
                    >
                        {item.label}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
