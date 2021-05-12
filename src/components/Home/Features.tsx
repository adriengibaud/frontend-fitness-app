import styled from 'styled-components';
import Image from 'next/image';

const Features = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src='/homeImage.jpeg'
          alt='vertical image of the coach'
          layout='fill'
          objectFit={'cover'}
          quality={100}
        />
      </ImageContainer>
      <FeatureContainer>
        <div className='feature'>
          <div className='icon'>
            <Image
              src='/features/yoga.png'
              alt='yoga image'
              width={100}
              height={100}
            />
          </div>
          <div className='informations'>
            <h1>Join the movement</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Duis aute irure dolor.
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='icon'>
            <Image
              src='/features/fitness.png'
              alt='yoga image'
              width={100}
              height={100}
            />
          </div>
          <div className='informations'>
            <h1>Join the movement</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Duis aute irure dolor.
            </p>
          </div>
        </div>
        <div className='feature'>
          <div className='icon'>
            <Image
              src='/features/stretching.png'
              alt='yoga image'
              width={100}
              height={100}
            />
          </div>
          <div className='informations'>
            <h1>Join the movement</h1>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Duis aute irure dolor.
            </p>
          </div>
        </div>
      </FeatureContainer>
    </Container>
  );
};

export default Features;

const Container = styled.section`
  width: 100vw;
  max-width: 1200px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 800px) {
    margin-top: 0px;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  z-index: -1;
  position: relative;
  width: 600px;
  height: 900px;
  @media screen and (max-width: 1200px) {
    width: 50vw;
    max-width: 700px;
    height: 80vh;
  }
  @media screen and (max-width: 800px) {
    margin: auto;
    width: 80vw;
    height: 80vh;
  }
  @media screen and (max-width: 700px) {
    width: 100vw;
    height: 80vh;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  gap: 0;
  justify-content: space-between;
  .feature {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  .icon {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    width: 50%;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: 4px;
    font-family: Oswald;
  }
  p {
    margin-top: 16px;
    font-family: Montserrat;
    line-height: 1.4;
  }
  @media screen and (max-width: 800px) {
    gap: 60px;
  }
  @media screen and (max-width: 600px) {
    margin: 60px auto;
  }
`;
