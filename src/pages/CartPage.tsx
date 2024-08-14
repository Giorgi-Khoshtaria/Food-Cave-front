import CartHero from "../components/cart-components/CartHero";
import Cart from "../components/cart-components/Cart";
import { useState, useEffect } from "react";
import Spinner from "../components/spinner/Spinner";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Cart Page</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
      </Helmet>
      <Spinner loading={loading} />
      <MainContent loading={loading}>
        <CartHero />
        <Cart />
      </MainContent>
    </div>
  );
};

export default CartPage;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
