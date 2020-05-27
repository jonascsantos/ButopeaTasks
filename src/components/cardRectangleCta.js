import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import CardSquareCta from "./cardSquareCta";
const { colors } = theme;

const StyledContainer = styled.div`
  width: 33.3%;
  height: 100%;
  position: absolute;
  transform: translate(200%,-100%);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;

  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;
  
  align-content: center;
  justify-content: center;

  opacity: ${(props) => (props.hovered ? 1:0)};
  background-color: rgba(255,255,255,0.1);
  
  &:hover {
    opacity: 1;
    background-color: rgba(255,255,255,0.1);
    opacity: 0.85;
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
  color: ${(props) => (props.isLight ? colors.black2 : colors.white)};
  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const StyledButton = styled.button`
  display: inline-flex;
  width: fit-content;
  padding: 14px 40px;

  font-size: 2rem;
  font-family: "Open Sans";
  cursor: pointer;

  color: ${(props) => (props.isLight ? colors.black2 : colors.white)};
  background-color: rgba(0, 0, 0, 0);

  border: 0.2rem solid
    ${(props) => (props.isLight ? colors.black2 : colors.white)};
  transition-duration: 0.5s;
  -webkit-transition-duration: 0.5s;
  -moz-transition-duration: 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.isLight ? colors.black2 : colors.white};
    color: ${(props) => (props.isLight ? colors.white : colors.black2)};
  }
`;

const CardRectangleCta = (props) => {
  //Check if the prop color is Light or Dark
  let tinycolor = require("tinycolor2");
  let color = tinycolor(props.color);
  let isLight = color.getBrightness() > 220 ? true : false;
  return (
    <a href={props.link}>
      <StyledContainer hovered={props.hovered} color={props.color}>
        <StyledTitle isLight={isLight}>{props.title}</StyledTitle>
        <div>
          <StyledButton isLight={isLight}>{props.button}</StyledButton>
        </div>
      </StyledContainer>
    </a>
  );
};

export default CardRectangleCta;
