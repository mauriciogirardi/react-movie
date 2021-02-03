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
