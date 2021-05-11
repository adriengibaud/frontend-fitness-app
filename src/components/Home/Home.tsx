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
        <Card
          color='#3da9c9'
          title='our mission'
          text='Our Club promotes and friendship through running.'
          actionText='more'
        />
        <Card
          color='#29b6f6'
          title='our mission'
          text='Our Club promotes and friendship through running.'
          actionText='more'
        />
        <Card
          color='#0086c3'
          title='our mission'
          text='Our Club promotes and friendship through running.'
          actionText='more'
        />
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
  .fullSizeImage {
    height: 60vh;
    object-fit: cover;
    width: 100%;
  }
  .smallSizeImage {
    display: none;
  }
  @media screen and (max-width: 800px) {
    .fullSizeImage {
      display: none;
    }
    .smallSizeImage {
      object-fit: cover;
      display: block;
      width: 100vw;
      max-height: 60vh;
    }
  }
`;

const CardContainer = styled.div`
  width: 80vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -200px auto 50px auto;
  gap: 25px;
`;
