import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Price = () => {
  return (
    <Container>
      <PriceCard price="15" type="Basic" number={50} web={10} />
      <PriceCard price="30" type="Premium" number={100} web={30} />
      <PriceCard price="50" type="Advanced" number={150} web={50} />
    </Container>
  );
};

export default Price;
