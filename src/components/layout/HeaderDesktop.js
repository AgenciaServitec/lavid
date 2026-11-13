import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgLogoLavid2 } from "../../images";

export const HeaderDesktop = () => {
  return (
    <Container>
      <div className="logo-img">
        <Link to="/">
          <img src={ImgLogoLavid2} alt="La vid.life" />
        </Link>
      </div>
      <div className="list">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>INICIO</li>
          </Link>
          <a href="/#services" style={{ textDecoration: "none" }}>
            <li>PRODUCTO</li>
          </a>
          <Link to="/partners" style={{ textDecoration: "none" }}>
            <li className="partner-cta">PARTNERS</li>
          </Link>
          <a href="/#contact" style={{ textDecoration: "none" }}>
            <li>CONTACTO</li>
          </a>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .logo-img {
    width: 35%;
    flex-shrink: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 4.5rem;
      display: block;
    }
  }

  .list {
    width: 65%;
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

      a {
        text-decoration: none;
      }

      li {
        color: ${({ theme }) => theme.colors.quaternary};
        font-weight: bold;
        font-size: 1.05rem;
        border-bottom: 2px solid transparent;
        transition: all 0.25s ease-in-out;
        white-space: nowrap;
        cursor: pointer;
      }

      li:not(.partner-cta):hover {
        color: ${({ theme }) => theme.colors.sextiary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.sextiary};
      }

      li.partner-cta {
        color: ${({ theme }) => theme.colors.sextiary};
        background-color: transparent;
        border: 1.5px solid ${({ theme }) => theme.colors.sextiary};
        padding: 0.4rem 1.15rem;
        border-radius: ${({ theme }) => theme.border_radius.xxx_large};
        font-size: 0.98rem;
        letter-spacing: 0.03em;
      }

      li.partner-cta:hover {
        background-color: ${({ theme }) => theme.colors.sextiary};
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
