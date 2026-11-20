import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { rgba } from "polished";
import { ImgLogoLavid2 } from "../../images";

export const HeaderDesktop = () => {
  return (
    <Container>
      <div className="logo-img">
        <Link to="/">
          <img src={ImgLogoLavid2} alt="La vid.life" />
        </Link>
      </div>

      <nav className="list" aria-label="Navegación principal">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <a href="/#services">Producto</a>
          </li>
          <li>
            <a href="/#benefits">Beneficios</a>
          </li>
          <li>
            <Link to="/partners" className="partner-cta">
              Partners
            </Link>
          </li>
          <li>
            <a href="/#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    .logo-img {
      flex-shrink: 0;
      display: flex;
      align-items: center;

      a {
        display: inline-flex;
        align-items: center;
      }

      img {
        width: 3.6rem;
        height: auto;
        display: block;
      }
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
        }

        a {
          text-decoration: none;
          color: ${theme.colors.quaternary};
          font-weight: ${theme.font_weight.large};
          font-size: 0.98rem;
          padding: 0.25rem 0;
          border-bottom: 2px solid transparent;
          transition:
            color 0.2s ease,
            border-color 0.2s ease;
          white-space: nowrap;
          cursor: pointer;

          &:not(.partner-cta):hover {
            color: ${theme.colors.sextiary};
            border-bottom-color: ${theme.colors.sextiary};
          }

          &:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.25)};
            border-radius: 6px;
          }
        }

        a.partner-cta {
          color: ${theme.colors.sextiary};
          background-color: transparent;
          border: 1.5px solid ${theme.colors.sextiary};
          padding: 0.38rem 1.1rem;
          border-radius: 10px;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          transition:
            background-color 0.2s ease,
            color 0.2s ease,
            transform 0.12s ease;

          &:hover {
            background-color: ${theme.colors.sextiary};
            color: ${theme.colors.secondary};
          }

          &:active {
            transform: scale(0.98);
          }
        }
      }
    }
  `}
`;
