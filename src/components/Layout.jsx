import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, onHeroClick, onAboutClick }) => {
  return (
    <div className="m-0 bg-white">
      <Navbar onHeroClick={onHeroClick} onAboutClick={onAboutClick} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;