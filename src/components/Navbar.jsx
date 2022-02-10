import { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  transition: background-color 0.5s ease;
  @media (max-width: 480px) {
    padding: 0 20px;
  }
  z-index: 9999999;
`;
const Nav_Logo = styled.h1``;
const Nav_Links = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
`;
const Nav_Link = styled.a`
  margin-right: 25px;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  color: #000;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  :hover {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      background: #000;
      position: absolute;
      bottom: -30px;
      left: 0;
    }
  }
  :active {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      background: #000;
      position: absolute;
      bottom: -30px;
      left: 0;
    }
  }
  @media (max-width: 480px) {
    margin-right: 15px;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Nav style={{ backgroundColor: isScrolled ? "#f2b82d" : "#fff" }}>
      <Nav_Logo style={{ color: isScrolled ? "#fff" : "#000" }}>Brand</Nav_Logo>
      <Nav_Links>
        <Nav_Link href="/" style={{ color: isScrolled ? "#fff" : "#000" }}>
          Home
        </Nav_Link>
        <Nav_Link href="/" style={{ color: isScrolled ? "#fff" : "#000" }}>
          About
        </Nav_Link>
        <Nav_Link href="/" style={{ color: isScrolled ? "#fff" : "#000" }}>
          Contact
        </Nav_Link>
      </Nav_Links>
    </Nav>
  );
};

export default Navbar;
