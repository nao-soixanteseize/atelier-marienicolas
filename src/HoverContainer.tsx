import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface HoverContainerProps {
  children: React.ReactNode;
  style?: any;
  noHoverFrame?: boolean;
  name?: string;
  description?: string;
  size?: string;
}

export const HoverContainer: FunctionComponent<HoverContainerProps> = ({
  children,
  style,
  noHoverFrame,
  name,
  description,
  size,
}) => {
  const [hover, setHover] = useState(false);

  // const crossSize = 15;
  const frameInitialSize = 0;
  const frameHoverSize = 20;
  // const border = '.75px solid black';

  const frameColor = 'white';

  return (
    <Container style={{ ...style, backgroundColor: frameColor }}>
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          opacity: 0,
          scale: 0.95,
        }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        }}
      >
        {!noHoverFrame && (
          <>
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
                backgroundColor: frameColor,
                zIndex: 10,
              }}
              animate={{ height: hover ? frameHoverSize : frameInitialSize }}
            />
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                bottom: 0,
                left: 0,
                backgroundColor: frameColor,
                zIndex: 10,
              }}
              animate={{ height: hover ? frameHoverSize : frameInitialSize }}
            />
            <motion.div
              style={{
                position: 'absolute',
                height: '100%',
                bottom: 0,
                left: 0,
                backgroundColor: frameColor,
                zIndex: 10,
              }}
              animate={{ width: hover ? frameHoverSize : frameInitialSize }}
            />
            <motion.div
              style={{
                position: 'absolute',
                height: '100%',
                bottom: 0,
                right: 0,
                backgroundColor: frameColor,
                zIndex: 10,
              }}
              animate={{ width: hover ? frameHoverSize : frameInitialSize }}
            />
          </>
        )}

        {children}
      </motion.div>

      <motion.div
        style={{
          position: 'absolute',
          zIndex: 20,
          width: '100%',
          bottom: -5,
          opacity: 0,
        }}
        animate={{ opacity: hover ? 1 : 0 }}
      >
        <LegendeRow>
          {name && <Legende>{name}</Legende>}
          {description && (
            <Legende style={{ width: '50%' }}>{description}</Legende>
          )}
          {size && <Legende>{size}</Legende>}
        </LegendeRow>
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const LegendeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const Legende = styled.div`
  color: #888;
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 12px;
  margin-bottom: -8;
`;
