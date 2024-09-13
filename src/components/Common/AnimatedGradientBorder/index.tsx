'use client';

import { styled } from 'styled-components';

const AnimatedGradientBorder = ({
  changeBorder,
}: {
  changeBorder?: boolean;
}) => {
  return <GradientBorder className={changeBorder ? 'change__border' : ''} />;
};

export default AnimatedGradientBorder;

const GradientBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  border-radius: 1rem;
  z-index: -1;

  &.change__border {
    border-radius: 1.5rem;
    &:before {
      border-radius: 1.5rem;
    }

    &:after {
      inset: 10px;
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 40%;
    width: 250%;
    border-radius: 1rem;
    background: var(--Grey);

    z-index: -1;
    transition: 0.3s;
    transform: rotate(45deg);
    animation: animate 10s linear infinite;
    left: -40%;
    top: 30%;

    @keyframes animate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  &:after {
    position: absolute;
    content: '';
    inset: 1px;
    border-radius: 1rem;
    z-index: -1;
    background-color: var(--Charcoal);
  }
`;
