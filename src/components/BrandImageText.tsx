import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { HoverContainer } from './HoverContainer';
import { MainImageContainer } from './MainImageContainer';

interface TestimonialProps {
  style?: any;
  image: any;
  hoverImage?: any;
  title: string;
  text: string;
}

export const BrandImageText: FunctionComponent<TestimonialProps> = ({
  style,
  image,
  hoverImage,
  title,
  text,
}) => {
  const textDisplay = text.split('\n');
  return (
    <Container style={style}>
      <HoverContainer>
        <MainImageContainer image={image} hoverImage={hoverImage} />
      </HoverContainer>
      <TextBlock>
        <Text>
          <TitleContent>{title}</TitleContent>
          {textDisplay.map((text, index) => (
            <TextContent key={index}>{text}</TextContent>
          ))}
        </Text>
      </TextBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0px;
  width: 80%;
  height: 100%;
  /* max-height: 440px; */

  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;
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
const TextBlock = styled.div`
  width: 100%;
  display: flex;
  overflow-y: scroll;
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 65px; /* border-color: black; */ /* border-width: 0; */
  /* border-right-width: 0.5px; */ /* border-style: solid; */
  @media (max-width: 1180px) {
    padding-top: 40px;
    padding-bottom: 40px;
    border-right-width: 0;
  }
`;
const Text = styled.div`
  max-width: 90%;
  @media (max-width: 1180px) {
    max-width: 100%;
  }
`;
