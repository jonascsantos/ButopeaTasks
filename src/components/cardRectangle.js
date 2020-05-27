import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { CardRectangleCta, CardSquareCta, CardSquare } from "./";
import theme from "../styles/theme";
const { colors } = theme;

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const StyledCardRectangle = styled.div`
  display: flex;
  cursor: pointer;
  transition: ${theme.transition};
  opacity: 1;
  box-shadow: 0px 2px 11px ${colors.boxShadow};
  transform: translateZ(1px); /* Prevent Image Flickering */
  &:hover {
    opacity: 0.95;
    box-shadow: 0px 5px 20px ${colors.boxShadow};
  }
`;

const StyledImgContainer = styled.div`
  width: 100%;
  padding-top: 33.3%; /* 18:6 */

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

const CardRectangle = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const {
    srcSquare,
    linkSquare,
    srcRectangle,
    linkRectangle,
    ctaTitle,
    ctaButton,
    ctaLink,
  } = props;

  return (
    <div>
      <Desktop>
        <StyledCardRectangle>
          <StyledImgContainer
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <a href={linkRectangle}>
              <StyledImg src={srcRectangle} alt="img" />
            </a>

            <CardRectangleCta
              title={ctaTitle}
              link={ctaLink}
              button={ctaButton}
              hovered={hovered}
            />
          </StyledImgContainer>
        </StyledCardRectangle>
      </Desktop>
      <Mobile>
        <CardSquare src={srcSquare} link={linkSquare} />
        <CardSquareCta
          color="#FFFFFF"
          link={ctaLink}
          title={ctaTitle}
          button={ctaButton}
        />
      </Mobile>
    </div>
  );
};

export default CardRectangle;
