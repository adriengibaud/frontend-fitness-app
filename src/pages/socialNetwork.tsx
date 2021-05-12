import Head from 'next/head';
import Questionary from 'src/components/questionary/Questionary';
import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const socialNetwork = () => {
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
      </Head>
      <Questionary />
    </>
  );
};

export default socialNetwork;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['questionary'])),
  },
});
