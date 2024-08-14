import React from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <SpinnerContainer>
      <ClipLoader
        color={"#CC3333"}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerContainer>
  );
};

export default Spinner;
