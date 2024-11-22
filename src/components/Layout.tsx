import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Logo from '../img/LogoMN.svg';
import MenuItem from './MenuItem';

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
        <MenuRow>
          <MenuItem title="ATELIER" url="/" />
          <MenuSeparator>{'|'}</MenuSeparator>
          <MenuItem title="CATALOGUE" url="/catalogue" />
          <MenuSeparator>{'|'}</MenuSeparator>
          <MenuItem title="CONTACT" url="/contact" />
        </MenuRow>
      </Header>

      <ChildrenContainer>{children}</ChildrenContainer>

      <Footer>
        <MenuItem title="MENTIONS LÉGALES" url="/mentions" />
        <MenuItem title="ATELIER MARIE NICOLAS ©2024" />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  pointer-events: auto;
  height: 100vh;
  width: 100vw;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 125px;
  /* width: calc(100vw - 80px);
  margin: 0 40px; */
  padding-top: 28px;
  padding-bottom: 30px;
  gap: 20px;
`;
const Footer = styled.footer`
  margin-top: 80px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: calc(100vw - 80px);
  border-top: 0.5px solid #000;
`;
const MenuRow = styled.div`
  display: flex;
  gap: 20px;
`;
const MenuSeparator = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 3px;
  color: #000000;
`;
const LogoContainer = styled.div`
  position: relative;
  width: 110px;
`;
const LogoImg = styled.img``;
const ChildrenContainer = styled.div`
  background-color: #fff;
  padding-top: 8px;
`;
