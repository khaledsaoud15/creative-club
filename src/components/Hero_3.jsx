import { useEffect } from "react";
import styled from "styled-components";
import img from "../images/pexels-photo-9023583.jpeg";
import aos from "aos";
import "aos/dist/aos.css";

const Hero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 85%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Hero_Img_Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 20%;
    right: -50%;
    background: #f2b82d;
    width: 100%;
    height: 15%;
  }
  @media (max-width: 768px) {
    width: 90%;
    ::after {
      content: "";
      position: absolute;
      top: 10%;
      right: 5%;
      background: #f2b82d;
      width: 80%;
      height: 15%;
    }
  }
`;
const Hero_Img = styled.img`
  width: 100%;
  height: 100%;
`;
const Hero_Content = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  width: 80%;
  height: 60%;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  align-items: center;
  text-align: center;
  @media (max-width: 999px) {
    padding: 0 30px;
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 70%;
    height: 80%;
    padding: 40px 30px;
  }
`;
const Hero_Title = styled.h1`
  font-size: 25px;
`;
const Hero_Desc = styled.p`
  margin: 25px 0;
  line-height: 25px;
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

const Hero_3 = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <Hero>
      <Hero_Img_Container data-aos="fade-right">
        <Hero_Img src={img} />
      </Hero_Img_Container>
      <Hero_Content data-aos="fade-left">
        <Hero_Title>
          Our professional team will be happy to bring amazing ideas and
          projects to life
        </Hero_Title>
        <Hero_Desc>
          Ut tellus elementum sagittis vitae et leo duis. Nisi est sit amet
          facilisis magna etiam. Odio facilisis mauris sit amet massa vitae
          tortor. Eros donec ac odio tempor orci dapibus ultrices in.{" "}
        </Hero_Desc>
        <Hero_Button>LEARN MORE</Hero_Button>
      </Hero_Content>
    </Hero>
  );
};

export default Hero_3;
