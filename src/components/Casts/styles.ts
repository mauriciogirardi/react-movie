import styled from 'styled-components';

export const Cast = styled.div`
  padding: 15px 10px 50px 15px;

  h1 {
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: #9b9b9b;
  }
`;

export const CastCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const CastContent = styled.div`
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
    width: 230px;
    font-size: 15px;
  }
`;

export const FakeImage = styled.div`
  background-color: #ccc;
  border-radius: 50%;
  width: 200px;
  height: 300px;
`;
