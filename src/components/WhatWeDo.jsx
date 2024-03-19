'use client'
import { SubTitle } from '@/components/Components'
import Container from '@/components/Container'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { whatwedo } from '@/constants/pages'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const WhatWeDo = () => {
  const pathname = usePathname()
  return (
    <section className="py-10" id="services">
      <Container className="maxwidthContainer ">
        <SubTitle className="mb-10">
          {pathname === "/portfolio" ? (
            <>
              <span className="text-sm">I can help you with</span> <br />
              <span className="text-brandDarkBlue">Skill-set</span>
            </>
          ) : (
            <>
              <span className="text-brandDarkBlue">What </span>We Do
            </>
          )}
        </SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {whatwedo.map((card, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardHeader className="py-3">
                <div className="flex items-center justify-between">
                  <Image src={card.img} width={70} height={100} alt="rollinscodes.com" />
                  {pathname === "/portfolio" && (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="font-medium text-sm bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue  text-white px-4 py-1.5 rounded-lg">
                        Languages
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>Proficient Languages</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {card.languages.map((lang, idxxx) => (
                          <DropdownMenuItem key={idxxx}>{lang}</DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
                <CardTitle className="text-lg whitespace-nowrap">{card.title}</CardTitle>
                {card.features.map((feature, idxx) => (
                  <ul key={idxx} className=" text-sm text-muted-foreground list-disc px-5">
                    <li className="">{feature}</li>
                  </ul>
                ))}
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhatWeDo