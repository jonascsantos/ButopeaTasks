import React from 'react'
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Desktop = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const CardRectangle = () => {
    return (
        <div>
            <Desktop>Desktop or laptop</Desktop>
            <Mobile>Mobile</Mobile>
        </div>
    )
}

export default CardRectangle
