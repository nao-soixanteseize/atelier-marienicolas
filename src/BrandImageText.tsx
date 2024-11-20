import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { HoverContainer } from './HoverContainer';
import { MainImageContainer } from './MainImageContainer';

interface TestimonialProps {
  style?: any;
  image: any;
  hoverImage?: any;
  title: string;
}

export const BrandImageText: FunctionComponent<TestimonialProps> = ({
  style,
  image,
  hoverImage,
  title,
}) => {
  return (
    <Container style={style}>
      <HoverContainer>
        <MainImageContainer image={image} hoverImage={hoverImage} />
      </HoverContainer>
      <TextBlock>
        <Text>
          <TitleContent>{title}</TitleContent>
          <TextContent>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }
          </TextContent>
        </Text>
      </TextBlock>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0px;
  width: 100%;
  height: 100%;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
const TextContent = styled.div`
  color: #888;
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 14px;
  line-height: 1.7;
`;
const TitleContent = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 18px;
  margin-bottom: 18px;
`;
const TextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: black;
  border-width: 0;
  border-right-width: 0.5px;
  border-style: solid;

  @media (max-width: 1280px) {
    padding-top: 40px;
    padding-bottom: 40px;
    border-right-width: 0;
  }
`;
const Text = styled.div`
  max-width: 50%;
  @media (max-width: 1280px) {
    max-width: 100%;
  }
`;
