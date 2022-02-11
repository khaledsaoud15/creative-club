import { Facebook, Instagram, Pinterest, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Icon>
        <Instagram style={{ fontSize: "2rem" }} />
      </Icon>
      <Icon>
        <Facebook style={{ fontSize: "2rem" }} />
      </Icon>
      <Icon>
        <YouTube style={{ fontSize: "2rem" }} />
      </Icon>
      <Icon>
        <Pinterest style={{ fontSize: "2rem" }} />
      </Icon>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;
const Icon = styled.div`
  margin: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  background: #f2b82d;
  :hover {
    color: #000;
    cursor: pointer;
  }
  @media (max-width: 560px) {
    margin: 0 5px;
  }
`;
