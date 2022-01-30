import styled from "styled-components";
import header_img from "../images/16946873-67f0-476a-8de4-1ec125e4e033.jpg";

const Hero = styled.div`
  height: 100vh;
  background-image: url(${header_img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  object-fit: cover;
  position: relative;
  @media (max-width: 820px) {
    background-size: 100% 100vh;
  }
  @media (max-width: 567px) {
    background-size: 100% 100vh;
  }
`;

const Hero_Content = styled.h1`
  position: absolute;
  bottom: 0;
  right: 80px;
  width: 50%;
  font-size: 45px;
  padding: 60px 30px;
  background: #fff;
  @media (max-width: 820px) {
    bottom: 0%;
    font-size: 35px;
    right: 120px;
    width: 60%;
  }
  @media (max-width: 567px) {
    bottom: 0%;
    right: 10%;
    padding: 40px 25px;
    font-size: 25px;
  }
`;

const Hero_C2 = styled.div`
  height: 70vh;
  background: #e9e9e9;
  display: grid;
  grid-template-columns: 500px 600px;
  justify-content: center;
  @media (max-width: 820px) {
    grid-template-columns: 700px;
    height: 100%;
    padding: 30px 0;
  }
`;
const Hero_P1 = styled.div`
  margin-top: 90px;
  @media (max-width: 820px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
    width: 70%;
  }
  @media (max-width: 567px) {
    width: 60%;
  }
`;
const Hero_Title = styled.h1`
  font-size: 35px;
`;
const Hero_Desc = styled.p`
  font-size: 18px;
  margin-top: 10px;
  line-height: 40px;
  font-weight: 500;
`;
const Div = styled.div`
  width: 90px;
  height: 90px;
  background: #ce0606;
  border-radius: 50%;
  margin-top: 25px;
`;
const Hero_P2 = styled.div`
  margin-top: 90px;
  @media (max-width: 820px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: 25px;
    width: 70%;
  }
  @media (max-width: 567px) {
    width: 60%;
  }
`;
const Hero_Button = styled.button`
  border: none;
  outline: none;
  background: #ce0606;
  padding: 15px 25px;
  margin-top: 20px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background: #000;
  }
`;

const Hero_Header = () => {
  return (
    <>
      <Hero>
        <Hero_Content>
          My story is simple, I love to take photos. its my passion. my love. my
          life.
        </Hero_Content>
      </Hero>
      <Hero_C2>
        <Hero_P1>
          <Hero_Title>Lifestyle Photography</Hero_Title>
          <Hero_Desc>Ut enim ad minim</Hero_Desc>
          <Div></Div>
        </Hero_P1>
        <Hero_P2>
          <Hero_Desc>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Hero_Desc>
          <Hero_Button>READ MORE</Hero_Button>
        </Hero_P2>
      </Hero_C2>
    </>
  );
};

export default Hero_Header;
