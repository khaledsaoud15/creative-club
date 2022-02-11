import img from "../images/bg.jpg";
import styled from "styled-components";
import woman from "../images/-min.jpg";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero_8 = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  }, []);
  return (
    <Hero bg={img}>
      <Contact data-aos="zoom-out">
        <Header>Contact Us</Header>
        <Inputs>
          <Input type="text" placeholder="Enter your name" />
          <Input type="text" placeholder="Enter a valid email" />
          <Input type="text" placeholder="Enter your phone number" />
          <PlaceHolder rows="7" cols="50" />
          <SubmitButton type="submit" value="Submit" />
        </Inputs>
      </Contact>
      <Img src={woman} data-aos="fade-right" />
    </Hero>
  );
};

export default Hero_8;

const Hero = styled.div`
  background-image: url(${(props) => props.bg});
  display: flex;
  padding: 0 80px;
  align-items: center;
  gap: 10px;
  @media (max-width: 820px) {
    flex-direction: column;
    padding: 80px 40px 0 40px;
  }
`;
const Contact = styled.div`
  @media (max-width: 560px) {
    width: 100%;
  }
`;
const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 25px;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 20px 25px;
  margin: 10px 0;
  border: none;
  outline: none;
`;
const PlaceHolder = styled.textarea`
  border: none;
  outline: none;
`;
const SubmitButton = styled.input`
  margin-top: 25px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 25px;
  border: none;
  outline: none;
  background: #000000;
  color: #fff;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
`;
const Img = styled.img`
  width: 70%;
  @media (max-width: 820px) {
    width: 90%;
  }
`;
