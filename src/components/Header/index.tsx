"use client";

import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="max-auto flex justify-between py-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
