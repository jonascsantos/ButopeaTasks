import React from 'react'
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { CardSquareCta, CardSquare } from "./";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const StyledCardRectangle = styled.div`

`;


const CardRectangle = () => {
    return (
        <div>
            <Desktop>
                <StyledCardRectangle />
                card rectangle
            </Desktop>
            <Mobile>
                <CardSquare />
                <CardSquareCta color="#FFFFFF" />
            </Mobile>
        </div>
    )
}

export default CardRectangle
