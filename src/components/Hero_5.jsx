import React from "react";
import styled from "styled-components";
import { images } from "../data";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    </Hero>
  );
};

export default Hero_5;

const Hero = styled.div`
  margin-bottom: 80px;
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
  height: 40vh;
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
  height: 50vh;
`;
