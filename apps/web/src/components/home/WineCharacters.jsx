import styled, { css } from "styled-components";
import { SvgHappyFace, SvgLessSymbol, SvgSun } from "../../images";
import { mediaQuery } from "../../styles/constants/index.js";

export const WineCharacters = () => {
  return (
    <Container>
      <div className="content-top">
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
    </Container>
  );
};

const ItemCharacter = ({ component, title, subTitle }) => {
  return (
    <div className="item-character">
      <div className="item-icon">{component}</div>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 1.5rem 2.5rem;

    .content-top {
      max-width: 1120px;
      margin: 0 auto;

      .line-horizontal {
        margin: 1.5rem auto 3rem;
        width: 100%;
        max-width: 42rem;
        height: 2px;
        background-color: ${theme.colors.primary};
      }

      .list-characters {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2.5rem;
        align-items: start;

        ${mediaQuery.minTablet} {
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .item-character {
          width: 100%;
          max-width: 21rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          .item-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4.25rem;
            height: 4.25rem;
            margin-bottom: 1.25rem;

            svg {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          h2 {
            margin: 0 0 0.65rem;
            color: ${theme.colors.primary};
            font-size: 1.25rem;
            font-weight: ${theme.font_weight.large};
            line-height: 1.3;
          }

          p {
            margin: 0;
            color: ${theme.colors.quaternary};
            font-size: 0.98rem;
            font-weight: ${theme.font_weight.small};
            line-height: 1.55;
            max-width: 28ch;
          }
        }
      }
    }
  `}
`;
