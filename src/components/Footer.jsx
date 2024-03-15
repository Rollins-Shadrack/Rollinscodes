"use client";
import React from "react";
import Container from "./Container";
import Image from "next/image";
import { navItems, socials } from "@/constants/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const year = new Date().getFullYear()
  return (
    <section className="py-8 bg-brandBlack text-brandWhite">
      <Container className={"maxwidthContainer"}>
        <div className="md:flex items-center justify-between pb-3 border-b">
          <Image src={"/logo/whiteLogo.png"} width={200} height={200} alt="rollinscodes.com"  />
          <ul className="flex lg:space-x-12 md:space-x-9 space-x-3  cursor-pointer items-center justify-center">
            {navItems.pages.map(
              ({ link, path }, index) =>
                index !== 0 && (
                  <Link
                    key={path}
                    href={path}
                    className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                    {link}
                  </Link>
                )
            )}
            {navItems.sections.map(({ link, path }) => (
              <a
                href={path}
                key={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium"}  whitespace-nowrap`}>
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-2 gap-5 w-full">
          <p className="font-medium">&copy; Copyright {year}. All Rights Reserved</p>
          <div className="flex items-center gap-5 md:justify-end">
            {socials.map((social, idx) => (
              <a href={social.link} target="_blank" key={idx}>
                {React.createElement(social.icon, { size: "20" })}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
