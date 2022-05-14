import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CustShapeIntro = styled.div`
  ${Shape}
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const CustShapeFeature = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
`;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <CustShapeIntro />
      </Container>
      <Container>
        <Feature />
        <CustShapeFeature />
      </Container>
      <Container>
        <Service />
      </Container>
    </>
  );
}

export default App;
