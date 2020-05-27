import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledFooter = styled.header`
  background-color: ${colors.whiteCloud};
  -webkit-box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.12);
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  margin: auto;
`;

const StyledText = styled.p`
display: flex;
  padding: 30px 0px;
  font-size: 1.5rem;
  align-items: center;
  text-align: center;
  color: rgba(0,0,0,0.5);
  
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledText>Task made with ❤ by Jonas dos Santos</StyledText>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
