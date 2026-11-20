import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { mediaQuery } from "../../styles/constants/index.js";

const WHATSAPP_PHONE = "51932508739";
const WHATSAPP_TEXT = encodeURIComponent(
  "Hola, estoy interesado en su vino sin alcohol"
);

const INITIAL_DELAY_MS = 2500;
const VISIBLE_DURATION_MS = 4500;
const CYCLE_INTERVAL_MS = 14000;

export const ButtonsFloating = () => {
  const [isAutoExpanded, setIsAutoExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isOpen = isAutoExpanded || isHovered;

  useEffect(() => {
    let hideTimeout;

    const triggerPeek = () => {
      setIsAutoExpanded(true);
      hideTimeout = setTimeout(() => {
        setIsAutoExpanded(false);
      }, VISIBLE_DURATION_MS);
    };

    const initialTimeout = setTimeout(triggerPeek, INITIAL_DELAY_MS);
    const intervalId = setInterval(triggerPeek, CYCLE_INTERVAL_MS);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <FloatingLink
        href={`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${WHATSAPP_TEXT}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 932 508 739"
        $isOpen={isOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <IconBadge>
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </IconBadge>

        <ExpandableWrapper $isOpen={isOpen}>
          <ExpandableInner>
            <ContentGroup $isOpen={isOpen}>
              <TopRow>
                <TruckWrapper $isOpen={isOpen}>
                  <FontAwesomeIcon icon={faTruck} />
                </TruckWrapper>
                <span>Atención inmediata</span>
              </TopRow>
              <PhoneNumber>932 508 739</PhoneNumber>
            </ContentGroup>
          </ExpandableInner>
        </ExpandableWrapper>
      </FloatingLink>
    </Container>
  );
};

const truckDrive = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-14px);
  }
  55% {
    opacity: 1;
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-1px) translateY(-1px);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;

const truckIdle = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1.5px);
  }
`;

const Container = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1.25rem;
  z-index: 998;

  ${mediaQuery.minTablet} {
    right: 1.75rem;
    bottom: 1.75rem;
  }
`;

const FloatingLink = styled.a`
  ${({ theme, $isOpen }) => css`
    display: inline-flex;
    align-items: center;
    padding: 0.4rem;
    border-radius: 999px;
    background-color: ${theme.colors.primary};
    border: 1.5px solid
      ${$isOpen ? theme.colors.sextiary : rgba(theme.colors.sextiary, 0.55)};
    box-shadow: 0 8px 20px ${rgba(theme.colors.black, 0.28)};
    text-decoration: none !important;
    cursor: pointer;
    user-select: none;
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      border-color: ${theme.colors.sextiary};
      box-shadow: 0 12px 24px ${rgba(theme.colors.black, 0.34)};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px ${rgba(theme.colors.sextiary, 0.35)};
    }

    &:active {
      transform: scale(0.97);
    }
  `}
`;

const IconBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.65rem;
  height: 2.65rem;
  border-radius: 50%;
  background-color: #25d366;
  color: #ffffff;
  font-size: 1.5rem;
  flex-shrink: 0;

  ${mediaQuery.minTablet} {
    width: 2.95rem;
    height: 2.95rem;
    font-size: 1.7rem;
  }
`;

const ExpandableWrapper = styled.div`
  ${({ $isOpen }) => css`
    display: grid;
    grid-template-columns: ${$isOpen ? "1fr" : "0fr"};
    opacity: ${$isOpen ? 1 : 0};
    transition:
      grid-template-columns 0.42s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.28s ease;
  `}
`;

const ExpandableInner = styled.div`
  overflow: hidden;
`;

const ContentGroup = styled.div`
  ${({ $isOpen }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 0.9rem 0 0.7rem;
    white-space: nowrap;
    transform: translateX(${$isOpen ? "0" : "-8px"});
    transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);

    ${mediaQuery.minTablet} {
      padding: 0 1.1rem 0 0.8rem;
    }
  `}
`;

const TopRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.72rem;
    font-weight: ${theme.font_weight.medium};
    color: ${theme.colors.font2};
    line-height: 1.2;

    ${mediaQuery.minTablet} {
      font-size: 0.78rem;
    }
  `}
`;

const TruckWrapper = styled.span`
  ${({ theme, $isOpen }) => css`
    display: inline-flex;
    align-items: center;
    color: ${theme.colors.sextiary};
    font-size: 0.82rem;

    ${
      $isOpen &&
      css`
        animation:
          ${truckDrive} 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards,
          ${truckIdle} 0.9s ease-in-out 0.65s infinite;
      `
    }
  `}
`;

const PhoneNumber = styled.span`
  ${({ theme }) => css`
    margin-top: 0.15rem;
    font-size: 0.98rem;
    font-weight: ${theme.font_weight.large};
    color: ${theme.colors.secondary};
    letter-spacing: 0.03em;
    line-height: 1.2;

    ${mediaQuery.minTablet} {
      font-size: 1.08rem;
    }
  `}
`;
