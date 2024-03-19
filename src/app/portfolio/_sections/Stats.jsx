import { SubTitle } from "@/components/Components";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Component, Slack, Snowflake, Wand2 } from "lucide-react";
import React from "react";

const Stats = () => {
  return (
    <section className="py-10">
      <Container className="maxwidthContainer grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="">
          <h1 className="text-xl md:text-4xl max-w-xl font-medium bg-clip-text bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue text-transparent pb-7">
            Experience with a variety of Projects and industries.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Versatile experience across diverse projects and industries, bringing adaptability and valuable skillsto any task.
          </p>
          <div className="flex items-center space-x-7">
            <a href="https://rollinscodes.zapier.app/get-in-touch" target="blank">
              <Button className="my-7 bg-gradient-to-tl from-brandDarkBlue to-brandLightBlue text-transparent text-white ">
                Let us get in Touch
              </Button>
            </a>
            <Button variant="outline">See my work</Button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className=" flex flex-col justify-center border-r-2">
            <div className="border-b flex items-center justify-center h-full">
              <Snowflake className="w-10 h-10  " />
            </div>

            <div className="border-t flex flex-col items-center justify-center h-full bg-slate-100">
              <h1 className="font-bold text-4xl">20+ </h1>
              <p className="text-sm font-medium text-gray-600">Happy Clients</p>
            </div>
          </div>

          <div className=" flex flex-col justify-center border-r-2">
            <div className="border-b flex flex-col items-center justify-center h-full bg-slate-100">
              <h1 className="font-bold text-4xl">30+ </h1>
              <p className="text-sm font-medium text-gray-600">Projects finished</p>
            </div>

            <div className="border-t flex items-center justify-center h-full">
              <Wand2 className="w-10 h-10  " />
            </div>
          </div>

          <div className=" flex flex-col justify-center border-r-2">
            <div className="border-b flex items-center justify-center h-full">
              <Component className="w-10 h-10  " />
            </div>

            <div className="border-t flex flex-col items-center justify-center h-full bg-slate-100">
              <h1 className="font-bold text-4xl">2+ </h1>
              <p className="text-sm font-medium text-gray-600">Years of Experience</p>
            </div>
          </div>

          <div className=" flex flex-col justify-center">
            <div className="border-b flex flex-col items-center justify-center h-full bg-slate-100">
              <h1 className="font-bold text-4xl">18+ </h1>
              <p className="text-sm font-medium text-gray-600">Website Developed</p>
            </div>

            <div className="border-t flex items-center justify-center h-full">
              <Slack className="w-10 h-10  " />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
