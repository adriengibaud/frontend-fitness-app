import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';
import Card from './Card';

const Home = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');
  console.log(i18n.language);

  return (
    <Container>
      <img className='fullSizeImage' src='/homeImageFull.jpg' />
      <img className='smallSizeImage' src='homeImageSmall.jpeg' />
      <CardContainer>
        <Card />
      </CardContainer>
    </Container>
  );
};

export default Home;

const animateBackground = keyframes`
  from {
    background-position: -20px 0;
  }
  to {
    background-position: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .smallSizeImage {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .fullSizeImage {
      display: none;
    }
    .smallSizeImage {
      display: block;
      width: 100vw;
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
