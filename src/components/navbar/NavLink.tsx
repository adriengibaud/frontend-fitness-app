import styled from 'styled-components';

const NavLink = ({
  text,
  clickHandler,
  position,
}: {
  text: string;
  clickHandler: Function;
  position: number;
}) => {
  return (
    <Link position={position} onClick={() => clickHandler()}>
      <p>{text}</p>
    </Link>
  );
};

export default NavLink;

const Link = styled.a<{ position: number }>`
  font: 700 3rem Raleway, sans-serif;
  border-bottom: 5px white solid;
  border-top: 5px white solid;
  height: ${({ position }) =>
    (position < 40 && '70px') || (position >= 40 && '35px')};
  transition: 0.4s;
  border-radius: 0px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
  transition: transform 0.2s;
  :hover {
    border-bottom: ${(props) => `5px ${props.theme.colors.primary} solid`};
  }
`;
