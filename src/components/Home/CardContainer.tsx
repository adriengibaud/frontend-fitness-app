import styled from 'styled-components';
import Card from './Card';

const CardContainer = () => {
  return (
    <Container>
      <Card
        color='#3da9c9'
        title='our mission'
        text='Our Club promotes and friendship through running.'
        actionText='more'
      />
      <Card
        color='#29b6f6'
        title='our mission'
        text='Our Club promotes and friendship through running.'
        actionText='more'
      />
      <Card
        color='#0086c3'
        title='our mission'
        text='Our Club promotes and friendship through running.'
        actionText='more'
      />
    </Container>
  );
};

export default CardContainer;

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: -100px auto -20px auto;
  gap: 25px;
`;
