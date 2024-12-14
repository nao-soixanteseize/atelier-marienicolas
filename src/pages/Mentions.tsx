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
          text={`44 bis rue de l'Ourcq 75019 Paris France\n
Siret : 51105691300037\n
Publisher : Marie Nicolas\n
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
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
