import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
const { colors } = theme;

const StyledHeader = styled.header`
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

const StyledLogo = styled.img`
  width: 150px;
  margin-left: 15px;
  padding: 15px 0;
`;

const StyledNav = styled.nav`
  display: flex;
`;

const StyledList = styled.ul`
  display: flex;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledListLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 24px;
  transition: ${theme.transition};

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo
          src="https://butopea.com/image/catalog/logo/butopea_com.svg"
          alt="Butopêa Logo"
        />
        <StyledNav>
          <StyledList>
            <StyledListItem>
              <StyledListLink href="#">Task 2</StyledListLink>
            </StyledListItem>
          </StyledList>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
