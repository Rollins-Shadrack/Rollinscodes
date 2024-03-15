import { SubTitle } from '@/components/Components';
import Container from '@/components/Container';
import { CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'

const HowWeWork = () => {
  return (
    <section className="py-10">
      <Container className="maxwidthContainer ">
        <SubTitle className="mb-10">
          <span className="text-brandDarkBlue">How </span>We Work
        </SubTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center justify-center">
            <Image src="/howwework.png" width={900} height={500} alt="rollinscodes.com" className="w-full lg:h-80 object-fit" />
          </div>
          <div className="relative">
                      <Image src="/work.jpg" width={800} height={600} alt="rollinscodes.com" className="w-full h-full object-cover rounded-lg relative" />
                      <CardDescription className="absolute top-2 left-2 bg-white p-2 rounded-lg  shadow-lg lg:w-2/5 w-3/5" >Build A proffesional website that grows your business</CardDescription>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowWeWork