import Image from 'next/image';
import { IoIosFitness } from 'react-icons/io';
import { IoFitnessSharp } from 'react-icons/io5';
import { GrYoga } from 'react-icons/gr';
import { FaRunning } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import Card from './Card';

const Home = () => {
  return (
    <Container>
      <Section>
        <Title>Formules</Title>
        <CardContainer>
          <Card
            title='Tips and Advice'
            text='Blablalafl fafjafklj fadfk kfkfa j akkk fja lfkajf jkafjk laf'
            icon={<IoIosFitness />}
          />
          <Card
            title='Tips and Advice'
            text='Blablalafl fafjafklj fadfk kfkfa j akkk fja lfkajf jkafjk laf'
            icon={<GrYoga />}
          />
          <Card
            title='Tips and Advice'
            text='Blablalafl fafjafklj fadfk kfkfa j akkk fja lfkajf jkafjk laf'
            icon={<FaRunning />}
          />
          <Card
            title='Tips and Advice'
            text='Blablalafl fafjafklj fadfk kfkfa j akkk fja lfkajf jkafjk laf'
            icon={<IoFitnessSharp />}
          />
        </CardContainer>
      </Section>
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
  width: 100vw;
  height: 100vh;
  padding: 50px 0;
  background-image: url('/fullSizeBgImage.jpeg');

  background-size: cover;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  transform: scale(1.05);
  animation: ${animateBackground} 8s linear infinite alternate;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  width: 520px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  position: relative;
  ::after {
    content: '';
    height: 2px;
    width: 20%;
    background: ${(props) => props.theme.colors.secondary};
    position: absolute;
    left: calc(50% - 10%);
    bottom: -5px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
