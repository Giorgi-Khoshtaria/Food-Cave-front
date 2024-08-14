import story from "../../assets/about-us/image_ourStory_.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const OurStory = () => {
  return (
    <StoryContainer>
      <h1>OUR STORY</h1>
      <Wrapper>
        <p>
          In a coastal town lived Captain Finn, a seafarer with a passion for seafood. He opened
          "The Ocean's Bounty," a restaurant showcasing the treasures of the sea. From Opaleye
          Yellowtail Snapper to Moorish Idols, every dish told a story of adventure. Diners flocked
          to taste Queen Danio, Bullhead Sharks, and more, enchanted by Captain Finn's tales of the
          deep. "The Ocean's Bounty" became a sanctuary for those seeking culinary and maritime
          escapades, leaving a legacy of oceanic wonder for generations to come.
        </p>
        <img src={story} alt="story" />
      </Wrapper>
    </StoryContainer>
  );
};
export default OurStory;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 70px;
  padding: 0 100px;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  P {
    max-width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    img {
      width: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 300px;
    }
  }
`;
