import React from "react";
import styled from "styled-components";
import { CardRectangle, CardSquare, CardSquareCta } from "../components";

const StyledBannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Banner = (props) => {

  const { items }= props;
  
  
  return (
    <StyledBannerContainer>
      {items.map((item, index) => {
            return (
            <div>{item.type}</div>
            );
          })}
      
     
    </StyledBannerContainer>
  );
};

export default Banner;
