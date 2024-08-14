import watch from "../assets/footer/watch.svg";
import phone from "../assets/footer/phone.svg";
import styled from "styled-components";
import { defaultTheme } from "../defaultTheme";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <h1>Our Branch</h1>
      <Information>
        <Cards>
          <h2>Robert Food</h2>
          <p>1986 Hilltop DriveBorger, TX 79007</p>
          <Contact>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <a href="tel:+880 1630 225 015">+880 1630 225 015</a>
            </div>
          </Contact>
          <Link to="/contact">Click to View Google Map</Link>
        </Cards>
        <Cards>
          <h2>Mark A. Reed Food</h2>
          <p>4877 Rose AvenueNew Orleans, LA 70112</p>
          <Contact>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <a href="tel:+880 1630 225 015">+880 1630 225 015</a>
            </div>
          </Contact>
          <Link to="/contact">Click to View Google Map</Link>
        </Cards>
        <Cards>
          <h2>Mark A. Reed Food</h2>
          <p>1509 Peaceful LaneCleveland, OH 44115</p>
          <Contact>
            <div>
              <img src={watch} alt="watch" />
              <span>7.30 AM - 9.30 PM</span>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <a href="tel:+880 1630 225 015">+880 1630 225 015</a>
            </div>
          </Contact>
          <Link to="/contact">Click to View Google Map</Link>
        </Cards>
      </Information>
      <CopyDiv>
        <CopyRight>Copyright © 2022 | Khoshtaria Giorgi</CopyRight>
      </CopyDiv>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 35px;
  }
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 37px 100px 17px 100px;
  background-color: ${defaultTheme.colors.red};
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
  }
`;

const Cards = styled.div`
  text-align: center;
  h2 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    margin-bottom: 13px;
  }
  P {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    margin-bottom: 15px;
  }
  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    color: ${defaultTheme.colors.green};
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    span {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: ${defaultTheme.colors.floralwhite};
      margin-left: 15px;
    }
  }
`;
const CopyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 45px 100px 32px 100px;
  width: 100%;
  background-color: ${defaultTheme.colors.blue};
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;
const CopyRight = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: ${defaultTheme.colors.floralwhite};
`;
