import styled from 'styled-components';
import '../App.css';
import { BrandImage } from '../components/BrandImage';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { Layout } from '../components/Layout';
import MountainLineImage from '../img/MountainLine.png';
import { serie1, serie2, serie3, unique1, unique2, unique3 } from '../products';

const Catalogue = () => {
  const handleDownload = () => {
    // URL du fichier à télécharger
    const fileUrl = '/Catalogue.pdf'; // Remplacez par le chemin réel du fichier
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Catalogue-MarieNicolas-2025.pdf'; // Nom du fichier après téléchargement
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
        <Button onClick={handleDownload}>{'TÉLÉCHARGER .PDF'}</Button>
      </Row>

      <TitleRow
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
            height={'100%'}
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
            height={'100%'}
            name={piece.name}
            description={piece.description}
            size={piece.size}
            hoverImage={MountainLineImage}
          />
        ))}
      </Grid>

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
        <div style={{ width: '60%' }}>
          <ContactForm />
        </div>
      </Row>
    </Layout>
  );
};

export default Catalogue;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
`;
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
