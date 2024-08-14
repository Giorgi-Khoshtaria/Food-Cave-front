// import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import heroimg from "../../assets/mainpage/MainHero.png";
import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <RightParts>
          <p>Best In Town</p>
          <h2>
            ENJOY OUR CHICKEN <span>BURGER</span> FAST FOOD
          </h2>
          <OrderPart>
            <Link to="/items">Order Now</Link>
            <span>Price : $10.50</span>
          </OrderPart>
        </RightParts>
        <img src={heroimg} alt="heroimage" />
      </HeroWrapper>
    </HeroContainer>
  );
};
export default MainHero;

const HeroContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 25px;
  padding: 0 50px;
`;
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    flex-direction: column;
    img {
      position: absolute;
      top: 35%;
    }
  }
  @media (max-width: 550px) {
    img {
      width: 350px;
      position: absolute;
      top: 32%;
    }
    @media (max-width: 450px) {
      img {
        top: 32%;
      }
      @media (max-width: 390px) {
      }
    }
  }
`;

const RightParts = styled.div`
  margin-right: 150px;
  @media (max-width: 1500px) {
    margin-right: 0;
  }

  p {
    font-size: 20px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 11px;
    @media (max-width: 550px) {
      font-size: 18px;
    }
  }
  h2 {
    max-width: 500px;
    font-size: 50px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    span {
      color: ${defaultTheme.colors.red};
    }
    @media (max-width: 550px) {
      max-width: 500px;
      font-size: 34px;
    }
  }
`;
const OrderPart = styled.div`
  margin-top: 60px;
  transform: translateX(150px);

  @media (max-width: 1500px) {
    transform: translateX(0);
  }
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    transform: translateY(-50px);
  }
  a {
    border: 0;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 10px 16px;
    color: ${defaultTheme.colors.floralwhite};
    background-color: ${defaultTheme.colors.red};
    border-radius: 10px;
    margin-right: 30px;
    text-decoration: none;
    @media (max-width: 550px) {
      font-size: 26px;
    }
    @media (max-width: 450px) {
      font-size: 24px;
    }
  }
  span {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    @media (max-width: 550px) {
      font-size: 22px;
    }
    @media (max-width: 450px) {
      margin-left: -40px;
    }
  }
  @media (max-width: 1500px) {
    margin-top: 250px;
  }
`;
