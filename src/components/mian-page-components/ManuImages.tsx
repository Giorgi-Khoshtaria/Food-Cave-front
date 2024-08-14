import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { Link } from "react-router-dom";

interface ManuImagesProps {
  img: string;
}

const ManuImages: React.FC<ManuImagesProps> = ({ img }) => {
  return (
    <ImageContainer>
      <Wrapper>
        <img src={img} alt="poster" />
        <Link to={"/items"}>
          VIEW ALL MENU
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            {/* ... (your SVG path) */}
          </svg>
        </Link>
      </Wrapper>
    </ImageContainer>
  );
};

export default ManuImages;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 489px;
    height: 620px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    padding: 7px 0;
    width: 100%;
    svg {
      margin-left: 30px;
    }
  }
`;
