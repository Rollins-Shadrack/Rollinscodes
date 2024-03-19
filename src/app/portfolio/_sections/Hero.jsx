import Container from '@/components/Container'
import { socials } from '@/constants/layout';
import React from 'react'

const Hero = () => {
  return (
    <div className="mt-14 pb-10 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <Container className="px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            Hi, I am
            <span className="bg-clip-text bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue text-transparent"> Rollins Shadrack</span>
          </h1>
        </div>

        <div className="mt-5 max-w-4xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I am a seasoned full-stack developer with over 2 years of hands-on experience in crafting custom web solutions uniquely tailored to meet
            the diverse needs of businesses.
            
          </p>
        </div>

        <div className="mt-5 max-w-2xl text-center mx-auto">
          <div className="flex items-center gap-5 justify-center   ">
            {socials.map((social, idx) => (
              <a href={social.link} target="_blank" key={idx} className="border border-gray-600 rounded-lg p-2 ">
                {React.createElement(social.icon, { size: "20" })}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero