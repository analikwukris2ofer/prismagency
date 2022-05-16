import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { Intro } from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
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

const CustShapeService = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
  background-color: #4e6bff;
`;

const CustShapePrice = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
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
        {!smallScreen && <CustShapeService />}
      </Container>
      <Container>
        <Price />
        <CustShapePrice />
      </Container>

      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
