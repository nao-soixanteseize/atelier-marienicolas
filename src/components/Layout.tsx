import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/useWindowSize';
import Logo from '../img/Logo_test.svg';
import MenuItem from './MenuItem';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const [openCollections, setOpenCollections] = useState(false);

  const { device } = useWindowSize();

  return (
    <Container>
      <Header
        style={{
          position: device === 'mobile' ? 'relative' : 'fixed',
          height: device === 'mobile' ? 'auto' : '80%',
          zIndex: 100,
          paddingTop: device === 'mobile' ? 20 : 28,
          paddingBottom: device === 'mobile' ? 20 : 30,
          paddingLeft: device === 'mobile' ? 20 : 40,
          paddingRight: device === 'mobile' ? 20 : 40,
        }}
      >
        <LogoContainer>
          <LogoImg src={Logo} />
        </LogoContainer>
        {
          <MenuRow>
            <MenuItem title="ATELIER" url="/" />
            <MenuItem
              title="COLLECTIONS"
              onClick={() => {
                console.log('click');
                setOpenCollections(!openCollections);
              }}
            />
            {openCollections && (
              <div
                style={{
                  marginLeft: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  marginBottom: 20,
                }}
              >
                <MenuItem title="ASHANTI" url="/collection/ashanti" />
                <MenuItem title="ETNA" url="/collection/etna" />
                <MenuItem title="JEU D'ANSES" url="/collection/jeu-d-anses" />
                <MenuItem title="K-PLA" url="/collection/k-pla" />
                <MenuItem title="ORGANIC" url="/collection/organic" />
                <MenuItem title="PLUS..." url="/collection/others" />
              </div>
            )}
            <MenuItem title="CONTACT" url="/contact" />
          </MenuRow>
        }
      </Header>

      <ChildrenContainer
        style={{
          paddingLeft: device === 'mobile' ? 0 : 250,
          paddingTop: device === 'mobile' ? 20 : 160,
        }}
      >
        {children}
        <Footer
          style={{
            width: device === 'mobile' ? '100%' : 'calc(100% - 80px)',
            paddingLeft: device === 'mobile' ? 15 : 40,
            marginBottom: device === 'mobile' ? 15 : undefined,
            flexDirection: device === 'mobile' ? 'column' : 'row',
            justifyContent: device === 'mobile' ? 'flex-end' : 'space-between',
            alignItems: device === 'mobile' ? 'flex-start' : 'center',
          }}
        >
          <MenuItem title="MENTIONS LÉGALES" url="/mentions" />
          <MenuItem title="MARIE NICOLAS ©2025" />
        </Footer>
      </ChildrenContainer>
    </Container>
  );
};

const Container = styled.div`
  pointer-events: auto;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: calc(100vw - 80px);
  margin: 0 40px; */

  gap: 20px;
  z-index: 100;
`;
const Footer = styled.footer`
  margin-top: 80px;
  display: flex;

  height: 60px;
  /* border-top: 0.5px solid #000; */
`;
const MenuRow = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 60%;
  justify-content: flex-start;
  padding-top: 30px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 250px;
  margin-top: 20px;
`;
const LogoImg = styled.img``;
const ChildrenContainer = styled.div`
  background-color: #fff;
`;
