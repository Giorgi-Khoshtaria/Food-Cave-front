import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const Payment = () => {
  return (
    <PaymentConatiner>
      <Wrapper>
        <Parts>
          <h1>Card Details</h1>
          <div>
            <p>Email</p>
            <input type="email" />
          </div>
          <div>
            <p> Card Number</p>
            <input type="number" name="" id="" />
          </div>
        </Parts>
        <Parts>
          <h1>Address</h1>
          <div>
            <p>District</p>
            <input type="text" />
          </div>
          <div>
            <p>Street</p>
            <input type="text" />
          </div>
          <TotalContent>
            <p>Total:</p>
            <h2>122222222</h2>
          </TotalContent>
          <div></div>
        </Parts>
      </Wrapper>
      <Submit>Submit</Submit>
    </PaymentConatiner>
  );
};

export default Payment;

const PaymentConatiner = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 50px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Parts = styled.div`
  h1 {
    font-size: 35px;
    font-weight: 300px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 7px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
  }
  h2 {
    font-size: 20px;
    font-weight: 300px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 7px;
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29px;
    padding-left: 15px;
    border: 2px solid ${defaultTheme.colors.red};
    border-radius: 10px;
    background-color: ${defaultTheme.colors.floralwhite};
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
    /* Remove spinners for number inputs */
    -moz-appearance: textfield;
    appearance: textfield;

    /* Webkit browsers like Chrome and Safari */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      outline: none;
    }
  }
`;
const Submit = styled.button`
  font-size: 25px;
  color: ${defaultTheme.colors.floralwhite};
  padding: 10px 50px;
  border: 0;
  border-radius: 20px;
  background-color: ${defaultTheme.colors.red};
  margin-top: 20px;
`;
const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;
