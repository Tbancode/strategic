'use client';
import { styled } from 'styled-components';

export const Container = styled.div`
  background: var(--Charcoal);
  position: relative;
  width: 100%;
`;

export const ImageCtn = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 30%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  img {
    position: absolute;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 70%;
    height: 35.625rem;
    bottom: 10%;
    img {
      width: 80%;
    }
  }
`;
