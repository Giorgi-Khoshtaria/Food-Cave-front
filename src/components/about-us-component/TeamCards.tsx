import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faSquareFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

interface TeamCardsProps {
  img: string;
  title: string;
  description: string;
}
const TeamCards: React.FC<TeamCardsProps> = ({ img, title, description }) => {
  return (
    <div>
      <Information>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={img} alt="" />
        </div>
      </Information>
      <Icons>
        <a href="https://twitter.com/?lang=en">
          {" "}
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
        </a>
      </Icons>
    </div>
  );
};

export default TeamCards;
const Information = styled.div`
  position: relative;
  margin-top: 113px;
  padding: 163px 70px 50px 55px;
  border-radius: 50%;
  border: 3px solid ${defaultTheme.colors.red};
  @media (max-width: 450px) {
    padding-bottom: 55px;
  }
  h2 {
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    width: 261px;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    @media (max-width: 450px) {
      width: 200px;
    }
  }
  img {
    position: absolute;
    top: -70px;
    right: 10px;
  }
  &:hover {
    h2 {
      color: ${defaultTheme.colors.red};
    }
    p {
      color: ${defaultTheme.colors.red};
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 42px;

  svg {
    color: ${defaultTheme.colors.red}; // Set the color for all icons
  }
`;
