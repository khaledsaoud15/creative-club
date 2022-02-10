import {
  Camera,
  EditOutlined,
  FlightOutlined,
  Telegram,
} from "@material-ui/icons";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styled from "styled-components";
import bg1 from "../images/rte-min.jpg";
import bg2 from "../images/rttr.png";

const Hero = styled.div`
  height: 100vh;
  background-image: url(${bg1}), url(${bg2});
  background-repeat: no-repeat no-repeat;
  background-size: 70% 70%, 50% 60%;
  background-position: 20% 20%, 70% 80%;
  position: relative;

  @media (max-width: 999px) {
    background-size: 60% 50%, 50% 50%;
    background-position: 20% 20%, 60% 45%;
  }
  @media (max-width: 480px) {
    background-size: 90% 40%, 80% 40%;
    background-position: 50% 20%, 50% 35%;
  }
`;
const Hero_Content = styled.div`
  position: absolute;
  top: 40%;
  right: 25%;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 150px);
    top: 35%;
  }
  @media (max-width: 480px) {
    top: 45%;
    left: 15%;
    transform: translateX(-15%);
    grid-template-columns: repeat(2, 130px);
  }
`;
const Hero_Card = styled.div`
  background: #fff;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
`;
const Card = styled.div`
  margin-bottom: 15px;
  padding: 20px;
  background: #f2b82d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Hero_Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 5px;
  @media (max-width: 999px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

const Hero_2 = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <Hero data-aos="fade-up">
      <Hero_Content data-aos="fade-right">
        <Hero_Card data-aos="fade-down">
          <Card>
            <Camera style={{ fontSize: "35px" }} />
          </Card>
          <Hero_Title>PHOTOGRAPHY</Hero_Title>
        </Hero_Card>
        <Hero_Card>
          <Card>
            <EditOutlined style={{ fontSize: "35px" }} />
          </Card>
          <Hero_Title>DESIGN IDEAS</Hero_Title>
        </Hero_Card>
        <Hero_Card>
          <Card>
            <FlightOutlined style={{ fontSize: "35px" }} />
          </Card>
          <Hero_Title>CREATIVE</Hero_Title>
        </Hero_Card>
        <Hero_Card>
          <Card>
            <Telegram style={{ fontSize: "35px" }} />
          </Card>
          <Hero_Title>MARKETING</Hero_Title>
        </Hero_Card>
      </Hero_Content>
    </Hero>
  );
};

export default Hero_2;
