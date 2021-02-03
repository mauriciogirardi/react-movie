import styled from 'styled-components';

export const MoveCarousel = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  position: relative;

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    position: absolute;
  }

  &::after {
    content: '';
    background-color: #0b001e;
    box-shadow: 0 10px 100px #0b001e;
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-box-shadow: #0b001e 0 -1px 4px, #0b001e 0 -2px 10px,
      #0b001e 0 -10px 50px, #0b001e 0 -18px 30px, 37px 49px 50px 50px #0b001e;
    box-shadow: #0b001e 0 -1px 4px, #0b001e 0 -2px 10px, #0b001e 0 -10px 20px,
      #0b001e 0 -18px 40px, 37px 49px 50px 50px #0b001e;
  }

  img {
    width: 100%;
    min-height: 400px;
    object-fit: cover;
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  bottom: 50%;
  left: 20px;
  transform: translateY(50%);

  svg {
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ArrowRight = styled.div`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 20px;
  z-index: 1000;

  svg {
    color: #fff;
    font-size: 40px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ContentCustomSlider = styled.div`
  h2 {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    font-weight: bolder;
  }

  svg {
    position: absolute;
    font-size: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    cursor: pointer;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.8;
    }
  }
`;
