import React from "react";
import styled from "styled-components";
import {ContactSection, Hero, Services, WineCharacters} from "../../components";
import {WrapperComponent} from "../../components/ui";
import {useAnalyticsEventTracker} from "../../hooks";
import {BannerPartnerLaVid, BannerPropertiesLaVid} from "../../images";

export const Home = ({
                         onClickVisibleFormContact,
                         oneChangeMessageCustom,
                         visibleFormContact,
                         onEventGaClickButton,
                         messageCustom,
                     }) => {
    const gaEventTrackerIcons = useAnalyticsEventTracker("Icons");

    const eventGaClickIcon = (action, label) =>
        gaEventTrackerIcons(action, label);

    return (
        <>
            <Container>
                <Hero onClickVisibleFormContact={onClickVisibleFormContact} />

                <WrapperComponent>
                    <Services
                        onClickVisibleFormContact={onClickVisibleFormContact}
                        onEventGaClickButton={onEventGaClickButton}
                        oneChangeMessageCustom={oneChangeMessageCustom}
                    />
                    <WineCharacters />
                </WrapperComponent>

                <BannerWrapper>
                    <PropertiesBannerCard>
                        <img
                            src={BannerPropertiesLaVid}
                            alt="Banner de sus propiedades del vino La Vid"
                        />
                    </PropertiesBannerCard>
                </BannerWrapper>

                <BannerWrapper>
                    <PartnerBannerLink href="/partners">
                        <img
                            src={BannerPartnerLaVid}
                            alt="Banner de Partners"
                        />
                    </PartnerBannerLink>
                </BannerWrapper>

                <ContactSection />
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
`;

const BannerWrapper = styled.div`
    width: 100%;
    max-width: 1267px;
    margin: 2rem auto 0;
    padding: 0 1.5rem;
    box-sizing: border-box;

    @media (max-width: 768px) {
        margin: 1.25rem auto 0;
        padding: 0 1rem;
    }
`;

const PropertiesBannerCard = styled.div`
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(15, 25, 32, 0.08);

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        border-radius: 12px;
    }
`;

const PartnerBannerLink = styled.a`
    display: block;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(15, 25, 32, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(15, 25, 32, 0.12);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        border-radius: 12px;
    }
`;