import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: ${theme.transition};
  opacity: 1;
  box-shadow: 0px 2px 11px ${colors.boxShadow};
  transform: translateZ(1px);
  &:hover {
    opacity: 0.95;
    box-shadow: 0px 5px 20px ${colors.boxShadow};
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

const CardSquare = (props) => {
  const { src, link } = props;

  return (
    <a href={link}>
      <StyledCard>
        <StyledImgContainer>
          <StyledImg src={src} alt="img" />
        </StyledImgContainer>
      </StyledCard>
    </a>
  );
};

export default CardSquare;
