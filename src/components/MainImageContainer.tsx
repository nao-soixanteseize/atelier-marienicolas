import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface MainImageContainerProps {
  image: any;
  hoverImage?: any;
  hoverImageStyle?: any;
  height?: number;
}

export const MainImageContainer: FunctionComponent<MainImageContainerProps> = ({
  image,
  hoverImage,
  hoverImageStyle,
  height = '100%',
}) => {
  const [hover, setHover] = useState(true);

  return (
    <motion.div
      style={{
        // position: 'relative',
        width: '100%',
        height,
        backgroundColor: 'black',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // scale: 1,
        overflow: 'hidden',
      }}
      whileTap={{ scale: 1 }}
      whileHover={{
        scale: 0.98,
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      transition={{ duration: 1 }}
    >
      <Img $hover={hover} src={image} />
      {/* hoverImage && (
        <AnimatePresence>
          {hover && (
            <motion.div
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: 0,
                left: 0,
                opacity: 0,

                ...hoverImageStyle,
              }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 2 }}
            >
              <HoverImg src={hoverImage} />
            </motion.div>
          )}
        </AnimatePresence>
      ) */}
    </motion.div>
  );
};

const Img = styled.img<{ $hover: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* mix-blend-mode: ${({ $hover }) => ($hover ? 'luminosity' : 'unset')}; */
`;
const HoverImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;
