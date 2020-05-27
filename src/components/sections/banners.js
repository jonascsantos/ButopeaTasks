import React from "react";
import styled from "styled-components";
import { Banner } from "../";
import { mocks } from "../../constants";

const StyledContainer = styled.section`
  width: 90%;
  max-width: 980px;
  margin: auto;
`;

const Banners = () => {
  return (
    <StyledContainer>
      <Banner mode="square" carousel={false} items={mocks.banner1} />
      <Banner mode="square" carousel={true} items={mocks.banner2} />
      <Banner
        mode="rectangle"
        carousel={false}
        items={mocks.banner3}
      />
    </StyledContainer>
  );
};

export default Banners;
