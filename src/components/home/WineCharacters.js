import styled from "styled-components";
import {
  ImgBenefitsWine,
  SvgHappyFace,
  SvgLessSymbol,
  SvgSun,
} from "../../images";

export const WineCharacters = () => {
  return (
    <Container>
      <div className="content-top">
        <div className="line-horizontal"></div>

        <div className="list-characters">
          <ItemCharacter
            component={<SvgSun />}
            title="Tu noche Buena para compartir"
            subTitle="Especial para celebraciones"
          />
          <ItemCharacter
            component={<SvgHappyFace />}
            title="La amabilidad de una bebida que celebra con toda la familia"
            subTitle="¿Necesitas una bebida sin alcohol para tus celebraciones? Visítanos, tenemos lo que necesitas"
          />
          <ItemCharacter
            component={<SvgLessSymbol />}
            title="Reserva un tiempo para compartir y celebrar"
            subTitle="con antelación y reservación con nuestro equipo."
          />
        </div>
      </div>

      <div className="content-bottom">
        <h2>Propiedades</h2>

        <div className="item-image">
          <img src={ImgBenefitsWine} alt="Beneficios del vino" />
        </div>
      </div>
    </Container>
  );
};

const ItemCharacter = ({ component, title, subTitle }) => {
  return (
    <div className="item-character">
      {component}
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

const Container = styled.section`
  margin: 1.5em auto;

  .content-top {
    .line-horizontal {
      margin: 2em auto 2.5em auto;
      width: 90%;
      max-width: 45em;
      height: 2px;
      background: #000;
    }
    .list-characters {
      margin: 1em 1.5em;
      display: flex;
      gap: 1.5em;
      flex-wrap: wrap;
      justify-content: center;

      .item-character {
        width: 100%;
        max-width: 20em;
        padding: 1em 0.5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
          margin-top: 1em;
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
    }
  }

  .content-bottom {
    margin: 2em auto;
    h2 {
      text-align: center;
      font-size: 2.3em;
      text-transform: uppercase;
      text-decoration: underline;
      font-weight: 700;
    }
    .item-image {
      display: flex;
      justify-content: center;
      img {
        max-width: 45em;
        width: 100%;
      }
    }
  }
`;
