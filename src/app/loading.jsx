import React from "react";
import { Loader } from "lucide-react";

const loading = () => {
  return (
    <div className={"flex justify-center items-center h-screen  w-full"}>
      <svg className={"w-24 h-24 text-brandPrimary animate-spin"} viewBox="0 0 24 24">
        <Loader />
      </svg>
    </div>
  );
};

export default loading;
