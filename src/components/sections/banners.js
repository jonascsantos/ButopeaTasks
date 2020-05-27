import React from 'react'
import styled from 'styled-components'
import { Banner } from '../'

const StyledContainer = styled.div`
    width: 90%;
    max-width: 980px;
    margin: auto;
`;

const Banners = () => {
    return (
        <StyledContainer>
            <Banner />
            <Banner />
            <Banner />
        </StyledContainer>
    )
}

export default Banners
