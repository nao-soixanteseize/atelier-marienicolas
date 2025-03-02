import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../hooks/useWindowSize';
import Header1 from '../img/H1.jpg';
import {
  default as HeaderMobile1,
  default as HeaderMobile2,
} from '../img/H1mobile.jpg';
import Header2 from '../img/H2.jpg';
import MountainLineImage from '../img/MountainLine.png';
import { BrandImage } from './BrandImage';

const HeaderCarousel = () => {
  const { device, windowSize } = useWindowSize();
  const headerHeight = device === 'mobile' ? 300 : 220;

  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    windowSize.width < 1280
      ? [
          { image: HeaderMobile1, hoverImage: MountainLineImage },
          { image: HeaderMobile2, hoverImage: MountainLineImage },
        ]
      : [
          { image: Header1, hoverImage: MountainLineImage },
          { image: Header2, hoverImage: MountainLineImage },
          /*   { image: Header3, hoverImage: MountainLineImage },
    { image: Header4, hoverImage: MountainLineImage },
    { image: Header5, hoverImage: MountainLineImage }, */
        ];

  // Timer pour faire défiler automatiquement les images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 5000); // 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [images.length]);

  // Gestionnaire pour changer l'image via les indicateurs
  // const handleIndicatorClick = (index: number) => {
  //   setActiveIndex(index);
  // };

  return (
    <Welcome
      $headerHeight={headerHeight}
      style={{
        width: device === 'mobile' ? '100%' : '90%',
        marginTop: device === 'mobile' ? 25 : undefined,
      }}
    >
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
            noHoverFrame={true}
            noLegende={true}
            // hoverImage={item.hoverImage}
          />
        ))}
      </div>
      {/* Step indicators */}
      {/* <div
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
      </div> */}
    </Welcome>
  );
};

export default HeaderCarousel;

const Welcome = styled.div<{ $headerHeight: number }>`
  display: flex;
  height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
  overflow: hidden;
  @media (max-width: 1180px) {
    overflow-x: scroll;
    height: ${({ $headerHeight }) => `calc(100vh - ${$headerHeight}px)`};
  }
`;
