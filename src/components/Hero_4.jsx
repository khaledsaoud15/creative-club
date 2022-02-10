import styled from "styled-components";
import { card } from "../data";
import img from "../images/gffgfgfg-min.jpg";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero_4 = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <Hero>
      <Img src={img} data-aos="fade-down" data-aos-duration="2000" />
      <Content data-aos="fade-up">
        {card.map((i, index) => (
          <Card
            key={index}
            data-aos="flip-right"
            data-aos-duration={i.duration}
          >
            <Card_Img src={i.img} />
            <Card_Desc>{i.desc}</Card_Desc>
            <More>MORE</More>
          </Card>
        ))}
      </Content>
    </Hero>
  );
};

export default Hero_4;

const Hero = styled.div`
  background: #f2b82d;
  height: 150vh;
  margin-top: 80px;
  position: relative;
  padding: 10px;
  @media (max-width: 1250px) {
    height: 250vh;
  }
  @media (max-width: 800px) {
    height: 290vh;
    margin-top: 350px;
  }
`;

const Img = styled.img`
  width: 70%;
  height: 60%;
  position: absolute;
  top: 80px;
  left: 100px;
  object-fit: cover;
  @media (max-width: 760px) {
    height: 40%;
    width: 90%;
    left: 5%;
    transform: translateX(-50%);
  } ;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  height: 350px;
  gap: 50px;
  z-index: 9999;
  position: absolute;
  top: 50%;
  left: 30%;
  @media (max-width: 1300px) {
    left: 25%;
  }
  @media (max-width: 1225px) {
    left: 20%;
  }
  @media (max-width: 1200px) {
    left: 15%;
    grid-template-columns: repeat(2, 250px);
  }
  @media (max-width: 800px) {
    top: 40%;
    left: 25%;
    grid-template-columns: 250px;
  }
  @media (max-width: 480px) {
    top: 40%;
    left: 15%;
  }
`;
const Card = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;
const Card_Img = styled.img`
  width: 100%;
  height: 25vh;
`;
const Card_Desc = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 30px 0;
`;
const More = styled.p`
  text-align: center;
  cursor: pointer;
  position: relative;
  :hover {
    color: #f2b82d;
    ::after {
      content: "";
      position: absolute;
      top: 5vh;
      left: 50%;
      transform: translateX(-50%);
      background: #f2b82d;
      height: 2px;
      width: 50px;
    }
  }
`;
