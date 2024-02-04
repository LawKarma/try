import React from 'react';
import styled from 'styled-components';
const StyledTitle=styled.h1`
  font-size: 2em;
  color: #green;
  text-align: left;
  margin: 30px;
  font-family: 'outfit', sans-serif;
  font-weight: 300;
`;
export function Accueil() {
    return (
        <div>
          <StyledTitle> Nos produits</StyledTitle>
        </div>
    );
}