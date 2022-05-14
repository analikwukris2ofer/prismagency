import React from "react";
import styled from "styled-components";
import phone from "../img/phone.jpg";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  // padding: 30px;
`;
const Left = styled.div`
  flex: 0.5;
`;
const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
`;

const Title = styled.span`
  font-size: 50px;
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
