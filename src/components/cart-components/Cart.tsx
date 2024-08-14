import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { defaultTheme } from "../../defaultTheme";
import { useCart } from "./CartContext";
import { useAuth } from "../login-signup-components/AuthContext";
import { useNavigate } from "react-router-dom";
const Cart: React.FC = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setCardNumber("");
    setDistrict("");
    setStreet("");
  };

  let total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !cardNumber || !district || !street) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (isAuthenticated == false) {
      toast.error("Please Login First");
      navigate("/Login-SignUp");
      return;
    }
    toast.success("Order placed successfully!");
    toast.success(`$${total.toFixed(2)} deducted from your card.`);

    resetForm();
    clearCart();
    // Reset total
    total = 0.0;
  };

  return (
    <div>
      <ToastContainer />
      <Container>
        <table>
          <Headers>
            <th>Product</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </Headers>

          {cartItems.map((item) => (
            <Content key={item.id}>
              <Image>
                <img src={`../../../uploads/${item.mainImage}`} alt="" />
              </Image>
              <Title>{item.name}</Title>
              <Price>${item.price}</Price>
              <FlexDiv>
                <span onClick={() => increaseQuantity(item.id)}>+</span> {/* Pass item ID */}
                <span>{item.quantity}</span>
                <span onClick={() => decreaseQuantity(item.id)}>-</span> {/* Pass item ID */}
              </FlexDiv>
              <Total>${(item.price * item.quantity).toFixed(2)}</Total>
              <Action>
                {" "}
                <button onClick={() => removeFromCart(item.id)}>X</button>
              </Action>
            </Content>
          ))}
        </table>
        <PaymentConatiner onSubmit={handleSubmit}>
          <Wrapper>
            <Parts>
              <h1>Card Details</h1>
              <div>
                <p>Email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p> Card Number</p>
                <input
                  type="number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
            </Parts>
            <Parts>
              <h1>Address</h1>
              <div>
                <p>District</p>
                <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
              </div>
              <div>
                <p>Street</p>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
              </div>
              <TotalContent>
                <p>Total:</p>
                <h2>{total.toFixed(2)}</h2>
              </TotalContent>
              <div></div>
            </Parts>
          </Wrapper>
          <Submit type="submit">Submit</Submit>
        </PaymentConatiner>
      </Container>
    </div>
  );
};

export default Cart;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 0 10px;
    flex-direction: column;
  }
  table {
    @media (max-width: 720px) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

const Headers = styled.tr`
  background-color: ${defaultTheme.colors.red};

  th {
    width: 250px;
    font-size: 25px;
    font-weight: 400;
    line-height: 29.3px;
    padding: 20px 30px;
    color: ${defaultTheme.colors.floralwhite};
    text-align: center;

    @media (max-width: 1100px) {
      font-size: 20px;
    }
    @media (max-width: 900px) {
      padding: 20px 20px;
    }
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

const Content = styled.tr`
  border-bottom: 2px solid ${defaultTheme.colors.red};
  text-align: center;
  vertical-align: middle;
  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

    margin-top: 15px;
  }
`;
const Image = styled.td`
  /* width: 100%; */
  img {
    width: 150px;
    height: 80px;
    object-fit: cover;
    @media (max-width: 1010px) {
      width: 100px;
      height: 50px;
    }
    @media (max-width: 720px) {
      width: 450px;
      height: 200px;
    }
    @media (max-width: 490px) {
      width: 300px;
      height: 150px;
    }
  }

  /* margin-left: 0px; */
`;
const Title = styled.td`
  width: 189px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  color: ${defaultTheme.colors.blue};

  @media (max-width: 1100px) {
    width: 100px;
    font-size: 16px;
  }
  @media (max-width: 720px) {
    width: 400px;
    margin: 8px 0;
  }
  @media (max-width: 490px) {
    width: 300px;
  }

  /* margin-left: -15px; */
`;
const Price = styled.td`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: ${defaultTheme.colors.blue};
  text-align: center;

  /* margin-left: 20px; */
  @media (max-width: 1100px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
  }
`;

const FlexDiv = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: 720px) {
    margin: 8px 0;
  }
  span:first-child,
  :last-child {
    border: 0;
    border: 1px solid ${defaultTheme.colors.red};
    margin: 0 30px;
    cursor: pointer;
    padding: 5px;
    @media (max-width: 1050px) {
      padding: 0 15px;
    }
  }
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;

    color: ${defaultTheme.colors.blue};
    @media (max-width: 1100px) {
      font-size: 16px;
    }
  }
`;
const Total = styled.td`
  font-size: 20px;
  font-weight: 700;
  line-height: 23.44px;
  text-align: center;
  color: ${defaultTheme.colors.blue};
  text-align: center;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 600px) {
  }
  /* margin-left: -90px; */
`;
const Action = styled.td`
  /* transform: translateY(-30px); */

  button {
    border: 0;
    background-color: ${defaultTheme.colors.white};
    font-size: 20px;
    font-weight: 700;
    line-height: 23.44px;
    text-align: center;
    color: ${defaultTheme.colors.red};
    text-align: center;

    cursor: pointer;
    @media (max-width: 1100px) {
      font-size: 16px;
    }
    @media (max-width: 720px) {
      margin: 8px 0;
    }
    @media (max-width: 600px) {
    }
  }
`;
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
  cursor: pointer;
`;
const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;
