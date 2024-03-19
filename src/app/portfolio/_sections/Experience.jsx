import { SubTitle, TitleDesc } from '@/components/Components';
import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div className="py-10">
      <Container className="maxwidthContainer">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
              <div className="col-span-4">
                <Image className="rounded-xl object-cover" src="/experience.jpeg" width={400} height={400} alt="rollinscodes.com" />
              </div>

              <div className="col-span-3">
                <Image className="rounded-xl h-64 object-cover" src="/expe.jpeg" width={400} height={400} alt="rollinscodes.com" />
              </div>

              <div className="col-span-5">
                <Image className="rounded-xl h-96 object-cover" src="/exper.jpeg" width={400} height={400} alt="rollinscodes.com" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="">
              <SubTitle>Work Experience</SubTitle>
              <div className="border-b-2 pb-3">
                <TitleDesc>
                  PERN Fullstack developer - <span className="text-brandBlue">Eastberry Limited</span>
                </TitleDesc>
                <p className="text-sm text-gray-600">September, 2023 - January 2024</p>
              </div>

              <div className="border-b-2 pb-3">
                <TitleDesc>
                  Fullstack developer - <span className="text-brandBlue">Vigilux Corporation</span>
                </TitleDesc>
                <p className="text-sm text-gray-600">November 2021 - July, 2023</p>
              </div>
            </div>
            <div className=" border-b-2 pb-3">
              <SubTitle>Education</SubTitle>
              <TitleDesc>
                Bsc. Mathematics and Computer Science - <span className="text-brandBlue">Maseno University</span>
              </TitleDesc>
              <p className="text-sm text-gray-600">September, 2019 - March 2023</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Experience