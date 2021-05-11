import styled, { css } from 'styled-components';
import { Component } from 'react';
import { IconBaseProps } from 'react-icons';

const Card = ({
  title,
  text,
  actionText,
  color,
}: {
  title: string;
  text: string;
  actionText: string;
  color: string;
}) => {
  return (
    <Container color={color}>
      <h3>{title}</h3>
      <p className='description'>{text}</p>
      <p className='cta'>{actionText}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.color};
  width: 270px;
  height: 270px;
  color: white;
  padding: 25px;
  font: 700 1rem Oswald, sans-serif;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  h3 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 18px;
  }
  .description {
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 35px;
  }
  .cta {
    border-bottom: 1px solid white;
    padding: 0 0 5px 0px;
    margin-right: 85%;
  }
`;
