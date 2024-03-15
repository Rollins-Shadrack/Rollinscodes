import { Title, TitleDesc } from '@/components/Components';
import Container from '@/components/Container'
import { heroServices } from '@/constants/pages';
import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <section className="pt-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 maxwidthContainer">
        <div className=" flex flex-col space-y-8 justify-center">
          <Title>
            We design and develop custom <span className="text-brandDarkBlue">web projects</span> across platform and
            <span className="text-brandDarkBlue"> industries</span>
          </Title>
          <TitleDesc>
            In close collaboration with our customers, we craft mobile applications, e-commerce platforms, and online portals. We specialize in
            crafting UI/UX mockups from the scratch or assisting in the enhancement and innovation of existing websites and applications.
          </TitleDesc>
          <div className="flex flex-wrap items-center justify-between">
            {heroServices.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Image src={service.img} alt="rollinscodes.com" width={40} height={80} />
                <h2 className="uppercase font-semibold">{service.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <Image src="/hero.png" width={600} height="400" alt="rollinscodes.com" />
        </div>
      </Container>
    </section>
  );
}

export default Hero