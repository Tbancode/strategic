'use client';

import styled, { keyframes } from 'styled-components';

// Define the spin animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Create a styled component for the spinner container
const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Create a styled component for the spinner
const Spinner = styled.div`
  display: inline-block;
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
  border: 0.25rem solid currentColor; /* border-4 border-solid border-current */
  border-right-color: transparent; /* border-e-transparent */
  border-radius: 50%; /* rounded-full */
  animation: ${spin} 1.5s linear infinite; /* animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] */
  color: var(--surface); /* text-surface */

  &.dark {
    color: white; /* dark:text-white */
  }
`;

// Create a styled component for the loading text
const LoadingText = styled.span`
  position: absolute;
  margin: -1px; /* !-m-px */
  height: 1px; /* !h-px */
  width: 1px; /* !w-px */
  overflow: hidden; /* !overflow-hidden */
  white-space: nowrap; /* !whitespace-nowrap */
  border: 0; /* !border-0 */
  padding: 0; /* !p-0 */
  clip: rect(0, 0, 0, 0); /* ![clip:rect(0,0,0,0)] */
`;

const SpinnerComponent = () => (
  <SpinnerContainer>
    <Spinner role="status">
      <LoadingText>Loading...</LoadingText>
    </Spinner>
  </SpinnerContainer>
);

export default SpinnerComponent;
