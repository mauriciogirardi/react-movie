import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import {
  MoveCarousel,
  ArrowLeft,
  ArrowRight,
  ContentCustomSlider,
} from './styles';

interface ArrowProps {
  onClick?: () => void;
}

interface CustomSlideProps {
  title?: string;
}

interface CarouselProps {
  title?: string;
  image: string;
}

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <ArrowLeft>
      <IoIosArrowBack onClick={onClick} />
    </ArrowLeft>
  );
};

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <ArrowRight>
      <IoIosArrowForward onClick={onClick} />
    </ArrowRight>
  );
};

const CustomSlide: React.FC<CustomSlideProps> = ({ title, children }) => {
  return (
    <ContentCustomSlider>
      <h2>{title}</h2>
      {children}
    </ContentCustomSlider>
  );
};

export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Carousel: React.FC<CarouselProps> = ({ image, title }) => {
  return (
    <MoveCarousel>
      <CustomSlide title={title}>
        <img src={image} alt={title} />
      </CustomSlide>
    </MoveCarousel>
  );
};

export default Carousel;
