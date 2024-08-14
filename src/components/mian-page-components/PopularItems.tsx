// import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import dish1 from "../../assets/mainpage/dish1.png";
import dish2 from "../../assets/mainpage/dish2.png";
import dish3 from "../../assets/mainpage/dish3.png";
import dish4 from "../../assets/mainpage/dish4.png";
import dish5 from "../../assets/mainpage/dish5.png";

const PopularIntems = () => {
  return (
    <div>
      <Container>
        <p>Food Items</p>
        <h2>Popular Dishes</h2>
        <div>
          <ImageContainer>
            <img src={dish1} alt="dish1" />
            <img src={dish2} alt="dish2" />
            <img src={dish3} alt="dish3" />
            <img src={dish4} alt="dish4" />
            <img src={dish5} alt="dish5" />
          </ImageContainer>
        </div>
      </Container>
    </div>
  );
};
export default PopularIntems;

const Container = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  h2 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-top: 5px;
  }
`;

// const ImgWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 25px;
  margin-top: 25px;
  @media (max-width: 1400px) {
    justify-content: center;
    column-gap: 30px;
    row-gap: 25px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    img {
      width: 350px;
    }
  }
  @media (max-width: 450px) {
    flex-direction: column;
    img {
      width: 300px;
    }
  }
`;
