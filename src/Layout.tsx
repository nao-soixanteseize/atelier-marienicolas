import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from './img/Logo.svg';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        <MenuContainer>{`MARIE NICOLAS    |    CATALOGUE    |    CONTACTS`}</MenuContainer>
      </Header>
      <ChildrenContainer>
        {children}

        <Footer>
          <MenuContainer>{`MENTIONS LÉGALES`}</MenuContainer>
          <MenuContainer>{`ATELIER MARIE NICOLAS ©2024`}</MenuContainer>
        </Footer>
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: calc(100vw - 80px);
  /* border-bottom: 1px solid #000; */
  margin: 0 40px;
  padding-top: 28px;
  padding-bottom: 30px;
`;
const Footer = styled.header`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: calc(100vw - 80px);
  border-top: 1px solid #000;
`;
const MenuContainer = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 3px;
  color: #000000;
`;
const LogoContainer = styled.div`
  position: relative;
  width: 200px;
`;
const LogoImg = styled.img``;
const ChildrenContainer = styled.div`
  background-color: #fff;
  height: calc(100vh - 150px);
  overflow-y: scroll;
  padding: 40px;
  padding-top: 10px;
`;
