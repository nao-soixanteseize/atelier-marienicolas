import { useState } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import '../App.css';
import { BrandImage } from '../components/BrandImage';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import { serie, unique } from '../products';

const Catalogue = () => {
  const { device, windowSize } = useWindowSize();
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

  const paddingRow3 = device === 'mobile' ? 20 : 40;

  // Configuration des colonnes pour la disposition Masonry
  const breakpointColumns = {
    default: 3, // 3 colonnes par défaut
    1179: 2, // 2 colonnes si la largeur de l'écran < 1100px
    819: 1, // 1 colonne si la largeur de l'écran < 700px
  };

  // const paddingRow2 = device === 'mobile' ? 40 : device === 'tablet' ? 80 : 200;

  const imageWidth = Math.floor(
    device === 'mobile'
      ? windowSize.width - paddingRow3 * 2
      : device === 'tablet'
      ? (windowSize.width - paddingRow3 * 3) / 2
      : device === 'desktop'
      ? (windowSize.width - paddingRow3 * 4) / 3
      : 100,
  );

  console.log('Width', windowSize.width);
  console.log('Image width', imageWidth);

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
        <Button onClick={handleDownload}>{`TÉLÉCHARGER\nLE CATALOGUE`}</Button>
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

      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        style={{
          display: 'flex',
          marginLeft: '-20px', // Espacement négatif pour compenser le padding
          gap: 40,
          margin: paddingRow3, // Marges autour de la galerie
        }}
      >
        {unique.map((piece, key) => (
          <div
            key={key}
            style={{
              marginBottom: paddingRow3, // Espacement vertical entre les items
              // overflow: 'hidden',
            }}
          >
            <BrandImage
              image={piece.image}
              height={imageWidth * piece.ratio}
              name={piece.name}
              // description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          </div>
        ))}
      </Masonry>

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

      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        style={{
          display: 'flex',
          marginLeft: '-20px', // Espacement négatif pour compenser le padding
          gap: 40,
          margin: '40px', // Marges autour de la galerie
        }}
      >
        {serie.map((piece, key) => (
          <div
            key={key}
            style={{
              marginBottom: '40px', // Espacement vertical entre les items
              // overflow: 'hidden',
            }}
          >
            <BrandImage
              image={piece.image}
              height={imageWidth * piece.ratio}
              name={piece.name}
              description={piece.description}
              size={piece.size}
              // hoverImage={piece.image_over}
            />
          </div>
        ))}
      </Masonry>

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

const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1179px) {
    flex-direction: row;
  }
  @media (max-width: 819px) {
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

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 100%;
// `;

const ContentText = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #000000;
`;
