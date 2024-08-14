import { Link } from "react-router-dom";
import chefimg from "../../assets/about-us/chef.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const Chef = () => {
  return (
    <ChefContainer>
      <div>
        <h2>TASTY AND CRUNCHY</h2>
        <h1>Our Chef</h1>
        <p>
          Welcome to our culinary haven, where flavors dance and aromas enchant. Our Chef pours
          heart and soul into every dish, crafting experiences that tantalize the taste buds and
          ignite the senses. Explore a world of culinary delights, where each bite tells a story of
          passion and creativity.
        </p>

        <LinkDiv>
          <Link to="/items">VIEW OUR ALL MANU</Link>
        </LinkDiv>
      </div>
      <img src={chefimg} alt="chefimg" />
    </ChefContainer>
  );
};

export default Chef;

const ChefContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 100px;
  margin-top: 30px;
  background-color: ${defaultTheme.colors.lightred};
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 795px) {
    padding: 15px 50px;
  }

  h2 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
  }
  p {
    max-width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 32px;
  }
`;
const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  transform: translateX(280px);

  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    padding: 15px 29px;
    border-radius: 20px;
  }
  @media (max-width: 1050px) {
    transform: translateX(150px);
  }
  @media (max-width: 900px) {
    transform: translateX(0px);
  }
`;
