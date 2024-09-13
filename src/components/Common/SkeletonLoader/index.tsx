// src/components/SkeletonLoader.tsx
'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(240, 240, 240, 0.1);
  background-image: linear-gradient(
    90deg,
    rgba(240, 240, 240, 0.1) 0px,
    rgba(224, 224, 224, 0.1) 40px,
    rgba(240, 240, 240, 0.1) 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-flex;
  animation: ${shine} 1.2s infinite ease-in-out;
  margin: 0 auto;
`;

const SkeletonLoader: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return <SkeletonBox style={{ width, height }} />;
};

export default SkeletonLoader;
