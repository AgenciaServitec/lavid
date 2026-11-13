import React from "react";
import DrawerAntd from "antd/lib/drawer";
import styled from "styled-components";
import { mediaQuery } from "../../styles/constants/mediaQuery";
import { useNavigate } from "react-router";

export const Drawer = ({ visibleDrawer, onSetVisibleDrawer }) => {
  const navigate = useNavigate();

  const handleNavigate = (url = "/") => {
    onSetVisibleDrawer(false);
    navigate(url);
  };

  return (
    <ComponentDrawerAntd
      title={null}
      placement="right"
      onClose={() => onSetVisibleDrawer(false)}
      open={visibleDrawer}
    >
      <MenuItem
        onClick={() => {
          handleNavigate();
        }}
      >
        <span>Inicio</span>
      </MenuItem>

      <MenuItem
        onClick={() => {
          handleNavigate();
        }}
      >
        <span>Productos</span>
      </MenuItem>

      <MenuItem>
        <a
          href="/partners"
          className="partner-cta"
          onClick={() => onSetVisibleDrawer(false)}
        >
          <span>Partners</span>
        </a>
      </MenuItem>

      <MenuItem>
        <a href="#contact" onClick={() => onSetVisibleDrawer(false)}>
          <span>Contácto</span>
        </a>
      </MenuItem>
    </ComponentDrawerAntd>
  );
};

const ComponentDrawerAntd = styled(DrawerAntd)`
  color: #000;

  .ant-drawer-content-wrapper {
    width: 100% !important;
    ${mediaQuery.minTablet} {
      width: 40% !important;
    }
  }
  .ant-drawer-header {
    .ant-drawer-close {
      color: #000;
    }
  }
  .ant-drawer-header,
  .ant-drawer-content {
    background: #fff;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
  }

  a,
  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.quaternary};
    font-size: 1.7rem;
    font-weight: 500;
    transition: all 0.25s ease-in-out;
  }

  a:not(.partner-cta):hover span,
  > span:hover {
    color: ${({ theme }) => theme.colors.sextiary};
  }

  a.partner-cta {
    display: inline-block;
    padding: 0.4rem 1.5rem;
    border: 1.5px solid ${({ theme }) => theme.colors.sextiary};
    border-radius: ${({ theme }) => theme.border_radius.xxx_large};
    background-color: transparent;

    span {
      color: ${({ theme }) => theme.colors.sextiary};
      font-weight: bold;
    }

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.sextiary};

      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
