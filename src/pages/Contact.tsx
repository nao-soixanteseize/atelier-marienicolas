import { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import ContactForm from '../components/ContactForm';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';

const Catalogue = () => {
  const paddingRow3 = 40;
  const { device } = useWindowSize();
  const [messageSent, setMessageSent] = useState(false);

  console.log('Device', device);
  return (
    <Layout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 60,
        }}
      >
        <TitleRow
          style={{
            marginBottom: 40,
            width: `calc(40vw)`,
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
            <ContentText>
              {'Votre message a bien été envoyé. Merci.'}
            </ContentText>
          ) : (
            <div
              style={{
                width:
                  device === 'mobile' || device === 'tablet' ? '100%' : '60%',
              }}
            >
              <ContactForm
                setMessageSent={setMessageSent}
                page={'ContactPage'}
              />
            </div>
          )}
        </Row>
      </div>
    </Layout>
  );
};

export default Catalogue;

const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1180px) {
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
