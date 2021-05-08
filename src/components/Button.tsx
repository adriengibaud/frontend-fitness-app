import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const Button = () => {
  return (
    <Container>
      Test test <FiArrowRight />
    </Container>
  );
};

export default Button;

const Container = styled.button`
  font-size: 25px;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid white;
  padding: 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  min-width: 200px;
`;
