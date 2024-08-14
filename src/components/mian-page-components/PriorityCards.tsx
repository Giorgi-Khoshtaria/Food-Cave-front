import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { Link } from "react-router-dom";
interface PriorityCardsprops {
  img: string;
  title: string;
  number: string;
}

const PriorityCards: React.FC<PriorityCardsprops> = ({ img, number, title }) => {
  return (
    <CardsContainer>
      <ImageDiv>
        <img src={img} alt="priority1" />
        <p>{number}</p>
      </ImageDiv>
      <h2>{title}</h2>
      <CardText>
        Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire.
      </CardText>

      <Link to="/about">Read More</Link>
    </CardsContainer>
  );
};
export default PriorityCards;
const CardText = styled.p`
  width: 350px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${defaultTheme.colors.blue};
  margin-bottom: 51px;
  @media (max-width: 450px) {
    width: 300px;
  }
`;
const ImageDiv = styled.div`
  position: relative;

  img {
    position: relative;

    z-index: 10;
  }
  p {
    position: absolute;
    top: -21px;
    right: -82px;
    padding: 30px 40px 29px 39px;
    background-color: ${defaultTheme.colors.red};
    border-radius: 100%;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    z-index: 1;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px 29px 18px 29px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-top: 40px;
    margin-bottom: 20px;
  }
  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    border: 0;
    border-radius: 10px;
    padding: 11px 19px;
    color: ${defaultTheme.colors.floralwhite};
    background-color: ${defaultTheme.colors.red};
    transform: translateX(100px);
    @media (max-width: 450px) {
      transform: translateX(50px);
    }
  }
  &:hover {
    background-color: ${defaultTheme.colors.red};
    h2 {
      color: ${defaultTheme.colors.floralwhite};
    }
    a {
      color: ${defaultTheme.colors.red};
      background-color: ${defaultTheme.colors.floralwhite};
    }
    ${CardText} {
      color: ${defaultTheme.colors.floralwhite};
    }
  }
  ${ImageDiv} p {
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.red};
  }
`;
