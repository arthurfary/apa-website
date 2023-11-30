import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HorizontalMenuContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333; /* Background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MenuItem = styled.div`
  color: #fff; /* Text color */
  padding: 15px 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 1px 3px 3px 1px; /* Border radius */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555; /* Hover background color */
  }
`;

export default function Menu() {
  return (
    <HorizontalMenuContainer>
      <Link href="/sistema/animais">
        <MenuItem>
          <p>Animais para Adoção</p>
        </MenuItem>
      </Link>
      <Link href="/sistema/atividades">
        <MenuItem>
          <p>Atividades</p>
        </MenuItem>
      </Link>
      <Link href="/sistema/noticias">
        <MenuItem>
          <p>Notícias</p>
        </MenuItem>
      </Link>
    </HorizontalMenuContainer>
  );
}
