import { useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';

const Plan = ({
  planNumber,
  title,
  sub,
  features,
  price,
  color,
}: {
  planNumber: string;
  title: string;
  sub: string;
  features: { image: string; id: number }[];
  price: number;
  color: string;
}) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const { t } = useTranslation('plans');

  return (
    <>
      <Header color={color}>1</Header>
      <Container>
        <Description>yo</Description>
        <PlanContainer>
          <TitleContainer color={color}>
            <h3>{title}</h3>
            <h4>{sub}</h4>
          </TitleContainer>
          <Separator />
          <InfoContainer color={color}>
            <ul>
              {features.map((e) => {
                return (
                  <Feature key={e.id}>
                    <ImageContainer>
                      <Image
                        src={e.image}
                        alt='features image'
                        layout='fill'
                        objectFit={'contain'}
                        quality={100}
                      />
                    </ImageContainer>
                    <p>{t(`${planNumber}.features.${e.id}`)}</p>
                  </Feature>
                );
              })}
            </ul>
            <button onClick={() => setInfoOpen(!infoOpen)}>
              {t('more-info-button')}
            </button>
            <ShowInfoContainer color={color} isOpen={infoOpen}>
              blablablabla
            </ShowInfoContainer>
            <div className='price'>€ {price} / MO</div>
          </InfoContainer>
        </PlanContainer>
      </Container>
    </>
  );
};

export default Plan;

const Header = styled.div<{ color: string }>`
  margin: 0 auto -60px auto;
  font-family: Oswald;
  font-size: 45px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
  background: ${(props) => props.theme.colors.secondaryLight};
`;

const Description = styled.div`
  width: 300px;
  background: blue;
  margin: 50px 0px;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const PlanContainer = styled.div`
  background: white;
  min-width: 350px;
  max-width: 350px;
  margin: 50px 0px;
  padding: 20px 30px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;

const Separator = styled.hr`
  border-top: 3px solid #bbb;
`;

const TitleContainer = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  padding-bottom: 15px;
  text-align: center;
  h3 {
    font: 40px Oswald, sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  h4 {
    font: 20px Oswald, sans-serif;
  }
`;

const InfoContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    margin: 30px 0px;
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    color: ${({ color }) => color};
    font: 40px Oswald, sans-serif;
    border-top: 3px solid ${({ color }) => color};
    border-bottom: 3px solid ${({ color }) => color};
  }
  button {
    margin-bottom: 30px;
    padding: 10px 0;
    background: none;
    border: 3px solid ${({ color }) => color};
    border-radius: 5px;
    color: ${({ color }) => color};
    font: 25px Montserrat, sans-serif;
  }
`;

const fadeInAnimation = keyframes`
  0% {
    font-size: 0;
    opacity: 0;
	}
	100% {
    font-size: 1em;
    opacity: 1;
	}
`;

const ShowInfoContainer = styled.div<{ isOpen: boolean; color: string }>`
  display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
  animation: ${fadeInAnimation} 200ms linear;
  width: 100%;
  height: 400px;
  border: 2px solid ${({ color }) => color};
  margin: 0 0 30px 0;
`;

const Feature = styled.li`
  margin: 0 0 25px 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font: 18px Montserrat, sans-serif;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  margin: auto;
`;
