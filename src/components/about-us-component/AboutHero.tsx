// import React from "react";
import styled from "styled-components";
import hero from "../../assets/about-us/about-hero.png";
import { defaultTheme } from "../../defaultTheme";

const AboutHero = () => {
  return (
    <Container>
      <div>
        <h1>About Us</h1>
        <p>Read our Story, How we started and about the Team</p>
      </div>
    </Container>
  );
};

export default AboutHero;
const Container = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
  @media (max-width: 768px) {
    padding: 0 50px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
