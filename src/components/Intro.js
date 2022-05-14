import React from "react";
import styled from "styled-components";
import man from "../img/man.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);

  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
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
            <Phone>Call Us (013) 346 - 7564</Phone>
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
