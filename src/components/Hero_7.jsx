import React from "react";
import styled from "styled-components";
import { brands } from "../data";

const Hero_7 = () => {
  return (
    <Hero>
      <Content>
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
      <Wrapper>
        {brands.map((i, index) => (
          <Img src={i.img} key={index} />
        ))}
      </Wrapper>
    </Hero>
  );
};

export default Hero_7;

const Hero = styled.div``;
const Content = styled.div``;
const Header = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;
const Wrapper = styled.div``;
const Img = styled.img``;
