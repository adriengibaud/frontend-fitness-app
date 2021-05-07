import Head from 'next/head';
import Home from 'src/components/Home/Home';

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
      </Head>
      <Home />
    </>
  );
}
