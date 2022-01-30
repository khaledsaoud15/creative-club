import { Menu } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  background: #fff;
  z-index: 999999;
`;
const Nav_Logo = styled.h1`
  font-size: 40px;
  letter-spacing: 5px;
  :first-letter {
    font-size: 50px;
    color: #ca1818;
  }
`;
const Nav_Links = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const Nav_Icon_Menu = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 576px) {
    display: flex;
  }
`;
const Nav_Content_Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    text-align: center;
    flex-direction: column;
    padding: 10px 0;
    transition: max-height 0.5s ease-in;
    max-height: ${(props) => (props.index ? "400px" : "0")};
    overflow: hidden;
    background: #fff;
    z-index: 999999;
  }
`;
const Nav_Link = styled.p`
  margin-right: 25px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  :hover {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -125%;
      left: 0;
      background: #000000;
    }
  }
  :visited {
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: -20px;
      left: 0;
      background: #000;
    }
  }
  @media (max-width: 576px) {
    margin-top: 30px;
  }
`;

const Navbar = () => {
  const [index, setIndex] = useState(false);
  return (
    <Nav>
      <Nav_Logo>Portfolio</Nav_Logo>
      <Nav_Links>
        <Nav_Icon_Menu onClick={() => setIndex(!index)}>
          <Menu />
        </Nav_Icon_Menu>
        <Nav_Content_Menu index={index}>
          <Nav_Link>HOME</Nav_Link>
          <Nav_Link>ABOUT</Nav_Link>
          <Nav_Link>NEWS</Nav_Link>
        </Nav_Content_Menu>
      </Nav_Links>
    </Nav>
  );
};

export default Navbar;
