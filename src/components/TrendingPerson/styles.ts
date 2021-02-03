import styled from 'styled-components';

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
