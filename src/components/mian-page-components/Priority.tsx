// import React from "react";
import styled from "styled-components";
import priority1 from "../../assets/mainpage/priprity1.png";
import priority2 from "../../assets/mainpage/priority2.png";
import priority3 from "../../assets/mainpage/priority3.png";
import { defaultTheme } from "../../defaultTheme";
import PriorityCards from "./PriorityCards";

const Priority = () => {
  return (
    <Container>
      <h1>Why We are the best</h1>
      <Wrapper>
        <PriorityCards img={priority1} number={"1"} title={"Passionate Chefs"} />
        <PriorityCards img={priority2} number={"2"} title={"100 % Fresh Foods"} />
        <PriorityCards img={priority3} number={"3"} title={"Memorable Ambience"} />
      </Wrapper>
    </Container>
  );
};
export default Priority;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 85px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
  h1 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 33px;
  @media (max-width: 1300px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
