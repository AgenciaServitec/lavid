import React from "react";
import { Drawer as DrawerAntd } from "antd";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { rgba } from "polished";
import { mediaQuery } from "../../styles/constants/index.js";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  const closeDrawer = () => onSetVisibleDrawer(false);

  return (
    <ComponentDrawerAntd
      title={null}
      placement="right"
      onClose={closeDrawer}
      open={visibleDrawer}
    >
      <NavList aria-label="Menú móvil">
        <MenuItem>
          <Link to="/" onClick={closeDrawer}>
            Inicio
          </Link>
        </MenuItem>

        <MenuItem>
          <a href="/#services" onClick={closeDrawer}>
            Producto
          </a>
        </MenuItem>

        <MenuItem>
          <a href="/#benefits" onClick={closeDrawer}>
            Beneficios
          </a>
        </MenuItem>

        <MenuItem>
          <Link to="/partners" className="partner-cta" onClick={closeDrawer}>
            Partners
          </Link>
        </MenuItem>

        <MenuItem>
          <a href="/#contact" onClick={closeDrawer}>
            Contacto
          </a>
        </MenuItem>
      </NavList>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  ${({ theme }) => css`
    .ant-drawer-content-wrapper {
      width: 100% !important;

      ${mediaQuery.minTablet} {
        width: 40% !important;
      }
    }

    .ant-drawer-header {
      border-bottom: none;
      padding: 1rem 1.25rem;
      background-color: ${theme.colors.secondary};

      .ant-drawer-close {
        margin-inline-end: 0;
        margin-left: auto;
        color: ${theme.colors.primary};
        font-size: 1.15rem;
        transition: color 0.2s ease;

        &:hover {
          color: ${theme.colors.sextiary};
        }
      }
    }

    .ant-drawer-content {
      background-color: ${theme.colors.secondary};
    }

    .ant-drawer-body {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      padding: 1.5rem 1.5rem 3.5rem;
    }
  `}
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.1rem;
`;

const MenuItem = styled.li`
  ${({ theme }) => css`
    width: 100%;
    display: flex;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-decoration: none;
      color: ${theme.colors.quaternary};
      font-size: 1.35rem;
      font-weight: ${theme.font_weight.large};
      padding: 0.65rem 1rem;
      border-radius: 10px;
      transition:
        color 0.2s ease,
        background-color 0.2s ease;

      &:not(.partner-cta):hover,
      &:not(.partner-cta):active {
        color: ${theme.colors.sextiary};
        background-color: ${rgba(theme.colors.sextiary, 0.06)};
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.25)};
      }
    }

    a.partner-cta {
      width: 100%;
      padding: 0.7rem 1rem;
      border: 1.5px solid ${theme.colors.sextiary};
      border-radius: 10px;
      background-color: transparent;
      color: ${theme.colors.sextiary};
      font-size: 1.25rem;
      letter-spacing: 0.02em;
      transition:
        background-color 0.2s ease,
        color 0.2s ease,
        transform 0.12s ease;

      &:hover,
      &:active {
        background-color: ${theme.colors.sextiary};
        color: ${theme.colors.secondary};
      }

      &:active {
        transform: scale(0.99);
      }
    }
  `}
`;
