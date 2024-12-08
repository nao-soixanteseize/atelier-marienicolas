import { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrandImageText } from '../components/BrandImageText';
import ContactForm from '../components/ContactForm';
import HeaderCarousel from '../components/HeaderCarousel';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import PortraitImage from '../img/Portrait1.png';

const Atelier = () => {
  const { device } = useWindowSize();
  const [messageSent, setMessageSent] = useState(false);
  const paddingRow2 = device === 'mobile' ? 40 : device === 'tablet' ? 80 : 200;
  const paddingRow3 = 40;

  return (
    <Layout>
      <HeaderCarousel />
      <Row
        style={{
          padding: paddingRow2,
          width: `calc(100vw - ${paddingRow2 * 2}px)`,
          height: `calc(100vh - ${paddingRow2 * 2}px)`,
        }}
      >
        <BrandImageText
          title={'Atelier Marie Nicolas'}
          image={PortraitImage}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          }
        />
      </Row>

      <TitleRow
        style={{
          marginTop: 80,
          marginBottom: 40,
          width: `calc(60vw)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: '20%',
          marginRight: '20%',
        }}
      >
        <ContentText>{'CONTACT'}</ContentText>
      </TitleRow>

      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {messageSent ? (
          <ContentText>{'Votre message a bien été envoyé. Merci.'}</ContentText>
        ) : (
          <div style={{ width: device === 'mobile' ? '100%' : '60%' }}>
            <ContactForm setMessageSent={setMessageSent} page={'HomePage'} />
          </div>
        )}
      </Row>
    </Layout>
  );
};

export default Atelier;

const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
const TitleRow = styled.div`
  display: flex;
  width: 100%;
  border-color: black;
  border-width: 0;
  border-bottom-width: 0.5px;
  border-style: solid;

  justify-content: center;
`;

const ContentText = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #000000;
`;
