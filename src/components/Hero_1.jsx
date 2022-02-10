import styled from "styled-components";
import bg from "../images/yy-min.jpg";

const Hero = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Hero_Content = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  @media (max-width: 568px) {
    left: 25%;
  }
`;
const Hero_P = styled.p`
  font-size: 30px;
  letter-spacing: 10px;
  margin-bottom: 25px;
  font-weight: 500;
  @media (max-width: 999px) {
    letter-spacing: 8px;
  }
  @media (max-width: 568px) {
    font-size: 25px;
    letter-spacing: 5px;
  }
`;
const Hero_Title = styled.h1`
  font-size: 120px;
  line-height: 75px;
  font-weight: 900;
  @media (max-width: 999px) {
    font-size: 70px;
    line-height: 60px;
  }
  @media (max-width: 568px) {
    font-size: 45px;
    line-height: 40px;
  }
`;
const Hero_Button = styled.button`
  width: 50%;
  padding: 15px 20px;
  margin-top: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  :hover {
    background: #1a1717;
  }
  @media (max-width: 999px) {
    width: 50%;
  }
  @media (max-width: 568px) {
    width: 60%;
  }
`;

const Hero_1 = () => {
  return (
    <Hero>
      <Img src={bg} />
      <Hero_Content>
        <Hero_P>OUR SERVICES</Hero_P>
        <Hero_Title>WE CREATE BRANDS</Hero_Title>
        <Hero_Button>LEARN MORE</Hero_Button>
      </Hero_Content>
    </Hero>
  );
};

export default Hero_1;
