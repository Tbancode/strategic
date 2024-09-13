'use client';

import { RecoilRoot } from 'recoil';
import { CustomCursor, GlobalStyles } from '..';
import StyledComponentsRegistry from '../../../libs/registry';
import ReactLenis from '@studio-freight/react-lenis';
// import Preloader from '../Common/Preloader';
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const checkPath = () => {
    return pathname === '/events' || pathname.includes('/studio');
  };
  return (
    <StyledComponentsRegistry>
      <RecoilRoot>
        {checkPath() ? (
          <>
            <Toaster />
            <GlobalStyles />
            {children}
          </>
        ) : (
          <ReactLenis
            root
            easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
          >
            <Toaster />
            <GlobalStyles />
            {children}
          </ReactLenis>
        )}
      </RecoilRoot>
    </StyledComponentsRegistry>
  );
};

export default Layout;
