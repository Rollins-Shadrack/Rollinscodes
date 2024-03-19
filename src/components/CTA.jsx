import Image from 'next/image';
import React from 'react'
import Container from './Container';
import { Title } from './Components';
import { Button } from './ui/button';

const CTA = () => {
  return (
    <section className="bg-brandBlack py-10 text-brandWhite">
      <Container className="md:flex items-center md:space-x-14 justify-between maxwidthContainer">
        <div className="md:w-8/12 w-full">
          <Title className="leading-relaxed mb-5">Tell us about your project today and get a Project Charter for free</Title>
          <a href="https://rollinscodes.zapier.app/get-in-touch" target="blank">
            <Button className="my-7 bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue text-transparent text-white ">Let us get in Touch</Button>
          </a>
        </div>
        <div className="md:w-4/12 w-full flex items-center justify-center ">
          <Image src="/cta.png" width={300} height={200} alt="rollinscodes.com" />
        </div>
      </Container>
    </section>
  );
}

export default CTA