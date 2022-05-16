import React from "react";
import styled from "styled-components";
import man from "../img/man.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);

  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;
const Right = styled.div`
  flex: 0.4;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;
export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Media agency with a difference</Title>
        <Desc>
          Designing brilliant products is our lifestyle. We have converted
          consistent beautiful art to become a part of the creative work we do.
        </Desc>
        <Info>
          <Button>START A DEMO</Button>
          <Contact>
            <Phone>Call Us (49) 178135 - 2566</Phone>
            <ContactText>You can reach out to us</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={man} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
