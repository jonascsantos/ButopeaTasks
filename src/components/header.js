import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
const { colors} = theme;
const StyledHeader = styled.div`
    width:100%;
    max-width: 980px;
    height: 100px;
    background-color: ${colors.cyan};
`;

const Header = () => {
    return (
        <StyledHeader>
            Header
        </StyledHeader>
    )
}

export default Header
