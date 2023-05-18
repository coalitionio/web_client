import { Select } from "@ui/common/select";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import styled from "styled-components"


const LandingLayout = () => {
  const t = useTranslation();
  const test = ["1", "2", "3"];
  return (
    <div>
      <header className="w-full h-20 ">
        <div className="w-10">

        <Select className="" onChange={(value) => console.log(value)}>
          {test.map((t) => {
            return <span>Hello {t}</span>;
          })}

        </Select>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LandingLayout;
