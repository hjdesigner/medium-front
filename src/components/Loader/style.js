import styled, { css } from 'styled-components';

const modifiers = {
  fullPage: () => css`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
  `,
  notFullPage: () => css`
    width: 100%;
    
  `,
  fullText: () => css`
    font-size: 2rem;
  `,
  notFullText: () => css`
    font-size: 1rem;
  `,
  fullSpinner: () => css`
    border: 16px solid transparent;
    border-top: 16px #f46262 solid;
    border-radius: 50%;
    height: 120px;
    width: 120px;
  `,
  notFullSpinner: () => css`
    border: 8px solid transparent;
    border-top: 8px #f46262 solid;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  `,
}

export const LoaderElement = styled.div`
  ${({ fullPage }) => css`
    display: flex;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    ${fullPage === true ? modifiers.fullPage() : modifiers.notFullPage()};
  `}
`;
export const LoaderText = styled.p`
  ${({ fullPage }) => css`
    color: #f46262;
    text-align: center;
    ${fullPage === true ? modifiers.fullText() : modifiers.notFullText()};
  `};
`;
export const LoaderSpinner = styled.div`
  ${({ fullPage }) => css`
    ${fullPage === true ? modifiers.fullSpinner() : modifiers.notFullSpinner()};
    animation: spin 2s linear infinite;
  `}  

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
export const LoaderContent = styled.div``;
export const LoaderContentSpinner = styled.div``;
export const LoaderContentText = styled.div`
  margin-top: 16px;
`;
