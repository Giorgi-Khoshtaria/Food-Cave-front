import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
// import { CardProps } from "../interface";
interface CardProps {
  meal: string;
  ingredients: string;
  price: string;
}

const MenuCards: React.FC<CardProps> = ({ meal, ingredients, price }) => {
  return (
    <Infos>
      <Information>
        <div>
          <h3>{meal}</h3>
          <Ingredients>{ingredients}</Ingredients>
        </div>
        <Price>{price}</Price>
      </Information>
    </Infos>
  );
};

export default MenuCards;

const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;
const Information = styled.div`
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed ${defaultTheme.colors.red};
  @media (max-width: 875px) {
    width: 450px;
  }
  @media (max-width: 500px) {
    width: 380px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
  h3 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: auto;
  }
`;
const Ingredients = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${defaultTheme.colors.blue};
  padding-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
`;
