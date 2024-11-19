import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from './img/LogoMN.svg';

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
        <MenuContainer>{`ATELIER    |    CATALOGUE    |    CONTACT`}</MenuContainer>
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
  overflow-x: hidden;
  overflow-y: scroll;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 125px;
  width: calc(100vw - 80px);
  /* border-bottom: 1px solid #000; */
  margin: 0 40px;
  padding-top: 28px;
  padding-bottom: 30px;
  gap: 20px;
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
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 3px;
  color: #000000;
`;
const LogoContainer = styled.div`
  position: relative;
  width: 100px;
`;
const LogoImg = styled.img``;
const ChildrenContainer = styled.div`
  background-color: #fff;
  /* padding: 40px; */
  padding-top: 8px;
`;
