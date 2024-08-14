import restorantimg1 from "../../assets/mainpage/Ourrestorant1.png";
import restorantimg2 from "../../assets/mainpage/Ourrestorant2.png";
import restorantimg3 from "../../assets/mainpage/Ourrestorant3.png";
// import arrow from "../../assets/mainpage/arrow.svg";
import restorantIcon1 from "../../assets/mainpage/OurrestorantIcon1.png";
import restorantIcon2 from "../../assets/mainpage/OurrestorantIcon-2.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { Link } from "react-router-dom";

const OurRestorant = () => {
  return (
    <Container>
      <MainTitle>OUR RESTAURANT</MainTitle>
      <RestorantWrapper>
        <div>
          <ImagesDiv>
            <img src={restorantimg1} alt="resimg 1" />
            <img src={restorantimg2} alt="restorant 2" />
          </ImagesDiv>
          <MainImg src={restorantimg3} alt=" restorant 3" />
        </div>
        <RestorantInfo>
          <h2>For every specialoccasion there’s heritaste</h2>
          <p>
            Indignation and dislike men who are so beguiled demoralized by the charms of pleasure of
            the moment. Success Story.
          </p>
          <Information>
            <RestorantContent>
              <div>
                <InfoImg src={restorantIcon1} alt="icon" />
              </div>

              <div>
                <h3>Success Story</h3>
                <p>
                  Certain circumstances and owing to the claims of duty obligations of business it
                  will frequently.
                </p>
                <Link to="/about">Read More</Link>
              </div>
            </RestorantContent>

            <RestorantContent>
              <div>
                <InfoImg src={restorantIcon2} alt="icon" />
              </div>

              <div>
                <h3>Passionate Chefs</h3>
                <p>
                  Duty or the obligations of business it frequently occur pleasures have to be
                  repudiated.
                </p>
                <Link to="/about">Read More</Link>
              </div>
            </RestorantContent>
          </Information>
        </RestorantInfo>
      </RestorantWrapper>
    </Container>
  );
};

export default OurRestorant;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 98px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
  margin-bottom: 15px;
`;
const RestorantWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const RestorantInfo = styled.div`
  h2 {
    width: 409px;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 16px;
    @media (max-width: 500px) {
      font-size: 30px;
    }
    @media (max-width: 450px) {
      width: 300px;
      font-size: 26px;
    }
  }
  p {
    max-width: 679px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    @media (max-width: 500px) {
      font-size: 16px;
    }
    /* margin-bottom: 49px; */
  }
`;
const Information = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 20px;
  margin-top: 49px;
`;
const ImagesDiv = styled.div`
  @media (max-width: 500px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 300px;
    }
  }
`;
const MainImg = styled.img`
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`;
const RestorantContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  h3 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    margin-bottom: 10px;
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  p {
    max-width: 563px;
    margin-bottom: 10px;
    @media (max-width: 450px) {
      max-width: 300px;
    }
  }

  a {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 6px 12px;
    border-radius: 25px;
    color: ${defaultTheme.colors.red};
    text-align: center;
    margin-top: 8px;
    text-decoration: none;
    &:hover {
      background-color: ${defaultTheme.colors.red};
      color: ${defaultTheme.colors.floralwhite};
    }
  }
`;
const InfoImg = styled.img`
  padding: 25px;
  /* width: 50px;
  height: 50px; */
  border: 2px solid ${defaultTheme.colors.red};
  border-radius: 50%;
  margin-right: 20px;
`;
// const Button = styled.a``;
