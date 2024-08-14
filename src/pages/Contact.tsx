// import React from "react";
import ContactHero from "../components/contact-components/ContactHero";
import ContactInformation from "../components/contact-components/ContactInformation";
import Spinner from "../components/spinner/Spinner";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const Contact = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading for demonstration purposes
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear timeout when unmounting to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your meta description goes here." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-image.jpg" />
      </Helmet>
      <Spinner loading={loading} />
      <MainContent loading={loading}>
        <ContactHero />
        <ContactInformation />
      </MainContent>
    </div>
  );
};
export default Contact;

const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
