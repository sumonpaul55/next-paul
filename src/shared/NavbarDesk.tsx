"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import devpaul from "../../public/img/devpaul.png";

// Menu items
const menuBar = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Skills", url: "/skills" },
    { name: "Blog", url: "/post" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
];

export default function CustomNavbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0" style={{ zIndex: 9999 }}>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                isMenuOpen={isMenuOpen}
                isBordered
                className="bg-white bg-opacity-25">
                {/* Logo / Brand */}
                <NavbarBrand>
                    <Link href="/" className="uppercase font-extrabold flex items-center text-xl">
                        <Image src={devpaul} width={300} height={150} alt="DEVPAUL" style={{ maxWidth: "170px" }} />
                        <b className="font-sans font-semibold" style={{fontSize: "26px"}}>IT</b>
                    </Link>
                </NavbarBrand>

                {/* Desktop Menu: visible on lg and above */}
                <NavbarContent className="hidden lg:flex gap-6" justify="center">
                {menuBar.map((item) => (
                    <NavbarItem key={item.name} isActive={pathname === item.url}>
                        <Link
                            href={item.url}
                            className={`text-sm font-medium transition hover:text-primary ${pathname === item.url ? "text-primary" : "text-gray-700"
                                }`}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

                {/* Mobile Toggle Button: only shown on <lg */}
                <NavbarContent justify="end" className="md:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

                <div className="hidden md:flex gap-5">
                    {menuBar.map((item) => {
                        if (item?.url !== "/dashboard") {
                            return <NavbarMenuItem key={item.name} className="list-none">
                                <Link
                                    href={item.url}
                                    className={`block w-full px-2 py-2 rounded hover:bg-gray-100 ${pathname === item.url
                                        ? "text-primary font-semibold"
                                        : "text-gray-800"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </NavbarMenuItem>
                        } else {
                            return null
                        }
                    })}
                </div>
                {/* Mobile Menu Drawer */}
                <NavbarMenu className="md:hidden">
                {menuBar.map((item) => (
                    <NavbarMenuItem key={item.name}>
                        <Link
                            href={item.url}
                            className={`block w-full px-2 py-2 rounded hover:bg-gray-100 ${pathname === item.url
                                ? "text-primary font-semibold"
                                : "text-gray-800"
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
            </Navbar>
        </div>
    );
}