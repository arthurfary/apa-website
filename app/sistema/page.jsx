'use client'

import React from 'react';

import SystemPage from '../components/page_type/sistema';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 94.5vh; /* Defina a altura como 100% da altura da viewport */
  background-color: #f0f0f0; /* Cor de fundo opcional */
`;

function Home(){
    return (
        <SystemPage>
            <StyledDiv>
                <h1>Sistema para gerenciamento de informações apresentadas no site!</h1>
            </StyledDiv>
        </SystemPage>
    );
}

export default Home;