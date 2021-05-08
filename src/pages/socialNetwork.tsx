import Head from 'next/head';
import styled from 'styled-components';

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
      <Container>
        <ImageContainer>
          <img src='/homeImage.jpeg' />
        </ImageContainer>
        <TextContainer>
          <h1>Flavia Silva</h1>
          <h3>personal trainer</h3>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
        </TextContainer>
      </Container>
    </>
  );
};

export default socialNetwork;

const Container = styled.div`
  width: 95vw;
  margin: 120px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 45%;
  background: rgba(84, 89, 95, 0.3);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);

  border-radius: 15px;
  img {
    width: 100%;
    margin: 5% 0 -5% 5%;
    border-radius: 15px;
  }
`;

const TextContainer = styled.div`
  width: 45%;
  padding-right: 15px;
  h1,
  h3 {
    text-align: right;
  }
  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 35px;
  }
  h3 {
    color: ${(props) => props.theme.colors.secondary};
  }
  p {
    margin-top: 40px;
    line-height: 25px;
  }
`;
