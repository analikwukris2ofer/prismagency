import React from "react";
import styled from "styled-components";
import who from "../img/who.jpg";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 0.5;
`;

const Image = styled.img`
  width: 100%;
`;
const Right = styled.div`
  flex: 0.5;
`;

const Service = () => {
  return (
    <>
      <Container>
        <Left>
          <Image src={who} />
        </Left>
        <Right></Right>
      </Container>
    </>
  );
};

export default Service;
