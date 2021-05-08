import styled, { css } from 'styled-components';
import { Component } from 'react';
import { IconBaseProps } from 'react-icons';

const Card = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: IconBaseProps;
}) => {
  return (
    <Container>
      <div className='icons'>{icon}</div>
      <div className='infos'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 250px;
  height: 120px;
  background: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  .icons {
    font-size: 30px;
    margin: auto 20px;
    background: white;
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 50%;
    border: 4px solid #7dd8ff;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
  .infos {
    color: white;
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 10px;
    h4 {
    }
  }
`;
