import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/useWindowSize';
import Header1 from '../img/H1.jpg';
import Header2 from '../img/H2.jpg';
import Header3 from '../img/H3.jpg';
import Header4 from '../img/H4.jpg';
import Header5 from '../img/H5.jpg';
import MountainLineImage from '../img/MountainLine.png';
import { BrandImage } from './BrandImage';

const HeaderCarousel = () => {
  const headerHeight = 190;
  const { windowSize } = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { image: Header1, hoverImage: MountainLineImage },
    { image: Header2, hoverImage: MountainLineImage },
    { image: Header3, hoverImage: MountainLineImage },
    { image: Header4, hoverImage: MountainLineImage },
    { image: Header5, hoverImage: MountainLineImage },
  ];

  // Timer pour faire défiler automatiquement les images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 5000); // 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [images.length]);

  // Gestionnaire pour changer l'image via les indicateurs
  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Welcome $headerHeight={headerHeight}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${activeIndex * windowSize.width}px)`,
          transition: 'transform 0.5s ease-in-out',
          width: `${windowSize.width * images.length}px`,
        }}
      >
        {images.map((item, index) => (
          <BrandImage
            key={index}
            style={{
              width: windowSize.width,
            }}
            image={item.image}
            hoverImage={item.hoverImage}
          />
        ))}
      </div>
      {/* Step indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            style={{
              width: '50px',
              height: '3px',
              borderRadius: '5px',
              backgroundColor: 'black',
              opacity: index === activeIndex ? 1 : 0.3,
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </Welcome>
  );
};

export default HeaderCarousel;

const Welcome = styled.div<{ $headerHeight: number }>`
  display: flex;
  width: 100%;
  padding: 0;
  width: calc(100vw);
  height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
  overflow-y: hidden;
  @media (max-width: 1280px) {
    overflow-x: scroll;
    height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight * 1.5}px)`};
  }
`;
