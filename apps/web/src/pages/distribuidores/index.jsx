import React from "react";
import styled from "styled-components";
import { DistributorForm } from "../../components";

export const DistributorPage = () => {
  return (
    <>
      <Container>
        <DistributorForm />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
`;