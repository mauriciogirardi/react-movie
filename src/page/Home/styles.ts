import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Genres = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;

  ul {
    margin: 5px 10px;
    li {
      button {
        padding: 5px 10px;
        border-radius: 20px;
        border: 1px solid #5d00ff;
        font-size: 18px;
        color: #5d00ff;
        background-color: transparent;
        transition: all 0.2s;

        :hover {
          color: #fff;
          border-color: #fff;
          box-shadow: inset 0 2px 8px #fff;
        }
      }
    }
  }
`;

export const MovieByGenre = styled.div`
  width: 100%;
  padding: 10px 15px 60px 15px;
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
    padding: 10px 30px 60px 30px;
  }
`;

export const MovieByGenreCard = styled.div`
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

export const MovieByGenreCardContent = styled.div`
  padding: 10px 15px;

  h4 {
    color: #fff;
    font-size: 17px;
  }
  p {
    color: #fff;
    margin: 5px 0;
  }

  svg {
    margin-right: 5px;
  }
`;

export const TrendingPersons = styled.div`
  padding: 15px 10px 50px 15px;

  h1 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #9b9b9b;
  }
`;

export const TrendingPersonsCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const TrendingPersonsContent = styled.div`
  margin-top: 30px;
  img {
    border-radius: 50%;
  }

  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
  }

  span {
    text-align: center;
    display: block;
    margin-top: 10px;
    color: #7f7f7f;
  }
`;

export const TopRated = styled.div`
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

export const TopRatedContainer = styled.div`
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

export const TopRatedCard = styled.div`
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

export const TopRatedCardContent = styled.div`
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
