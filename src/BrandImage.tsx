import { FunctionComponent } from 'react';
import { HoverContainer } from './HoverContainer';
import { MainImageContainer } from './MainImageContainer';

interface TestimonialProps {
  style?: any;
  image: any;
  hoverImage?: any;
  noHoverFrame?: boolean;
  height?: string;
}

export const BrandImage: FunctionComponent<TestimonialProps> = ({
  style,
  image,
  hoverImage,
  noHoverFrame,
  height,
}) => {
  return (
    <HoverContainer noHoverFrame={noHoverFrame} style={style}>
      <MainImageContainer
        image={image}
        hoverImage={hoverImage}
        height={height}
      />
    </HoverContainer>
  );
};
