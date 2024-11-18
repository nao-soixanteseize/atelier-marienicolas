import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { HoverContainer } from './HoverContainer';
import { MainImageContainer } from './MainImageContainer';

interface TestimonialProps {
  style: any;
  image: any;
  hoverImage: any;
  title: string;
}

export const Testimonial: FunctionComponent<TestimonialProps> = ({
  style,
  image,
  hoverImage,
  title,
}) => {
  return (
    <Container style={style}>
      <HoverContainer>
        <MainImageContainer
          image={image}
          hoverImage={hoverImage}
          hoverImageStyle={{
            transform: 'scale(80%, 100%) translate(-0%, -20%)',
          }}
        />
      </HoverContainer>
      <TestimonialContent>
        <TitleContent>{title}</TitleContent>
        <TextContent>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
          }
        </TextContent>
      </TestimonialContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0px;
  width: 100%;
  height: 400px;
  background-color: white;
`;
const TextContent = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-size: 16px;
`;
const TitleContent = styled.div`
  font-family: 'Wix Madefor Display', sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 18px;
`;
const TestimonialContent = styled.div`
  max-width: 50%;
  padding: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
