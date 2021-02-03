import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  position: absolute;
  z-index: 100000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${animate} 0.3s;

  header {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;

    h3 {
      font-size: 20px;
      color: #333;
    }

    svg {
      color: #333;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;
