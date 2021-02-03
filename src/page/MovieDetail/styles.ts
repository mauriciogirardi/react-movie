import styled from 'styled-components';

export const BackgroundModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100000;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  > a {
    color: #fff;
    font-size: 20px;
    margin: 10px 15px;
    display: block;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BackgroundPoster = styled.div`
  position: relative;

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
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

export const DetailGenre = styled.div`
  margin: 20px 0;
  padding: 0 15px;

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: #b9b9b9;
    letter-spacing: 2px;
  }

  svg {
    margin: 25px 0;

    & + svg {
      margin-left: 5px;
    }
  }

  > p {
    width: 100%;
    max-width: 600px;
    margin: 20px 0;
    line-height: 25px;
  }
`;

export const GenreContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin-top: 10px;
    padding: 5px 20px;
    border-radius: 20px;
    border: 1px solid #5d00ff;
    font-size: 18px;
    color: #fff;
    box-shadow: inset 0 2px 8px #fff;
    display: inline-block;

    & + p {
      margin-left: 10px;
    }
  }
`;

export const InfoMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 900px;
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const CardInfo = styled.div`
  h3 {
    text-transform: uppercase;
    color: #b9b9b9;
    letter-spacing: 1px;
    margin-bottom: 15px;
    font-size: 17px;
  }

  time,
  p {
    color: #ff9900;
  }

  a {
    color: #ff9900;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  @media screen and (max-width: 500px) {
    & + div {
      margin-top: 20px;
    }

    h3 {
      margin-bottom: 10px;
    }
  }
`;
