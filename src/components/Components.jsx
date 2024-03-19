"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export const Title = React.forwardRef(({ className, children, ...props }, ref) => (
  <h1 ref={ref} className={cn("text-3xl md:text-5xl font-bold ", className)} {...props}>
    {children}
  </h1>
));
Title.displayName = "Title";

export const SubTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h1 ref={ref} className={cn("text-xl sm:text-2xl lg:text-3xl font-bold ", className)} {...props}>
    {children}
  </h1>
));
SubTitle.displayName = "SubTitle";

export const TitleDesc = React.forwardRef(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("text-gray-600 font-normal md:text-lg", className)} {...props}>
    {children}
  </p>
));
TitleDesc.displayName = "TitleDesc";
