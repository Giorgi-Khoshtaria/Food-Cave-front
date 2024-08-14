// import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import offer1 from "../../assets/mainpage/offer1.png";
import offer2 from "../../assets/mainpage/offer2.png";
import offer3 from "../../assets/mainpage/offer3.png";

const Offers = () => {
  return (
    <OfferContainer>
      <Wrapper>
        <h1>Bigg Offer</h1>
        <p>For in this week, take your food, buy your best one.</p>
        <ImgDiv>
          <img src={offer1} alt="offer1" />
          <img src={offer2} alt="offer2" />
          <img src={offer3} alt="offer3" />
        </ImgDiv>
      </Wrapper>
    </OfferContainer>
  );
};
export default Offers;

const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  margin-bottom: 50px;
  overflow: hidden;
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 50px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 15px;
  }
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 24px;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      width: 100%;
      max-width: 500px; /* Adjust the max-width as needed */
    }
  }
  @media (max-width: 550px) {
    img {
      width: 100%;
      max-width: 400px; /* Adjust the max-width as needed */
    }
  }
  @media (max-width: 450px) {
    img {
      width: 100%;
      max-width: 300px; /* Adjust the max-width as needed */
    }
  }

  img {
    width: 560px;
    height: 200px;
  }
`;
