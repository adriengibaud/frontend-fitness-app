import Head from 'next/head';
import Home from 'src/components/Home/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Index() {
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
      <Home />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
