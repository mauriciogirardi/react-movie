import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #9b9b9b;
  padding: 40px 15px;
  opacity: 0.8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h2 {
    color: #9b9b9b;
    margin-bottom: 10px;
  }
`;

export const FooterAbout = styled.div`
  max-width: 500px;
  width: 100%;

  p {
    color: #9b9b9b;
    line-height: 20px;

    & + p {
      margin-top: 13px;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      & + p {
        margin-bottom: 20px;
      }
    }
  }
`;

export const FooterContact = styled.div`
  max-width: 500px;
  width: 100%;

  p {
    color: #9b9b9b;
    display: flex;
    align-items: center;

    & + p {
      margin-top: 8px;
    }

    svg {
      margin-right: 5px;
    }
  }

  h3 {
    color: #9b9b9b;
    margin: 10px 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    margin-top: 10px;

    svg {
      font-size: 20px;
      color: #fff;
      transition: color 0.2s;
      cursor: pointer;

      :hover {
        color: #5d00ff;
      }
    }
  }
`;
