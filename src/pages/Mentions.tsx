import styled from 'styled-components';
import '../App.css';
import { BrandImageText } from '../components/BrandImageText';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';
import PortraitImage from '../img/Portrait1.png';

const Mentions = () => {
  const { device } = useWindowSize();
  const paddingRow2 = device === 'mobile' ? 40 : device === 'tablet' ? 80 : 200;
  console.log('Mentions paddingRow2', paddingRow2);
  return (
    <Layout>
      <Row
        style={{
          padding: `30px ${paddingRow2}px`,
          width: `calc(100vw - ${paddingRow2 * 2}px)`,
        }}
      >
        <BrandImageText
          title={'Mentions légales'}
          image={PortraitImage}
          text={`21 rue des filles du calvaire 75003 Paris France\n
RCS : 439 300 393 RCS Paris\n
TVA Intracom. : FR 21439300393\n
Publisher : Nao Nussbaum\n
Conception : SoixanteSeize`}
        />
      </Row>
    </Layout>
  );
};

export default Mentions;

const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
