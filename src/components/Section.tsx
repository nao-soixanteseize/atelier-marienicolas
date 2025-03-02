import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import '../App.css';
import { useWindowSize } from '../hooks/useWindowSize';
import { BrandImage } from './BrandImage';

interface SectionProps {
  section: any;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  const { device, windowSize } = useWindowSize();

  const [open, setOpen] = useState(true);

  // Configuration des colonnes pour la disposition Masonry
  const breakpointColumns = {
    default: 3, // 3 colonnes par défaut
    1179: 2, // 2 colonnes si la largeur de l'écran < 1100px
    819: 1, // 1 colonne si la largeur de l'écran < 700px
  };

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

  return (
    <div>
      <TitleRow
        onClick={() => setOpen(!open)}
        style={{
          width: `calc(100% - ${paddingRow3 * 2}px)`,
          paddingBottom: paddingRow3 - 5,
          marginLeft: paddingRow3,
          marginRight: paddingRow3,
          marginTop: 20,
        }}
      >
        <ContentText>{section.title.toUpperCase()}</ContentText>
      </TitleRow>

      {open && (
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
          {section.products.map((piece: any, key: number) => (
            <div
              key={key}
              style={{
                marginBottom: '40px', // Espacement vertical entre les items
                // overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log('Piece', piece);
                window.location.href = `/piece/${piece.id}`;
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
      )}
    </div>
  );
};

export default Section;

const TitleRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-color: black;
  border-width: 0;
  border-bottom-width: 0.5px;
  border-style: solid;
  cursor: pointer;
`;

const ContentText = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
  letter-spacing: 3px;
  color: #000000;
`;
