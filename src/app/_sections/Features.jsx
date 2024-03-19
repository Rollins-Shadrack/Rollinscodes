import { SubTitle, TitleDesc } from '@/components/Components'
import Container from '@/components/Container'
import { CardDescription } from '@/components/ui/card';
import { featuresSection } from '@/constants/pages';
import Image from 'next/image';
import React from 'react'

const Features = () => {
  return (
    <section className="py-10">
      <Container className="maxwidthContainer">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="">
            <SubTitle className="mb-5">
              All the <span className="text-brandDarkBlue">Features</span> that you need
            </SubTitle>
            <TitleDesc className="">
              When building a website for your business, there are several features that you will want to consider.
            </TitleDesc>
            {featuresSection.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-4 my-5">
                <div className="h-14 w-14 rounded-full flex items-center justify-center border-2 ">
                  <h1 className="font-bold text-2xl">{idx + 1}</h1>
                </div>
                <div className="w-10/12">
                  <h1 className="font-semibold text-lg">{feature.title}</h1>
                  <CardDescription>{feature.desc}</CardDescription>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full">
            <Image src="/features.jpg" width={900} height={700} alt="rollinscodes.com" className='w-full h-full object-cover rounded-lg relative' />
<CardDescription className="absolute bottom-2 right-3 bg-white p-2 lg:w-2/5 w-4/5  rounded-lg shadow-xl ">Building a proffesional website can help grow your business by increasing your visibility, establishing credibility</CardDescription>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features