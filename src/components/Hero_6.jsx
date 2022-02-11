import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import styled from "styled-components";
import { grid } from "../data";
import aos from "aos";
import "aos/dist/aos.css";

const Hero_6 = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <Hero>
      <Hero_Header data-aos="fade-down">Digital Marketing Agency</Hero_Header>
      <Hero_Desc data-aos="fade-up">
        Mauris augue neque gravida in. Ut sem viverra aliquet eget sit amet.
        Rutrum tellus pellentesque eu tincidunt tortor aliquam. Accumsan lacus
        vel facilisis volutpat est velit egestas.
      </Hero_Desc>
      <Wrapper>
        {grid.map((i, index) => (
          <Card key={index} data-aos="flip-left">
            <Img src={i.img} />
            <Card_Title>{i.title}</Card_Title>
            <Card_P>
              Vitae congue eu consequat ac felis donec et. Mauris pharetra et
              ultrices neque ornare aenean euismod elementum.
            </Card_P>
          </Card>
        ))}
      </Wrapper>
    </Hero>
  );
};

export default Hero_6;

const Hero = styled.div`
  height: 100%;
  margin-top: 80px;
  background: #f2b82d;
`;
const Hero_Header = styled.h1`
  text-align: center;
  padding-top: 90px;
  font-size: 4rem;
  @media (max-width: 820px) {
    font-size: 3rem;
  }
`;
const Hero_Desc = styled.p`
  margin: 30px auto;
  width: 60%;
  text-align: center;
  @media (max-width: 820px) {
    width: 80%;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  height: 100%;
  justify-content: center;
  padding: 80px 0;
  gap: 50px;
  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 250px);
    gap: 30px;
  }
  @media (max-width: 560px) {
    grid-template-columns: 80%;
    gap: 30px;
  }
`;
const Img = styled.img``;
const Card = styled.div``;
const Card_Title = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin: 20px 0;
`;
const Card_P = styled.p`
  line-height: 30px;
`;
