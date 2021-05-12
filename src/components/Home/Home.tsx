import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import CardContainer from './CardContainer';
import Features from './Features';

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
      <CardContainer />
      <Features />
      <h1>{t('app_name')}</h1>
    </Container>
  );
};

export default Home;

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
