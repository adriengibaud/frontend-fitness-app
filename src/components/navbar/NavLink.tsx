import styled from 'styled-components';

const NavLink = ({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: Function;
}) => {
  return <Link onClick={() => clickHandler()}>{text}</Link>;
};

export default NavLink;

const Link = styled.a`
  font: 700 3rem Raleway, sans-serif;
  border-bottom: 1px solid;
  height: 25px;
  border-radius: 8px;
  padding: 15px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;
