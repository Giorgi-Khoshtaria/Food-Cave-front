// import React from "react";
import { useState, useEffect } from "react";
import AboutHero from "../components/about-us-component/AboutHero";
import AboutBlog from "../components/about-us-component/AboutBlog";
import OurStory from "../components/about-us-component/OurStory";
import Chef from "../components/about-us-component/Chef";
import OurTeam from "../components/about-us-component/OurTeam";
import Spinner from "../components/spinner/Spinner";
import styled from "styled-components";
import { Helmet } from "react-helmet";
const About = () => {
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
        <title>About Us Page</title>
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
        <AboutHero />
        <AboutBlog />
        <OurStory />
        <Chef />
        <OurTeam />
      </MainContent>
    </div>
  );
};
export default About;
const MainContent = styled.div<{ loading: boolean }>`
  display: ${(props) => (props.loading ? "none" : "block")};
`;
