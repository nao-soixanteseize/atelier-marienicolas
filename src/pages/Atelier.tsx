import styled from 'styled-components';
import '../App.css';
import { BrandImage } from '../components/BrandImage';
import { BrandImageText } from '../components/BrandImageText';
import ContactForm from '../components/ContactForm';
import HeaderCarousel from '../components/HeaderCarousel';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import MountainLineImage from '../img/MountainLine.png';
import PortraitImage from '../img/Portrait1.png';
import { serie1, serie2, serie3, unique1, unique2, unique3 } from '../products';

const Atelier = () => {
  const { device } = useWindowSize();

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
              hoverImage={MountainLineImage}
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
              hoverImage={MountainLineImage}
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
              hoverImage={MountainLineImage}
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
              hoverImage={MountainLineImage}
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
              hoverImage={MountainLineImage}
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
              hoverImage={MountainLineImage}
            />
          ))}
        </Content>
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
        <div style={{ width: '60%' }}>
          <ContactForm />
        </div>
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
