import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { CardRectangle, CardSquare, CardSquareCta } from "../components";

const StyledBannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

class Banner extends React.Component {
  render() {
    let card;
    const { items, mode } = this.props;

    if (mode === "rectangle") {
      return (
        <div>
          <CardRectangle />
          
        </div>
        )        ;
    }

    return (
      <StyledBannerContainer>
        {items.map((item, index) => {
          return item.type === "cta" ? (
            <CardSquareCta key={index} />
          ) : (
            <CardSquare
              key={index}
              aspectRatio={item.aspectRatio}
              src={item.src}
              link={item.link}
            />
          );
        })}
      </StyledBannerContainer>
    );
  }
}

export default Banner;
