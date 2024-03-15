"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

import { usePathname } from "next/navigation";
import Container from "./Container";
import { navItems } from "@/constants/layout";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();
    
    const mobileMenuHandler = () => {
      setNavOpen(!navOpen);
    };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className={`w-full ${isSticky ? "bg-brandBlack" : "bg-white"} md:bg-transparent fixed top-0 left-0 right-0 z-[999] shadow`}>
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border shadow-xl bg-brandBlack text-brandWhite duration-300 z-[999]" : ""}`}>
        <Container className="flex justify-between items-center text-base ">
          <Link className="" href="/">
            <Image src={isSticky ? "/logo/whiteLogo.png" : "/logo/blackLogo.png"} width={120} height={150} className="" alt="rollinscodes.com" />{" "}
          </Link>

          {/* Navbar items for large screens */}
          <ul className="lg:flex space-x-12 hidden cursor-pointer">
            {navItems.pages.map(({ link, path }) => (
              <Link
                key={path}
                href={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${
                  pathname === path && "font-medium text-brandBlue"
                }  whitespace-nowrap`}>
                {link}
              </Link>
            ))}
            {navItems.sections.map(({ link, path }) => (
              <a
                href={path}
                key={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${
                  pathname === path && "font-medium text-brandBlue"
                }  whitespace-nowrap`}>
                {link}
              </a>
            ))}
          </ul>
          <button className="block lg:hidden" onClick={mobileMenuHandler}>
            <MenuIcon className="text-4xl font-semibold" />
          </button>
        </Container>
        <div className={navOpen ? "py-0 block fixed w-screen z-[9999] lg:hidden" : "py-0 hidden fixed w-screen z-[9999] lg:hidden"}>
          <div className="h-screen w-screen top-0 fixed bg-black bg-opacity-30 z-[999]" onClick={mobileMenuHandler}></div>
          <div className="bg-white top-0 right-0 h-screen fixed w-[320px] z-[9999]">
            <div className="h-14 px-10 border-b flex items-center">
              <button onClick={mobileMenuHandler} className="flex items-center space-x-3">
                <X /> <span>Close</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 overflow-y-scroll scroll-smooth">
              {navItems.pages.map(({ link, path }) => (
                <Link
                  key={path}
                  href={path}
                  className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                  {link}
                </Link>
              ))}
              {navItems.sections.map(({ link, path }) => (
                <a
                  href={path}
                  key={path}
                  className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
