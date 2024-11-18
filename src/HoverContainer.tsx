import { motion } from 'framer-motion';
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

interface HoverContainerProps {
  children: React.ReactNode;
  style?: any;
}

export const HoverContainer: FunctionComponent<HoverContainerProps> = ({
  children,
  style,
}) => {
  const [hover, setHover] = useState(false);

  const crossSize = 15;
  const frameInitialSize = 40;
  const frameHoverSize = 30;
  const border = '.75px solid black';
  return (
    <Container style={style}>
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          opacity: 0,
          scale: 0.5,
        }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5 },
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: crossSize,
            height: crossSize,
            zIndex: 100,
            border,
            borderRight: 'none',
            borderBottom: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: crossSize,
            height: crossSize,
            zIndex: 100,
            border,
            borderLeft: 'none',
            borderBottom: 'none',
            transform: `translate(0.5px, 0px)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: crossSize,
            height: crossSize,
            zIndex: 100,
            border,
            borderRight: 'none',
            borderTop: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: crossSize,
            height: crossSize,
            zIndex: 100,
            border,
            borderLeft: 'none',
            borderTop: 'none',
            transform: `translate(0.5px, 0px)`,
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'white',
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
            backgroundColor: 'white',
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
            backgroundColor: 'white',
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
            backgroundColor: 'white',
            zIndex: 10,
          }}
          animate={{ width: hover ? frameHoverSize : frameInitialSize }}
        />
        {children}
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
