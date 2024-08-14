import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import hero from "./../../assets/items/itemhero.png";
const CartHero = () => {
  return (
    <Container>
      <div>
        <h1>My Cart</h1>
      </div>
    </Container>
  );
};
export default CartHero;
const Container = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

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

  @media (max-width: 768px) {
    padding: 0 50px;
    h1 {
      font-size: 30px;
    }
  }
`;
