import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

const Button = ({ text, color }: { text: string; color: string }) => {
  return (
    <Container color={color}>
      {text} <FiArrowRight />
    </Container>
  );
};

export default Button;

const Container = styled.button<{ color: string }>`
  font-size: 22px;
  background: ${(props) => props.color};
  margin: auto;
  width: auto;
  border: none;
  padding: 10px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  min-width: 200px;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;
