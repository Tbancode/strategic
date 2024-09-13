'use client';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font-satoshi);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--White);
  font-weight: 500;
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background: var(--White);
    transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    z-index: -1;
  }

  &:hover {
    color: var(--Charcoal);
    &::after {
      height: calc(100% + 2px);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
const GoBackBtn = () => {
  const router = useRouter();
  return <BackBtn onClick={() => router.back()}>Go Back</BackBtn>;
};

export default GoBackBtn;
