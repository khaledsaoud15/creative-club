import React from "react";
import styled from "styled-components";
import { brands } from "../data";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero_7 = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <Hero>
      <Content data-aos="fade-right">
        <Header>Our Clients</Header>
        <Desc>
          Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus .
          Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla
          sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper
          nisi nunc, et molestie ipsum iaculis sit amet.
        </Desc>
        <Button>LEARN MORE</Button>
      </Content>
      <Wrapper data-aos="fade-left">
        {brands.map((i, index) => (
          <Img src={i.img} key={index} />
        ))}
      </Wrapper>
    </Hero>
  );
};

export default Hero_7;

const Hero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 0 100px;
  background: #000000;
  color: #fff;
  @media (max-width: 820px) {
    height: 100%;
    flex-direction: column;
    padding: 100px 20px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90%;
`;
const Header = styled.h1`
  font-size: 4.5rem;
  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;
const Desc = styled.p`
  margin: 35px 0;
  line-height: 40px;
  @media (max-width: 560px) {
    font-size: 12px;
  }
  @media (max-width: 820px) {
    width: 90%;
  }
`;
const Button = styled.button`
  width: 50%;
  padding: 10px 25px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background: #fff;
    color: #000;
  }
  @media (max-width: 820px) {
    margin: 0 auto;
  }
  @media (max-width: 560px) {
    width: 70%;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  gap: 60px;
  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 100px);
  }
`;
const Img = styled.img`
  width: 100%;
`;
