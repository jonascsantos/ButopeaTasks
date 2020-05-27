import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.cyan};
  cursor: pointer;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-2px);
  }
`;

const StyledImgContainer = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 */

  overflow: hidden;
  position: relative;
`;

const StyledImg = styled.img`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CardSquare = () => {
  return (
    <StyledCard>
      <StyledImgContainer className="image">
        <StyledImg src="https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg" />
      </StyledImgContainer>
    </StyledCard>
  );
};

export default CardSquare;
