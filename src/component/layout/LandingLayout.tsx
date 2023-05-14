import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  console.log(import.meta.env.SENTRY_DSN);

  return (
    <div>
      <header className="w-full h-20 bg-blue-600">Header</header>
      <main>
        <button onClick={() => methodDoesNotExist()}>
          Break the world {import.meta.env.VITE_SENTRY_DSN}
        </button>

        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LandingLayout;
