import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/ui-components/Header";

const HomeLayout = () => {
  return (
    <div className="h-[100vh] dark:bg-[rgb(20,20,31)] bg-pink-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;