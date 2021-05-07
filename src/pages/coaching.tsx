import Head from 'next/head';
import PricingTable from 'src/components/pricingTable/PricingTable';
import styled from 'styled-components';

const coaching = () => {
  return (
    <>
      <Head>
        <title>Fitness coaching | Coaching</title>
        <meta name='description' content='Fitness coaching' />
        <link rel='shortcut icon' href='/logo.png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Section>
        <h1 className='title'>Pricing Table</h1>
        <PricingTable />
      </Section>
    </>
  );
};

export default coaching;

const Section = styled.section`
  .title {
    text-align: center;
    position: relative;

    color: ${(props) => props.theme.colors.primary};
  }
  .title::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 150px;
    height: 14px;
    transform: skew(-12deg) translate(-50%);
    background: ${(props) => props.theme.colors.secondary};
    z-index: -1;
  }
`;
