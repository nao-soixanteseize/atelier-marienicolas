import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import { allProducts } from '../collections';
import { BrandImage } from '../components/BrandImage';
import Button from '../components/Button';
import { Layout } from '../components/Layout';
import { useWindowSize } from '../hooks/useWindowSize';

const Piece = () => {
  const { device, windowSize } = useWindowSize();
  const { id } = useParams();

  const [piece, setPiece] = useState<any>(null);
  const [mainImage, setMainImage] = useState<any>(null);

  const paddingRow3 = device === 'mobile' ? 20 : 40;

  const imageWidth = Math.floor(
    device === 'mobile'
      ? windowSize.width - paddingRow3 * 2
      : device === 'tablet'
      ? (windowSize.width - paddingRow3 * 3) / 2
      : device === 'desktop'
      ? (windowSize.width - paddingRow3 * 4) / 3
      : 100,
  );

  useEffect(() => {
    if (!id) return;
    const product = allProducts.find((product) => product.id === parseInt(id));
    setMainImage(product?.image);
    setPiece(product);
  }, [id]);

  if (!piece) return null;
  return (
    <Layout>
      {/*       <Row
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 60,
        }}
      >
        <Button onClick={handleDownload}>{`TÉLÉCHARGER\nLE CATALOGUE`}</Button>
      </Row> */}
      <div
        style={{
          display: 'flex',
          flexDirection: device === 'mobile' ? 'column' : 'row',
          justifyContent: 'flex-start',
          gap: device === 'mobile' ? 0 : 40,
          height: device === 'mobile' ? undefined : '75vh',
        }}
      >
        <div
          style={{
            width: device === 'mobile' ? '100%' : '50%',
            height: device === 'mobile' ? '100%' : '100%',
          }}
        >
          <BrandImage
            image={mainImage}
            height={imageWidth * piece.ratio}
            name={piece.name}
            description={piece.description}
            size={piece.size}
            noLegende={true}
            // hoverImage={piece.image_over}
          />
        </div>
        <div
          style={{
            width: device === 'mobile' ? '100%' : '50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingRight: 80,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              width: '100%',
              height: '30%',
              paddingTop: 12,
              paddingLeft: device === 'mobile' ? 10 : 0,
              paddingRight: device === 'mobile' ? 10 : 0,
            }}
          >
            {piece.additional_images &&
              piece.additional_images.map((image: any, key: number) => (
                <div
                  key={key}
                  style={{
                    width: '30%',
                    marginBottom: 20,
                    padding: 5,
                  }}
                  onMouseEnter={() => setMainImage(image)}
                  onMouseLeave={() => setMainImage(piece.image)}
                >
                  <BrandImage
                    image={image}
                    height={imageWidth * piece.ratio}
                    name={piece.name}
                    description={piece.description}
                    size={piece.size}
                    noLegende={true}
                    // hoverImage={piece.image_over}
                  />
                </div>
              ))}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: device === 'mobile' ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: device === 'mobile' ? 'flex-start' : 'flex-end',
              width: '100%',
              paddingLeft: device === 'mobile' ? 15 : 0,
              paddingRight: device === 'mobile' ? 15 : 0,
              gap: 20,
            }}
          >
            <div style={{ paddingTop: 20 }}>
              <TitleContent>{piece.name}</TitleContent>
              <TextContent>{piece.description}</TextContent>
              <TextContent>{piece.size}</TextContent>
            </div>
            <div>
              <Button
                onClick={() => {
                  window.location.href = `mailto:ateliermarienicolas@gmail.com?subject=Demande de renseignement&body=Pourriez-vous me donner plus de renseignement sur cette pièce : ${piece.name}`;
                }}
                style={{
                  height: 40,
                  fontSize: 11,
                  marginBottom: 10,
                  borderRadius: 0,
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '10px 20px',
                }}
              >
                {"PLUS D'INFOS"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Piece;

const TextContent = styled.div`
  color: #000000;
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`;
const TitleContent = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 24px;
  margin-bottom: 18px;
`;
