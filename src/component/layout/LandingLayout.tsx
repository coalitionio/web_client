import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div>
      <header className="w-full h-20 bg-blue-600">Header</header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LandingLayout;
