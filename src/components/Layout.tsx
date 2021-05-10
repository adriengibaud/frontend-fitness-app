import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import theme from '../styles/theme';
import NavBar from './navbar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {/*<NavBar />*/}
        <Body>
          {children}
          {/*<Footer>Je suis un footer</Footer>*/}
        </Body>
      </ThemeProvider>
    </>
  );
};

export default Layout;

const Body = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  padding-top: 40px;
  margin-top: auto;
`;
