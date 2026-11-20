import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { ItemCarousel } from "./ItemCarousel.jsx";
import { ImgCarousel, ImgCarousel2, ImgCarousel3 } from "../../images";

const HERO_SLIDES = [
  {
    id: 1,
    image: ImgCarousel,
    alt: "Vino sin alcohol La Vid",
    title: "BEBE CON ALEGRIA CORAZÓ",
    subtitle: "0% de alcohol",
    textButton: "Ver Producto",
    hrefButton: "/#services",
    textButtonSecondary: "Beneficios",
    hrefButtonSecondary: "/#benefits",
  },
  {
    id: 2,
    image: ImgCarousel2,
    alt: "Celebraciones en familia con La Vid",
    title: "COMPARTE GRANDES MOMENTOS",
    subtitle: "0% de alcohol",
    textButton: "Ser Partners",
    hrefButton: "/partners",
  },
  {
    id: 3,
    image: ImgCarousel3,
    alt: "Zumo de uva natural La Vid",
    title: "LA MAGIA DE COMPARTIR",
    subtitle: "0% de alcohol",
    textButton: "Ver Contacto",
    hrefButton: "/#contact",
  },
];

export const Carousel = ({ onClickVisibleFormContact }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const autoplayId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplayId);
  }, [emblaApi, isPaused, selectedIndex]);

  return (
    <Container
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Viewport ref={emblaRef}>
        <Track>
          {HERO_SLIDES.map((slide, index) => (
            <Slide key={slide.id}>
              <ItemCarousel
                image={slide.image}
                alt={slide.alt}
                title={slide.title}
                subtitle={slide.subtitle}
                textButton={slide.textButton}
                hrefButton={slide.hrefButton}
                textButtonSecondary={slide.textButtonSecondary}
                hrefButtonSecondary={slide.hrefButtonSecondary}
                isFirst={index === 0}
                onClickVisibleFormContact={onClickVisibleFormContact}
              />
            </Slide>
          ))}
        </Track>
      </Viewport>

      <Indicators role="tablist" aria-label="Diapositivas del banner">
        {scrollSnaps.map((_, index) => {
          const isActive = index === selectedIndex;
          return (
            <SquareIndicator
              key={index}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir a la diapositiva ${index + 1}`}
              $active={isActive}
              onClick={() => scrollTo(index)}
            />
          );
        })}
      </Indicators>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  user-select: none;
`;

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Track = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  touch-action: pan-y pinch-zoom;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  height: 100%;
  position: relative;
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const SquareIndicator = styled.button`
  ${({ theme, $active }) => css`
    width: 13px;
    height: 13px;
    padding: 0;
    border-radius: 4px;
    border: 1.5px solid
      ${$active ? theme.colors.sextiary : rgba(theme.colors.secondary, 0.75)};
    background-color: ${
      $active ? theme.colors.sextiary : rgba(theme.colors.secondary, 0.28)
    };
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      border-color: ${theme.colors.secondary};
      background-color: ${
        $active ? theme.colors.sextiary : rgba(theme.colors.secondary, 0.6)
      };
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.45)};
    }
  `}
`;
