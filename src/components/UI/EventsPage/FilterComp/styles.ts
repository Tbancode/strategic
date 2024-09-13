'use client';
import styled from 'styled-components';

export const DropDownCtn = styled.div`
  position: relative;
  max-width: 9.5rem;
  width: 100%;
`;

export const DropButton = styled.div`
  display: flex;
  height: 3rem;
  padding: 1.0625rem 1rem;
  justify-content: space-between;
  align-items: center;
  width: 9.5rem;
  border-bottom: 0.5px solid var(--Grey, #d9d9d9);
  background: var(
    --glass,
    linear-gradient(
      219deg,
      rgba(255, 255, 255, 0.26) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 120%; /* 0.975rem */
  cursor: pointer;
`;

export const DropBox = styled.div`
  width: 100%;
  height: 10.75rem;
  overflow-y: auto;
  position: absolute;
  padding: 0.5rem 0;
  top: 3rem;
  left: 0;
  z-index: 4;

  background: var(
    --glass,
    linear-gradient(
      219deg,
      rgba(255, 255, 255, 0.26) -32.35%,
      rgba(255, 255, 255, 0) 111.78%
    )
  );
  backdrop-filter: blur(9.399999618530273px);
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    width: 0.25rem;

    &-thumb {
      width: 0.25rem;
      background: var(--Gold, #d7ac43);
    }

    &-track {
      background: transparent;
    }
  }
`;

export const Check = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #d9d9d9;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    background: #d7ac43;
    left: 15%;
    top: 15%;
    transform: scale(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  &.checked {
    &:after {
      transform: scale(1);
    }
  }
`;

export const DropBoxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 0 0.1rem 1rem;
  cursor: pointer;
  color: var(--White, #fff);
  font-family: var(--font-satoshi);
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 120%; /* 0.975rem */

  &:hover ${Check} {
    &:after {
      opacity: 1;
    }
  }
`;
