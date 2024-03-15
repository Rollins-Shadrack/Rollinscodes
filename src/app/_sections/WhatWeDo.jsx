import { SubTitle } from '@/components/Components'
import Container from '@/components/Container'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { whatwedo } from '@/constants/pages'
import Image from 'next/image'
import React from 'react'

const WhatWeDo = () => {
  return (
    <section className="py-10" id="services">
      <Container className="maxwidthContainer ">
        <SubTitle className="mb-10">
          <span className="text-brandDarkBlue">What </span>We Do
        </SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {whatwedo.map((card, idx) => (
            <Card key={idx} className="shadow-lg">
              <CardHeader className="py-3">
                <Image src={card.img} width={70} height={100} alt="rollinscodes.com" />
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