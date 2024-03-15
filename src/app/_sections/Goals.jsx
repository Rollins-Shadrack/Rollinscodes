import { SubTitle,  TitleDesc } from '@/components/Components'
import Container from '@/components/Container'
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import { wedoSection } from '@/constants/pages';
import Image from 'next/image';
import React from 'react'

const Goals = () => {
  return (
    <section className="py-10">
      <Container className="maxwidthContainer">
        <SubTitle className="lg:w-5/12 mb-5">
          Solve Your <span className="text-brandDarkBlue">Business Goal</span> with custom web design
        </SubTitle>
        <TitleDesc>
          By tailoring the design of websites to meet the unique needs and goals of each business can effectively enhance their online presence,
          engage with their target audience more effectively, and ultimately achieve their desired business outcomes
        </TitleDesc>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-7">
          {wedoSection.map((card, idx) => (
            <Card key={idx}>
              <CardHeader className="p-2">
                <div className="flex items-center space-x-3 mb-5">
                  <div className="h-16 w-16 p-2 rounded-full bg-brandBlack">
                    <Image src={card.img} width={100} height={100} alt="rollinscodes.com" />
                  </div>
                  <h1 className="font-semibold text-lg md:text-xl w-9/12">{card.title}</h1>
                </div>
                <CardDescription>{card.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Goals