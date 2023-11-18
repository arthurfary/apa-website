'use client'

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavItem = styled.div`
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }

  &:hover > div {
    display: block;
  }
`;

const SubMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #666;
  border-radius: 5px;
  padding: 10px;
  top: 35px;
  left: 0;
  right: 0;
  z-index: 1;
`;

const SubMenuItem = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  padding: 5px 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #777;
  }
`;

export default function Menu() {
  return (
    <Nav>
      <NavItem>Página Inicial</NavItem>
      <NavItem>
        Animais para Adoção
        <SubMenu>
          <SubMenuItem href="/sistema/animais-para-adocao/cachorros">Cachorros</SubMenuItem>
          <SubMenuItem href="/sistema/animais-para-adocao/gatos">Gatos</SubMenuItem>
        </SubMenu>
      </NavItem>
      <NavItem>
        Atividades
        <SubMenu>
          <SubMenuItem href="/sistema/atividades/eventos">Eventos</SubMenuItem>
          <SubMenuItem href="/sistema/atividades/campanhas">Campanhas</SubMenuItem>
        </SubMenu>
      </NavItem>
      <NavItem>
        Notícias
        <SubMenu>
          <SubMenuItem href="/sistema/noticias/local">Local</SubMenuItem>
          <SubMenuItem href="/sistema/noticias/global">Global</SubMenuItem>
        </SubMenu>
      </NavItem>
    </Nav>
  );
}
