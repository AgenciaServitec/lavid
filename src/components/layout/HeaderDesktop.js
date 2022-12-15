import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImgLogoLavid } from "../../images";
import { useNavigate } from "react-router";

export const HeaderDesktop = ({
  eventGaClickLink,
  onClickVisibleFormContact,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="logo-img">
        <Link to="/">
          <img
            src={ImgLogoLavid}
            alt="Publicidad google Logo"
            onClick={() =>
              eventGaClickLink(
                "click-link-logo-publicidad-google",
                "Click link logo publicidad google"
              )
            }
          />
        </Link>
      </div>
      <div className="list">
        <ul>
          <span onClick={() => navigate("/")}>
            <li>INICIO</li>
          </span>
          <a href="#about-us">
            <li>NOSOTROS</li>
          </a>
          <a href="#services">
            <li>PRODUCTO</li>
          </a>
          <span onClick={() => onClickVisibleFormContact()}>
            <li>CONTÁCTO</li>
          </span>
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
        color: ${({ theme }) => theme.colors.secondary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
