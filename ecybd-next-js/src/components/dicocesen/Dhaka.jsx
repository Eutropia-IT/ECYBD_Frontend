"use client";

import React from "react";
import PageTop from "../shared/PageTop";
import { useQuery } from "@tanstack/react-query";
import { getDhaka } from "@/apiRequestHandlers/dicocesen";

const Dhaka = () => {
  const { data, isLoading } = useQuery({
    queryFn: getDhaka,
    queryKey: ["dhaka"],
  });

  console.log(data);

  return (
    <div>
      <PageTop title={"Dhaka"} description={"Dicocesen Commission"} />

      {/* content section */}
      <div className="container px-8 2xl:px-0 mx-auto grid gap-10 grid-cols-12">
        hello
      </div>
    </div>
  );
};

export default Dhaka;
