import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lighten } from "polished";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1em;
  top: 1em;
`;

const StyledLink = styled(Link)`
  padding: 0.5em 1em;
  background-color: black;
  color: white;
  &:hover {
    background-color: ${lighten(0.3, "black")};
  }
`;

const Navigation = () => {
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Container>
  );
};

export default Navigation;
