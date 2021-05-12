import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Plan from './Plan';

const PlansContainer = () => {
  const { t } = useTranslation('plans');
  const planFeatures = [
    {
      image: '/features/smartphone.png',
      id: 1,
    },
    {
      image: '/features/dumbell.png',
      id: 2,
    },
    {
      image: '/features/chronometer.png',
      id: 3,
    },
    {
      image: '/features/fork.png',
      id: 4,
    },
    {
      image: '/features/directions.png',
      id: 5,
    },
    {
      image: '/features/video-call.png',
      id: 6,
    },
  ];

  return (
    <Container>
      <Plan
        planNumber='plan1'
        title={t('plan1.h3')}
        sub={t('plan1.sub')}
        features={planFeatures}
        price={70}
        color='#00b8cc'
      />
    </Container>
  );
};

export default PlansContainer;

const Container = styled.section`
  position: static;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 850px) {
    margin-top: 350px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 60vh;
  }
`;
