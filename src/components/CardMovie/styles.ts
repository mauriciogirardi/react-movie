import styled from 'styled-components';

export const Movie = styled.div`
  padding: 10px 15px 60px 15px;

  h1 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: -20px;
    color: #9b9b9b;
  }

  @media screen and (max-width: 500px) {
    padding: 10px 30px 60px 30px;
  }
`;

export const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 600px;
    margin: 0 auto;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MovieCard = styled.div`
  width: 100%;
  max-width: 250px;
  min-height: 400px;
  height: 100%;
  margin-top: 50px;
  background-color: #333;
  border-radius: 10px;
  transition: box-shadow 0.2s;
  overflow: hidden;

  a {
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &:hover {
    box-shadow: 3px 3px 19px rgb(255, 255, 255, 0.4);
  }

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

export const MovieCardContent = styled.div`
  padding: 10px;

  h4 {
    color: #fff;
    font-size: 16px;
  }
  p {
    color: #fff;
    margin: 5px 0;
  }

  svg {
    margin-right: 5px;
  }
`;
