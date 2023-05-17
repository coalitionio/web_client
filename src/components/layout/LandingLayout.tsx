import { Select } from "@ui/common/select";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
const LandingLayout = () => {
  console.log(import.meta.env.SENTRY_DSN);
  const t = useTranslation();
  const test = ["1", "2", "3"];
  return (
    <div>
      <header className="w-full h-20 ">
        <Select className="" onChange={(value) => console.log(value)}>
          {/* {test.map((t) => {
            return <span>Hello</span>;
          })} */}
          <option value={"1 ne"}>1</option>
          <option value={"2 ne"}>2</option>
          <option value={"3 ne"}>3</option>
        </Select>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LandingLayout;
