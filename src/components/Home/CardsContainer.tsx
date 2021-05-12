import styled from 'styled-components';
import { useTranslation } from 'next-i18next';

const CardsContainer = () => {
  const { t } = useTranslation('home');

  return (
    <CardContainer>
      <Card>
        <h1>{t('program1.h2')}</h1>
        <div className='infos'>
          <p>{t('program1.p1')}</p>
          <br />
          <p>{t('program1.p2')}</p>
        </div>
      </Card>
      <Card>
        <h1>{t('program2.h2')}</h1>
        <div className='infos'>
          <ul>
            <li>{t('program2.l1')}</li>
            <li>{t('program2.l2')}</li>
            <li>{t('program2.l3')}</li>
            <li>{t('program2.l4')}</li>
            <li>{t('program2.l5')}</li>
          </ul>
          <h4>{t('program2.cta')}</h4>
        </div>
      </Card>
    </CardContainer>
  );
};

export default CardsContainer;

const CardContainer = styled.section`
  position: static;
  display: flex;
  flex-direction: row;
  height: 40vh;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1050px) {
    height: 50vh;
  }
`;

const Card = styled.div`
  background: ${(props) =>
    `linear-gradient(130deg, ${props.theme.colors.secondaryDark} 95%, #505254 95%)`};
  :nth-child(2n + 1) {
    background: ${(props) =>
      `linear-gradient(130deg, ${props.theme.colors.secondary} 5%, #8e8e8e 5%)`};
  }
  width: 50%;
  padding: 30px 0;
  .infos {
    padding: 40px;
  }
  h1 {
    text-transform: uppercase;
    font-family: Oswald;
    font-weight: 400;
    font-size: 35px;
    letter-spacing: 3px;
  }
  h4 {
    margin-top: 30px;
    font-family: montserrat;
  }
  p {
    text-align: center;
  }
  li {
    margin-bottom: 10px;
  }
  ul {
    padding-left: 20px;
  }
  h1,
  h4 {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }

  p,
  ul {
    font-size: 20px;
    font-family: Montserrat;
    color: white;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    .infos {
      padding: 30px;
    }
  }
`;
