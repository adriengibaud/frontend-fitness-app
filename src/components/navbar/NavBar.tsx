import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import styled, { keyframes } from 'styled-components';
import NavLink from './NavLink';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <NavBarContainer position={scrollPosition}>
      <LogoContainer position={scrollPosition} onClick={handleClick}>
        <Image
          src='/logo.png'
          alt='logo of the website'
          width={51.28}
          height={50}
        />
        <div>
          <h1>Do'nut give up</h1>
          <h4>Your personal trainer</h4>
        </div>
      </LogoContainer>
      <ButtonContainer>
        <li>
          <NavLink
            text='Coaching'
            clickHandler={() => router.push('/coaching')}
          />
        </li>
        <li>
          <NavLink
            text='Reseaux Sociaux'
            clickHandler={() => router.push('/socialNetwork')}
          />
        </li>
        <li>
          <NavLink text='Login' clickHandler={() => console.log('click')} />
        </li>
      </ButtonContainer>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.nav<{ position: number }>`
  height: ${({ position }) =>
    (position < 40 && '100px') || (position >= 40 && '60px')};
  transition: 0.4s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  background: white;
`;

const LogoContainer = styled.div<{ position: number }>`
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  gap: 15px;
  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
  }
  h4 {
    display: ${({ position }) =>
      (position < 40 && 'inline') || (position >= 40 && 'none')};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const ButtonContainer = styled.ul`
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  list-style: none;
`;
