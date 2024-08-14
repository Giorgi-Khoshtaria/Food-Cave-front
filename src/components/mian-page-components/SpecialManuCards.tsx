import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
// import { SpecialManuCardsProps } from "../interface";

interface SpecialManuCardsProps {
  img: string;
  text: string;
}

const SpecialManucards: React.FC<SpecialManuCardsProps> = ({ img, text }) => {
  return (
    <CardsContainer>
      <CardsContent>
        <img src={img} alt="img" />
        <p>{text}</p>
      </CardsContent>
    </CardsContainer>
  );
};

export default SpecialManucards;

const CardsContainer = styled.div`
  margin-top: 31px;

  padding: 10px 5px 5px 5px;
  &:hover {
    background-color: ${defaultTheme.colors.red};
    border-radius: 20px;
    p {
      color: ${defaultTheme.colors.floralwhite};
    }
  }

  p {
    width: 170px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  img {
    border-radius: 10px;
  }
`;

const CardsContent = styled.div``;
