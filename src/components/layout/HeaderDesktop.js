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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>INICIO</li>
            </Link>
            <a href="/#services" style={{ textDecoration: 'none' }}>
              <li>PRODUCTO</li>
            </a>
            <a href="/#contact" style={{ textDecoration: 'none' }}>
              <li>CONTACTO</li>
            </a>
            <Link to="/partners" style={{ textDecoration: 'none' }}>
              <li>PARTNERS</li>
            </Link>
          </ul>
        </div>
      </Container>
  );
};

const Container = styled.section`
  display: flex;

  .logo-img {
    width: 40%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 4.5rem;
    }
  }

  .list {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0;
      margin: 0;

      a, Link {
        text-decoration: none;
      }

      li {
        color: ${({ theme }) => theme.colors.quaternary};
        font-weight: bold;
        font-size: 1.1rem;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in-out;
        margin-left: 1.5rem;
        cursor: pointer;
      }
      li:hover {
        color: ${({ theme }) => theme.colors.sextiary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.sextiary};
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;