import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';
import Card from './Card';
import Image from 'next/image';

const Home = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');
  console.log(i18n.language);

  return (
    <Container>
      <ImageContainer>
        <Image
          className='smallSizeImage'
          src='/homeImageSmall.jpeg'
          alt='small head picture'
          layout='fill'
          objectFit={'cover'}
          quality={100}
        />
        <Image
          className='fullSizeImage'
          src='/homeImageFull.jpg'
          alt='full head picture'
          layout='fill'
          objectFit={'cover'}
          quality={100}
        />
      </ImageContainer>
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
`;

const ImageContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100vw;
  height: 60vh;
  z-index: -1;
  .smallSizeImage {
    display: none !important;
  }
  @media screen and (max-width: 800px) {
    .smallSizeImage {
      display: block !important;
    }
    .fullSizeImage {
      display: none !important;
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
