import { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrandImage } from '../components/BrandImage';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import { serie1, serie2, serie3, unique1, unique2, unique3 } from '../products';

const Catalogue = () => {
  const { device } = useWindowSize();
  const [messageSent, setMessageSent] = useState(false);

  const handleDownload = () => {
    // URL du fichier à télécharger
    const fileUrl = '/Catalogue.pdf'; // Remplacez par le chemin réel du fichier
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Catalogue-MarieNicolas-Dec24.pdf'; // Nom du fichier après téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Nettoyage
  };

  const paddingRow3 = 40;

  return (
    <Layout>
      <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <Button onClick={handleDownload}>{'TÉLÉCHARGER LE CATALOGUE'}</Button>
      </Row>

      <TitleRow
        style={{
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
        }}
      >
        <ContentText>{'PIÉCES UNIQUES'}</ContentText>
      </TitleRow>

      <Row
        style={{
          padding: paddingRow3,
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          gap: 40,
        }}
      >
        <Content style={{ gap: 40 }}>
          {unique1.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {unique2.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {unique3.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>
      </Row>

      <TitleRow
        style={{
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
          marginTop: 80,
        }}
      >
        <ContentText>{'MINI SÉRIES'}</ContentText>
      </TitleRow>

      <Row
        style={{
          padding: paddingRow3,
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          gap: 40,
        }}
      >
        <Content style={{ gap: 40 }}>
          {serie1.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {serie2.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>

        <Content style={{ gap: 40 }}>
          {serie3.map((piece, index) => (
            <BrandImage
              key={index}
              image={piece.image}
              height={
                device === 'mobile'
                  ? '100%'
                  : device === 'tablet'
                  ? '100%'
                  : piece.height
              }
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          ))}
        </Content>
      </Row>

      {/* <TitleRow
        style={{
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
          marginTop: 20,
        }}
      >
        <ContentText>{'PIÉCES UNIQUES'}</ContentText>
      </TitleRow>

      <Grid
        style={{
          padding: paddingRow3,
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
        }}
      >
        {[...unique1, ...unique2, ...unique3].map((piece, index) => (
          <BrandImage
            key={index}
            image={piece.image}
            height={piece.height}
            name={piece.name}
            description={piece.description}
            size={piece.size}
            hoverImage={MountainLineImage}
          />
        ))}
      </Grid>

      <TitleRow
        style={{
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
          marginTop: 80,
        }}
      >
        <ContentText>{'MINI SÉRIES'}</ContentText>
      </TitleRow>

      <Grid
        style={{
          padding: paddingRow3,
          width: `calc(100vw - ${paddingRow3 * 2}px)`,
        }}
      >
        {[...serie1, ...serie2, ...serie3].map((piece, index) => (
          <BrandImage
            key={index}
            image={piece.image}
            height={piece.height}
            name={piece.name}
            description={piece.description}
            size={piece.size}
            hoverImage={MountainLineImage}
          />
        ))}
      </Grid> */}

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
            <ContactForm setMessageSent={setMessageSent} page={'CatalogPage'} />
          </div>
        )}
      </Row>
    </Layout>
  );
};

export default Catalogue;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 40px;
// `;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ContentText = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #000000;
`;
