import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

interface Props {
  title: string;
  ingredients: string;
  price: number;
  mainimage: string;
  courseType: string;
}

const ItemsCard: React.FC<Props> = ({ title, ingredients, price, mainimage, courseType }) => {
  // Provide a default image URL if image is falsy

  return (
    <ItemContainer>
      <div>
        <Title>{title}</Title>
        <Ingredients>{ingredients}</Ingredients>
        <Type>
          <span>Type of Course:</span> {courseType}
        </Type>
        <Price>From ${price}</Price>
      </div>
      <div>
        <ItemImage src={`../../../uploads/${mainimage}`} alt={title} />
      </div>
    </ItemContainer>
  );
};

export default ItemsCard;

const ItemContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0px 1px 4px 3px #00000040;
  border-radius: 20px;
  padding: 10px;
  @media (max-width: 550px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 330px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${defaultTheme.colors.blue};
`;

const Ingredients = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${defaultTheme.colors.blue};
  margin-top: 10px;
  margin-bottom: 7px;
`;

const Type = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: ${defaultTheme.colors.blue};
  margin-bottom: 6px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${defaultTheme.colors.blue};
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  margin-left: 5px;
  background-image: url(${(props) => props.src});
  object-fit: contain;
`;
