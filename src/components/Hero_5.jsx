import React from "react";
import styled from "styled-components";
import { images } from "../data";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "../images/ds-min.png";

const Hero_5 = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <Hero>
      <Hero_Title data-aos="fade-up">Some Work</Hero_Title>
      <Wrapper>
        {images.map((i, index) => (
          <Img src={i.img} data-aos="fade-right" key={index} />
        ))}
      </Wrapper>
      <Div>
        <Img1 src={img} data-aos="fade-up" />
        <Content data-aos="fade-down">
          <Hero_Header>We Create Amazing Websites</Hero_Header>
          <Hero_Desc>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Hero_Desc>
          <Hero_Button>LEARN MORE</Hero_Button>
        </Content>
      </Div>
    </Hero>
  );
};

export default Hero_5;

const Hero = styled.div`
  margin-bottom: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: 100%;
  }
`;
const Hero_Title = styled.h1`
  text-align: center;
  margin: 80px 0;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 10px;
  height: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 40vh;
`;
const Img1 = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 20px;
  }
`;
const Div = styled.div`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Hero_Header = styled.h1`
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const Hero_Desc = styled.p`
  margin: 30px 0;
  width: 70%;
  font-size: 1rem;
  line-height: 30px;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Hero_Button = styled.button`
  width: 40%;
  padding: 10px 15px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
