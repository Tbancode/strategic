'use client';
import styled from 'styled-components';

export const ImageWrapper = styled.div`
  position: relative;
  height: auto;
  border-radius: 0.625rem;
  overflow: hidden;
  width: 90%;
  max-width: 1200px;
  margin: 3.75rem auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 13.75rem;
    border-radius: 0.625rem;
    width: 90%;
    margin: 1.88rem auto;
  }
`;
