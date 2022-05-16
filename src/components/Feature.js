import React from "react";
import styled from "styled-components";
import phone from "../img/phone.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
  // padding: 30px;
`;
const Left = styled.div`
  flex: 0.5;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 130px;
  border: none;
  padding: 10px 15px;
  background-color: darkblue;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title>
          <b>good</b> design <br />
          <b>good</b> business
        </Title>
        <SubTitle>We Know that good design means good business</SubTitle>
        <Desc>
          We help clients succeed by creating life long experiences. Our designs
          communicate clearly the ideals and vision of your business and look
          fantastic at the same time.
        </Desc>
        <Desc>
          We truly care about your business and our previous clients can testify
          that we are excellent at what we do
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
