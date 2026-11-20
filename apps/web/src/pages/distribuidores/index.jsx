import React from "react";
import styled, { css } from "styled-components";
import { DistributorForm } from "../../components";
import { WrapperComponent } from "../../components/ui";
import { mediaQuery } from "../../styles/constants/index.js";

export const DistributorPage = () => {
  return (
    <Container>
      <WrapperComponent>
        <ContentInner>
          <DistributorForm />
        </ContentInner>
      </WrapperComponent>
    </Container>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: calc(100vh - 140px);
    background-color: ${theme.colors.secondary};
    padding: 2.5rem 1rem 4rem;
    box-sizing: border-box;

    ${mediaQuery.minTablet} {
      padding: 3.5rem 2rem 5rem;
    }
  `}
`;

const ContentInner = styled.div`
  width: 100%;
  margin: 0 auto;
`;
