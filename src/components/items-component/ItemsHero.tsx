import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import hero from "./../../assets/items/itemhero.png";
const ItemsHero = () => {
  return (
    <Container>
      <div>
        <h1>ITEMS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt
          ut labore et dolore magna.
        </p>
      </div>
    </Container>
  );
};
export default ItemsHero;
const Container = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
    margin-bottom: 10px;
  }
  p {
    max-width: 500px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.floralwhite};
  }
  @media (max-width: 768px) {
    padding: 0 50px;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
