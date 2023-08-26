import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Accent = styled.span`
  color: #9b3232;
`;

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Heading>
        Oops! Page not found <Accent>😞</Accent>
      </Heading>
      <p>The page you're looking for might have been moved or doesn't exist.</p>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to main
      </button>
    </Container>
  );
};

export default PageNotFound;
