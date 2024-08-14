// import React from "react";
import Blog from "../../assets/about-us/blog.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
const AboutBlog = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <img src={Blog} alt="blog" />
        <Info>
          <h2>
            Welcome to our restaurant, where the "ocean's bounty" awaits you! Dive into our
            exquisite selection of Opaleye Yellowtail Snapper, Velvet Catfish, Graveldiver Banded
            Killifish, Old World Rivuline, Catalufa Eagle Ray, and Moorish Idol. Savor the delicate
            flavors of Herring, Smelt, Barbeled Dragonfish, and Tommy Ruff.
          </h2>
          <p>
            Indulge in the royalty of seafood with Queen Danio, Velvet Catfish, Sacramento
            Blackfish, Bullhead Shark, Colorado Squawfish, Russian Sturgeon, Clown Triggerfish,
            Swamp-Eel, and Paradise Fish. Experience the richness of Hake, Cookie-Cutter Shark,
            Silver Carp, Hawkfish, Snipe Eel, Armorhead Catfish, Moray Eel, and Silverside.
          </p>
          <p>
            For those seeking unique tastes, we offer Bluegill, Toadfish, and Orangespine Unicorn
            Fish. And don't forget to try our signature dish, Manta Ray, paired perfectly with
            Moorish Idol.
          </p>
          <p>Come join us and embark on a culinary journey through the depths of the sea!</p>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default AboutBlog;

const Container = styled.div`
  margin-top: 30px;
  padding: 0 100px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 40px;
    text-align: justify;
    @media (max-width: 1100px) {
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    text-align: justify;
    margin-bottom: 10px;
  }
  img {
    @media (max-width: 650px) {
      width: 400px;
    }
    @media (max-width: 500px) {
      width: 300px;
    }
    @media (max-width: 450px) {
      width: 200px;
    }
  }

  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 45px 64px;
  border: 3px solid ${defaultTheme.colors.red};
  border-radius: 20px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 25px 34px;
  }
`;
const Info = styled.div`
  max-width: 600px;
`;
