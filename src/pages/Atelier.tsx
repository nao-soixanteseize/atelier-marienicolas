import { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import { BrandImageText } from '../components/BrandImageText';
import ContactForm from '../components/ContactForm';
import HeaderCarousel from '../components/HeaderCarousel';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import PortraitImage from '../img/Portrait2.png';

const Atelier = () => {
  const { device } = useWindowSize();
  const [messageSent, setMessageSent] = useState(false);
  const paddingRow2 = device === 'mobile' ? 40 : device === 'tablet' ? 80 : 100;
  const paddingRow3 = 40;

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: '100%',
          gap: device === 'mobile' ? 100 : 180,
        }}
      >
        <div
          style={{
            width:
              device === 'mobile'
                ? '100%'
                : `calc(100vw - ${paddingRow2 * 2}px)`,
          }}
        >
          <HeaderCarousel />
        </div>
        <Row
          style={{
            padding: paddingRow2,
            width: `calc(100vw - ${paddingRow2 * 2}px)`,
            // height: `calc(100vh - ${paddingRow2 * 2}px)`,
            overflow: 'hidden',
          }}
        >
          <BrandImageText
            title={'Marie Nicolas'}
            image={PortraitImage}
            text={`Formée aux arts et techniques de la céramique en 2022, Marie a choisi d’établir son atelier au cœur du 19ᵉ arrondissement de Paris, un lieu où son imagination et sa passion prennent vie.\n

Animée par une quête constante de formes et portée par la sensorialité de la matière, elle aspire à créer des pièces uniques, sculpturales et empreintes d’intemporalité. Son travail se nourrit de diverses techniques – le tour, la plaque, le modelage – qui lui offrent une liberté d’expression infinie.\n

Le jeu subtil des assemblages, comme une danse entre intuition et savoir-faire, ouvre un champ de possibilités sans limites. Marie puise son inspiration dans les arts primitifs, l’architecture, la nature et les mystères du monde minéral, sources inépuisables de création et de poésie.\n

L’enfance de Marie, bercée par les couleurs et les cultures de l’Afrique de l’Ouest, a laissé une empreinte profonde en elle. Les symboles et les traditions de ces contrées lointaines habitent son imaginaire et enrichissent son travail.\n

Aujourd’hui, elle façonne le grès, une argile noble cuisant à haute température (1280°C). Son univers s’articule autour de quatre terres distinctes : deux blanches et deux noires, lisses ou chamottées, qui constituent la palette subtile de ses créations.\n

Chaque pièce naît entre ses mains, laissée brute ou habillée d’émail, révélant son caractère propre. Les irrégularités et les imperfections, loin de la dénaturer, deviennent la marque de son authenticité. Ainsi, chaque œuvre, empreinte d’âme et de singularité, raconte une histoire unique.`}
          />
        </Row>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <TitleRow
            style={{
              // marginTop: 80,
              marginBottom: 40,
              width: `calc(40vw)`,
              paddingBottom: paddingRow3 - 5,
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
                  page={'HomePage'}
                />
              </div>
            )}
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default Atelier;

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
