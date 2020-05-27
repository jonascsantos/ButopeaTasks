import React from "react";
import styled from "styled-components";
import { CardRectangle, CardSquare, CardSquareCta } from "../components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledBannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

class Banner extends React.Component {
  getRandomColor() {
    let colorsCtaRandom = ["#ccc74e", "#eacb68", "#1abc9c", colors.pink];
    let randomNumber = Math.floor(Math.random() * colorsCtaRandom.length);

    return colorsCtaRandom[randomNumber];
  }

  render() {
    const { items, mode } = this.props;

    if (mode === "rectangle") {
      let ctaItem = items.find((e) => e.type === "cta");
      let squareItem = items.find((e) => e.aspectRatio === "square");
      let rectangleItem = items.find((e) => e.aspectRatio === "rectangle");

      return (
        <CardRectangle
          srcSquare={squareItem.src}
          linkSquare={squareItem.link}
          srcRectangle={rectangleItem.src}
          linkRectangle={rectangleItem.link}
          ctaTitle={ctaItem.title}
          ctaButton={ctaItem.button}
          ctaLink={ctaItem.link}
        />
      );
    }

    return (
      <StyledBannerContainer>
        {items.map((item, index) => {
          return item.type === "cta" ? (
            <CardSquareCta
              color={this.getRandomColor()}
              title={item.title}
              button={item.button}
              link={item.link}
              key={index}
            />
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
