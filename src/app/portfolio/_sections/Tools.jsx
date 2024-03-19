"use client";
import { SubTitle, TitleDesc } from "@/components/Components";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Tools = () => {
  const [texts, setTexts] = useState([
    "Javascript",
    "Visual Studio",
    "Next.js",
    "Tailwind",
    "Figma",
    "npm",
    "TypeScript",
    "API",
    "Express.js",
    "React.js",
    "Git",
    "Node.js",
    "Prisma",
    "Java",
    "PHP",
    "SEO",
    "Laravel",
    "Python",
    "Styled Components",
    "Recharts",
    "HTML",
    "CSS",
    "Sass",
    "Responsive Design",
    "MySQL",
    "GitHub",
    "Yarn",
    "PostgreSQL",
    "Ajax"
  ]);

  const getRandomFontSize = () => {
    return Math.random() < 0.2 && "20px" ; 
  };
  const getRandomAngles = () => {
    const angles = [0, 1, 2, 3, 6, -8, 10, 12, 15, -17, 18, 20, 22, 24, -26, 28, 30, -32, 34, 36, 38, 40, -42, 44, 45, -48, 52, 55, 58];
    const randomAngles = [];
    for (let i = 0; i < angles.length; i++) {
      const randomIndex = Math.floor(Math.random() * angles.length);
      randomAngles.push(angles[randomIndex]);
    }
    return randomAngles;
  };

  const randomAngles = getRandomAngles();

  return (
    <div className="py-10 pb-20">
      <Container className="maxwidthContainer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <SubTitle>
              <span className="text-brandDarkBlue">Skills</span> and Tools
            </SubTitle>
            <TitleDesc className="text-justify my-5">
              I am a seasoned full-stack developer with over 2 years of hands-on experience in creating custom web solutions tailored to meet the
              unique needs of businesses. Whether you are a business seeking innovative digital solutions or a recruiter looking for a skilled
              developer to join your team, I bring expertise in crafting dynamic and user-centric websites that drive growth and success.
            </TitleDesc>
            <a href="https://rollinscodes.zapier.app/get-in-touch" target="blank">
              <Button className="my-7 bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue text-transparent text-white ">
                Let us get in Touch
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap gap-8 mt-5 ">
            {texts.map((text, index) => (
              <p className="text-sm text-gray-600 font-medium" style={{ transform: `rotate(${randomAngles[index]}deg)`, fontSize:getRandomFontSize() }} key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
