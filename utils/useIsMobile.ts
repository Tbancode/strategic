import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  const isClient = typeof window === 'object'; // Check if the window object exists

  const [isMobile, setIsMobile] = useState(
    isClient ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (!isClient) {
      return; // Bail out if the window object doesn't exist
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]); // Include isClient in the dependency array

  return isMobile;
};
