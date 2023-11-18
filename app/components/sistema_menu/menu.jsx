'use client'

import React, { useState } from 'react';
import styled from 'styled-components';

const HorizontalMenuContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #333; /* Background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const MenuItem = styled.div`
  color: #fff; /* Text color */
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  transition: background-color 0.3s ease;
  border-radius: 1px 3px 3px 1px; /* Border radius */
  height: 100%;
  padding: 15px;
`;

const SubMenu = styled.ul`
  position: absolute;
  background-color: #444; /* Submenu background color */
  border-radius: 5px;
  width: 200px;
  padding: 10px;
  top: calc(100%); /* Position submenu below the menu item */
  left: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  pointer-events: ${(props) => (props.isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const SubMenuItem = styled.li`
  color: #fff; /* Text color */
  text-decoration: none;
  padding: 10px; /* Padding added */
  transition: background-color 0.3s ease;
  border-radius: 1px 3px 3px 1px; /* Border radius */
  font-weight: normal;

  &:hover {
    background-color: #555; /* Hover background color */
  }
`;

export default function Menu() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({});

  // Function to open a specific submenu on hover
  const openSubMenu = (item) => {
    setIsSubMenuOpen({ [item]: true });
  };

  // Function to close all submenus on mouse leave
  const closeAllSubMenus = () => {
    setIsSubMenuOpen({});
  };

  return (
    <HorizontalMenuContainer>
      <MenuItem onMouseEnter={() => openSubMenu('item2')} onMouseLeave={closeAllSubMenus}>
        Animais para Adoção
        <SubMenu isOpen={isSubMenuOpen['item2']}>
          <SubMenuItem>
            <a href="/sistema/cadastrar-animal">Cadastrar Animal</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/remover-animal">Remover Animal</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/remover-animal">Consultar Animais</a>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
      <MenuItem onMouseEnter={() => openSubMenu('item3')} onMouseLeave={closeAllSubMenus}>
        Atividades
        <SubMenu isOpen={isSubMenuOpen['item3']}>
          <SubMenuItem>
            <a href="/sistema/cadastrar-atividade">Cadastrar Atividade</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/atividades/campanhas">Remover Atividade</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/atividades/campanhas">Consultar Atividades</a>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
      <MenuItem onMouseEnter={() => openSubMenu('item4')} onMouseLeave={closeAllSubMenus}>
        Notícias
        <SubMenu isOpen={isSubMenuOpen['item4']}>
          <SubMenuItem>
            <a href="/sistema/noticias/local">Criar Nova Notícia</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/noticias/global">Editar Notícia Antiga</a>
          </SubMenuItem>
          <SubMenuItem>
            <a href="/sistema/noticias/global">Consultar Notícias</a>
          </SubMenuItem>
        </SubMenu>
      </MenuItem>
    </HorizontalMenuContainer>
  );
}
