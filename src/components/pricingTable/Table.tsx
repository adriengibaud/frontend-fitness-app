import styled, { css } from 'styled-components';

const Table = ({
  price,
  primaryColor,
  secondaryColor,
  thirdColor,
}: {
  price: number;
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
}) => {
  return (
    <Container
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      thirdColor={thirdColor}
    >
      <p className='type'>basic</p>
      <p className='price'>
        <h1>$ {price}</h1>
        <p>/month</p>
      </p>
      <Features>
        <li>A feature</li>
        <li>A feature</li>
        <li>A feature</li>
        <li>A feature</li>
        <li>A feature</li>
      </Features>
      <a className='action'>buy now</a>
    </Container>
  );
};

export default Table;

const Container = styled.div<{
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
}>`
  display: flex;
  color: white;
  padding: 25px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 500px;
  border-radius: 25px;
  background: ${(props) => props.primaryColor};
  ${(props) => css`
    background: linear-gradient(
      180deg,
      ${props.thirdColor} 0%,
      ${props.secondaryColor} 51%,
      ${props.primaryColor} 100%
    );
  `}
  -webkit-box-shadow: 5px 5px 18px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 8px 18px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 18px -4px rgba(0, 0, 0, 0.75);
  .type {
    background: ${(props) => props.thirdColor};
  }
  .action {
    background: ${(props) => props.primaryColor};
  }
  .type,
  .action {
    color: white;
    font-size: 25px;
    width: 80%;
    margin: 0 auto;
    border-radius: 25px;

    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
  }
  .price {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 0 auto;
    h1 {
      font-size: 40px;
    }
  }
`;

const Features = styled.ul`
  margin: 0 auto;
  width: 80%;
  list-style-type: none;
  li {
    margin: 0 0 15px 0;
    font-size: 20px;
  }
`;
