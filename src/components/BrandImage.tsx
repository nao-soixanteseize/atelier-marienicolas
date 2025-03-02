import { FunctionComponent } from 'react';
import { HoverContainer } from './HoverContainer';
import { MainImageContainer } from './MainImageContainer';

interface TestimonialProps {
  style?: any;
  image: any;
  hoverImage?: any;
  noHoverFrame?: boolean;
  height?: number;
  name?: string;
  description?: string;
  size?: string;
  noLegende?: boolean;
}

export const BrandImage: FunctionComponent<TestimonialProps> = ({
  style,
  image,
  hoverImage,
  noHoverFrame,
  height,
  name,
  description,
  size,
  noLegende,
}) => {
  return (
    <HoverContainer
      noHoverFrame={true}
      style={style}
      name={name}
      description={description}
      size={size}
      noLegende={noLegende}
    >
      <MainImageContainer
        image={image}
        hoverImage={hoverImage}
        // height={height}
      />
    </HoverContainer>
  );
};
