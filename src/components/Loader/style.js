import styled from 'styled-components';

export const LoaderElement = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
`;
export const LoaderText = styled.div`
  position: fixed;
  z-index: 1001;
  color: #f46262;
  font-size: 2rem;
`;
