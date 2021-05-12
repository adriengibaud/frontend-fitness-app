import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CardsContainer from 'src/components/Home/CardsContainer';
import PlansContainer from 'src/components/Home/PlansContainer';

const alternativeHome = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>Fitness coaching | Home</title>
        <meta name='description' content='Fitness coaching' />
        <link rel='shortcut icon' href='/logo.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ImageContainer>
        <Image
          className='smallSizeImage'
          src='/homeImageSmall.jpeg'
          alt='small head picture'
          layout='fill'
          objectFit={'cover'}
          quality={100}
        />
      </ImageContainer>
      <Container>
        <CardsContainer />
        <PlansContainer />
      </Container>
    </>
  );
};

export default alternativeHome;

const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  @media screen and (max-width: 1050px) {
    height: 50vh;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['home', 'plans'])),
  },
});
