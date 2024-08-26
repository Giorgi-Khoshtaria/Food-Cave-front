import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { defaultTheme } from "../../defaultTheme";
import { useCart } from "../cart-components/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Item {
  _id: string;
  name: string;
  ingredients: string;
  price: number;
  mainImage: string; // Base64 or URL
  secondaryImage: string; // Base64 or URL
  tertiaryImage: string; // Base64 or URL
  descriptions: string;
  quantity: number;
}

const ItemsDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Accessing the item ID from the URL
  const [item, setItem] = useState<Item | null>(null);
  const { addToCart, cartItems } = useCart();
  const [quantity] = useState(1);
  axios.defaults.withCredentials = true;
  const url = import.meta.env.VITE_API_URL;
  // console.log(url);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get<Item>(`${url}/get-item/${id}`);
        setItem({ ...response.data, quantity: quantity });
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();

    // Cleanup function to clear item details when unmounting
    return () => setItem(null);
  }, [id, quantity]); // Fetch item details whenever ID or quantity changes

  if (!item) {
    return <div>Loading...</div>; // Placeholder while loading item details
  }

  const handleOrder = () => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item._id);

    // If the item is not in the cart, add it
    if (!isItemInCart) {
      const cartItem = {
        id: item._id, // Assuming _id is the unique identifier for the item
        name: item.name,
        ingredients: item.ingredients,
        price: item.price,
        descriptions: item.descriptions,
        mainImage: item.mainImage,
        secondaryImage: item.secondaryImage,
        tertiaryImage: item.tertiaryImage,
        quantity: item.quantity,
      };
      addToCart(cartItem);
      toast.success("Item successfully added to cart");
    } else {
      // Optionally, you can display a message to the user indicating that the item is already in the cart
      toast.error("This item is already in your cart.");
    }
  };

  // Helper function to check if image data is base64
  const isBase64 = (str: string) => /^data:image\/\w+;base64,/.test(str);

  return (
    <div>
      <ToastContainer />
      <Container>
        <div>
          {/* Main image */}
          {isBase64(item.mainImage) ? (
            <MainImage src={item.mainImage} alt="Main" />
          ) : (
            <MainImage src={`/uploads/${item.mainImage}`} alt="Main" />
          )}

          <ImagesDiv>
            {/* Secondary image */}
            {isBase64(item.secondaryImage) ? (
              <Second_Third src={item.secondaryImage} alt="Secondary" />
            ) : (
              <Second_Third
                src={`/uploads/${item.secondaryImage}`}
                alt="Secondary"
              />
            )}
            {/* Tertiary image */}
            {isBase64(item.tertiaryImage) ? (
              <Second_Third src={item.tertiaryImage} alt="Tertiary" />
            ) : (
              <Second_Third
                src={`/uploads/${item.tertiaryImage}`}
                alt="Tertiary"
              />
            )}
          </ImagesDiv>
        </div>
        <ItemContent>
          {/* Name */}
          <h3>Name of the Dish:</h3>
          <p>{item.name}</p>
          {/* Ingredients */}
          <h3>Ingredients of the Dish:</h3>
          <p>{item.ingredients}</p>
          {/* Price */}
          <h3>Price of the Dish:</h3>
          <p>From ${item.price}</p>
          <h3>Description of the Dish:</h3>
          {/* Description */}
          <p>{item.descriptions}</p>
          <div onClick={handleOrder}>
            <button>Order Now</button>
          </div>
        </ItemContent>
      </Container>
    </div>
  );
};

export default ItemsDetails;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: top;
  justify-content: space-evenly;
  padding: 8px 30px;
  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

const ImagesDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MainImage = styled.img`
  width: 580px;
  height: 330px;
  border-radius: 10px;
  @media (max-width: 1250px) {
    width: 380px;
  }
  @media (max-width: 1000px) {
    width: 580px;
  }
  @media (max-width: 750px) {
    width: 420px;
  }
  @media (max-width: 550px) {
    width: 320px;
  }
`;

const Second_Third = styled.img`
  width: 280px;
  height: 200px;
  border-radius: 20px;
  @media (max-width: 1250px) {
    width: 180px;
  }
  @media (max-width: 1000px) {
    width: 280px;
  }
  @media (max-width: 750px) {
    width: 200px;
  }
  @media (max-width: 550px) {
    width: 150px;
  }
`;

const ItemContent = styled.div`
  margin-bottom: 20px;
  h3 {
    font-size: 24px;
    color: ${defaultTheme.colors.red};
    margin-bottom: 6px;
  }
  p {
    width: 550px;
    font-size: 18px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
    @media (max-width: 1250px) {
      width: 500px;
    }
    @media (max-width: 750px) {
      width: 350px;
    }
  }
  button {
    font-size: 35px;
    font-weight: 700;
    line-height: 41.02px;
    margin-top: 50px;
    padding: 8px 50px;
    border: 0;
    border-radius: 20px;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    cursor: pointer;
  }
`;
