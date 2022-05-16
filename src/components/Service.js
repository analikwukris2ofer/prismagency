import React, { useState } from "react";
import styled from "styled-components";
import who from "../img/who.png";
import play from "../img/play.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 0.5;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 0.5;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Button = styled.button`
  width: 150px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 10px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 480px) {
    margin-top: 20px;
    width: 100px;
    font-size: 10px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Left>
          <Image open={open} src={who} />
          <Video open={open} autoPlay loop controls src="https://" />
        </Left>
        <Right>
          <Wrapper>
            <Title>Simple process to start</Title>
            <Desc>
              We provide digital experiences. Experiences that are sure to get
              you the required attention in your market niche. We are quite
              experienced at what we do. Given the brands we have worked with
              over the years, it is clear that we deliver what we promise.
            </Desc>
            <CardContainer>
              <MiniCard />
              <MiniCard />
              <MiniCard />
            </CardContainer>
            {/* <Button onClick={() => setOpen(true)}> */}
            <Button>
              <Icon src={play} />
              Start Trial
            </Button>
          </Wrapper>
        </Right>
        {smallScreen && open && (
          <Modal>
            <Video open={open} autoPlay loop controls src="https://" />
            <CloseButton onClick={() => setOpen(false)}>close</CloseButton>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Service;
