import styled from "styled-components";
import img from "../images/ds-min.png";

const Hero_6 = () => {
  return (
    <Hero>
      <Img src={img} />
      <Content>
        <Hero_Title>We Create Amazing Websites</Hero_Title>
        <Hero_Desc>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Hero_Desc>
        <Hero_Button>LEARN MORE</Hero_Button>
      </Content>
    </Hero>
  );
};

export default Hero_6;

const Hero = styled.div`
  display: flex;
  margin-top: 500px;
`;
const Img = styled.img`
  width: 50%;
`;
const Content = styled.div``;
const Hero_Title = styled.h1``;
const Hero_Desc = styled.p``;
const Hero_Button = styled.button``;
