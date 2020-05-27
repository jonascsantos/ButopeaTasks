import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${colors.pink};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;

  align-content: center;
  justify-content: center;

  p {
    color: ${colors.white};
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }

`;

const StyledTitle = styled.p`
  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 25px 0;

  @media screen and (max-width: 768px) {
  font-size: 3.5rem;
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  width: fit-content;
  padding: 14px 40px;

  font-size: 2rem;
  font-family: 'Open Sans';
  cursor: pointer;

  color: #fff;
  background-color: rgba(0,0,0,0);

  border: 0.2rem solid #fff;
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black2};
  }
`;

const StyledContainerButton = styled.div`


`;

const CardSquareCta = () => {
  return (
    <StyledContainer>
      <StyledTitle>This is a test call to action text!</StyledTitle>
      <StyledContainerButton>
          <StyledButton>Click me</StyledButton>
      </StyledContainerButton>
    </StyledContainer>
  );
};

export default CardSquareCta;
